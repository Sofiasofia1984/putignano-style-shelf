import { Facebook, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";

const socials = [
  { name: "Instagram", url: "https://www.instagram.com/hairshow_parrucchieri", icon: Instagram },
  { name: "Facebook", url: "https://www.facebook.com/Hairshowparrucchieri", icon: Facebook },
  { name: "TikTok", url: "https://www.tiktok.com/@hairshow.parrucch", icon: TikTokIcon },
];

function TikTokIcon() {
  return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M14 3v12a4 4 0 1 1-4-4M14 3c0 4 3 6 6 6M14 7c2 2 4 3 6 3" /></svg>;
}

export function SocialLinks() {
  return <nav className="social-links" aria-label="Social Hairshow">{socials.map(({ name, url, icon: Icon }) => <Button key={name} asChild variant="link"><a href={url} target="_blank" rel="noopener noreferrer" aria-label={`${name} Hairshow (si apre in una nuova scheda)`}><Icon />{name}</a></Button>)}</nav>;
}