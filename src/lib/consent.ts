import { useEffect, useState } from "react";

export type Consent = "all" | "necessary" | null;
const KEY = "hairshow-consent";
const EVENT = "hairshow-consent-change";

export function setConsent(value: Exclude<Consent, null>) {
  window.localStorage.setItem(KEY, value);
  window.dispatchEvent(new Event(EVENT));
}

export function resetConsent() {
  window.localStorage.removeItem(KEY);
  window.dispatchEvent(new Event(EVENT));
}

export function useConsent(): { consent: Consent; ready: boolean } {
  const [state, setState] = useState<{ consent: Consent; ready: boolean }>({ consent: null, ready: false });
  useEffect(() => {
    const read = () => setState({ consent: (window.localStorage.getItem(KEY) as Consent) ?? null, ready: true });
    read();
    window.addEventListener(EVENT, read);
    return () => window.removeEventListener(EVENT, read);
  }, []);
  return state;
}
