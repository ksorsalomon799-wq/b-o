import { Link } from 'react-router-dom';
import { CalendarDays, MapPin, Phone, Menu } from 'lucide-react';

const navItems = [
  { label: 'Trang chủ', path: '/' },
  { label: 'Giới thiệu', path: '/' },
  { label: 'Tin tức & Bài viết', path: '/news' },
  { label: 'Thư viện', path: '/media' },
  { label: 'Sự kiện', path: '/events' },
  { label: 'Lịch nhóm', path: '/' },
  { label: 'Liên hệ', path: '/' },
];

export function Header() {
  const logoSrc = `${import.meta.env.BASE_URL}logo.png`;

  return (
    <header className="border-b border-slate-200 bg-white/95 backdrop-blur">
      {/* Top Bar */}
      <div className="border-b border-slate-200 bg-slate-900 px-4 py-2 text-sm text-slate-100">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <CalendarDays size={16} />
            <span>Thờ phượng Chúa: Chủ Nhật - 08:00 AM</span>
          </div>
          <div className="flex flex-wrap items-center gap-4 text-slate-300">
            {/* Gọi điện dùng thẻ <a> truyền thống */}
            <a href="tel:+84912345678" className="flex items-center gap-2 hover:text-white">
              <Phone size={15} />
              +84 912 345 678
            </a>
            {/* Chuyển tới id anchor hoặc link dùng thẻ <a> */}
            <a href="#contact" className="flex items-center gap-2 hover:text-white">
              <MapPin size={15} />
              Plei Bui, Gia Lai
            </a>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4">
        <Link to="/" className="flex items-center gap-3">
          <img 
            src={logoSrc} 
            alt="Logo Chi Hội Plei Bui" 
            className="h-11 w-11 object-contain"
            onError={(e) => {
              (e.target as HTMLImageElement).src = './logo.png';
            }}
          />
          <div>
            <p className="text-[10px] uppercase tracking-[0.35em] text-slate-500">Hội thánh Tin Lành</p>
            <h1 className="font-serif text-lg font-semibold text-slate-900">PLEI BUI</h1>
          </div>
        </Link>

        <nav className="hidden items-center gap-6 text-sm font-medium text-slate-700 lg:flex">
          {navItems.map((item) => (
            <Link 
              key={item.label} 
              to={item.path} 
              className="transition hover:text-red-800"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <button className="rounded-full border border-slate-200 p-2 lg:hidden">
          <Menu size={18} />
        </button>
      </div>
    </header>
  );
}