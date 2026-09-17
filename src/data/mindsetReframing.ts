import { ReframingCard, SupportContact } from '../types';

export const REFRAMING_CARDS: ReframingCard[] = [
  {
    id: 'ref-1',
    negativeThought: '"Mình béo quá/gầy quá, chẳng ai muốn làm bạn hay chơi cùng mình."',
    cognitiveTrap: 'Tư duy Đen - Trắng (All-or-Nothing) & Khái quát hóa quá mức',
    reframedTruth:
      'Tình bạn chân thành được xây dựng từ sự hòa đồng, chân thật và lòng tốt, không phải số đo vòng eo hay cân nặng. Bạn bè quý mến bạn vì bạn là chính bạn.',
    actionStep: 'Hãy nhớ lại 1 lần bạn và bạn thân cười đùa vui vẻ — lúc đó các bạn đang chia sẻ câu chuyện gì, chứ đâu phải nhìn ngắm số đo cơ thể?',
  },
  {
    id: 'ref-2',
    negativeThought: '"Mặt mình nổi mụn thế này chắc đi đâu ai cũng chỉ nhìn vào mụn của mình."',
    cognitiveTrap: 'Hiệu ứng ánh đèn sân khấu (Spotlight Effect) & Đọc suy nghĩ người khác',
    reframedTruth:
      'Nghiên cứu tâm lý học chứng minh: Người khác chú ý đến bạn ít hơn 80% so với bạn tưởng. Ai cũng đang bận tâm về bài vở và vấn đề riêng của chính họ. Mụn ở tuổi dậy thì là sinh lý bình thường.',
    actionStep: 'Tập trung vào ánh mắt và lời nói của người đối diện thay vì tưởng tượng họ đang nghĩ gì về làn da của bạn.',
  },
  {
    id: 'ref-3',
    negativeThought: '"Bạn A lớp bên vừa xinh đẹp vừa học giỏi, còn mình thì chẳng có gì nổi bật."',
    cognitiveTrap: 'So sánh xã hội đi xuống (Unfair Social Comparison)',
    reframedTruth:
      'Bông hoa hồng không so sánh với bông hoa hướng dương, cả hai cùng làm đẹp cho khu vườn. Cuộc đời bạn là một hành trình riêng, không phải cuộc đua sắc đẹp.',
    actionStep: 'Mở ứng dụng hoặc sổ tay, ghi ra 3 năng lực hoặc tính cách bạn làm tốt (vẽ tranh, nấu ăn, lắng nghe, chơi thể thao...).',
  },
  {
    id: 'ref-4',
    negativeThought: '"Người ta chê mình là que tăm/cái lu thì chứng tỏ mình xấu xí và kém cỏi thật rồi."',
    cognitiveTrap: 'Đồng hóa lời người khác thành bản sắc cá nhân (Internalization)',
    reframedTruth:
      'Lời bình phẩm nói lên tính cách và sự bất an của người phát ngôn, không phản ánh sự thật về bạn. Nghiên cứu chỉ ra giá trị bản thân bạn lớn hơn ngoại hình rất nhiều.',
    actionStep: 'Nói thầm trong đầu: "Ý kiến của họ không phải là sự thật về tôi. Tôi từ chối nhận lời phán xét vô căn cứ này."',
  },
  {
    id: 'ref-5',
    negativeThought: '"Nếu mình không giảm 5kg ngay trong tháng này thì mình sẽ ghét bỏ bản thân."',
    cognitiveTrap: 'Tự áp đặt điều kiện lên tình yêu thương bản thân (Conditional Self-Love)',
    reframedTruth:
      'Bạn xứng đáng được tôn trọng và yêu thương ngay lúc này, với cơ thể hiện tại. Ép bản thân thay đổi cấp tốc dễ dẫn đến rối loạn ăn uống và tổn hại sức khỏe lâu dài.',
    actionStep: 'Ăn một bữa ăn ngon, lành mạnh và đi dạo 20 phút để cơ thể cảm thấy nhẹ nhõm, tràn đầy sinh lực.',
  },
];

