import { ArrowRight, Clock3 } from 'lucide-react';
import { Link } from 'react-router-dom';
import type { Article } from '../../data/mockNews';

type ArticleCardProps = {
  article: Article;
  compact?: boolean;
};

export function ArticleCard({ article, compact = false }: ArticleCardProps) {
  return (
    <article className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg dark:border-slate-800 dark:bg-slate-900">
      <Link to={`/article/${article.id}`} className="block">
        <img
          src={article.image}
          alt={article.title}
          className={`w-full object-cover ${compact ? 'h-36' : 'h-48'}`}
        />
      </Link>
      <div className="p-4">
        <div className="mb-3 flex items-center justify-between text-xs uppercase tracking-[0.2em] text-slate-500">
          <span className="rounded-full bg-slate-100 px-2.5 py-1 text-[11px] font-semibold text-slate-700 dark:bg-slate-800 dark:text-slate-300">
            {article.category}
          </span>
          <span className="flex items-center gap-1">
            <Clock3 size={12} />
            {article.publishedAt}
          </span>
        </div>
        <Link to={`/article/${article.id}`}>
          <h3 className="font-serif text-lg font-semibold leading-snug text-slate-900 transition group-hover:text-red-600 dark:text-slate-100">
            {article.title}
          </h3>
        </Link>
        <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-400">{article.summary}</p>
        <div className="mt-4 flex items-center justify-between text-sm text-slate-500 dark:text-slate-400">
          <span>{article.author}</span>
          <span className="flex items-center gap-1 font-medium text-slate-700 dark:text-slate-300">
            Đọc ngay <ArrowRight size={14} />
          </span>
        </div>
      </div>
    </article>
  );
}
