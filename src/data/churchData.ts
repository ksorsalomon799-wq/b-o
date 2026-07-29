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
    title: 'Thông báo chuẩn bị học lớp thánh kinh căn bản tại plei breng,Năm thứ 2',
    image:'anhnen.jpg',
    excerpt: 'ngày 3/8 đến 14/8.',
    content: [
      'sẽ học trong tuần tới',
      
    ],
    category: 'Thông báo',
    author: '',
    date: '3-14/08/2026',
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
    category: 'Đang tải...',
    author: 'Đang tải...',
    date: 'Đang tải...',
    image: 'banhat.jpg',
    verse: 'Đang tải...',
    tags: ['Đang tải...', 'Đang tải...'],
  },
];

export const events: EventItem[] = [
  {
    id: 'e1',
    title: 'Lễ phục sinh đặc biệt',
    date: '2026-04-05',
    time: '08:00',
    location: 'Nhà thờ Plei Bui',
    description: 'Buổi lễ phục sinh với bài giảng về hy vọng và sự sống mới.',
    speaker: 'Mục sư An Phúc',
    image: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&w=1200&q=80',
    category: 'Lễ',
  },
  {
    id: 'e2',
    title: 'Trại hè thiếu niên',
    date: '2026-06-15',
    time: '09:00',
    location: 'Khu nghỉ dưỡng Trung tâm',
    description: 'Ba ngày học Kinh Thánh, cầu nguyện và vui chơi cùng nhau.',
    speaker: 'Ban thanh niên',
    image: 'https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?auto=format&fit=crop&w=1200&q=80',
    category: 'Trại hè',
  },
  {
    id: 'e3',
    title: 'Ngày vì người nghèo',
    date: '2026-08-20',
    time: '07:30',
    location: 'Bến xe trung tâm',
    description: 'Buổi phát quà và cầu nguyện cho các gia đình cần sự hỗ trợ.',
    speaker: 'Đội truyền giáo',
    image: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=1200&q=80',
    category: 'Công tác',
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
    title: 'Bài giảng về hy vọng',
    type: 'video',
    category: 'Bài giảng',
    image: 'anhh.jpg',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    speaker: 'Mục sư Lê Minh',
    date: '10/06/2026',
  },
  {
    id: 'm3',
    title: 'Sinh hoạt Ban thanh niên mùa hè',
    type: 'image',
    category: 'Sinh hoạt Ban Thanh niên',
    image: 'anh.jpg',
    date: '24-25/07/2026',
  },
  {
    id: 'm4',
    title: 'Trại Xuân Video 2026',
    type: 'video',
    category: 'Nhóm lễ',
    image: '/nhatho.jpg', // Ảnh nền hiển thị trước khi bấm phát video
    videoUrl: 'https://drive.google.com/file/d/1q9xDHHgvERSkJtj0w8RSc34pAm2GZmwC/preview', // Link nhúng Google Drive
    speaker: 'Chi Hội Plei Bui',
    date: '12-13/02/2026',
  },
];