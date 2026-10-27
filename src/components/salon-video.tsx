import { useEffect, useRef, useState } from "react";
import { Pause, Play } from "lucide-react";
import { Button } from "@/components/ui/button";

/** Muted looping clip: no automatic preload, plays only while visible or on tap. */
export function SalonVideo({ url, poster, title }: { url: string; poster: string; title: string }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);
  useEffect(() => {
    const video = videoRef.current;
    if (!video || typeof IntersectionObserver === "undefined") return;
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) void video.play().catch(() => setPlaying(false));
      else video.pause();
    }, { threshold: 0.4 });
    observer.observe(video);
    return () => observer.disconnect();
  }, []);
  const toggle = () => {
    const video = videoRef.current;
    if (!video) return;
    if (video.paused) void video.play().catch(() => setPlaying(false));
    else video.pause();
  };
  return <figure className="film-tile">
    <video ref={videoRef} src={url} poster={poster} aria-label={title} muted loop playsInline preload="none" onClick={toggle} onVolumeChange={() => { if (videoRef.current) videoRef.current.muted = true; }} onPlay={() => setPlaying(true)} onPause={() => setPlaying(false)} />
    <figcaption className="film-caption">{title}</figcaption>
    <Button variant="glass" size="icon" className="film-toggle" onClick={toggle} aria-label={`${playing ? "Pausa" : "Riproduci"} video: ${title}`} title={playing ? "Pausa" : "Riproduci"}>{playing ? <Pause /> : <Play />}</Button>
  </figure>;
}
