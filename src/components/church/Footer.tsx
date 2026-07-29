import { BookOpen, Heart, MapPin, Phone } from 'lucide-react';

export function Footer() {
  return (
    <footer id="contact" className="border-t border-slate-200 bg-slate-900 text-slate-200">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-10 lg:grid-cols-[1.2fr_0.8fr_0.8fr]">
        <div>
          <div className="flex items-center gap-2 text-white">
            <BookOpen size={18} />
            <span className="font-serif text-xl">Hội thánh Tin Lành Plei Bui</span>
          </div>
          <p className="mt-4 max-w-md text-sm leading-7 text-slate-400">
            Một cộng đồng tin cậy, yêu thương và sống theo chân lý Chúa, đồng hành cùng nhau trong khu vực Gia Lai.
          </p>
          <div className="mt-4 flex items-center gap-2 text-sm text-slate-300">
            <Heart size={16} className="text-red-500" />
            <span>"Được dựng nên để làm sáng rọi lòng thương và đức tin."</span>
          </div>
        </div>

        <div>
          <h3 className="font-semibold text-white">Liên hệ</h3>
          <ul className="mt-4 space-y-3 text-sm text-slate-400">
            <li className="flex items-center gap-2"><MapPin size={15} /> Plei Bui, Gia Lai</li>
            <li className="flex items-center gap-2"><Phone size={15} /> +84 912 345 678</li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold text-white">Giờ sinh hoạt</h3>
          <ul className="mt-4 space-y-3 text-sm text-slate-400">
            <li>Chủ nhật: 08:00 sáng</li>
            <li>Thanh niên: 19:30 tối</li>
            <li>Cầu nguyện: 06:30 sáng</li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
