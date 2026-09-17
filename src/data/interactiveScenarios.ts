import { Scenario } from '../types';

export const SCENARIOS_DATA: Scenario[] = [
  {
    id: 'sc-1',
    title: 'Giờ Ra Chơi & Biệt Danh Vô Duyên',
    context: 'school',
    situation:
      'Trong giờ giải lao ở hành lang lớp học, một nhóm bạn nam trong lớp nhìn sang bạn rồi cười cợt, một bạn gọi to: "Ê, dạo này ăn uống dữ quá nhìn người như que tăm / cái lu vậy mày!". Cả nhóm cười ồ lên.',
    quote: '"Ê dạo này ăn uống kiểu gì mà người như cái lu vậy, sắp lăn được rồi đấy!"',
    options: [
      {
        id: 'opt-1-1',
        text: 'Cười trừ gượng gạo, giả vờ như không quan tâm rồi lẳng lặng quay mặt đi, trong lòng cảm thấy uất ức và xấu hổ cả ngày.',
        type: 'passive',
        badgeLabel: 'Phản ứng nén nhịn (Bị động)',
        feedback:
          'Phản ứng này rất phổ biến ở học sinh (28,5% chọn né tránh). Tuy nhiên, nén nhịn sẽ khiến bạn tiếp tục tích tụ sự tổn thương và lo âu (TB = 2.61 trong khảo sát), đồng thời kẻ trêu chọc có thể nghĩ bạn dễ bắt nạt.',
        psychologicalInsight:
          'Kìm nén cảm xúc không làm cơn giận tan đi mà biến nó thành sự tự dằn vặt bản thân. Bạn xứng đáng được lên tiếng.',
        effectiveness: 'low',
      },
      {
        id: 'opt-1-2',
        text: 'Nổi nóng hét lớn: "Mày nhìn lại bản thân mày xem có ra gì không mà đi chê người khác! Đồ vô học!"',
        type: 'aggressive',
        badgeLabel: 'Phản ứng công kích gay gắt',
        feedback:
          'Phản ứng phản kích giận dữ dễ làm leo thang xung đột thành cãi vã, thậm chí ẩu đả vi phạm kỷ luật học đường. Điều này cũng cho đối phương thấy họ đã chạm đúng vào điểm yếu của bạn.',
        psychologicalInsight:
          'Sự giận dữ bộc phát chứng minh lời nói của họ đã kiểm soát được cảm xúc của bạn. Hãy giữ thế chủ động bình tĩnh.',
        effectiveness: 'medium',
      },
      {
        id: 'opt-1-3',
        text: 'Dừng lại, nhìn thẳng vào mắt bạn đó với vẻ mặt điềm đạm và nói rõ ràng: "Cậu thấy việc đem cơ thể người khác ra làm trò cười là điều hay ho lắm hả? Mình không thích trò đùa này."',
        type: 'assertive',
        badgeLabel: 'Quyết đoán & Đặt ranh giới (Tối ưu)',
        feedback:
          'Tuyệt vời! Đây là phản ứng chuẩn mực của kỹ năng quyết đoán (Assertiveness). Bạn không xúc phạm đối phương, nhưng đã vạch rõ ranh giới và đặt câu hỏi buộc đối phương phải tự thấy sự kệch cỡm của hành vi đó.',
        psychologicalInsight:
          'Kỹ thuật "Đặt câu hỏi ngược" làm tắt ngay nụ cười của đám đông vì nó biến trò đùa vô duyên thành một vấn đề đạo đức nghiêm túc.',
        effectiveness: 'high',
      },
      {
        id: 'opt-1-4',
        text: 'Nói bình thản: "Cơ thể mình khỏe mạnh và học tập tốt là được. Bọn mình đang chuẩn bị bài kiểm tra tiết sau, đừng đùa nhảm nữa."',
        type: 'deflective',
        badgeLabel: 'Chuyển hướng trung dung (Body Neutrality)',
        feedback:
          'Rất tốt! Bạn áp dụng xuất sắc nguyên lý Body Neutrality: Khẳng định sức khỏe và chức năng cơ thể thay vì sa đà vào tranh cãi thẩm mỹ.',
        psychologicalInsight:
          'Hạ thấp tầm quan trọng của lời chê bằng sự tự tin vào giá trị học tập và sức khỏe nội tại.',
        effectiveness: 'high',
      },
    ],
    expertAdvice:
      'Lời khuyên từ nghiên cứu: Đừng để lời bình phẩm biến thành nỗi ám ảnh kéo dài. Đặt ranh giới ngay từ lần đầu sẽ ngăn chặn 80% nguy cơ tiếp diễn.',
  },
  {
    id: 'sc-2',
    title: 'Bình Luận Độc Hại Dưới Bức Ảnh Facebook / Instagram',
    context: 'social_media',
    situation:
      'Bạn vừa đăng bức ảnh kỷ niệm chuyến đi chơi với câu lạc bộ trường. Dưới phần bình luận, một tài khoản cùng trường để lại bình luận: "Ủa app nào kéo chân ghê vậy bạn? Ngoài đời thấy chân ngắn một mẩu mà."',
    quote: '"Ủa dùng app gì kéo chân lộ thế? Ngoài đời chân ngắn cũn mà trên ảnh ảo lòi."',
    options: [
      {
        id: 'opt-2-1',
        text: 'Xóa ngay bức ảnh trong hoảng loạn, khóa trang cá nhân và tự thề từ nay không bao giờ dám đăng ảnh chụp toàn thân nữa.',
        type: 'passive',
        badgeLabel: 'Rút lui & Tự trừng phạt',
        feedback:
          'Đây là biểu hiện của 28,5% học sinh trong khảo sát (Tránh đăng ảnh/giao tiếp). Việc xóa ảnh trao quyền kiểm soát cuộc sống số của bạn cho một kẻ bình luận vô duyên.',
        psychologicalInsight:
          'Tránh né chỉ củng cố niềm tin sai lầm rằng bạn phải xấu hổ về cơ thể mình. Trang cá nhân là của bạn, bạn có quyền lưu giữ kỷ niệm.',
        effectiveness: 'low',
      },
      {
        id: 'opt-2-2',
        text: 'Chụp màn hình đăng story bóc phốt, rủ bạn bè vào trang cá nhân của bạn kia chửi bới trả đũa.',
        type: 'aggressive',
        badgeLabel: 'Bạo lực mạng trả đũa (Cyberbullying)',
        feedback:
          'Cách này dễ khiến bạn bị cuốn vào vòng xoáy bắt nạt mạng hai chiều (cyberbullying), vi phạm quy tắc an toàn mạng và có thể bị nhà trường xử lý kỷ luật.',
        psychologicalInsight:
          'Lấy độc trị độc trên mạng xã hội hiếm khi mang lại cảm giác bình yên; nó chỉ làm tăng mức độ căng thẳng thần kinh.',
        effectiveness: 'low',
      },
      {
        id: 'opt-2-3',
        text: 'Ẩn hoặc xóa bình luận đó, nhấn chặn (Block) hoặc hạn chế tương tác từ tài khoản kia mà không cần đôi co.',
        type: 'assertive',
        badgeLabel: 'Lập tường lửa số (Digital Firewall - Tối ưu)',
        feedback:
          'Cực kỳ chuẩn xác! Không gian mạng của bạn giống như phòng khách nhà bạn. Bạn hoàn toàn có quyền mời những vị khách khiếm nhã ra khỏi cửa mà không cần giải thích hay xin phép.',
        psychologicalInsight:
          'Ngắt nguồn năng lượng của troll trên mạng bằng nút Block là hành động tự bảo vệ lòng tự trọng thông minh nhất.',
        effectiveness: 'high',
      },
      {
        id: 'opt-2-4',
        text: 'Bình luận trả lời hài hước, tự tin: "Góc chụp đẹp đó bạn, quan trọng là hôm đó đi chơi siêu vui!" rồi thả tim.',
        type: 'deflective',
        badgeLabel: 'Đáp lại bằng sự tự tin & lạc quan',
        feedback:
          'Rất phong thái! Câu trả lời cho thấy bạn tập trung vào niềm vui trải nghiệm thực tế hơn là để tâm đến sự soi mói góc máy.',
        psychologicalInsight:
          'Thể hiện sự miễn nhiễm với lời công kích, khiến đối phương không đạt được mục đích làm bạn bẽ mặt.',
        effectiveness: 'high',
      },
    ],
    expertAdvice:
      'Nghiên cứu cho thấy 37% học sinh mong muốn được học cách dùng MXH lành mạnh. Hãy làm chủ công cụ số, đừng để mạng xã hội định đoạt lòng tự tôn của bạn.',
  },
  {
    id: 'sc-3',
    title: 'Bình Phẩm Ngoại Hình Trong Bữa Tiệc Gia Đình',
    context: 'family',
    situation:
      'Trong bữa cơm giỗ họ hàng đông đủ, một người cô họ nhìn bạn từ đầu đến chân rồi nói to trước mặt mọi người: "Trời ơi sao đợt này đen đúa với mặt nhiều mụn thế con? Con gái con lứa không biết chăm chút sau này ai thèm ngó!"',
    quote: '"Trời ơi dạo này đen đúa với mặt nhiều mụn thế cháu? Không lo chăm chút thì ế đấy nhé!"',
    options: [
      {
        id: 'opt-3-1',
        text: 'Bỏ đũa chạy vào phòng khóc một mình, cảm thấy xấu hổ với cả dòng họ và giận lây sang bố mẹ.',
        type: 'passive',
        badgeLabel: 'Tổn thương & Tự cô lập',
        feedback:
          'Người lớn trong gia đình thường bình phẩm với suy nghĩ đó là sự quan tâm, nhưng lại gây tổn thương sâu sắc. Bỏ chạy vào phòng làm bữa ăn mất vui nhưng không giải quyết được gốc rễ hiểu lầm.',
        psychologicalInsight:
          'Cảm xúc tổn thương từ người thân thường nặng nề hơn người lạ, nhưng rút lui khiến bạn cảm thấy bất lực.',
        effectiveness: 'low',
      },
      {
        id: 'opt-3-2',
        text: 'Cãi lại gay gắt: "Cô vô duyên vừa thôi, cô lo cho con cô đi đã rồi hẵng nói cháu!" làm không khí cả họ căng thẳng.',
        type: 'aggressive',
        badgeLabel: 'Phản ứng gay gắt với người lớn',
        feedback:
          'Dù câu nói của người cô là sai, nhưng cách đáp trả này dễ bị gắn mác "hỗn láo", làm người thân phật ý và bố mẹ bạn khó xử.',
        psychologicalInsight:
          'Trong bối cảnh văn hóa gia đình Việt Nam, sự đối đầu trực diện gay gắt thường phản tác dụng và che mờ lý lẽ chính đáng của bạn.',
        effectiveness: 'low',
      },
      {
        id: 'opt-3-3',
        text: 'Mỉm cười lịch sự, trả lời điềm đạm: "Dạ đợt này cháu đang tập trung ôn thi học kỳ nên thức khuya một chút ạ. Sau đợt thi cháu sẽ ngủ bù và da sẽ khỏe lại. Cháu mời cô dùng món này ngon lắm ạ."',
        type: 'deflective',
        badgeLabel: 'Ứng xử thông minh & Đổi chủ đề (Tối ưu)',
        feedback:
          'Xuất sắc! Bạn vừa giữ trọn phép lịch sự với người lớn, vừa nêu rõ lý do chính đáng (học tập nỗ lực), vừa khéo léo bẻ lái câu chuyện sang việc ăn uống mà không để lời chê kéo dài.',
        psychologicalInsight:
          'Kỹ thuật "Thừa nhận nhẹ nhàng + Khẳng định nỗ lực + Chuyển hướng" giúp bạn giữ được phẩm giá và sự điềm tĩnh tối đa.',
        effectiveness: 'high',
      },
      {
        id: 'opt-3-4',
        text: 'Sau bữa ăn, trò chuyện riêng với bố/mẹ: "Mẹ ơi, lúc nãy cô nhận xét con như vậy con thấy rất buồn và tự ti. Lần sau nếu cô có nói vậy, mẹ đỡ lời giúp con với nhé."',
        type: 'assertive',
        badgeLabel: 'Tìm kiếm đồng minh gia đình',
        feedback:
          'Rất chín chắn! Nghiên cứu chỉ ra 28,8% học sinh chọn chia sẻ với người tin cậy. Biến bố mẹ thành "lá chắn đồng minh" là cách ứng phó cực kỳ bền vững.',
        psychologicalInsight:
          'Giúp bố mẹ hiểu được cảm xúc của con cái để cùng nhau thiết lập không gian gia đình an toàn tâm lý.',
        effectiveness: 'high',
      },
    ],
    expertAdvice:
      'Sự khác biệt thế hệ trong quan niệm về ngoại hình ở Việt Nam rất phổ biến. Đừng để tiêu chuẩn của thế hệ trước phủ nhận những giá trị hiện đại của bạn.',
  },
];
