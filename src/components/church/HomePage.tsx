import { ArrowRight, BookOpen, CalendarDays, Cross, ImageIcon, PlayCircle, Sparkles, Video } from 'lucide-react';
import { Link } from 'react-router-dom';
import { articles, events, mediaItems, scheduleItems } from '../../data/churchData';

export function HomePage() {
  return (
    <main className="mx-auto flex max-w-7xl flex-col gap-8 px-4 py-8 lg:px-6">
      <section className="overflow-hidden rounded-[32px] border border-slate-200 bg-white shadow-sm">
        <div className="grid lg:grid-cols-[1.1fr_0.9fr]">
          <div className="bg-[linear-gradient(135deg,#1e3a8a_0%,#8b0000_100%)] p-8 text-white lg:p-12">
            <p className="text-sm uppercase tracking-[0.35em] text-slate-200">Lời Chúa mỗi ngày</p>
            <h2 className="mt-4 font-serif text-3xl font-semibold leading-tight sm:text-4xl">
              “Đừng sợ, vì Ta ở cùng ngươi.”
            </h2>
            <p className="mt-4 max-w-xl text-sm leading-7 text-slate-200">
              Chúng ta cùng nhau bước đi trong niềm tin, bình an và lòng thương, đón nhận một tuần mới với hy vọng.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              {/* Đã sửa thẻ đóng thành </Link> */}
              <Link to="/events" className="rounded-full bg-white px-5 py-3 font-semibold text-slate-900">
                Xem Lịch Nhóm
              </Link>
              {/* Chuyển sang thẻ <a> cho anchor link scroll nội bộ */}
              <a href="#contact" className="rounded-full border border-white/40 px-5 py-3 font-semibold text-white">
                Gửi Lời Cầu Nguyện
              </a>
            </div>
          </div>
          <div className="relative min-h-[360px]">
            <img
              src="anhnen.jpg"
              alt="Church gathering"
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/50 to-transparent" />
          </div>
        </div>
      </section>

      <section className="grid gap-4 lg:grid-cols-[1.2fr_0.8fr]">
        <div className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-[11px] uppercase tracking-[0.35em] text-slate-500">Lịch sinh hoạt tuần</p>
              <h3 className="font-serif text-2xl font-semibold text-slate-900">Kế hoạch tuần này</h3>
            </div>
            <div className="rounded-full bg-amber-100 p-2 text-amber-700">
              <CalendarDays size={16} />
            </div>
          </div>
          <div className="mt-5 grid gap-3 md:grid-cols-2">
            {scheduleItems.map((item) => (
              <div key={item.id} className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                <div className="flex items-center gap-2 text-sm font-semibold text-red-800">
                  <Cross size={15} />
                  <span>{item.title}</span>
                </div>
                <p className="mt-2 text-sm text-slate-600">{item.description}</p>
                <p className="mt-3 text-lg font-semibold text-slate-900">{item.time}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-[28px] border border-slate-200 bg-slate-900 p-6 text-white shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-[11px] uppercase tracking-[0.35em] text-slate-400">Sự kiện sắp đến</p>
              <h3 className="font-serif text-2xl font-semibold">Những ngày đặc biệt</h3>
            </div>
            <Sparkles size={18} className="text-amber-400" />
          </div>
          <div className="mt-5 space-y-3">
            {events.slice(0, 3).map((event) => (
              <div key={event.id} className="rounded-2xl border border-white/10 bg-white/10 p-3">
                <div className="flex items-center justify-between text-sm text-slate-300">
                  <span>{event.date}</span>
                  <span>{event.time}</span>
                </div>
                <p className="mt-2 font-semibold">{event.title}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="grid gap-6 lg:grid-cols-[1.3fr_0.7fr]">
        <div>
          <div className="mb-4 flex items-center justify-between">
            <h3 className="font-serif text-2xl font-semibold text-slate-900">Tin tức & thông báo</h3>
            {/* Đã sửa thẻ đóng thành </Link> */}
            <Link to="/news" className="text-sm font-semibold text-red-800">
              Xem thêm
            </Link>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            {articles.map((article) => (
              <article key={article.id} className="overflow-hidden rounded-[24px] border border-slate-200 bg-white shadow-sm">
                <img src={article.image} alt={article.title} className="h-36 w-full object-cover" />
                <div className="p-4">
                  <p className="text-[11px] uppercase tracking-[0.25em] text-slate-500">{article.category}</p>
                  <h4 className="mt-2 font-serif text-lg font-semibold text-slate-900">{article.title}</h4>
                  <p className="mt-2 text-sm leading-6 text-slate-600">{article.excerpt}</p>
                  <Link to={`/news/${article.id}`} className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-red-800">
                    Đọc thêm <ArrowRight size={14} />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm">
          <div className="flex items-center justify-between">
            <h3 className="font-serif text-xl font-semibold text-slate-900">Thư viện nổi bật</h3>
            {/* Đã sửa thẻ đóng thành </Link> */}
            <Link to="/media" className="text-sm font-semibold text-red-800">
              Xem tất cả
            </Link>
          </div>
          <div className="mt-4 space-y-3">
            {mediaItems.slice(0, 3).map((item) => (
              <div key={item.id} className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-slate-50 p-3">
                <div className="rounded-full bg-red-800 p-2 text-white">
                  {item.type === 'video' ? <Video size={15} /> : <ImageIcon size={15} />}
                </div>
                <div>
                  <p className="font-semibold text-slate-900">{item.title}</p>
                  <p className="text-sm text-slate-500">{item.category}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}