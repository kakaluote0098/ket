import { Link, useLocation } from 'react-router-dom';
import { Home, BookOpen, Rocket, Trophy, Route } from 'lucide-react';
import { cn } from '@/lib/utils';

const navItems = [
  { path: '/', label: '首页', icon: Home },
  { path: '/courses', label: '课程', icon: BookOpen },
  { path: '/learn', label: '学习', icon: Rocket },
  { path: '/progress', label: '进度', icon: Trophy },
  { path: '/path', label: '路径', icon: Route },
];

export default function Layout({ children }: { children: React.ReactNode }) {
  const location = useLocation();

  return (
    <div className="min-h-screen">
      <header className="sticky top-0 z-40 border-b border-white/30 bg-white/70 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
          <Link to="/" className="flex items-center gap-2">
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-nebula text-xl text-white shadow-glow-sm">
              🚀
            </span>
            <span className="font-display text-xl font-bold text-space-900">KET 探索星球</span>
          </Link>
          <nav className="hidden items-center gap-1 md:flex">
            {navItems.map((item) => {
              const active = location.pathname === item.path || (item.path !== '/' && location.pathname.startsWith(item.path));
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={cn(
                    'flex items-center gap-1.5 rounded-full px-4 py-2 font-display font-semibold transition-all',
                    active
                      ? 'bg-nebula/10 text-nebula'
                      : 'text-space-900/70 hover:bg-space-900/5 hover:text-space-900'
                  )}
                >
                  <item.icon size={18} />
                  {item.label}
                </Link>
              );
            })}
          </nav>
        </div>
      </header>

      <main className="page-container">{children}</main>

      <nav className="fixed bottom-0 left-0 right-0 z-40 border-t border-white/40 bg-white/80 backdrop-blur-md md:hidden">
        <div className="mx-auto flex max-w-md justify-around px-2 pb-safe pt-2">
          {navItems.map((item) => {
            const active = location.pathname === item.path || (item.path !== '/' && location.pathname.startsWith(item.path));
            return (
              <Link
                key={item.path}
                to={item.path}
                className={cn(
                  'flex flex-col items-center gap-0.5 rounded-xl px-3 py-2 transition-all',
                  active ? 'text-nebula' : 'text-space-900/60'
                )}
              >
                <item.icon size={22} strokeWidth={active ? 2.5 : 2} />
                <span className="text-[10px] font-semibold">{item.label}</span>
              </Link>
            );
          })}
        </div>
      </nav>
    </div>
  );
}
