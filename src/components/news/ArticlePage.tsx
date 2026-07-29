import { useMemo, useState } from 'react';
import { ArrowLeft, Copy, MessageCircle, Share2 } from 'lucide-react';
import { Link, useParams } from 'react-router-dom';
import { getArticleById, getRelatedArticles } from '../../data/mockNews';
import { ArticleCard } from './ArticleCard';

export function ArticlePage() {
  const { id } = useParams();
  const [fontSize, setFontSize] = useState('base');
  const article = useMemo(() => getArticleById(id ?? '1'), [id]);
  const related = useMemo(() => getRelatedArticles(article.id), [article.id]);

  const fontClass = fontSize === 'lg' ? 'text-lg leading-8' : fontSize === 'xl' ? 'text-xl leading-9' : 'text-base leading-8';

  return (
    <main className="mx-auto flex max-w-7xl flex-col gap-8 px-4 py-8 lg:px-6">
      <Link to="/" className="flex w-fit items-center gap-2 text-sm font-semibold text-slate-600 dark:text-slate-300">
        <ArrowLeft size={16} />
        Quay lại trang chủ
      </Link>

      <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
        <aside className="space-y-4">
          <div className="rounded-[24px] border border-slate-200 bg-white p-4 shadow-sm dark:border-slate-800 dark:bg-slate-900">
            <p className="text-[11px] uppercase tracking-[0.35em] text-slate-500">Chia sẻ</p>
            <div className="mt-4 flex flex-wrap gap-2">
              <button className="rounded-full border border-slate-200 p-3 text-slate-700 dark:border-slate-700 dark:text-slate-300">
                <Share2 size={16} />
              </button>
              <button className="rounded-full border border-slate-200 p-3 text-slate-700 dark:border-slate-700 dark:text-slate-300">
                <MessageCircle size={16} />
              </button>
              <button className="rounded-full border border-slate-200 p-3 text-slate-700 dark:border-slate-700 dark:text-slate-300">
                <Copy size={16} />
              </button>
            </div>
          </div>

          <div className="rounded-[24px] border border-slate-200 bg-white p-4 shadow-sm dark:border-slate-800 dark:bg-slate-900">
            <p className="text-[11px] uppercase tracking-[0.35em] text-slate-500">Cài đặt đọc</p>
            <div className="mt-4 flex items-center gap-2">
              {['base', 'lg', 'xl'].map((size) => (
                <button
                  key={size}
                  onClick={() => setFontSize(size)}
                  className={`rounded-full px-3 py-2 text-sm font-medium ${fontSize === size ? 'bg-slate-950 text-white dark:bg-red-600' : 'bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-300'}`}
                >
                  {size === 'base' ? 'Mặc định' : size === 'lg' ? 'Lớn' : 'Rất lớn'}
                </button>
              ))}
            </div>
            <p className="mt-4 text-sm text-slate-600 dark:text-slate-400">Thời gian đọc ước tính: {article.readTime}</p>
          </div>
        </aside>

        <article className="rounded-[32px] border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900">
          <div className="flex flex-wrap items-center gap-3 text-sm text-slate-500">
            <span className="rounded-full bg-red-600 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-white">
              {article.category}
            </span>
            <span>{article.author}</span>
            <span>•</span>
            <span>{article.publishedAt}</span>
          </div>

          <h1 className="mt-4 font-serif text-3xl font-semibold leading-tight text-slate-900 dark:text-white lg:text-4xl">
            {article.title}
          </h1>
          <p className="mt-4 text-lg text-slate-600 dark:text-slate-400">{article.summary}</p>

          <img src={article.image} alt={article.title} className="mt-6 h-80 w-full rounded-[24px] object-cover" />

          <div className="mt-6 rounded-[20px] border border-slate-200 bg-slate-50 p-4 dark:border-slate-800 dark:bg-slate-950/60">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">Những điểm đáng chú ý</p>
            <ul className="mt-3 space-y-2 text-sm text-slate-700 dark:text-slate-300">
              {article.keyTakeaways.map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span className="mt-1 h-2.5 w-2.5 rounded-full bg-red-600" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className={`mt-6 text-slate-700 dark:text-slate-300 ${fontClass}`}>
            {article.content.map((paragraph) => (
              <p key={paragraph} className="mt-4">
                {paragraph}
              </p>
            ))}
          </div>
        </article>
      </div>

      <section className="rounded-[32px] border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-800 dark:bg-slate-900">
        <div className="mb-4 flex items-center justify-between">
          <h2 className="font-serif text-2xl font-semibold text-slate-900 dark:text-white">Tin liên quan</h2>
          <a href="#" className="text-sm font-medium text-red-600">Xem thêm</a>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          {related.map((relatedArticle) => (
            <ArticleCard key={relatedArticle.id} article={relatedArticle} compact />
          ))}
        </div>
      </section>
    </main>
  );
}
