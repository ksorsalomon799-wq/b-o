import { CalendarDays, Clock3, MapPin, Sparkles } from 'lucide-react';
import { events } from '../../data/churchData';

export function EventsPage() {
  return (
    <main className="mx-auto max-w-7xl px-4 py-8 lg:px-6">
      <div className="mb-6 rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm">
        <p className="text-[11px] uppercase tracking-[0.35em] text-slate-500">Sự kiện</p>
        <h2 className="mt-2 font-serif text-3xl font-semibold text-slate-900">Lịch trình và sự kiện</h2>
      </div>

      <div className="grid gap-4 lg:grid-cols-2">
        {events.map((event) => (
          <div key={event.id} className="overflow-hidden rounded-[24px] border border-slate-200 bg-white shadow-sm">
            <img src={event.image} alt={event.title} className="h-44 w-full object-cover" />
            <div className="p-5">
              <div className="flex items-center gap-2 text-sm font-semibold text-red-800">
                <Sparkles size={15} />
                <span>{event.category}</span>
              </div>
              <h3 className="mt-3 font-serif text-xl font-semibold text-slate-900">{event.title}</h3>
              <p className="mt-2 text-sm leading-7 text-slate-600">{event.description}</p>
              <div className="mt-4 space-y-2 text-sm text-slate-600">
                <div className="flex items-center gap-2"><CalendarDays size={15} /> {event.date}</div>
                <div className="flex items-center gap-2"><Clock3 size={15} /> {event.time}</div>
                <div className="flex items-center gap-2"><MapPin size={15} /> {event.location}</div>
              </div>
              <button className="mt-5 rounded-full bg-slate-900 px-4 py-2 text-sm font-semibold text-white">Đăng ký tham dự</button>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
