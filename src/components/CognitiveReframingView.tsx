import React, { useState, useEffect } from 'react';
import { REFRAMING_CARDS, MYTHS_AND_FACTS } from '../data/mindsetReframing';
import {
  Sparkles,
  Wind,
  CheckCircle2,
  AlertCircle,
  Play,
  Pause,
  RotateCcw,
  Lightbulb,
  Heart,
  MessageSquare,
  Flame,
} from 'lucide-react';

export const CognitiveReframingView: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'reframing' | 'breathing' | 'myths'>('reframing');

  // Custom Thought Reframer State
  const [userThought, setUserThought] = useState<string>('');
  const [customReframed, setCustomReframed] = useState<{
    original: string;
    trap: string;
    truth: string;
    step: string;
  } | null>(null);

  // 4-7-8 Breathing Timer State
  const [isBreathingActive, setIsBreathingActive] = useState<boolean>(false);
  const [breathPhase, setBreathPhase] = useState<'inhale' | 'hold' | 'exhale'>('inhale');
  const [countdown, setCountdown] = useState<number>(4);
  const [cycleCount, setCycleCount] = useState<number>(0);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (isBreathingActive) {
      timer = setInterval(() => {
        setCountdown((prev) => {
          if (prev <= 1) {
            if (breathPhase === 'inhale') {
              setBreathPhase('hold');
              return 7;
            } else if (breathPhase === 'hold') {
              setBreathPhase('exhale');
              return 8;
            } else {
              setBreathPhase('inhale');
              setCycleCount((c) => c + 1);
              return 4;
            }
          }
          return prev - 1;
        });
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [isBreathingActive, breathPhase]);

  const toggleBreathing = () => {
    if (!isBreathingActive) {
      setBreathPhase('inhale');
      setCountdown(4);
    }
    setIsBreathingActive(!isBreathingActive);
  };

  const resetBreathing = () => {
    setIsBreathingActive(false);
    setBreathPhase('inhale');
    setCountdown(4);
    setCycleCount(0);
  };

  const handleQuickReframing = (e: React.FormEvent) => {
    e.preventDefault();
    if (!userThought.trim()) return;

    setCustomReframed({
      original: userThought,
      trap: 'Bẫy suy nghĩ tự phán xét & Phóng đại khuyết điểm (Spotlight Effect)',
      truth: `Ngoại hình chỉ là một phần rất nhỏ trong con người bạn. Những người yêu quý bạn nhìn vào nụ cười, tấm lòng tốt bụng và tài năng của bạn chứ không soi xét từng số đo. Suy nghĩ "${userThought}" chỉ là một luồng cảm xúc thoáng qua, không phải là sự thật về giá trị bản thân bạn.`,
      step: 'Hãy hít một hơi thật sâu, uống một ngụm nước và nhắc nhở bản thân: "Tôi xứng đáng được đối xử tôn trọng bởi chính mình."',
    });
  };

  return (
    <div className="space-y-8 pb-12">
      {/* Header Banner */}
      <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-xs">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-100 pb-5">
          <div>
            <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-teal-100 text-teal-800 text-xs font-bold mb-2">
              <Sparkles className="w-3.5 h-3.5" /> Tâm Lý Học Nhận Thức &amp; Điều Hòa Cảm Xúc
            </div>
            <h1 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
              Tái Định Hình Nhận Thức &amp; Xoa Dịu Nỗi Lo Sau Bình Phẩm
            </h1>
            <p className="text-xs sm:text-sm text-slate-600 mt-1 max-w-3xl">
              Nghiên cứu chỉ ra: <em>"Lo lắng người khác tiếp tục đánh giá ngoại hình"</em> đạt điểm cao nhất trong thang PUSTIN (TB = 2,61). Hãy học cách cắt đứt vòng lặp lo âu và điều hòa nhịp thở.
            </p>
          </div>
        </div>

        {/* Sub-tab Navigation */}
        <div className="flex items-center gap-2 mt-6 overflow-x-auto no-scrollbar pt-1">
          <button
            onClick={() => setActiveTab('reframing')}
            className={`px-4 py-2 rounded-lg text-xs font-bold transition-all whitespace-nowrap ${
              activeTab === 'reframing'
                ? 'bg-teal-700 text-white shadow-xs'
                : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
            }`}
          >
            Hộp Tái Định Hình Suy Nghĩ (CBT)
          </button>
          <button
            onClick={() => setActiveTab('breathing')}
            className={`px-4 py-2 rounded-lg text-xs font-bold transition-all whitespace-nowrap ${
              activeTab === 'breathing'
                ? 'bg-teal-700 text-white shadow-xs'
                : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
            }`}
          >
            Bài Tập Thở 4-7-8 Xoa Dịu Căng Thẳng
          </button>
          <button
            onClick={() => setActiveTab('myths')}
            className={`px-4 py-2 rounded-lg text-xs font-bold transition-all whitespace-nowrap ${
              activeTab === 'myths'
                ? 'bg-teal-700 text-white shadow-xs'
                : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
            }`}
          >
            Giải Mã Lầm Tưởng Khoa Học (Myths vs Facts)
          </button>
        </div>
      </div>

      {/* Tab 1: Cognitive Reframing */}
      {activeTab === 'reframing' && (
        <div className="space-y-6">
          {/* Interactive Custom Reframer */}
          <div className="bg-gradient-to-br from-teal-900 to-slate-900 text-white rounded-2xl p-6 sm:p-8 shadow-md">
            <h2 className="text-base sm:text-lg font-black tracking-tight mb-2 flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-amber-400" />
              Chiếc Gương Chữa Lành: Nhập Suy Nghĩ Tự Ti Của Bạn
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 mb-4">
              Gần đây bạn có bị ám ảnh bởi câu chê bai hay suy nghĩ tiêu cực nào về ngoại hình không? Nhập vào đây để khoa học tâm lý giúp bạn tái định hình:
            </p>

            <form onSubmit={handleQuickReframing} className="space-y-3">
              <input
                type="text"
                value={userThought}
                onChange={(e) => setUserThought(e.target.value)}
                placeholder="Ví dụ: Dạo này mình béo lên, đi học xấu hổ không dám giơ tay phát biểu..."
                className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder:text-slate-400 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-teal-400"
              />
              <div className="flex justify-end">
                <button
                  type="submit"
                  className="px-5 py-2.5 rounded-xl bg-teal-500 hover:bg-teal-400 text-slate-950 font-bold text-xs transition-colors shadow-xs"
                >
                  Tái định hình ngay
                </button>
              </div>
            </form>

            {customReframed && (
              <div className="mt-6 p-5 rounded-xl bg-white/10 backdrop-blur border border-teal-400/30 text-xs space-y-3 animate-in fade-in duration-300">
                <div className="flex items-center gap-2 text-teal-300 font-bold">
                  <CheckCircle2 className="w-4 h-4 text-teal-300" /> Kết quả phân tích nhận thức:
                </div>
                <div className="text-slate-200">
                  <strong>Bẫy nhận thức:</strong> {customReframed.trap}
                </div>
                <div className="text-amber-200 bg-amber-950/40 p-3 rounded-lg border border-amber-500/20 leading-relaxed">
                  <strong>Sự thật khách quan:</strong> {customReframed.truth}
                </div>
                <div className="text-slate-200">
                  <strong>Hành động giải phóng:</strong> {customReframed.step}
                </div>
              </div>
            )}
          </div>

          {/* 5 Classic Pre-made Reframing Cards */}
          <div className="space-y-4">
            <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
              <Lightbulb className="w-4 h-4 text-teal-600" /> 5 Bẫy Nhận Thức Học Sinh Thường Mắc Phải &amp; Cách Chuyển Hóa
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {REFRAMING_CARDS.map((card) => (
                <div
                  key={card.id}
                  className="bg-white rounded-2xl p-5 border border-slate-200 shadow-xs space-y-3 flex flex-col justify-between"
                >
                  <div>
                    <div className="p-3 rounded-xl bg-rose-50 border border-rose-200 text-rose-950 text-xs font-semibold italic mb-2">
                      {card.negativeThought}
                    </div>
                    <div className="text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-1">
                      Bẫy tâm lý: {card.cognitiveTrap}
                    </div>
                    <p className="text-xs sm:text-sm text-slate-800 leading-relaxed font-medium">
                      {card.reframedTruth}
                    </p>
                  </div>
                  <div className="p-2.5 rounded-lg bg-teal-50 border border-teal-200 text-[11px] text-teal-950">
                    <strong>Gợi ý hành động:</strong> {card.actionStep}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Tab 2: 4-7-8 Breathing Guide */}
      {activeTab === 'breathing' && (
        <div className="max-w-2xl mx-auto space-y-6">
          <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-xs text-center space-y-6">
            <div>
              <span className="text-xs font-bold text-teal-700 uppercase tracking-wider">
                Kỹ Thuật Khoa Học Thần Kinh
              </span>
              <h2 className="text-xl font-extrabold text-slate-900 mt-1">
                Bài Tập Thở 4-7-8: Xoa Dịu Hệ Thần Kinh Khi Căng Thẳng
              </h2>
              <p className="text-xs text-slate-600 mt-1 max-w-md mx-auto">
                Khi bị chê bai hay lo sợ bị đánh giá ngoại hình, nhịp tim và cortisol sẽ tăng vọt. Kỹ thuật thở 4-7-8 giúp kích hoạt hệ thần kinh phó giao cảm (Parasympathetic), lập tức xua tan cơn hoảng loạn.
              </p>
            </div>

            {/* Visual Breathing Circle */}
            <div className="relative w-64 h-64 mx-auto flex items-center justify-center">
              <div
                className={`absolute inset-0 rounded-full transition-all duration-1000 ${
                  breathPhase === 'inhale'
                    ? 'bg-teal-500/20 scale-110'
                    : breathPhase === 'hold'
                    ? 'bg-amber-500/20 scale-110 ring-4 ring-amber-300'
                    : 'bg-blue-500/20 scale-90'
                }`}
              ></div>

              <div className="relative z-10 text-center space-y-1">
                <div className="text-xs font-bold uppercase tracking-widest text-slate-500">
                  {breathPhase === 'inhale'
                    ? 'HÍT VÀO BẰNG MŨI'
                    : breathPhase === 'hold'
                    ? 'GIỮ HƠI THỞ'
                    : 'THỞ RA TỪ TỪ'}
                </div>
                <div className="text-5xl font-black text-slate-900 font-mono">
                  {countdown}
                </div>
                <div className="text-[11px] text-slate-400">giây</div>
              </div>
            </div>

            {/* Cycles counter */}
            <div className="text-xs text-slate-500">
              Số chu kỳ hoàn thành: <strong className="text-teal-700">{cycleCount}</strong>
            </div>

            {/* Action Buttons */}
            <div className="flex items-center justify-center gap-3">
              <button
                onClick={toggleBreathing}
                className={`px-6 py-2.5 rounded-xl text-xs font-bold transition-all shadow-xs flex items-center gap-2 ${
                  isBreathingActive
                    ? 'bg-amber-600 hover:bg-amber-700 text-white'
                    : 'bg-teal-700 hover:bg-teal-800 text-white'
                }`}
              >
                {isBreathingActive ? (
                  <>
                    <Pause className="w-4 h-4" /> Tạm dừng
                  </>
                ) : (
                  <>
                    <Play className="w-4 h-4" /> Bắt đầu luyện thở
                  </>
                )}
              </button>
              <button
                onClick={resetBreathing}
                className="p-2.5 rounded-xl border border-slate-200 text-slate-600 hover:bg-slate-100 text-xs font-semibold"
                title="Làm mới"
              >
                <RotateCcw className="w-4 h-4" />
              </button>
            </div>

            {/* Instructions */}
            <div className="text-left bg-slate-50 p-4 rounded-xl text-xs text-slate-700 space-y-2 border border-slate-100">
              <div className="font-bold text-slate-900">Cách thực hành chuẩn:</div>
              <ul className="space-y-1 list-disc pl-4 text-slate-600">
                <li><strong>Hít vào trong 4 giây:</strong> Khép miệng, hít nhẹ nhàng qua mũi.</li>
                <li><strong>Giữ hơi trong 7 giây:</strong> Giữ lồng ngực tĩnh lặng.</li>
                <li><strong>Thở ra trong 8 giây:</strong> Mở hé môi, thở ra hoàn toàn qua miệng tạo tiếng gió nhẹ.</li>
              </ul>
            </div>
          </div>
        </div>
      )}

      {/* Tab 3: Myths vs Facts */}
      {activeTab === 'myths' && (
        <div className="space-y-4">
          <div className="text-xs text-slate-500 max-w-2xl">
            Phá vỡ các định kiến sai lầm phổ biến về ngoại hình dựa trên dữ liệu thực tế của 624 học sinh THPT:
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {MYTHS_AND_FACTS.map((mf, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl p-6 border border-slate-200 shadow-xs space-y-4"
              >
                <div className="space-y-1">
                  <div className="flex items-center gap-1.5 text-xs font-bold text-rose-600">
                    <AlertCircle className="w-4 h-4" /> LẦM TƯỞNG THƯỜNG GẶP:
                  </div>
                  <p className="text-xs sm:text-sm font-bold text-slate-900 leading-snug">
                    "{mf.myth}"
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-100 space-y-1">
                  <div className="flex items-center gap-1.5 text-xs font-bold text-emerald-700">
                    <CheckCircle2 className="w-4 h-4" /> SỰ THẬT KHOA HỌC:
                  </div>
                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-medium">
                    {mf.fact}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