export const MYTHS_AND_FACTS = [
  {
    myth: 'Có ngoại hình đẹp theo chuẩn thì tự khắc sẽ có lòng tự trọng cao và hạnh phúc.',
    fact: 'Thực tế khoa học: Nhiều người có ngoại hình chuẩn vẫn mắc hội chứng mặc cảm ngoại hình (BDD) và bất an sâu sắc. Lòng tự trọng bền vững đến từ giá trị nội tại, năng lực cá nhân và sự chấp nhận chính mình.',
  },
  {
    myth: 'Học sinh bất mãn với cơ thể mình thì chắc chắn sẽ tự ti và có lòng tự trọng thấp.',
    fact: 'Nghiên cứu Cụm 1 TP.HCM (624 HS) chứng minh: Tương quan giữa bất mãn cơ thể và lòng tự trọng là r = 0.061 (không có ý nghĩa thống kê). Học sinh hoàn toàn có thể duy trì lòng tự trọng cao thông qua học tập, đạo đức và các mối quan hệ tích cực dù chưa hoàn hảo về ngoại hình.',
  },
  {
    myth: 'Trêu chọc ngoại hình bạn bè cho vui trong giờ ra chơi là vô hại, ai cũng đùa thế.',
    fact: 'Nghiên cứu chỉ ra: Dù chỉ là lời đùa, cảm xúc lo âu về việc bị tiếp tục đánh giá đạt điểm cao nhất (2.61/5.00) và ám ảnh tâm lý học sinh trong nhiều tuần, làm giảm hiệu suất học tập và sự tự tin giao tiếp.',
  },
  {
    myth: 'Khi không hài lòng với cơ thể, tốt nhất là nhịn ăn hoặc dùng thuốc giảm cân trên mạng để thay đổi nhanh nhất.',
    fact: '42.8% học sinh từng có xu hướng muốn thay đổi ngay lập tức. Nhưng giảm cân cấp tốc không theo chỉ dẫn y tế có thể gây suy nhược, teo cơ, rối loạn nội tiết và suy giảm trí nhớ nghiêm trọng.',
  },
];

export const SUPPORT_CONTACTS: SupportContact[] = [
  {
    name: 'Tổng Đài Quốc Gia Bảo Vệ Trẻ Em & Học Sinh',
    phone: '111',
    availability: '24/7 (Miễn phí cước gọi)',
    cost: 'Hoàn toàn miễn phí',
    description:
      'Kênh tư vấn tâm lý, bảo vệ học sinh trước bạo lực học đường, body shaming, xâm hại tinh thần và các khủng hoảng tâm lý vị thành niên.',
    tag: 'Đường dây nóng quốc gia',
  },
  {
    name: 'Phòng Tham Vấn Tâm Lý Học Đường Các Trường THPT',
    phone: 'Liên hệ văn phòng Đoàn / Ban Giám Hiệu trường bạn',
    availability: 'Giờ hành chính từ Thứ 2 đến Thứ 7',
    cost: 'Miễn phí cho học sinh trường',
    description:
      'Các chuyên viên tâm lý học đường tại trường THPT (như THPT Nguyễn Hiền và các trường THPT Cụm 1 TP.HCM) luôn sẵn sàng lắng nghe riêng tư và giữ bí mật tuyệt đối cho học sinh.',
    tag: 'Tư vấn tại trường',
  },
  {
    name: 'Đường Dây Nóng Tư Vấn Tâm Lý Tuổi Trẻ & Sức Khỏe Tinh Thần',
    phone: '1900 6233 / 1900 9095',
    availability: '8:00 - 21:00 hàng ngày',
    cost: 'Cước viễn thông tiêu chuẩn',
    description:
      'Hỗ trợ tháo gỡ rối loạn lo âu, áp lực đồng trang lứa, khủng hoảng tuổi dậy thì và các vấn đề hình ảnh cơ thể.',
    tag: 'Chuyên gia tâm lý',
  },
  {
    name: 'Khoa Tâm Lý - Bệnh Viện Nhi Đồng 1 / Nhi Đồng 2 / Nhi Đồng TP.HCM',
    phone: '028 3927 1119 (Nhi Đồng 1) / 028 3829 5723 (Nhi Đồng 2)',
    availability: 'Theo giờ khám bệnh viện',
    cost: 'Bảo hiểm y tế / Viện phí',
    address: 'TP. Hồ Chí Minh',
    description:
      'Khám, chẩn đoán và trị liệu tâm lý chuyên sâu cho thanh thiếu niên gặp chứng rối loạn ám ảnh cơ thể (BDD), rối loạn ăn uống hoặc trầm cảm tuổi học đường.',
    tag: 'Y tế chuyên khoa',
  },
];
