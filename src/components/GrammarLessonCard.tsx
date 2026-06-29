import { BookOpen, Lightbulb } from 'lucide-react';
import SpeakButton from '@/components/SpeakButton';
import VideoPlayer from '@/components/VideoPlayer';
import type { GrammarLesson } from '@/types';

interface GrammarLessonCardProps {
  lesson: GrammarLesson;
  index: number;
  color?: string;
}

export default function GrammarLessonCard({ lesson, index, color = '#118AB2' }: GrammarLessonCardProps) {
  return (
    <div className="card overflow-hidden p-0" style={{ borderLeftWidth: 4, borderLeftColor: color }}>
      <div className="flex items-start gap-4 p-5">
        <div
          className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl text-xl font-bold text-white shadow-sm"
          style={{ backgroundColor: color }}
        >
          {index + 1}
        </div>
        <div className="flex-1">
          <h3 className="font-display text-lg font-bold text-space-900">{lesson.title}</h3>
          <p className="mt-2 leading-relaxed text-space-900/80">{lesson.content}</p>
        </div>
      </div>

      {lesson.videoUrl && (
        <div className="border-t border-space-900/5 bg-space-900/[0.02] px-5 py-4">
          <VideoPlayer url={lesson.videoUrl} title={`${lesson.title} 视频讲解`} />
        </div>
      )}

      <div className="border-t border-space-900/5 bg-space-900/[0.02] px-5 py-4">
        <div className="mb-3 flex items-center gap-2 text-sm font-semibold text-space-900/60">
          <BookOpen size={16} /> 典型例句
        </div>
        <ul className="space-y-2">
          {lesson.examples.map((example, i) => (
            <li key={i} className="flex items-center justify-between gap-2 rounded-xl bg-white p-3 font-medium text-space-900 shadow-sm">
              <span>{example}</span>
              <SpeakButton text={example} size={16} />
            </li>
          ))}
        </ul>
      </div>

      {lesson.tip && (
        <div className="flex items-start gap-2 border-t border-space-900/5 bg-star/5 px-5 py-3 text-sm">
          <Lightbulb size={18} className="mt-0.5 shrink-0 text-star" />
          <span className="text-space-900/80">{lesson.tip}</span>
        </div>
      )}
    </div>
  );
}
