export type Category = 'Thời sự' | 'Thế giới' | 'Kinh doanh' | 'Công nghệ' | 'Thể thao' | 'Giải trí';

export type Article = {
  id: string;
  title: string;
  summary: string;
  category: Category;
  author: string;
  publishedAt: string;
  image: string;
  readTime: string;
  badge?: string;
  content: string[];
  keyTakeaways: string[];
  relatedIds: string[];
  featured?: boolean;
  trendScore?: number;
};

export const categories: Category[] = ['Thời sự', 'Thế giới', 'Kinh doanh', 'Công nghệ', 'Thể thao', 'Giải trí'];

export const mockArticles: Article[] = [
  {
    id: '1',
    title: 'Đà Nẵng thúc đẩy tuyến đường sông kết nối du lịch và logistics mới',
    summary: 'Chiến lược quy hoạch mới hứa hẹn tăng cường kết nối vùng, mở ra lợi thế cho cả du lịch và thương mại.',
    category: 'Thời sự',
    author: 'Minh Anh',
    publishedAt: '15 phút trước',
    image: 'https://images.unsplash.com/photo-1515165562839-978bbcf3f4e6?auto=format&fit=crop&w=1200&q=80',
    readTime: '4 phút đọc',
    badge: 'Phóng sự',
    featured: true,
    trendScore: 97,
    content: [
      'Đà Nẵng đang triển khai một mô hình phát triển đô thị theo hướng kết nối tuyến đường sông và các khu logistics mới nhằm tạo lợi thế cho cả du lịch và vận chuyển hàng hóa.',
      'Theo các chuyên gia, việc tối ưu hạ tầng ven sông có thể kéo dài chuỗi giá trị từ cảng đến khu du lịch, đồng thời giảm chi phí luân chuyển hàng hóa.',
      'Đề án được kỳ vọng sẽ tạo thêm hàng trăm việc làm trong các lĩnh vực vận tải, dịch vụ và thương mại.',
    ],
    keyTakeaways: ['Tăng cường kết nối hạ tầng', 'Mở ra cơ hội du lịch ven sông', 'Giảm chi phí logistics'],
    relatedIds: ['2', '4', '6'],
  },
  {
    id: '2',
    title: 'Kinh tế châu Á tăng tốc nhờ chuỗi cung ứng đa trung tâm',
    summary: 'Các doanh nghiệp lớn đang điều chỉnh chiến lược để giảm rủi ro khỏi các điểm tập trung quá mức.',
    category: 'Kinh doanh',
    author: 'Quang Huy',
    publishedAt: '1 giờ trước',
    image: 'https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=1200&q=80',
    readTime: '3 phút đọc',
    badge: 'Phân tích',
    trendScore: 88,
    content: ['Việc đa dạng hóa chuỗi cung ứng là ưu tiên hàng đầu của nhiều tập đoàn toàn cầu.', 'Các thị trường Đông Nam Á nhận được dòng vốn đầu tư mới từ các công ty muốn tăng khả năng phục hồi.', 'Những thay đổi này có thể giúp doanh nghiệp duy trì hoạt động ổn định trong bối cảnh địa chính trị thay đổi.'],
    keyTakeaways: ['Chuỗi cung ứng đa trung tâm', 'Tăng dòng vốn đầu tư', 'Giảm rủi ro địa chính trị'],
    relatedIds: ['1', '3', '7'],
  },
  {
    id: '3',
    title: 'Apple công bố chip mới hướng tới trí tuệ nhân tạo trên thiết bị',
    summary: 'Công nghệ mới hứa hẹn nâng cao trải nghiệm cá nhân hóa và tiết kiệm năng lượng cho người dùng.',
    category: 'Công nghệ',
    author: 'Lan Phương',
    publishedAt: '2 giờ trước',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80',
    readTime: '5 phút đọc',
    badge: 'Công nghệ',
    trendScore: 91,
    content: ['Chip mới được thiết kế để xử lý tác vụ AI cục bộ trên thiết bị, giảm phụ thuộc vào đám mây.', 'Các nhà phát triển kỳ vọng việc này sẽ mở ra khả năng suy luận nhanh hơn cho các ứng dụng hàng ngày.', 'Dữ liệu riêng tư của người dùng cũng được bảo vệ tốt hơn nhờ quy trình xử lý tại thiết bị.'],
    keyTakeaways: ['AI trên thiết bị', 'Tiết kiệm năng lượng', 'Bảo vệ quyền riêng tư'],
    relatedIds: ['5', '8', '10'],
  },
  {
    id: '4',
    title: 'Đội tuyển Việt Nam đặt mục tiêu vượt qua vòng loại tại khu vực',
    summary: 'HLV và các cầu thủ nhấn mạnh tinh thần tập luyện và sự gắn kết để tạo bước tiến mới.',
    category: 'Thể thao',
    author: 'Tùng Dương',
    publishedAt: '30 phút trước',
    image: 'https://images.unsplash.com/photo-1517649763962-0c623066013b?auto=format&fit=crop&w=1200&q=80',
    readTime: '3 phút đọc',
    badge: 'Bóng đá',
    trendScore: 85,
    content: ['Đội tuyển Việt Nam đang tập trung vào các buổi luyện tập chiến thuật và thể lực theo đúng lịch trình.', 'Ban huấn luyện cho biết sự phối hợp giữa các tuyến là chìa khóa để giữ thế trận ổn định.', 'Những trận giao hữu sắp tới được xem là thước đo quan trọng trước các lượt đấu chính thức.'],
    keyTakeaways: ['Tập trung chiến thuật', 'Tăng cường thể lực', 'Chuẩn bị ở các trận giao hữu'],
    relatedIds: ['1', '7', '9'],
  },
  {
    id: '5',
    title: 'Những xu hướng giải trí mới định hình mùa lễ hội năm nay',
    summary: 'Sự bùng nổ của các chương trình trực tuyến và concert trực tiếp đang làm đổi mới cách người xem thưởng thức.',
    category: 'Giải trí',
    author: 'Hà My',
    publishedAt: '45 phút trước',
    image: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?auto=format&fit=crop&w=1200&q=80',
    readTime: '2 phút đọc',
    badge: 'Văn hóa',
    trendScore: 82,
    content: ['Công nghệ phát trực tiếp và tương tác theo thời gian thực đang tạo ra trải nghiệm mới cho khán giả.', 'Nhiều nghệ sĩ chọn hình thức kết hợp giữa sân khấu và nền tảng số nhằm mở rộng đối tượng người xem.', 'Mùa lễ hội năm nay cho thấy người tiêu dùng đòi hỏi nhiều nội dung cá nhân hóa hơn.'],
    keyTakeaways: ['Live experience tăng trưởng', 'Tương tác thời gian thực', 'Nội dung cá nhân hóa'],
    relatedIds: ['3', '8', '10'],
  },
  {
    id: '6',
    title: 'Nga và các đối tác EU trao đổi về lộ trình an ninh năng lượng',
    summary: 'Thỏa thuận mới mang lại tín hiệu tích cực cho thị trường khí đốt và ổn định nguồn cung trong mùa đông.',
    category: 'Thế giới',
    author: 'Đức Minh',
    publishedAt: '3 giờ trước',
    image: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=1200&q=80',
    readTime: '4 phút đọc',
    badge: 'Thế giới',
    trendScore: 79,
    content: ['Các bên trao đổi về cơ chế vận chuyển khí đốt và quy định an toàn cho các tuyến đường ống.', 'Nhà phân tích cho rằng thỏa thuận này có thể giảm biến động giá trong ngắn hạn.', 'Động thái này cũng ảnh hưởng tới triển vọng hợp tác năng lượng giữa khu vực.'],
    keyTakeaways: ['Ổn định nguồn cung', 'Giảm biến động giá', 'Tăng cơ hội hợp tác'],
    relatedIds: ['2', '7', '9'],
  },
  {
    id: '7',
    title: 'Startup Việt đột phá trong lĩnh vực tài chính số cho người lao động tự do',
    summary: 'Một nền tảng mới giúp người làm việc linh hoạt theo dõi thu nhập và đăng ký bảo hiểm dễ dàng hơn.',
    category: 'Kinh doanh',
    author: 'Mai Linh',
    publishedAt: '5 giờ trước',
    image: 'https://images.unsplash.com/photo-1556740749-887f6717d7e4?auto=format&fit=crop&w=1200&q=80',
    readTime: '3 phút đọc',
    badge: 'Startup',
    trendScore: 76,
    content: ['Nền tảng kết nối người lao động tự do với công cụ quản lý thu nhập và chi phí.', 'Khách hàng sử dụng dịch vụ cho thấy tỷ lệ tuân thủ đóng bảo hiểm tăng đáng kể.', 'Đây là tín hiệu cho thấy fintech đang mở ra nhiều cơ hội cho nhóm việc làm linh hoạt.'],
    keyTakeaways: ['Hỗ trợ người lao động tự do', 'Giảm thủ tục bảo hiểm', 'Tăng tính minh bạch'],
    relatedIds: ['2', '6', '10'],
  },
  {
    id: '8',
    title: 'Mô hình AI tạo nội dung giúp báo chí tăng tốc sản xuất bản tin',
    summary: 'Nhà báo và nhóm kỹ thuật đang phối hợp để nâng cao tốc độ nhưng vẫn giữ chất lượng kiểm chứng.',
    category: 'Công nghệ',
    author: 'Bảo Châu',
    publishedAt: '6 giờ trước',
    image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&w=1200&q=80',
    readTime: '4 phút đọc',
    badge: 'Media tech',
    trendScore: 74,
    content: ['Các hãng thông tấn đang thử nghiệm AI để tự động hóa các phần nội dung lặp lại.', 'Tuy nhiên, kiểm chứng dữ liệu vẫn là bước không thể bỏ qua.', 'Nhìn chung, AI được kỳ vọng sẽ hỗ trợ nhà báo trong quy trình sàng lọc và cấu trúc thông tin.'],
    keyTakeaways: ['Tăng tốc sản xuất', 'Giữ chất lượng kiểm chứng', 'Cải thiện quy trình'],
    relatedIds: ['3', '5', '9'],
  },
  {
    id: '9',
    title: 'Giải vô địch thể thao cộng đồng quy tụ hơn 200 đội',
    summary: 'Sự kiện lớn kéo dài ba ngày với nhiều hoạt động giáo dục thể chất và giao lưu văn hóa.',
    category: 'Thể thao',
    author: 'Phúc Khang',
    publishedAt: '7 giờ trước',
    image: 'https://images.unsplash.com/photo-1547347298-4074fc3086f0?auto=format&fit=crop&w=1200&q=80',
    readTime: '2 phút đọc',
    badge: 'Cộng đồng',
    trendScore: 70,
    content: ['Sự kiện quy tụ nhiều nhóm vận động viên từ khắp các tỉnh thành.', 'Các hoạt động ngoại khóa và sân chơi thể chất được tổ chức song song.', 'Bản tin cho thấy sự quan tâm của công chúng ngày càng tăng đối với phong trào thể thao cộng đồng.'],
    keyTakeaways: ['Quy tụ 200+ đội', 'Tăng hoạt động cộng đồng', 'Phát triển thể thao địa phương'],
    relatedIds: ['4', '6', '10'],
  },
  {
    id: '10',
    title: 'Lễ hội ánh sáng đang biến thành điểm đến mới của thành phố',
    summary: 'Tuyến phố trung tâm được trang trí bằng các trải nghiệm ánh sáng tương tác và âm nhạc trực tiếp.',
    category: 'Giải trí',
    author: 'Vy Linh',
    publishedAt: '8 giờ trước',
    image: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=1200&q=80',
    readTime: '2 phút đọc',
    badge: 'Sự kiện',
    trendScore: 68,
    content: ['Lễ hội ánh sáng kéo dài đến cuối tuần, thu hút cả người dân và du khách.', 'Các điểm check-in mới được giới trẻ yêu thích và chia sẻ rộng rãi trên mạng.', 'Thành phố kỳ vọng điều này sẽ thúc đẩy du lịch và thương mại trong khu vực trung tâm.'],
    keyTakeaways: ['Thu hút du khách', 'Tăng hoạt động thương mại', 'Phát triển trải nghiệm tương tác'],
    relatedIds: ['5', '7', '8'],
  },
];

export const getArticleById = (id: string) => mockArticles.find((article) => article.id === id) ?? mockArticles[0];

export const getRelatedArticles = (id: string) => mockArticles.filter((article) => article.id !== id).slice(0, 3);
