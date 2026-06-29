import { Play, Video } from 'lucide-react';

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
  const embedUrl = getYouTubeEmbedUrl(url);

  return (
    <div className="overflow-hidden rounded-2xl border border-space-900/5 bg-space-900/[0.02]">
      <div className="flex items-center gap-2 border-b border-space-900/5 bg-white/60 px-4 py-2 text-sm font-semibold text-space-900/70">
        <Video size={16} /> {title}
      </div>

      {embedUrl ? (
        <div className="relative aspect-video w-full">
          <iframe
            src={embedUrl}
            title={title}
            className="absolute inset-0 h-full w-full"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      ) : (
        <div className="relative aspect-video w-full">
          <video
            src={url}
            controls
            className="absolute inset-0 h-full w-full"
            poster=""
          >
            您的浏览器不支持视频播放。
          </video>
        </div>
      )}

      <div className="flex items-center gap-1.5 bg-white/40 px-4 py-2 text-xs text-space-900/60">
        <Play size={12} />
        <span>观看视频，跟读例句，理解使用场景</span>
      </div>
    </div>
  );
}
