import {
  ResearchScaleItem,
  CorrelationPair,
  CopingStrategyData,
  SupportNeedData,
  FormatPreferenceData,
  AssessmentQuestion,
} from '../types';

export const RESEARCH_METADATA = {
  title: 'Mối liên hệ giữa bất mãn hình ảnh cơ thể, trải nghiệm bị bình phẩm ngoại hình đối với lòng tự trọng của học sinh THPT Cụm 1 TP. Hồ Chí Minh',
  shortTitle: 'Nghiên Cứu Khoa Học Học Sinh THPT Cụm 1 TP.HCM',
  authors: ['Nguyễn Ngọc Xuyến Chi', 'Lê Nguyễn Hồng Trâm'],
  mentor: 'ThS. Nguyễn Thị Tân Lương',
  school: 'Trường THPT Nguyễn Hiền, TP. Hồ Chí Minh',
  academicYear: '2025 - 2026',
  field: 'Khoa học Xã hội và Hành vi',
  sampleSize: 624,
  validSampleSize: 607,
  surveyPeriod: '27/8/2026 – 10/9/2026',
  grades: [
    { grade: 'Khối 10', count: 216, percent: 35.6 },
    { grade: 'Khối 11', count: 164, percent: 27.0 },
    { grade: 'Khối 12', count: 227, percent: 37.4 },
  ],
  schoolTypes: [
    { type: 'Công lập', count: 400, percent: 64.1 },
    { type: 'Tư thục', count: 166, percent: 26.6 },
    { type: 'Quốc tế', count: 41, percent: 6.6 },
    { type: 'Khác / Không chọn', count: 17, percent: 2.7 },
  ],
  cronbachAlpha: [
    { scale: 'Trải nghiệm bị bình phẩm ngoại hình (PUSTIN)', itemsCount: 6, alpha: 0.914 },
    { scale: 'Bất mãn hình ảnh cơ thể (CNVCT)', itemsCount: 4, alpha: 0.912 },
    { scale: 'Lòng tự trọng (LTT)', itemsCount: 5, alpha: 0.919 },
  ],
};

export const PUSTIN_ITEMS: ResearchScaleItem[] = [
  { id: 1, text: 'Bị trêu chọc về ngoại hình', mean: 2.26, sd: 1.14, level: 2 },
  { id: 2, text: 'Bị so sánh ngoại hình khiến bản thân tự ti', mean: 2.16, sd: 1.15, level: 2 },
  { id: 3, text: 'Bị chê bai về ngoại hình', mean: 2.14, sd: 1.16, level: 2 },
  { id: 4, text: 'Bị gây áp lực phải thay đổi ngoại hình', mean: 2.15, sd: 1.25, level: 2 },
  { id: 5, text: 'Nhận xét ngoại hình gây cảm xúc tiêu cực', mean: 2.59, sd: 1.27, level: 2 },
  { id: 6, text: 'Lo lắng người khác tiếp tục đánh giá ngoại hình', mean: 2.61, sd: 1.31, level: 3 },
];

export const CNVCT_ITEMS: ResearchScaleItem[] = [
  { id: 1, text: 'Không hài lòng với một hoặc nhiều đặc điểm ngoại hình', mean: 3.07, sd: 1.26, level: 3 },
  { id: 2, text: 'Bận tâm nhiều về ngoại hình của bản thân', mean: 3.03, sd: 1.26, level: 3 },
  { id: 3, text: 'Cảm thấy mình kém hơn khi so sánh ngoại hình với người khác', mean: 2.99, sd: 1.35, level: 3 },
  { id: 4, text: 'Mong muốn một số đặc điểm ngoại hình của mình đẹp hơn', mean: 3.39, sd: 1.32, level: 3 },
];

export const LTT_ITEMS: ResearchScaleItem[] = [
  { id: 1, text: 'Nhìn chung, tôi hài lòng với chính mình', mean: 3.31, sd: 1.17, level: 3 },
  { id: 2, text: 'Tôi cảm thấy mình có nhiều phẩm chất tốt', mean: 3.42, sd: 1.10, level: 4 },
  { id: 3, text: 'Tôi cảm thấy mình là người có giá trị', mean: 3.35, sd: 1.17, level: 3 },
  { id: 4, text: 'Tôi nhìn nhận tích cực về năng lực bản thân', mean: 3.39, sd: 1.17, level: 3 },
  { id: 5, text: 'Tôi luôn học cách tôn trọng bản thân nhiều hơn', mean: 3.60, sd: 1.17, level: 4 },
];

