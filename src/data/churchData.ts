export type Article = {
  id: string;
  title: string;
  excerpt: string;
  content: string[];
  category: 'Thông báo' | 'Bài giảng' | 'Sứ mệnh' | 'Cầu nguyện';
  author: string;
  date: string;
  image: string;
  verse: string;
  tags: string[];
  pdfUrl?: string;
};

export type EventItem = {
  id: string;
  title: string;
  date: string;
  time: string;
  location: string;
  description: string;
  speaker: string;
  image: string;
  category: 'Sự kiện' | 'Lễ' | 'Trại hè' | 'Công tác';
};

export type MediaItem = {
  id: string;
  title: string;
  type: 'image' | 'video';
  category: 'Lễ Giáng Sinh' | 'Sinh hoạt Thanh niên' | 'Công tác Xã hội' | 'Bài giảng' | 'Nhóm lễ';
  image: string;
  videoUrl?: string;
  speaker?: string;
  date: string;
};

export type ScheduleItem = {
  id: string;
  title: string;
  time: string;
  description: string;
  icon: string;
};

export const scheduleItems: ScheduleItem[] = [
  { id: '1', title: 'Thờ phượng Chủ nhật', time: '08:00', description: 'Buổi thờ phượng chính', icon: 'Cross' },
  { id: '2', title: 'Thanh niên', time: '19:30', description: 'Sinh hoạt và học Kinh Thánh', icon: 'Heart' },
  { id: '3', title: 'Tráng niên', time: '20:00', description: 'Gặp gỡ, cầu nguyện và chia sẻ', icon: 'BookOpen' },
  { id: '4', title: 'Cầu nguyện', time: '06:30', description: 'Buổi cầu nguyện sáng thứ Sáu', icon: 'Calendar' },
];

export const articles: Article[] = [
  {
    id: '1',
    title: 'Thánh Kinh hè ban thanh niên 2026.',
    excerpt: 'Nước Cha Được Đến.',
    content: [
      '',
    ],
    category: 'Thông báo',
    author: '',
    date: '24-25/07/2026',
    image: 'thophuong.jpg',
    verse: '“Đừng lo lắng chi cho đời sống...” – Ma-thi-ơ 6:25',
    tags: ['Cầu nguyện', 'Cộng đồng'],
    pdfUrl: 'https://httlvn.org/khanh-hoa-thanh-kinh-can-ban-khoa-vi-nam-2.html',
  },
  {
    id: '2',
    title: 'Đang tải...',
    excerpt: 'Đang tải...',
    content: ['Đang tải...'],
    category: 'Bài giảng',
    author: 'Đang tải...',
    date: 'Đang tải...',
    image: 'https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=1200&q=80',
    verse: 'Đang tải...',
    tags: ['Đang tải...', 'Đang tải...'],
  },
  {
    id: '3',
    title: 'Đang tải...',
    excerpt: 'Đang tải...',
    content: ['Đang tải...'],
    category: 'Đang tải...', // Đã sửa từ 'Đang tải...' thành 'Bài giảng'
    author: 'Đang tải...',
    date: 'Đang tải...',
    image: 'banhat.jpg',
    verse: 'Đang tải...',
    tags: ['Đang tải...'],
  },
];

export const events: EventItem[] = [
  {
    id: 'e1',
    title: 'Đang tải...',
    date: 'Đang tải...',
    time: 'Đang tải...',
    location: 'Đang tải...i',
    description: 'Đang tải...',
    speaker: 'Đang tải...',
    image: 'Đang tải...',
    category: 'Đang tải...',
  },
  {
    id: 'e2',
    title: 'Đang tải...',
    date: 'Đang tải...',
    time: 'Đang tải...',
    location: 'Đang tải...',
    description: 'Đang tải...',
    speaker: 'Đang tải...',
    image: 'Đang tải...',
    category: 'Đang tải...',
  },
  {
    id: 'e3',
    title: 'Đang tải...',
    date: 'Đang tải...',
    time: 'Đang tải...',
    location: 'Đang tải...',
    description: 'Đang tải...',
    speaker: 'Đang tải...',
    image: 'Đang tải...',
    category: 'Đang tải...',
  },
];

export const mediaItems: MediaItem[] = [
  {
    id: 'm1',
    title: 'Lễ Giáng Sinh 2025',
    type: 'image',
    category: 'Lễ Giáng Sinh',
    image: 'giangsinh.jpg',
    date: '24-25/12/2025',
  },
  {
    id: 'm2',
    title: 'Đang tải...',
    type: 'Đang tải...',
    category: 'Đang tải...',
    image: 'anhh.jpg',
    videoUrl: 'Đang tải...',
    speaker: 'Đang tải...',
    date: 'Đang tải...',
  },
  {
   id: 'm3',
    title: 'Sinh hoạt Ban thanh niên mùa hè',
    type: 'image',
    category: 'Sinh hoạt Thanh niên',
    image: 'kinhthanhhe.jpg',
    driveUrl: 'https://drive.google.com/drive/folders/1KcxJApXK6dao_F9L_VrKUKZ0Kgs1BGFA', // Mục này đã có sẵn
    date: '24-25/07/2026',
  },
  {
   id: 'm4',
    title: 'Trại Xuân Video 2026',
    type: 'video',
    category: 'Nhóm lễ',
    image: 'nhatho.jpg',
    videoUrl: 'https://drive.google.com/file/d/1q9xDHHgvERSkJtj0w8RSc34pAm2GZmwC/view?usp=sharing',
    speaker: 'Chi Hội Plei Bui',
    date: '12-13/02/2026',
  },
];
