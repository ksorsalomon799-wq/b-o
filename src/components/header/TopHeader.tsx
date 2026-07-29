import { BellRing, Menu, Moon, Search, Sun, Thermometer, TrendingUp } from 'lucide-react';

const categories = ['Thời sự', 'Thế giới', 'Kinh doanh', 'Công nghệ', 'Thể thao', 'Giải trí'];

type TopHeaderProps = {
  darkMode: boolean;
  toggleDarkMode: () => void;
};

export function TopHeader({ darkMode, toggleDarkMode }: TopHeaderProps) {
  return (
    <header className="border-b border-slate-200/70 bg-white/90 backdrop-blur dark:border-slate-800 dark:bg-slate-950/90">
      <div className="border-b border-slate-200/70 px-4 py-3 text-sm text-slate-600 dark:border-slate-800 dark:text-slate-300">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <span className="rounded-full bg-red-600 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-white">
              Live
            </span>
            <div className="flex items-center gap-2 text-slate-500 dark:text-slate-400">
              <Thermometer size={16} />
              <span>Hà Nội 31°C</span>
            </div>
            <span className="hidden md:inline">•</span>
            <span className="hidden md:inline">Thứ Tư, 29 Tháng 7, 2026</span>
          </div>

          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2 rounded-full bg-slate-100 px-3 py-1.5 text-slate-600 dark:bg-slate-900 dark:text-slate-300">
              <TrendingUp size={14} />
              <span className="truncate">Đang phát: Chuyến bay mới nối hai thành phố lớn</span>
            </div>
            <button className="rounded-full border border-slate-200 p-2 text-slate-600 transition hover:border-slate-300 hover:text-slate-900 dark:border-slate-700 dark:text-slate-300">
              <BellRing size={16} />
            </button>
          </div>
        </div>
      </div>

      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4 px-4 py-4">
        <div className="flex items-center gap-3">
          <button className="rounded-full border border-slate-200 p-2 md:hidden dark:border-slate-700">
            <Menu size={18} />
          </button>
          <div>
            <p className="text-[10px] uppercase tracking-[0.35em] text-slate-500">Tin tức số</p>
            <h1 className="font-serif text-2xl font-semibold text-slate-900 dark:text-white">BÁO HÔM NAY</h1>
          </div>
        </div>

        <div className="flex flex-1 items-center justify-end gap-3">
          <label className="hidden items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-3 py-2 text-sm text-slate-500 md:flex dark:border-slate-800 dark:bg-slate-900 dark:text-slate-400">
            <Search size={16} />
            <input
              placeholder="Tìm tin, chuyên mục..."
              className="w-56 bg-transparent outline-none"
            />
          </label>

          <button
            onClick={toggleDarkMode}
            className="rounded-full border border-slate-200 p-2 text-slate-600 transition hover:border-slate-300 hover:text-slate-900 dark:border-slate-700 dark:text-slate-300"
            aria-label="Toggle dark mode"
          >
            {darkMode ? <Sun size={18} /> : <Moon size={18} />}
          </button>
        </div>
      </div>

      <nav className="mx-auto flex max-w-7xl flex-wrap items-center gap-2 px-4 pb-4 text-sm font-medium text-slate-700 dark:text-slate-200">
        {categories.map((category) => (
          <a key={category} href="#" className="rounded-full px-3 py-2 transition hover:bg-slate-100 dark:hover:bg-slate-800">
            {category}
          </a>
        ))}
      </nav>
    </header>
  );
}
