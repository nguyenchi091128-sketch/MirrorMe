import React, { useState } from 'react';
import { SUPPORT_CONTACTS } from '../data/mindsetReframing';
import {
  LifeBuoy,
  Phone,
  Clock,
  MapPin,
  ChevronDown,
  HelpCircle,
  ShieldCheck,
  ExternalLink,
  Printer,
  Sparkles,
} from 'lucide-react';

const FAQS = [
  {
    q: 'Tại sao mình biết bình phẩm ngoại hình là xấu nhưng khi bị trêu chọc mình vẫn không thể ngừng suy nghĩ về nó?',
    a: 'Đây là hiện tượng tâm lý học bình thường có tên là "Hiệu ứng dư âm cảm xúc" (Emotional hangover) và "Nỗi lo sợ bị tiếp tục đánh giá" mà nghiên cứu tại THPT Cụm 1 TP.HCM đã ghi nhận đạt mức điểm cao nhất (2.61/5.00). Lời nói chỉ mất 3 giây để phát ra nhưng não bộ của bạn kích hoạt cơ chế sinh tồn vì sợ bị tách biệt khỏi cộng đồng. Hãy áp dụng bài tập thở 4-7-8 và chia sẻ với người bạn tin cậy để giải tỏa cortisol.',
  },
  {
    q: 'Nếu mình không hài lòng với chiếc mũi hay cân nặng của mình, có phải mình là người yếu đuối và tự ti không?',
    a: 'Tuyệt đối không! Nghiên cứu của nhóm tác giả đã chứng minh mối liên hệ giữa Bất mãn cơ thể và Lòng tự trọng có hệ số r = 0.061 (không có ý nghĩa thống kê). Nghĩa là bạn hoàn toàn bình thường khi có một vài điểm chưa ưng ý trên cơ thể, nhưng điều đó KHÔNG hề làm giảm giá trị con người bạn. Bạn vẫn có thể là một học sinh xuất sắc, một người bạn tốt bụng và một đứa con hiếu thảo!',
  },
  {
    q: 'Bố mẹ hoặc họ hàng thường xuyên chê bai vóc dáng hay da dẻ của mình thì phải làm sao?',
    a: 'Nhiều phụ huynh thuộc thế hệ trước thường nhầm lẫn giữa "nhắc nhở quan tâm" và "chê bai ngoại hình". Bạn hãy chọn một lúc hai mẹ con/bố con đang vui vẻ, tâm sự chân thành: "Mẹ ơi, con đang tuổi dậy thì nên da và cơ thể biến đổi tự nhiên. Mỗi lần nghe mẹ chê con thấy tủi thân và mất tập trung học lắm. Mẹ động viên con thay vì nhắc chuyện đó nhé". Phần lớn cha mẹ khi hiểu được con tổn thương sẽ thay đổi cách nói chuyện.',
  },
  {
    q: 'Khi thấy bạn trong lớp bị một nhóm bạn khác body shaming thì mình nên làm gì?',
    a: 'Đừng im lặng hoặc cười hùa theo vì điều đó vô tình cổ vũ kẻ bắt nạt. Bạn hãy thực hiện 3 bước Upstander: (1) Giữ nét mặt nghiêm túc không hùa; (2) Chuyển chủ đề sang bài tập hoặc trò chơi khác; (3) Sau giờ học, ra ngồi cạnh bạn ấy và hỏi thăm an ủi. Một câu nói tử tế của bạn có thể cứu một tâm hồn khỏi sự cô độc.',
  },
  {
    q: 'Có nên dùng thuốc giảm cân hoặc kem lột trắng da cấp tốc được quảng cáo trên TikTok không?',
    a: 'Tuyệt đối KHÔNG! Nghiên cứu chỉ ra 42,8% học sinh cố thay đổi ngoại hình ngay và 30% tìm thông tin trên mạng. Rất nhiều bạn đã phải nhập viện da liễu hoặc tiêu hóa vì kem trộn chứa corticoid phá hủy da hoặc trà giảm cân gây suy thận, trụy tim mạch. Mọi chế độ dinh dưỡng cần tham khảo bác sĩ hoặc chuyên gia.',
  },
];