export const CORRELATION_DATA: CorrelationPair[] = [
  {
    pair: 'PUSTIN ↔ CNVCT',
    var1: 'Trải nghiệm bị bình phẩm ngoại hình',
    var2: 'Bất mãn hình ảnh cơ thể',
    r: 0.575,
    ci95: [0.519, 0.626],
    p: '< 0,001',
    r2: 33.1,
    significance: 'positive_significant',
    interpretation:
      'Tương quan thuận ở mức độ rõ rệt. Học sinh càng thường xuyên tiếp nhận bình phẩm, chê bai ngoại hình thì mức độ bất mãn về cơ thể càng có xu hướng cao hơn (hai biến chia sẻ 33,1% phương sai).',
  },
  {
    pair: 'PUSTIN ↔ LTT',
    var1: 'Trải nghiệm bị bình phẩm ngoại hình',
    var2: 'Lòng tự trọng',
    r: -0.168,
    ci95: [-0.244, -0.090],
    p: '< 0,001',
    r2: 2.8,
    significance: 'negative_significant',
    interpretation:
      'Tương quan nghịch có ý nghĩa thống kê (ủng hộ Giả thuyết H2). Học sinh trải nghiệm bình phẩm ngoại hình nhiều hơn có xu hướng có lòng tự trọng thấp hơn, tuy nhiên mức độ liên hệ ở mức yếu (2,8% phương sai), cho thấy lòng tự trọng còn chịu ảnh hưởng của nhiều nhân tố khác.',
  },
  {
    pair: 'CNVCT ↔ LTT',
    var1: 'Bất mãn hình ảnh cơ thể',
    var2: 'Lòng tự trọng',
    r: 0.061,
    ci95: [-0.019, 0.140],
    p: '0,133 (> 0,05)',
    r2: 0.4,
    significance: 'not_significant',
    interpretation:
      'Chưa có ý nghĩa thống kê (Giả thuyết H1 chưa được ủng hộ). Bất mãn ngoại hình KHÔNG trực tiếp kéo tụt lòng tự trọng. Học sinh có thể chưa ưng ý đặc điểm ngoại hình nào đó nhưng vẫn duy trì sự tự tôn vững vàng nhờ học tập, đạo đức, năng lực cá nhân và tình cảm gia đình/bạn bè.',
  },
];

export const COPING_STRATEGIES: CopingStrategyData[] = [
  {
    name: 'Cố thay đổi ngoại hình ngay',
    votes: 251,
    percentage: 42.8,
    isPositive: false,
    analysis: 'Phản ứng phổ biến nhất nhưng tiềm ẩn rủi ro ăn kiêng cực đoan hoặc stress quá mức nếu không có kiến thức khoa học.',
  },
  {
    name: 'Tập trung vào hoạt động khác',
    votes: 190,
    percentage: 32.4,
    isPositive: true,
    analysis: 'Cách chuyển hướng tâm lý lành mạnh (học tập, thể thao, sở thích) giúp phân tán chú ý khỏi ám ảnh ngoại hình.',
  },
  {
    name: 'Tìm thông tin trên mạng',
    votes: 176,
    percentage: 30.0,
    isPositive: false,
    analysis: 'Dễ tiếp cận nhưng dễ rơi vào bẫy thông tin sai lệch, quảng cáo thực phẩm chức năng hoặc chuẩn mực độc hại.',
  },
  {
    name: 'Chia sẻ với người tin cậy',
    votes: 169,
    percentage: 28.8,
    isPositive: true,
    analysis: 'Biện pháp tích cực giúp giải tỏa cảm xúc và tìm kiếm sự đồng cảm chân thành từ người thân, bạn bè.',
  },
  {
    name: 'Tránh giao tiếp / Không dám đăng ảnh',
    votes: 167,
    percentage: 28.5,
    isPositive: false,
    analysis: 'Biểu hiện né tránh xã hội do sợ bị phán xét, có thể dẫn đến cô lập cảm xúc và tự ti kéo dài.',
  },
  {
    name: 'Không biết làm gì / Bối rối',
    votes: 122,
    percentage: 20.8,
    isPositive: false,
    analysis: 'Hơn 1/5 học sinh hoàn toàn thiếu kỹ năng ứng phó khi gặp vấn đề ngoại hình, rất cần được hỗ trợ bằng cẩm nang.',
  },
];

