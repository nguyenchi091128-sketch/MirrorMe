export interface HandbookSection {
  id: string;
  chapterNumber: number;
  title: string;
  subtitle: string;
  readTime: string;
  iconName: string;
  keyTakeaway: string;
  researchBadge?: string;
  content: {
    heading: string;
    text: string;
    bulletPoints?: string[];
    callout?: {
      title: string;
      body: string;
      type: 'tip' | 'warning' | 'science';
    };
  }[];
  actionToolkit: {
    title: string;
    steps: {
      number: string;
      stepName: string;
      description: string;
      example?: string;
    }[];
  };
}

export const HANDBOOK_CHAPTERS: HandbookSection[] = [
  {
    id: 'chapter-1',
    chapterNumber: 1,
    title: 'Giải Mã Bất Mãn Hình Ảnh Cơ Thể & Ảo Tưởng "Cơ Thể Chuẩn"',
    subtitle: 'Hiểu đúng cơ chế tâm lý để không rơi vào bẫy so sánh xã hội',
    readTime: '5 phút đọc',
    iconName: 'Eye',
    keyTakeaway:
      'Bất mãn cơ thể xuất phát từ việc nội tâm hóa chuẩn mực xã hội phi thực tế. Đừng biến cơ thể thành "vật trang trí", hãy trân trọng "chức năng sống" của nó.',
    researchBadge: 'Thực tế học đường: Khát khao cải thiện ngoại hình rất phổ biến',
    content: [
      {
        heading: '1. Bất Mãn Hình Ảnh Cơ Thể Là Gì?',
        text: 'Theo định nghĩa khoa học của Markey (2010), bất mãn hình ảnh cơ thể (body dissatisfaction) là trạng thái cá nhân có đánh giá, cảm nhận hoặc thái độ tiêu cực đối với ngoại hình, vóc dáng, cân nặng, khuôn mặt hoặc các đường nét thể chất của chính mình khi đối chiếu với hình mẫu lý tưởng tự đặt ra.',
        bulletPoints: [
          'Hơn 70% thanh thiếu niên từng mong muốn cải thiện ít nhất một đặc điểm thể chất.',
          'Trong nghiên cứu tại THPT Cụm 1 TP.HCM, biểu hiện "Mong muốn đặc điểm ngoại hình đẹp hơn" đạt điểm cao nhất (3.39/5.00).',
          'Sự bất mãn thường đi kèm với việc bận tâm tâm trí (3.03/5.00) và so sánh xã hội (2.99/5.00).',
        ],
        callout: {
          title: 'Phát Hiện Nghiên Cứu',
          body: 'Nghiên cứu chỉ ra: Cảm giác bất mãn ngoại hình xuất hiện ở cả ba khối 10, 11 và 12, không phân biệt trường công lập hay tư thục. Đây là tâm lý chung của giai đoạn dậy thì khi cơ thể biến đổi nhanh chóng.',
          type: 'science',
        },
      },
      {
        heading: '2. Từ "Body Positivity" Đến "Body Neutrality" (Tính Trung Dung Cơ Thể)',
        text: 'Nhiều bạn trẻ cảm thấy áp lực khi phải gượng ép "yêu mọi vết rạn, yêu từng ngấn mỡ" mỗi ngày (Body Positivity cực đoan). Tâm lý học hiện đại khuyến khích tiếp cận theo hướng Body Neutrality (Tính trung dung cơ thể):',
        bulletPoints: [
          'Cơ thể bạn không sinh ra để làm vừa mắt người khác: Nhiệm vụ chính của cơ thể là thở, đi lại, học tập, cảm nhận, ôm người bạn thương và tận hưởng cuộc sống.',
          'Chấp nhận cơ thể như một sự thật khách quan: "Hôm nay da mình có mụn, nhưng nó đang bài tiết bình thường. Mình chăm sóc nó nhẹ nhàng, mụn không định nghĩa giá trị con người mình."',
          'Tách rời thẩm mỹ khỏi đạo đức: Béo hay gầy, cao hay thấp không làm bạn trở thành người tốt hơn hay xấu hơn.',
        ],
      },
      {
        heading: '3. Cảnh Báo: 42,8% Học Sinh Cố Thay Đổi Ngoại Hình Cấp Tốc',
        text: 'Kết quả khảo sát Bảng 9 cho thấy 42,8% học sinh chọn cách "Cố thay đổi ngoại hình ngay" khi không hài lòng. Nếu không có kiến thức y khoa, hành vi này dễ biến tướng thành: nhịn ăn ngắt quãng cực đoan, lạm dụng thuốc giảm cân trôi nổi, tập luyện quá sức gây chấn thương, hoặc sử dụng mỹ phẩm corticoid lột tẩy.',
        callout: {
          title: 'Nguyên Tắc An Toàn Sức Khỏe',
          body: 'Mọi thay đổi ngoại hình bền vững phải bắt đầu từ lòng trân trọng sức khỏe, không phải từ sự căm ghét chính cơ thể mình. Hãy hỏi bác sĩ hoặc chuyên gia dinh dưỡng thay vì tin mẹo giảm cân trên TikTok.',
          type: 'warning',
        },
      },
    ],
    actionToolkit: {
      title: 'Hộp Công Cụ: Bài Tập "Biết Ơn Chức Năng Cơ Thể" (3 Phút/Ngày)',
      steps: [
        {
          number: '01',
          stepName: 'Chuyển đổi góc nhìn (Sensory Scan)',
          description: 'Mỗi sáng khi soi gương, thay vì tìm khuyết điểm (mụn, đùi, mũi), hãy nhìn vào một bộ phận và cảm ơn công năng của nó.',
          example: '"Đôi chân này đã cùng mình đạp xe đến trường và chơi bóng rổ cừ khôi."',
        },
        {
          number: '02',
          stepName: 'Giảm tần suất kiểm tra gương (Body Checking)',
          description: 'Hạn chế hành vi soi gương liên tục hoặc chụp ảnh tự sướng rồi phóng to kiểm tra góc mặt khi căng thẳng.',
        },
        {
          number: '03',
          stepName: 'Chăm sóc chủ động thay vì trừng phạt',
          description: 'Uống đủ nước, ngủ đủ 7-8 tiếng, ăn đủ bữa để cơ thể có đủ năng lượng ôn bài.',
        },
      ],
    },
  },
  {
    id: 'chapter-2',
    chapterNumber: 2,
    title: 'Nhận Diện & Thiết Lập Ranh Giới Trước Bình Phẩm Ngoại Hình',
    subtitle: 'Nghệ thuật đối đáp văn minh và hóa giải nỗi lo âu sau bình phẩm',
    readTime: '6 phút đọc',
    iconName: 'ShieldAlert',
    keyTakeaway:
      'Lời bình phẩm của người khác phản ánh thế giới quan và sự bất an của chính họ, không phải thước đo giá trị của bạn. Hãy học cách đặt ranh giới dứt khoát nhưng bình tĩnh.',
    researchBadge: 'Tâm lý học đường: Nỗi lo bị phán xét kéo dài hơn lời trêu tức thời',
    content: [
      {
        heading: '1. Nhận Diện Các Dạng Bình Phẩm Ngoại Hình Học Đường',
        text: 'Bình phẩm ngoại hình (Gam et al., 2020) không chỉ là những lời mắng chửi thẳng thừng, mà thường ẩn nấp dưới những hình thức tinh vi hơn:',
        bulletPoints: [
          'Trêu chọc giả vỏ bọc hài hước: "Haha đùa tí làm gì căng", "Dạo này béo tròn như heo con thế".',
          'Khen ngợi độc hại (Backhanded compliments): "Dạo này gầy đi nhìn xinh hẳn", "Mặt mụn mà duyên dáng ghê".',
          'So sánh gây áp lực: "Nhìn bạn A người ta thon thả thế kia kìa, sao con chẳng chịu chăm chút gì cả".',
          'Bình phẩm mạng xã hội (Cyber-shaming): Thả icon cười cợt, zoom vào khuyết điểm trong ảnh kỷ yếu, bình luận ác ý ẩn danh.',
        ],
      },
      {
        heading: '2. Nỗi Lo Âu Kéo Dài: Phát Hiện Nổi Bật Từ Nghiên Cứu',
        text: 'Nghiên cứu trên 624 học sinh THPT phát hiện một điều thú vị: Điểm số hành vi chê bai trực tiếp chỉ ở mức 2 (TB 2.14 - 2.26), nhưng mức độ "Lo lắng người khác tiếp tục đánh giá ngoại hình" lại vọt lên Mức 3 (TB 2.61).',
        callout: {
          title: 'Giải Mã Hiện Tượng Tâm Lý',
          body: 'Một câu nói vô tình có thể chỉ mất 3 giây để thốt ra, nhưng "dư chấn tâm lý" lại kéo dài hàng tuần trong tâm trí học sinh, khiến các bạn luôn cảm thấy mình đang bị "soi dưới kính hiển vi" (Spotlight effect).',
          type: 'science',
        },
      },
      {
        heading: '3. Quy Tắc "Tấm Gương & Tấm Kính" (Mirror vs Window)',
        text: 'Khi một ai đó buông lời chê bai bạn, hãy nhớ nguyên lý tâm lý học: Lời nói đó là một TẤM GƯƠNG phản chiếu tâm hồn và sự thiếu văn minh của họ, chứ không phải một TẤM KÍNH nhìn thấu sự thật về bạn.',
        bulletPoints: [
          'Người thích chê bai thường là người đang mang trong mình sự bất an sâu sắc về bản thân.',
          'Họ dùng việc hạ thấp người khác như một cơ chế phòng vệ để tạm thời cảm thấy mình vượt trội.',
          'Bạn không có nghĩa vụ phải "nhận gói quà độc hại" mà người khác ném vào tay mình.',
        ],
      },
    ],
    actionToolkit: {
      title: 'Hộp Công Cụ: 4 Kịch Bản Đối Đáp Văn Minh & Đặt Ranh Giới (Boundary Scripts)',
      steps: [
        {
          number: '01',
          stepName: 'Kỹ thuật "Chiếc máy ghi âm lạnh lùng" (The Cool Echo)',
          description: 'Hỏi ngược lại đối phương một cách điềm đạm, buộc họ phải nhận thức sự vô duyên của câu nói.',
          example: '"Cậu có ý gì khi nói câu đó vậy?" hoặc "Tại sao việc đó lại quan trọng với cậu thế?"',
        },
        {
          number: '02',
          stepName: 'Thiết lập ranh giới rõ ràng (Direct Boundary)',
          description: 'Khẳng định chủ quyền cơ thể và từ chối thảo luận chủ đề ngoại hình.',
          example: '"Mình không thoải mái khi ngoại hình của mình bị mang ra bàn tán. Chúng ta đổi chủ đề nhé."',
        },
        {
          number: '03',
          stepName: 'Vô hiệu hóa bằng sự trung tính (Grey Rock)',
          description: 'Phản hồi cực ngắn và không để lộ cảm xúc tổn thương - làm tiêu tan hứng thú trêu chọc của kẻ bắt nạt.',
          example: '"Ừ, mình biết rồi." (Rồi quay sang tiếp tục đọc sách hoặc nói chuyện với bạn khác).',
        },
        {
          number: '04',
          stepName: 'Báo cáo & Tìm trợ giúp khi có dấu hiệu bắt nạt học đường',
          description: 'Lưu lại bằng chứng (tin nhắn, ảnh chụp) và thông báo ngay cho Giáo viên chủ nhiệm, Phòng tham vấn tâm lý hoặc Ban giám hiệu.',
        },
      ],
    },
  },
  {
    id: 'chapter-3',
    chapterNumber: 3,
    title: 'Lòng Tự Trọng Đa Trụ Cột: Bạn Không Cần Hoàn Hảo Để Đáng Giá',
    subtitle: 'Khám phá phát hiện khoa học độc đáo: Ngoại hình không quyết định lòng tự trọng',
    readTime: '6 phút đọc',
    iconName: 'HeartHandshake',
    keyTakeaway:
      'Nghiên cứu chứng minh: Bất mãn cơ thể không trực tiếp làm sụt giảm lòng tự trọng. Bạn hoàn toàn có thể tự hào về trí tuệ, lòng nhân hậu và tài năng của mình bất kể ngoại hình thế nào!',
    researchBadge: 'Khám phá cốt lõi: Ngoại hình không quyết định lòng tự trọng',
    content: [
      {
        heading: '1. Khám Phá Khoa Học Đắt Giá Từ Đề Tài',
        text: 'Nhiều người lầm tưởng: Cứ tự ti về ngoại hình là chắc chắn sẽ có lòng tự trọng thấp. Nhưng kết quả phân tích thống kê trên 607 học sinh THPT TP.HCM của nhóm tác giả đã cho thấy một sự thật đầy bất ngờ:',
        bulletPoints: [
          'Hệ số tương quan giữa Bất mãn cơ thể (CNVCT) và Lòng tự trọng (LTT) là r = 0.061 với p = 0.133 > 0.05 (không có ý nghĩa thống kê).',
          'Điều này có nghĩa: Một học sinh có thể chưa hoàn toàn hài lòng với chiếc mũi hay cân nặng của mình, nhưng bạn ấy VẪN DUY TRÌ LÒNG TỰ TRỌNG RẤT TỐT!',
          'Lòng tự trọng của học sinh THPT được bồi đắp từ nhiều trụ cột khác vững chãi hơn nhiều so với lớp vỏ bọc bên ngoài.',
        ],
        callout: {
          title: 'Thông Điệp Tự Trọng',
          body: '"Lòng tự trọng là sự đánh giá tổng thể của một cá nhân về giá trị và năng lực của chính bản thân" (Anthony et al., 2007). Ngoại hình chỉ là một căn phòng nhỏ trong cả một tòa lâu đài giá trị của bạn!',
          type: 'science',
        },
      },
      {
        heading: '2. Mô Hình 5 Trụ Cột Giá Trị Cốt Lõi Của Học Sinh',
        text: 'Thay vì đặt toàn bộ "trứng vào một giỏ ngoại hình", hãy xây dựng sự tự tin dựa trên mô hình giá trị đa chiều:',
        bulletPoints: [
          'Trụ cột 1 - Năng lực học tập & Sáng tạo: Khả năng giải toán, viết văn, vẽ tranh, chơi nhạc cụ, lập trình, thuyết trình.',
          'Trụ cột 2 - Phẩm chất & Nhân cách: Sự tử tế, chân thành, trung thực, biết lắng nghe và sẻ chia với bạn bè (đạt TB 3.42 trong khảo sát).',
          'Trụ cột 3 - Mục tiêu & Sự kiên trì: Tinh thần vượt khó khi ôn thi, sự quyết tâm rèn luyện một kỹ năng mới.',
          'Trụ cột 4 - Mối quan hệ kết nối: Tình cảm gắn bó với gia đình, bạn bè tri kỷ, sự hòa đồng trong tập thể lớp.',
          'Trụ cột 5 - Ý thức tôn trọng chính mình: Tinh thần chủ động học hỏi và yêu thương bản thân (đạt TB 3.60 - cao nhất trong nghiên cứu).',
        ],
      },
    ],
    actionToolkit: {
      title: 'Hộp Công Cụ: Bản Đồ Giá Trị Bản Thân (Self-Worth Tree)',
      steps: [
        {
          number: '01',
          stepName: 'Liệt kê 3 phẩm chất bạn tự hào nhất',
          description: 'Không liên quan đến ngoại hình (Ví dụ: Trung thành với bạn bè, kiên nhẫn khi hướng dẫn bài, nấu ăn ngon).',
        },
        {
          number: '02',
          stepName: 'Ghi nhận chiến thắng vi mô (Micro-wins)',
          description: 'Mỗi tối trước khi đi ngủ, viết ra 1 việc bạn đã nỗ lực làm tốt trong ngày.',
          example: '"Hôm nay mình đã tập trung nghe trọn vẹn tiết Sử và giơ tay phát biểu 1 lần."',
        },
        {
          number: '03',
          stepName: 'Tuyên ngôn tôn trọng bản thân',
          description: 'Thực hành câu khẳng định nội tâm dựa trên mục LTT5 của nghiên cứu: "Tôi luôn học cách tôn trọng bản thân nhiều hơn mỗi ngày."',
        },
      ],
    },
  },
  {
    id: 'chapter-4',
    chapterNumber: 4,
    title: 'Cẩm Nang Sử Dụng Mạng Xã Hội Lành Mạnh (Digital Hygiene)',
    subtitle: 'Giải phóng tâm trí khỏi bẫy filter, thuật toán so sánh và văn hóa phán xét',
    readTime: '5 phút đọc',
    iconName: 'Smartphone',
    keyTakeaway:
      'Đừng so sánh hậu trường đời thực của bạn với cuốn phim đã qua chỉnh sửa tỉ mỉ của người khác trên mạng xã hội.',
    researchBadge: 'Kỹ năng số: Thanh lọc nguồn tin và ngắt kết nối với so sánh ảo',
    content: [
      {
        heading: '1. Bẫy Tâm Lý Trên Mạng Xã Hội Đối Với Học Sinh',
        text: 'Nghiên cứu chỉ ra 53,1% học sinh tiếp cận thông tin qua MXH và 30% tìm kiếm thông tin làm đẹp trên mạng khi tự ti. Tuy nhiên, MXH chứa đựng những cạm bẫy tâm lý nghiêm trọng:',
        bulletPoints: [
          'Ảo ảnh hoàn hảo (The Highlight Reel): Mọi người chỉ đăng những góc chụp đẹp nhất, đã qua căn chỉnh ánh sáng, góc máy và hàng loạt filter chỉnh mặt bóp eo.',
          'Thuật toán gây nghiện so sánh: Các nền tảng liên tục gợi ý những video "biến hình", thử thách vòng eo A4, cơ bụng số 11 khiến người xem vô thức cảm thấy mình khiếm khuyết.',
          'Hội chứng sợ bỏ lỡ & sợ bị đánh giá: Đăng ảnh xong liên tục mở điện thoại đếm like, đọc bình luận, nếu ít tương tác thì cảm thấy giá trị bản thân bị sụt giảm.',
        ],
      },
      {
        heading: '2. Chiến Lược "Thanh Lọc Nguồn Cấp Tin" (Digital Detox)',
        text: 'Bạn hoàn toàn có quyền kiểm soát những gì xuất hiện trước mắt mình mỗi ngày:',
        bulletPoints: [
          'Dũng cảm Hủy theo dõi (Unfollow) hoặc Ẩn (Mute): Bất kỳ tài khoản người nổi tiếng, bạn bè nào khiến bạn cảm thấy tự ti, ghen tị hoặc kiệt sức sau khi lướt xem.',
          'Theo dõi các nhà sáng tạo nội dung truyền cảm hứng đa dạng hình thể, lối sống lành mạnh và khoa học tâm lý học đường.',
          'Đặt giới hạn thời gian lướt mạng: Tắt thông báo MXH ít nhất 1 giờ trước khi đi ngủ.',
        ],
      },
    ],
    actionToolkit: {
      title: 'Hộp Công Cụ: Thử Thách 7 Ngày "Lướt Mạng Có Chánh Niệm"',
      steps: [
        {
          number: '01',
          stepName: 'Ngày 1-2: Dọn dẹp danh sách theo dõi',
          description: 'Hủy follow ít nhất 5 tài khoản quảng cáo làm đẹp cấp tốc hoặc khiến bạn nảy sinh suy nghĩ so sánh ngoại hình.',
        },
        {
          number: '02',
          stepName: 'Ngày 3-4: Đăng ảnh mộc / Không chỉnh sửa bóp méo',
          description: 'Nếu muốn đăng ảnh, hãy đăng khoảnh khắc tự nhiên cùng bạn bè mà không dùng phần mềm bóp dáng kéo chân.',
        },
        {
          number: '03',
          stepName: 'Ngày 5-7: 60 phút không màn hình trước khi ngủ',
          description: 'Thay thời gian lướt TikTok ban đêm bằng việc đọc sách, nghe nhạc nhẹ hoặc trò chuyện cùng người thân.',
        },
      ],
    },
  },
  {
    id: 'chapter-5',
    chapterNumber: 5,
    title: 'Văn Hóa Học Đường Tôn Trọng & Xây Dựng Cộng Đồng Tích Cực',
    subtitle: 'Làm gì khi chứng kiến bạn bè bị chê bai? Biến trường học thành không gian an toàn',
    readTime: '4 phút đọc',
    iconName: 'Users',
    keyTakeaway:
      'Im lặng trước lời chê bai người khác là vô tình tiếp tay cho tổn thương. Hãy trở thành người bạn đồng hành thấu cảm và dũng cảm.',
    researchBadge: 'Văn hóa học đường: Xây dựng không gian an toàn và tôn trọng nhau',
    content: [
      {
        heading: '1. Tác Hại Của "Đùa Giỡn Vô Ý"',
        text: 'Nhiều học sinh thường ngụy biện: "Tôi chỉ trêu bạn ấy cho vui chứ có ác ý gì đâu". Nhưng nghiên cứu đã chỉ ra: Dù người nói có ác ý hay không, hệ quả để lại nơi người tiếp nhận vẫn là cảm xúc buồn bã (TB 2.59) và nỗi sợ hãi kéo dài (TB 2.61).',
        bulletPoints: [
          'Nụ cười chỉ thực sự là nụ cười khi tất cả mọi người cùng vui, không phải niềm vui xây trên sự bối rối của người khác.',
          'Đặt biệt danh dựa trên đặc điểm cơ thể (như sún, lùn, mập, lép, đen) là hành vi thiếu tôn trọng ranh giới cá nhân.',
        ],
      },
      {
        heading: '2. Nguyên Tắc "5 Giây Trong Giao Tiếp Ngoại Hình"',
        text: 'Nếu bạn định nhận xét về ngoại hình của ai đó, hãy áp dụng Quy tắc 5 Giây vàng:',
        callout: {
          title: 'Quy Tắc 5 Giây Vàng (5-Second Rule)',
          body: 'Chỉ nhận xét về ngoại hình nếu người đó có thể sửa đổi nó trong vòng 5 giây (Ví dụ: có cọng rau dính ở răng, vạt áo bị kẹt, dây giày bị tuột). Nếu đó là điều họ KHÔNG THỂ thay đổi trong 5 giây (cân nặng, chiều cao, mụn, khuôn mặt, màu da) -> TUYỆT ĐỐI KHÔNG NÓI!',
          type: 'tip',
        },
      },
    ],
    actionToolkit: {
      title: 'Hộp Công Cụ: 3 Bước Trở Thành "Người Bảo Vệ Tích Cực" (Upstander)',
      steps: [
        {
          number: '01',
          stepName: 'Không hùa theo nụ cười chế giễu',
          description: 'Giữ nét mặt nghiêm túc khi có ai đó mang ngoại hình bạn bè ra làm trò đùa.',
        },
        {
          number: '02',
          stepName: 'Chuyển hướng câu chuyện ngay lập tức',
          description: '"Thôi chuyện ngoại hình có gì đâu mà nói, bọn mình đang bàn vụ bài tập nhóm/trận bóng đá mà."',
        },
        {
          number: '03',
          stepName: 'Đến bên cạnh và an ủi bạn',
          description: 'Sau giờ học, hỏi thăm bạn: "Lúc nãy cậu ấy nói vậy mình thấy không đúng chút nào. Cậu đừng bận tâm nhé, bọn mình luôn quý mến cậu."',
        },
      ],
    },
  },
];
