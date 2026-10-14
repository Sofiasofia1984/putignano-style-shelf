import { useEffect, useRef, useState } from "react";
import { Pause, Play } from "lucide-react";
import { Button } from "@/components/ui/button";

export function SalonVideo({ url, poster, title }: { url: string; poster: string; title: string }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);
  useEffect(() => {
    const video = videoRef.current;
    if (video) setPlaying(!video.paused);
  }, []);
  const toggle = () => {
    const video = videoRef.current;
    if (!video) return;
    if (video.paused) void video.play().catch(() => setPlaying(false));
    else video.pause();
  };
  return <figure className="film-tile">
    <video ref={videoRef} src={url} poster={poster} aria-label={title} autoPlay muted loop playsInline preload="metadata" onVolumeChange={() => { if (videoRef.current) videoRef.current.muted = true; }} onPlay={() => setPlaying(true)} onPause={() => setPlaying(false)} />
    <figcaption className="film-caption">{title}</figcaption>
    <Button variant="glass" size="icon" className="film-toggle" onClick={toggle} aria-label={`${playing ? "Pausa" : "Riproduci"} video: ${title}`} title={playing ? "Pausa" : "Riproduci"}>{playing ? <Pause /> : <Play />}</Button>
  </figure>;
}