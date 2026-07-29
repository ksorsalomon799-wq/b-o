import { BookOpen, CalendarDays, MapPin, Phone, Menu } from 'lucide-react'; // Đã bỏ Cross vì không xài nữa

const navItems = ['Trang chủ', 'Giới thiệu', 'Tin tức & Bài viết', 'Thư viện', 'Sự kiện', 'Lịch nhóm', 'Liên hệ'];

export function Header() {
  return (
    <header className="border-b border-slate-200 bg-white/95 backdrop-blur">
      <div className="border-b border-slate-200 bg-slate-900 px-4 py-2 text-sm text-slate-100">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <CalendarDays size={16} />
            <span>Thờ phượng Chúa: Chủ Nhật - 08:00 AM</span>
          </div>
          <div className="flex flex-wrap items-center gap-4 text-slate-300">
            <a href="tel:+84912345678" className="flex items-center gap-2 hover:text-white">
              <Phone size={15} />
              +84 912 345 678
            </a>
            <a href="#contact" className="flex items-center gap-2 hover:text-white">
              <MapPin size={15} />
              Plei Bui, Gia Lai
            </a>
          </div>
        </div>
      </div>

      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4">
        <a href="/" className="flex items-center gap-3">
          {/* ✅ ĐÃ THAY LOGO ẢNH TẠI ĐÂY */}
          <img 
            src="/logo.png" 
            alt="Logo Chi Hội Plei Bui" 
            className="h-11 w-11 object-contain" 
          />
          <div>
            <p className="text-[10px] uppercase tracking-[0.35em] text-slate-500">Hội thánh Tin Lành</p>
            <h1 className="font-serif text-lg font-semibold text-slate-900">PLEI BUI</h1>
          </div>
        </a>

        <nav className="hidden items-center gap-6 text-sm font-medium text-slate-700 lg:flex">
          {navItems.map((item) => (
            <a key={item} href={`/${item === 'Trang chủ' ? '' : item.toLowerCase().replace(/\s|&/g, '-').replace(/-+/g, '-')}`} className="transition hover:text-red-800">
              {item}
            </a>
          ))}
        </nav>

        <button className="rounded-full border border-slate-200 p-2 lg:hidden">
          <Menu size={18} />
        </button>
      </div>
    </header>
  );
}