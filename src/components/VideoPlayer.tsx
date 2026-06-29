import { useEffect, useState } from 'react';
import { ExternalLink, Play, Video } from 'lucide-react';

interface VideoPlayerProps {
  url: string;
  title?: string;
}

function getYouTubeEmbedUrl(url: string): string | null {
  try {
    const parsed = new URL(url);
    if (parsed.hostname.includes('youtube.com')) {
      const videoId = parsed.searchParams.get('v');
      if (videoId) return `https://www.youtube.com/embed/${videoId}`;
    }
    if (parsed.hostname.includes('youtu.be')) {
      const videoId = parsed.pathname.slice(1);
      if (videoId) return `https://www.youtube.com/embed/${videoId}`;
    }
  } catch {
    // ignore
  }
  return null;
}

export default function VideoPlayer({ url, title = '语法讲解视频' }: VideoPlayerProps) {
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState(false);
  const embedUrl = getYouTubeEmbedUrl(url);

  useEffect(() => {
    // iframe onError is unreliable for cross-origin content;
    // treat slow loads as errors after a reasonable timeout.
    const timer = setTimeout(() => {
      if (!loaded) setError(true);
    }, 5000);
    return () => clearTimeout(timer);
  }, [loaded, url]);

  const renderFallback = () => (
    <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 p-6 text-center">
      <p className="text-sm font-medium text-space-900/70">视频暂时无法在这里播放</p>
      <a
        href={url}
        target="_blank"
        rel="noreferrer"
        className="inline-flex items-center gap-1.5 rounded-full bg-nebula px-4 py-2 text-sm font-semibold text-white hover:bg-nebula/90"
      >
        <ExternalLink size={14} /> 在浏览器中打开
      </a>
    </div>
  );

  return (
    <div className="overflow-hidden rounded-2xl border border-space-900/5 bg-space-900/[0.02]">
      <div className="flex items-center gap-2 border-b border-space-900/5 bg-white/60 px-4 py-2 text-sm font-semibold text-space-900/70">
        <Video size={16} /> {title}
      </div>

      {embedUrl ? (
        <div className="relative aspect-video w-full bg-space-900/5">
          {error ? (
            renderFallback()
          ) : (
            <iframe
              src={embedUrl}
              title={title}
              className="absolute inset-0 h-full w-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              onLoad={() => setLoaded(true)}
            />
          )}
        </div>
      ) : (
        <div className="relative aspect-video w-full bg-space-900/5">
          {error ? (
            renderFallback()
          ) : (
            <video
              src={url}
              controls
              className="absolute inset-0 h-full w-full"
              poster=""
              onLoadedData={() => setLoaded(true)}
              onError={() => setError(true)}
            >
              您的浏览器不支持视频播放。
            </video>
          )}
        </div>
      )}

      <div className="flex items-center gap-1.5 bg-white/40 px-4 py-2 text-xs text-space-900/60">
        <Play size={12} />
        <span>观看视频，跟读例句，理解使用场景</span>
      </div>
    </div>
  );
}
