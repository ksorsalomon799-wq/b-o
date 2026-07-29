import { BookOpen, Download, Share2 } from 'lucide-react';
import { useParams, Link } from 'react-router-dom';
import { articles } from '../../data/churchData';

export function ArticleDetailPage() {
  const { id } = useParams();
  const article = articles.find((item) => item.id === id) ?? articles[0];

  return (
    <main className="mx-auto max-w-6xl px-4 py-8 lg:px-6">
      <Link to="/news" className="mb-6 inline-flex items-center gap-2 text-sm font-semibold text-red-800 hover:underline">
        ← Quay lại tin tức
      </Link>
      <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm">
          <p className="text-[11px] uppercase tracking-[0.35em] text-slate-500">{article.category}</p>
          <h2 className="mt-3 font-serif text-3xl font-semibold text-slate-900">{article.title}</h2>
          <p className="mt-4 text-sm leading-7 text-slate-600">{article.excerpt}</p>
          
          {article.verse && (
            <div className="mt-6 rounded-[20px] border border-slate-200 bg-slate-50 p-4 text-sm text-slate-700">
              <div className="font-semibold text-red-800">Lời Chúa</div>
              <p className="mt-2 italic">{article.verse}</p>
            </div>
          )}

          {article.tags && article.tags.length > 0 && (
            <div className="mt-6 flex flex-wrap gap-2">
              {article.tags.map((tag) => (
                <span key={tag} className="rounded-full bg-slate-100 px-3 py-1 text-sm text-slate-700">
                  {tag}
                </span>
              ))}
            </div>
          )}

          <div className="mt-6 space-y-3">
            <button className="flex items-center gap-2 rounded-full border border-slate-200 px-4 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-50 transition-colors">
              <Share2 size={15} /> Chia sẻ bài viết
            </button>
            {article.pdfUrl ? (
              <a href={article.pdfUrl} className="flex items-center gap-2 rounded-full bg-red-800 px-4 py-2 text-sm font-semibold text-white hover:bg-red-900 transition-colors">
                <Download size={15} /> Tải tài liệu PDF
              </a>
            ) : null}
          </div>
        </div>

        <article className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm">
          <img src={article.image} alt={article.title} className="h-72 w-full rounded-[24px] object-cover" />
          <div className="mt-6 flex items-center gap-2 text-sm text-slate-500">
            <BookOpen size={15} />
            <span>{article.author}</span>
            <span>•</span>
            <span>{article.date}</span>
          </div>
          <div className="mt-6 space-y-4 text-sm leading-8 text-slate-700">
            {Array.isArray(article.content) ? (
              article.content.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))
            ) : (
              <p>{article.content}</p>
            )}
          </div>
        </article>
      </div>
    </main>
  );
}