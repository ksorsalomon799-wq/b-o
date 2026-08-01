import { useState } from 'react';
import * as Tabs from '@radix-ui/react-tabs';
import { ImageIcon, PlayCircle } from 'lucide-react';
import { mediaItems } from '../../data/churchData';

const categories = ['Tất cả', 'Ảnh', 'Video'] as const;

export function MediaPage() {
  const [activeTab, setActiveTab] = useState('Tất cả');

  const filtered = mediaItems.filter((item) => {
    if (activeTab === 'Tất cả') return true;
    return activeTab === 'Ảnh' ? item.type === 'image' : item.type === 'video';
  });

  return (
    <main className="mx-auto max-w-7xl px-4 py-8 lg:px-6">
      <div className="mb-6 rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm">
        <p className="text-[11px] uppercase tracking-[0.35em] text-slate-500">Thư viện</p>
        <h2 className="mt-2 font-serif text-3xl font-semibold text-slate-900">Ảnh & Video</h2>
        <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-600">Những khoảnh khắc đời sống, thờ phượng và phục vụ cộng đồng của Hội thánh Plei Bui.</p>
      </div>

      <Tabs.Root value={activeTab} onValueChange={setActiveTab} className="mb-6">
        <Tabs.List className="flex flex-wrap gap-2">
          {categories.map((category) => (
            <Tabs.Trigger
              key={category}
              value={category}
              className={`rounded-full px-4 py-2 text-sm font-semibold ${activeTab === category ? 'bg-red-800 text-white' : 'bg-slate-100 text-slate-700'}`}
            >
              {category}
            </Tabs.Trigger>
          ))}
        </Tabs.List>
      </Tabs.Root>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {filtered.map((item) => (
          <div key={item.id} className="overflow-hidden rounded-[24px] border border-slate-200 bg-white shadow-sm">
            <img src={item.image} alt={item.title} className="h-48 w-full object-cover" />
            <div className="p-4">
              <div className="flex items-center justify-between">
                <p className="text-[11px] uppercase tracking-[0.25em] text-slate-500">{item.category}</p>
                {item.type === 'video' ? <PlayCircle size={16} className="text-red-800" /> : <ImageIcon size={16} className="text-slate-600" />}
              </div>
              <h3 className="mt-2 font-serif text-lg font-semibold text-slate-900">{item.title}</h3>
              <p className="mt-2 text-sm text-slate-600">{item.date}</p>
              
              {/* Nút bấm chuyển hướng sang Google Drive */}
               <a
    
                href={item.type === 'video' ? (item.videoUrl || '#') : (item.driveUrl || '#')} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="mt-4 inline-block text-sm font-semibold text-red-800 hover:underline"
              >
                Xem {item.type === 'video' ? 'video' : 'ảnh'}
              
              </a>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}