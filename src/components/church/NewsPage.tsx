import { Link } from 'react-router-dom';
import { articles } from '../../data/churchData';

export function NewsPage() {
  return (
    <main className="mx-auto max-w-7xl px-4 py-8 lg:px-6">
      <div className="mb-6 rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm">
        <p className="text-[11px] uppercase tracking-[0.35em] text-slate-500">Tin tức & bài viết</p>
        <h2 className="mt-2 font-serif text-3xl font-semibold text-slate-900">Thông báo và bài giảng</h2>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {articles.map((article) => (
          <article key={article.id} className="overflow-hidden rounded-[24px] border border-slate-200 bg-white shadow-sm">
            <img src={article.image} alt={article.title} className="h-44 w-full object-cover" />
            <div className="p-5">
              <p className="text-[11px] uppercase tracking-[0.25em] text-slate-500">{article.category}</p>
              <h3 className="mt-2 font-serif text-xl font-semibold text-slate-900">{article.title}</h3>
              <p className="mt-2 text-sm leading-7 text-slate-600">{article.excerpt}</p>
              <Link to={`/news/${article.id}`} className="mt-4 inline-flex text-sm font-semibold text-red-800">Đọc chi tiết</Link>
            </div>
          </article>
        ))}
      </div>
    </main>
  );
}