export const SUPPORT_NEEDS: SupportNeedData[] = [
  { topic: 'Xây dựng sự tự tin và lòng tự trọng', votes: 367, percentage: 64.3, highlight: true },
  { topic: 'Cách ứng phó khi bị trêu chọc / chê bai ngoại hình', votes: 231, percentage: 40.5, highlight: true },
  { topic: 'Sử dụng mạng xã hội lành mạnh', votes: 211, percentage: 37.0 },
  { topic: 'Hiểu về bình phẩm ngoại hình và các tác động', votes: 199, percentage: 34.9 },
  { topic: 'Tìm kiếm người / kênh hỗ trợ tâm lý', votes: 90, percentage: 15.8 },
];

export const FORMAT_PREFERENCES: FormatPreferenceData[] = [
  { format: 'Video ngắn (TikTok, Reels, Shorts)', votes: 329, percentage: 56.0, iconName: 'Video' },
  { format: 'Mạng xã hội & bài đăng cộng đồng', votes: 312, percentage: 53.1, iconName: 'Share2' },
  { format: 'Hoạt động tại lớp / trường học', votes: 184, percentage: 31.3, iconName: 'Users' },
  { format: 'Website tương tác số', votes: 135, percentage: 23.0, iconName: 'Globe' },
  { format: 'Infographic / Poster trực quan', votes: 119, percentage: 20.2, iconName: 'Image' },
  { format: 'Cẩm nang ngắn bỏ túi', votes: 107, percentage: 18.2, iconName: 'BookOpen' },
];

