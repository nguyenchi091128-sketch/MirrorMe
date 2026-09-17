import React, { useState } from 'react';
import {
  ASSESSMENT_QUESTIONS,
  LIKERT_LEVELS,
} from '../data/researchData';
import {
  ClipboardCheck,
  CheckCircle2,
  RotateCcw,
  Sparkles,
  ArrowRight,
  Shield,
  HelpCircle,
  Award,
  AlertCircle,
  Share2,
} from 'lucide-react';
import confetti from 'canvas-confetti';

export const SelfAssessmentView: React.FC = () => {
  const [answers, setAnswers] = useState<Record<string, number>>({});
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);
  const [isCompleted, setIsCompleted] = useState<boolean>(false);

  const totalQuestions = ASSESSMENT_QUESTIONS.length;
  const currentQ = ASSESSMENT_QUESTIONS[currentQuestionIndex];
  const progressPercent = Math.round((Object.keys(answers).length / totalQuestions) * 100);

  const handleSelectOption = (value: number) => {
    const updated = { ...answers, [currentQ.id]: value };
    setAnswers(updated);

    if (currentQuestionIndex < totalQuestions - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      setIsCompleted(true);
      try {
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.6 },
        });
      } catch (e) {
        // Safe fallback
      }
    }
  };

  const handlePrevious = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };

  const handleReset = () => {
    setAnswers({});
    setCurrentQuestionIndex(0);
    setIsCompleted(false);
  };

  // Calculate scores
  const pustinQuestions = ASSESSMENT_QUESTIONS.filter((q) => q.scaleType === 'pustin');
  const cnvctQuestions = ASSESSMENT_QUESTIONS.filter((q) => q.scaleType === 'cnvct');
  const lttQuestions = ASSESSMENT_QUESTIONS.filter((q) => q.scaleType === 'ltt');

  const pustinSum = pustinQuestions.reduce((acc, q) => acc + (answers[q.id] || 0), 0);
  const cnvctSum = cnvctQuestions.reduce((acc, q) => acc + (answers[q.id] || 0), 0);
  const lttSum = lttQuestions.reduce((acc, q) => acc + (answers[q.id] || 0), 0);

  const pustinAvg = pustinQuestions.length ? pustinSum / pustinQuestions.length : 0;
  const cnvctAvg = cnvctQuestions.length ? cnvctSum / cnvctQuestions.length : 0;
  const lttAvg = lttQuestions.length ? lttSum / lttQuestions.length : 0;

  const getLevel = (score: number) => {
    if (score <= 1.79) return { level: 1, label: 'Mức 1 (Rất thấp / Không bao giờ)', color: 'text-emerald-700 bg-emerald-50 border-emerald-200' };
    if (score <= 2.59) return { level: 2, label: 'Mức 2 (Thấp / Hiếm khi)', color: 'text-teal-700 bg-teal-50 border-teal-200' };
    if (score <= 3.39) return { level: 3, label: 'Mức 3 (Trung bình / Thỉnh thoảng)', color: 'text-amber-700 bg-amber-50 border-amber-200' };
    if (score <= 4.19) return { level: 4, label: 'Mức 4 (Cao / Thường xuyên)', color: 'text-orange-700 bg-orange-50 border-orange-200' };
    return { level: 5, label: 'Mức 5 (Rất cao / Rất thường xuyên)', color: 'text-rose-700 bg-rose-50 border-rose-200' };
  };

  const pustinLevel = getLevel(pustinAvg);
  const cnvctLevel = getLevel(cnvctAvg);
  const lttLevel = getLevel(lttAvg);

  return (
    <div className="max-w-4xl mx-auto space-y-6 pb-12">
      {/* Header Info */}
      <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-xs">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-100 pb-5 mb-5">
          <div>
            <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-teal-100 text-teal-800 text-xs font-bold mb-2">
              <ClipboardCheck className="w-3.5 h-3.5" /> Trắc Nghiệm Tâm Lý Chuẩn Khoa Học
            </div>
            <h1 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
              Tự Đánh Giá 3 Trụ Cột: Bình Phẩm, Bất Mãn Cơ Thể &amp; Lòng Tự Trọng
            </h1>
            <p className="text-xs sm:text-sm text-slate-600 mt-1">
              Bộ trắc nghiệm 15 câu hỏi tâm lý giúp bạn tự nhận diện mức độ ảnh hưởng của lời bình phẩm, cảm xúc đối với cơ thể và đánh giá độ vững vàng của lòng tự trọng bản thân.
            </p>
          </div>
          <div className="text-xs text-slate-500 bg-slate-50 p-3 rounded-xl border border-slate-200/80 space-y-1">
            <div><strong>Thời gian làm:</strong> ~3 phút</div>
            <div><strong>Thang đo:</strong> Likert 5 mức (Jamieson, 2004)</div>
            <div><strong>Bảo mật:</strong> 100% ẩn danh trên thiết bị của bạn</div>
          </div>
        </div>

        {/* Progress Bar */}
        {!isCompleted && (
          <div>
            <div className="flex justify-between items-center text-xs font-semibold text-slate-600 mb-2">
              <span>
                Câu {currentQuestionIndex + 1} / {totalQuestions} ({currentQ.scaleName})
              </span>
              <span>Đã trả lời {progressPercent}%</span>
            </div>
            <div className="w-full bg-slate-100 rounded-full h-2.5 overflow-hidden">
              <div
                className="bg-teal-600 h-2.5 rounded-full transition-all duration-300"
                style={{ width: `${progressPercent}%` }}
              ></div>
            </div>
          </div>
        )}
      </div>

      {/* Active Questionnaire Mode */}
      {!isCompleted ? (
        <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-xs space-y-6">
          <div className="space-y-2">
            <span className="text-[11px] font-bold text-teal-700 uppercase tracking-wider">
              {currentQ.description}
            </span>
            <h2 className="text-base sm:text-lg font-bold text-slate-900 leading-snug">
              {currentQ.text}
            </h2>
          </div>

          <div className="space-y-2.5 pt-2">
            {LIKERT_LEVELS.map((opt) => {
              const isSelected = answers[currentQ.id] === opt.value;
              return (
                <button
                  key={opt.value}
                  id={`option-${currentQ.id}-${opt.value}`}
                  onClick={() => handleSelectOption(opt.value)}
                  className={`w-full text-left p-3.5 rounded-xl border text-xs sm:text-sm font-medium transition-all flex items-center justify-between ${
                    isSelected
                      ? 'bg-teal-50 border-teal-500 text-teal-950 font-bold ring-2 ring-teal-500/20 shadow-xs'
                      : 'bg-white hover:bg-slate-50 border-slate-200 text-slate-700'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span
                      className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold border ${
                        isSelected
                          ? 'bg-teal-700 text-white border-teal-700'
                          : 'bg-slate-100 text-slate-600 border-slate-300'
                      }`}
                    >
                      {opt.value}
                    </span>
                    <span>{opt.label}</span>
                  </div>
                  <span className="text-xs text-slate-400 font-mono hidden sm:inline">
                    {opt.shortLabel}
                  </span>
                </button>
              );
            })}
          </div>

          <div className="flex items-center justify-between pt-4 border-t border-slate-100">
            <button
              onClick={handlePrevious}
              disabled={currentQuestionIndex === 0}
              className="px-4 py-2 text-xs font-semibold text-slate-600 hover:text-slate-900 disabled:opacity-30 transition-colors"
            >
              ← Câu trước
            </button>
            <div className="text-xs text-slate-400">
              Chọn mức độ phù hợp nhất với cảm xúc của bạn
            </div>
          </div>
        </div>
      ) : (
        /* Results View */
        <div className="space-y-6">
          <div className="bg-gradient-to-br from-teal-900 via-slate-900 to-emerald-950 text-white rounded-2xl p-6 sm:p-8 shadow-md">
            <div className="flex items-center gap-2 text-teal-300 text-xs font-bold mb-2">
              <Award className="w-5 h-5 text-amber-400" /> Báo Cáo Phân Tích Cá Nhân Hóa
            </div>
            <h2 className="text-xl sm:text-2xl font-black tracking-tight">
              Hồ Sơ Tâm Lý Về Hình Ảnh Cơ Thể &amp; Lòng Tự Trọng Của Bạn
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 mt-2">
              Kết quả được đối chiếu trực tiếp với thang đo trung bình của 624 học sinh THPT Cụm 1 TP. Hồ Chí Minh.
            </p>

            {/* 3 Metric Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
              <div className="bg-white/10 backdrop-blur rounded-xl p-4 border border-white/10">
                <div className="text-xs text-teal-300 font-semibold">1. Trải nghiệm bị bình phẩm (PUSTIN)</div>
                <div className="text-2xl font-black text-white mt-1">{pustinAvg.toFixed(2)} / 5,0</div>
                <div className="text-xs text-slate-200 mt-1">{pustinLevel.label}</div>
                <div className="text-[11px] text-teal-200 mt-2 border-t border-white/10 pt-2">
                  Tham chiếu lứa tuổi: Thường ở Mức 2 (Thấp - Hiếm khi)
                </div>
              </div>

              <div className="bg-white/10 backdrop-blur rounded-xl p-4 border border-white/10">
                <div className="text-xs text-amber-300 font-semibold">2. Bất mãn hình ảnh cơ thể (CNVCT)</div>
                <div className="text-2xl font-black text-white mt-1">{cnvctAvg.toFixed(2)} / 5,0</div>
                <div className="text-xs text-slate-200 mt-1">{cnvctLevel.label}</div>
                <div className="text-[11px] text-amber-200 mt-2 border-t border-white/10 pt-2">
                  Tham chiếu lứa tuổi: Thường ở Mức 3 (Trung bình)
                </div>
              </div>

              <div className="bg-white/10 backdrop-blur rounded-xl p-4 border border-white/10">
                <div className="text-xs text-emerald-300 font-semibold">3. Lòng tự trọng bản thân (LTT)</div>
                <div className="text-2xl font-black text-white mt-1">{lttAvg.toFixed(2)} / 5,0</div>
                <div className="text-xs text-slate-200 mt-1">{lttLevel.label}</div>
                <div className="text-[11px] text-emerald-200 mt-2 border-t border-white/10 pt-2">
                  Tham chiếu lứa tuổi: Thường ở Mức 4 (Tích cực - Vững vàng)
                </div>
              </div>
            </div>
          </div>

          {/* Deep Interpretation Based on Research Findings */}
          <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-xs space-y-6">
            <h3 className="text-base font-bold text-slate-900 flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-teal-600" /> Nhận Định Tâm Lý &amp; Hướng Ứng Phó
            </h3>

            {/* Case analyses */}
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs sm:text-sm text-slate-800 space-y-3">
              <div>
                <strong>Về trải nghiệm bình phẩm ngoại hình:</strong>{' '}
                {pustinAvg > 3.0 ? (
                  <span>
                    Bạn đang chịu tần suất bình phẩm hoặc lo âu về sự đánh giá ở mức cao hơn mức trung bình của học sinh THPT. Cần đặc biệt lưu ý không để sự soi xét của người khác điều khiển hành vi và giấc ngủ của bạn. Hãy thực hành kỹ thuật "Tấm khiên tâm lý" và thiết lập ranh giới trong Chương 2.
                  </span>
                ) : (
                  <span>
                    Mức độ bị bình phẩm của bạn ở ngưỡng thấp đến trung bình, tương đồng với phần lớn học sinh THPT. Tuy nhiên, nếu thỉnh thoảng có những lời nhận xét khiến bạn bận tâm, hãy nhớ nguyên tắc "Tấm gương &amp; Tấm kính" để không ôm muộn phiền.
                  </span>
                )}
              </div>

              <div>
                <strong>Về lòng tự trọng &amp; bất mãn cơ thể:</strong>{' '}
                {cnvctAvg >= 3.0 && lttAvg >= 3.0 ? (
                  <span className="text-emerald-900 font-medium">
                    Bạn là một minh chứng sống động cho phát hiện cốt lõi của nghiên cứu: Bạn có thể mong muốn một số đặc điểm cơ thể đẹp hơn (CNVCT = {cnvctAvg.toFixed(2)}), nhưng bạn vẫn sở hữu lòng tự trọng rất vững vàng (LTT = {lttAvg.toFixed(2)})! Điều này khẳng định bạn biết tự hào về trí tuệ, năng lực học tập và các phẩm chất quý giá của mình.
                  </span>
                ) : lttAvg < 3.0 ? (
                  <span className="text-amber-900">
                    Lòng tự trọng của bạn hiện đang ở mức cần được nuôi dưỡng và chăm sóc thêm ({lttAvg.toFixed(2)}). Đừng để những tiêu chuẩn cơ thể hão huyền trên mạng xã hội làm lu mờ những điểm mạnh vô giá bạn đang có. Hãy thực hành "Bản đồ giá trị bản thân" trong Chương 3.
                  </span>
                ) : (
                  <span>
                    Bạn có thái độ tích cực đối với cơ thể và nhận thức rõ về giá trị bản thân. Hãy lan tỏa năng lượng lành mạnh này đến bạn bè xung quanh!
                  </span>
                )}
              </div>
            </div>

            {/* Action Recommendations */}
            <div>
              <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-3">
                3 Khuyến Nghị Hành Động Khoa Học Dành Cho Bạn:
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs">
                <div className="p-3 rounded-lg bg-teal-50 border border-teal-200 text-teal-950">
                  <div className="font-bold mb-1">1. Đặt ranh giới giao tiếp</div>
                  Khi ai đó nhận xét về cơ thể bạn, dùng kỹ thuật "Chiếc máy ghi âm lạnh lùng": <em>"Cậu có ý gì khi nói câu đó vậy?"</em>
                </div>
                <div className="p-3 rounded-lg bg-emerald-50 border border-emerald-200 text-emerald-950">
                  <div className="font-bold mb-1">2. Áp dụng Body Neutrality</div>
                  Mỗi sáng cảm ơn 1 chức năng sống của cơ thể (đôi chân đi lại, đôi mắt đọc sách) thay vì soi xét mụn hay cân nặng.
                </div>
                <div className="p-3 rounded-lg bg-blue-50 border border-blue-200 text-blue-950">
                  <div className="font-bold mb-1">3. Thanh lọc mạng xã hội</div>
                  Hủy theo dõi ngay các trang quảng cáo giảm cân cấp tốc hoặc các kênh tạo cảm giác tự ti so sánh ngoại hình.
                </div>
              </div>
            </div>

            <div className="flex flex-wrap items-center justify-between gap-3 pt-4 border-t border-slate-100">
              <button
                onClick={handleReset}
                className="px-4 py-2 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold transition-colors flex items-center gap-1.5"
              >
                <RotateCcw className="w-3.5 h-3.5" /> Làm lại bài trắc nghiệm
              </button>
              <div className="text-xs text-slate-500">
                Hãy chia sẻ bài trắc nghiệm khoa học này cùng bạn bè trong lớp để cùng thấu hiểu và bảo vệ nhau!
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
