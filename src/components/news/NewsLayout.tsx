import { useMemo, useState } from 'react';
import { ArrowRight, Play, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import { ArticleCard } from './ArticleCard';
import type { Article } from '../../data/mockNews';

type NewsLayoutProps = {
  articles: Article[];
};

export function NewsLayout({ articles }: NewsLayoutProps) {
  const [search, setSearch] = useState('');

  const filtered = useMemo(() => {
    const query = search.trim().toLowerCase();
    if (!query) return articles;

    return articles.filter((article) =>
      [article.title, article.summary, article.category, article.author].some((value) =>
        value.toLowerCase().includes(query),
      ),
    );
  }, [articles, search]);

  const featured = filtered[0];
  const secondary = filtered.slice(1, 5);
  const topStories = filtered.slice(0, 5);

  return (
    <main className="mx-auto flex max-w-7xl flex-col gap-8 px-4 py-8 lg:px-6">
      <section className="grid gap-6 lg:grid-cols-[1.8fr_0.9fr]">
        <div className="rounded-[28px] border border-slate-200 bg-white p-4 shadow-sm dark:border-slate-800 dark:bg-slate-900">
          <div className="mb-4 flex items-center justify-between">
            <div>
              <p className="text-[11px] uppercase tracking-[0.35em] text-slate-500">Tin nóng</p>
              <h2 className="font-serif text-2xl font-semibold text-slate-900 dark:text-white">Phóng sự nổi bật</h2>
            </div>
            <button className="rounded-full border border-slate-200 px-3 py-1.5 text-sm text-slate-600 dark:border-slate-700 dark:text-slate-300">
              Xem tất cả
            </button>
          </div>

          {featured ? (
            <div className="grid gap-4 lg:grid-cols-[1.25fr_0.75fr]">
              <div className="overflow-hidden rounded-[24px]">
                <img src={featured.image} alt={featured.title} className="h-80 w-full object-cover" />
              </div>
              <div className="flex flex-col justify-between rounded-[24px] border border-slate-200 bg-slate-50 p-5 dark:border-slate-800 dark:bg-slate-950/70">
                <div>
                  <span className="rounded-full bg-red-600 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-white">
                    {featured.badge ?? featured.category}
                  </span>
                  <h3 className="mt-4 font-serif text-2xl font-semibold leading-tight text-slate-900 dark:text-white">
                    {featured.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-400">{featured.summary}</p>
                </div>
                <div className="mt-5 flex items-center justify-between text-sm text-slate-500 dark:text-slate-400">
                  <span>{featured.author}</span>
                  <Link to={`/article/${featured.id}`} className="flex items-center gap-2 font-semibold text-slate-900 dark:text-slate-200">
                    Đọc tiếp <ArrowRight size={14} />
                  </Link>
                </div>
              </div>
            </div>
          ) : null}
        </div>

        <aside className="rounded-[28px] border border-slate-200 bg-slate-950 p-5 text-white shadow-sm">
          <div className="mb-4 flex items-center justify-between">
            <div>
              <p className="text-[11px] uppercase tracking-[0.35em] text-slate-400">Xu hướng</p>
              <h2 className="font-serif text-xl font-semibold">Đọc nhiều nhất</h2>
            </div>
            <div className="rounded-full bg-white/10 p-2">
              <Sparkles size={16} />
            </div>
          </div>
          <div className="space-y-3">
            {topStories.map((story, index) => (
              <div key={story.id} className="rounded-2xl border border-white/10 bg-white/5 p-3">
                <div className="flex items-start gap-3">
                  <span className="text-xl font-semibold text-red-400">0{index + 1}</span>
                  <div>
                    <p className="text-sm font-semibold">{story.title}</p>
                    <p className="mt-1 text-xs text-slate-400">{story.category} • {story.publishedAt}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </aside>
      </section>

      <section className="grid gap-4 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="rounded-[28px] border border-slate-200 bg-white p-4 shadow-sm dark:border-slate-800 dark:bg-slate-900">
          <div className="mb-4 flex items-center justify-between">
            <div>
              <p className="text-[11px] uppercase tracking-[0.35em] text-slate-500">Tìm kiếm nhanh</p>
              <h2 className="font-serif text-xl font-semibold text-slate-900 dark:text-white">Tin tức theo từ khóa</h2>
            </div>
            <label className="flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-3 py-2 text-sm text-slate-500 dark:border-slate-800 dark:bg-slate-950 dark:text-slate-400">
              <input
                value={search}
                onChange={(event) => setSearch(event.target.value)}
                placeholder="Nhập từ khóa..."
                className="w-40 bg-transparent outline-none"
              />
            </label>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            {secondary.map((article) => (
              <ArticleCard key={article.id} article={article} compact />
            ))}
          </div>
        </div>

        <div className="rounded-[28px] bg-slate-950 p-5 text-white shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-[11px] uppercase tracking-[0.35em] text-slate-400">Multimedia</p>
              <h2 className="font-serif text-xl font-semibold">Video & âm thanh</h2>
            </div>
            <div className="rounded-full bg-red-600 p-2 text-white">
              <Play size={16} />
            </div>
          </div>
          <div className="mt-4 overflow-hidden rounded-[22px] border border-white/10">
            <img
              src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1200&q=80"
              alt="Multimedia"
              className="h-48 w-full object-cover"
            />
          </div>
          <div className="mt-4 rounded-[20px] bg-white/10 p-4">
            <p className="text-sm text-slate-300">Cảnh quay đặc biệt từ trung tâm Thành phố Hồ Chí Minh trong một ngày đầy biến động.</p>
            <div className="mt-3 flex items-center justify-between text-sm text-slate-200">
              <span>12 phút xem</span>
              <span className="font-semibold text-white">Phát trực tiếp</span>
            </div>
          </div>
        </div>
      </section>

      <section className="grid gap-6 lg:grid-cols-[1.3fr_0.7fr]">
        <div>
          <div className="mb-4 flex items-center justify-between">
            <h2 className="font-serif text-2xl font-semibold text-slate-900 dark:text-white">Kinh doanh & Công nghệ</h2>
            <a href="#" className="text-sm font-medium text-red-600">Xem thêm</a>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            {filtered.slice(1, 5).map((article) => (
              <ArticleCard key={article.id} article={article} />
            ))}
          </div>
        </div>

        <div className="rounded-[28px] border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-800 dark:bg-slate-900">
          <h3 className="font-serif text-xl font-semibold text-slate-900 dark:text-white">Đăng ký nhận bản tin</h3>
          <p className="mt-2 text-sm leading-7 text-slate-600 dark:text-slate-400">
            Nhận những tin tức hàng đầu mỗi sáng cùng phân tích chuyên sâu từ đội ngũ biên tập của chúng tôi.
          </p>
          <div className="mt-4 flex flex-col gap-3">
            <input className="rounded-full border border-slate-200 bg-slate-50 px-4 py-3 outline-none dark:border-slate-700 dark:bg-slate-950" placeholder="Email của bạn" />
            <button className="rounded-full bg-slate-950 px-4 py-3 font-semibold text-white transition hover:bg-red-600 dark:bg-red-600 dark:hover:bg-red-500">
              Đăng ký ngay
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}