export const SupportChannelsView: React.FC = () => {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const toggleFaq = (idx: number) => {
    setOpenFaqIndex(openFaqIndex === idx ? null : idx);
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="space-y-8 pb-12">
      {/* Header Banner */}
      <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-xs">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-100 pb-5">
          <div>
            <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-teal-100 text-teal-800 text-xs font-bold mb-2">
              <LifeBuoy className="w-3.5 h-3.5" /> Kênh Trợ Giúp &amp; Giải Đáp Thắc Mắc
            </div>
            <h1 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
              Kênh Hỗ Trợ Tâm Lý &amp; Hỏi Đáp Cùng Học Sinh THPT
            </h1>
            <p className="text-xs sm:text-sm text-slate-600 mt-1 max-w-3xl">
              Nghiên cứu cho thấy có đến <strong>20,8% học sinh</strong> không biết phải làm gì khi gặp vấn đề ngoại hình. Bạn không hề đơn độc — luôn có những chuyên gia tâm lý và đường dây nóng sẵn sàng đồng hành cùng bạn.
            </p>
          </div>
          <button
            onClick={handlePrint}
            className="flex items-center gap-2 px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold rounded-xl transition-colors self-start md:self-auto border border-slate-200"
          >
            <Printer className="w-4 h-4" /> In cẩm nang tóm tắt
          </button>
        </div>

        {/* Emergency Hotlines Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
          {SUPPORT_CONTACTS.map((item, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl p-5 border border-slate-200 shadow-xs hover:border-teal-300 transition-colors flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[11px] font-bold px-2 py-0.5 rounded bg-teal-50 text-teal-800 border border-teal-200">
                    {item.tag}
                  </span>
                  <span className="text-xs font-bold text-emerald-700">{item.cost}</span>
                </div>
                <h3 className="text-sm font-bold text-slate-900 leading-snug mb-2">
                  {item.name}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed mb-3">
                  {item.description}
                </p>
              </div>

              <div className="pt-3 border-t border-slate-100 space-y-1.5 text-xs text-slate-700">
                <div className="flex items-center gap-2 font-bold text-teal-800">
                  <Phone className="w-3.5 h-3.5 text-teal-600" />
                  <span>Điện thoại: {item.phone}</span>
                </div>
                <div className="flex items-center gap-2 text-slate-500 text-[11px]">
                  <Clock className="w-3.5 h-3.5" />
                  <span>Khung giờ: {item.availability}</span>
                </div>
                {item.address && (
                  <div className="flex items-center gap-2 text-slate-500 text-[11px]">
                    <MapPin className="w-3.5 h-3.5" />
                    <span>Địa bàn: {item.address}</span>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* FAQ Accordion */}
      <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-xs space-y-4">
        <div className="flex items-center gap-2 text-teal-700 text-xs font-bold uppercase tracking-wider">
          <HelpCircle className="w-4 h-4" /> Hỏi Đáp Thường Gặp (FAQ)
        </div>
        <h2 className="text-lg font-black text-slate-900 tracking-tight">
          Giải Đáp Những Nỗi Niềm Khó Nói Của Tuổi Học Trò Về Ngoại Hình
        </h2>

        <div className="space-y-3 pt-2">
          {FAQS.map((faq, idx) => {
            const isOpen = openFaqIndex === idx;
            return (
              <div
                key={idx}
                className="border border-slate-200 rounded-xl overflow-hidden transition-colors"
              >
                <button
                  id={`faq-btn-${idx}`}
                  onClick={() => toggleFaq(idx)}
                  className="w-full text-left p-4 bg-slate-50/70 hover:bg-slate-50 flex items-center justify-between gap-3 text-xs sm:text-sm font-bold text-slate-900 transition-colors"
                >
                  <span className="leading-snug">{faq.q}</span>
                  <ChevronDown
                    className={`w-4 h-4 text-slate-500 transition-transform duration-200 flex-shrink-0 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                {isOpen && (
                  <div className="p-4 bg-white text-xs sm:text-sm text-slate-700 leading-relaxed border-t border-slate-100">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Scientific Research Attribution Footer */}
      <div className="bg-slate-900 text-white rounded-2xl p-6 sm:p-8 text-xs leading-relaxed space-y-3">
        <div className="font-bold text-teal-400 uppercase tracking-wider text-[11px] flex items-center gap-1.5">
          <ShieldCheck className="w-4 h-4" /> Bản Quyền &amp; Căn Cứ Khoa Học Của Ứng Dụng Cẩm Nang
        </div>
        <p className="text-slate-300">
          Ứng dụng cẩm nang điện tử này được xây dựng trên cơ sở dữ liệu thực nghiệm và báo cáo nghiên cứu khoa học đề tài: <em>"Mối liên hệ giữa bất mãn hình ảnh cơ thể, trải nghiệm bị bình phẩm ngoại hình đối với lòng tự trọng của học sinh THPT Cụm 1 TP. Hồ Chí Minh"</em> thuộc lĩnh vực Khoa học Xã hội và Hành vi (Năm học 2025 - 2026).
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-2 border-t border-white/10 text-slate-400 text-[11px]">
          <div>
            <strong>Nhóm học sinh thực hiện:</strong> Nguyễn Ngọc Xuyến Chi, Lê Nguyễn Hồng Trâm
          </div>
          <div>
            <strong>Giáo viên hướng dẫn:</strong> ThS. Nguyễn Thị Tân Lương (Trường THPT Nguyễn Hiền, TP.HCM)
          </div>
        </div>
      </div>
    </div>
  );
};