export const ASSESSMENT_QUESTIONS: AssessmentQuestion[] = [
  // PUSTIN (6 câu)
  {
    id: 'pustin_1',
    scaleType: 'pustin',
    scaleName: 'Trải nghiệm bình phẩm ngoại hình',
    text: 'Bạn có từng bị bạn bè hoặc người khác trêu chọc về ngoại hình (vóc dáng, cân nặng, chiều cao, khuôn mặt)?',
    description: 'Thang đo PUSTIN - Biểu hiện hành vi trêu chọc trực tiếp',
  },
  {
    id: 'pustin_2',
    scaleType: 'pustin',
    scaleName: 'Trải nghiệm bình phẩm ngoại hình',
    text: 'Bạn có từng bị so sánh ngoại hình với người khác khiến bản thân cảm thấy tự ti, hụt hẫng?',
    description: 'Thang đo PUSTIN - Trải nghiệm bị so sánh ngoại hình',
  },
  {
    id: 'pustin_3',
    scaleType: 'pustin',
    scaleName: 'Trải nghiệm bình phẩm ngoại hình',
    text: 'Bạn có từng bị người khác trực tiếp chê bai về một đặc điểm ngoại hình nào đó?',
    description: 'Thang đo PUSTIN - Trải nghiệm bị chê bai thẳng thắn',
  },
  {
    id: 'pustin_4',
    scaleType: 'pustin',
    scaleName: 'Trải nghiệm bình phẩm ngoại hình',
    text: 'Bạn có cảm thấy mình bị người khác tạo áp lực buộc phải thay đổi ngoại hình?',
    description: 'Thang đo PUSTIN - Áp lực xã hội ép buộc thay đổi',
  },
  {
    id: 'pustin_5',
    scaleType: 'pustin',
    scaleName: 'Trải nghiệm bình phẩm ngoại hình',
    text: 'Những nhận xét về ngoại hình từ người xung quanh có gây cho bạn cảm xúc buồn bã, ức chế hoặc khó chịu?',
    description: 'Thang đo PUSTIN - Tác động cảm xúc tiêu cực tức thời',
  },
  {
    id: 'pustin_6',
    scaleType: 'pustin',
    scaleName: 'Trải nghiệm bình phẩm ngoại hình',
    text: 'Bạn có thường trực nỗi lo lắng rằng người khác sẽ tiếp tục soi mói và đánh giá ngoại hình của mình?',
    description: 'Thang đo PUSTIN - Nỗi lo âu tâm lý kéo dài sau bình phẩm (chỉ số cao nhất khảo sát)',
  },

  // CNVCT (4 câu)
  {
    id: 'cnvct_1',
    scaleType: 'cnvct',
    scaleName: 'Bất mãn hình ảnh cơ thể',
    text: 'Bạn cảm thấy không hài lòng với một hoặc nhiều đặc điểm ngoại hình trên cơ thể mình?',
    description: 'Thang đo CNVCT - Mức độ không hài lòng với các nét cơ thể',
  },
  {
    id: 'cnvct_2',
    scaleType: 'cnvct',
    scaleName: 'Bất mãn hình ảnh cơ thể',
    text: 'Bạn dành nhiều thời gian bận tâm và suy nghĩ về những khiếm khuyết ngoại hình của bản thân?',
    description: 'Thang đo CNVCT - Mức độ bận tâm tâm trí về vẻ ngoài',
  },
  {
    id: 'cnvct_3',
    scaleType: 'cnvct',
    scaleName: 'Bất mãn hình ảnh cơ thể',
    text: 'Khi nhìn thấy bạn bè hoặc người khác trên mạng xã hội, bạn thường cảm thấy mình kém cỏi hơn về ngoại hình?',
    description: 'Thang đo CNVCT - So sánh xã hội đi xuống (Social comparison)',
  },
  {
    id: 'cnvct_4',
    scaleType: 'cnvct',
    scaleName: 'Bất mãn hình ảnh cơ thể',
    text: 'Bạn luôn khao khát và mong muốn một số đặc điểm ngoại hình của mình có thể đẹp hơn, chuẩn hơn?',
    description: 'Thang đo CNVCT - Khát khao cải thiện ngoại hình (chỉ số cao nhất trong khảo sát M=3.39)',
  },

  // LTT (5 câu)
  {
    id: 'ltt_1',
    scaleType: 'ltt',
    scaleName: 'Lòng tự trọng',
    text: 'Nhìn chung, tôi cảm thấy hài lòng và chấp nhận con người thật của chính mình?',
    description: 'Thang đo LTT - Mức độ hài lòng tổng thể với bản thân',
  },
  {
    id: 'ltt_2',
    scaleType: 'ltt',
    scaleName: 'Lòng tự trọng',
    text: 'Tôi nhận thức rõ và tự hào về những phẩm chất tốt đẹp, đức tính tốt mà mình đang có?',
    description: 'Thang đo LTT - Nhận diện phẩm chất và đạo đức cá nhân',
  },
  {
    id: 'ltt_3',
    scaleType: 'ltt',
    scaleName: 'Lòng tự trọng',
    text: 'Tôi tin rằng bản thân là một người có giá trị đối với gia đình, bạn bè và xã hội?',
    description: 'Thang đo LTT - Cảm nhận về giá trị tồn tại của cá nhân',
  },
  {
    id: 'ltt_4',
    scaleType: 'ltt',
    scaleName: 'Lòng tự trọng',
    text: 'Tôi nhìn nhận tích cực về năng lực, sự tiến bộ và khả năng phát triển của bản thân?',
    description: 'Thang đo LTT - Đánh giá năng lực và tiềm năng nội tại',
  },
  {
    id: 'ltt_5',
    scaleType: 'ltt',
    scaleName: 'Lòng tự trọng',
    text: 'Dù có chuyện gì xảy ra, tôi vẫn luôn chủ động học cách yêu thương và tôn trọng bản thân nhiều hơn?',
    description: 'Thang đo LTT - Tinh thần tôn trọng bản thân kiên định (chỉ số cao nhất khảo sát M=3.60)',
  },
];

export const LIKERT_LEVELS = [
  { value: 1, label: 'Hoàn toàn không đồng ý / Không bao giờ', shortLabel: 'Mức 1', range: '1,00 - 1,79' },
  { value: 2, label: 'Không đồng ý / Hiếm khi', shortLabel: 'Mức 2', range: '1,80 - 2,59' },
  { value: 3, label: 'Phân vân / Thỉnh thoảng', shortLabel: 'Mức 3', range: '2,60 - 3,39' },
  { value: 4, label: 'Đồng ý / Thường xuyên', shortLabel: 'Mức 4', range: '3,40 - 4,19' },
  { value: 5, label: 'Hoàn toàn đồng ý / Rất thường xuyên', shortLabel: 'Mức 5', range: '4,20 - 5,00' },
];
