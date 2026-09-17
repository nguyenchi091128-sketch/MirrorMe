import React, { useState } from 'react';
import { SCENARIOS_DATA } from '../data/interactiveScenarios';
import { Scenario, ScenarioOption } from '../types';
import {
  MessageSquare,
  Sparkles,
  School,
  Share2,
  Users,
  CheckCircle2,
  AlertTriangle,
  RotateCcw,
  ArrowRight,
  ShieldCheck,
  HelpCircle,
} from 'lucide-react';

export const ScenarioSimulatorView: React.FC = () => {
  const [activeScenarioId, setActiveScenarioId] = useState<string>('sc-1');
  const [selectedOptionId, setSelectedOptionId] = useState<string | null>(null);

  const activeScenario =
    SCENARIOS_DATA.find((s) => s.id === activeScenarioId) || SCENARIOS_DATA[0];
  const selectedOption = activeScenario.options.find((o) => o.id === selectedOptionId);

  const handleSelectScenario = (id: string) => {
    setActiveScenarioId(id);
    setSelectedOptionId(null);
  };

  const getContextBadge = (context: Scenario['context']) => {
    switch (context) {
      case 'school':
        return (
          <span className="inline-flex items-center gap-1 text-xs px-2.5 py-0.5 rounded-full bg-blue-100 text-blue-800 font-semibold">
            <School className="w-3.5 h-3.5" /> Môi Trường Học Đường
          </span>
        );
      case 'social_media':
        return (
          <span className="inline-flex items-center gap-1 text-xs px-2.5 py-0.5 rounded-full bg-purple-100 text-purple-800 font-semibold">
            <Share2 className="w-3.5 h-3.5" /> Mạng Xã Hội (Online)
          </span>
        );
      case 'family':
        return (
          <span className="inline-flex items-center gap-1 text-xs px-2.5 py-0.5 rounded-full bg-amber-100 text-amber-800 font-semibold">
            <Users className="w-3.5 h-3.5" /> Gia Đình &amp; Họ Hàng
          </span>
        );
      default:
        return null;
    }
  };

  return (
    <div className="space-y-8 pb-12">
      {/* Header Banner */}
      <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-xs">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-100 pb-5">
          <div>
            <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-teal-100 text-teal-800 text-xs font-bold mb-2">
              <MessageSquare className="w-3.5 h-3.5" /> Kỹ Năng Ứng Phó Thực Tế
            </div>
            <h1 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
              Trình Mô Phỏng Tình Huống: Luyện Tập Đối Đáp &amp; Đặt Ranh Giới
            </h1>
            <p className="text-xs sm:text-sm text-slate-600 mt-1 max-w-3xl">
              Khảo sát cho thấy <strong>40,5% học sinh</strong> rất cần được hướng dẫn cách ứng phó khi bị chê bai, trêu chọc và <strong>28,5%</strong> có thói quen né tránh. Hãy thử nghiệm các phản ứng để chọn ra giải pháp thông minh và bảo vệ tâm lý tốt nhất.
            </p>
          </div>
        </div>

        {/* Scenario Selection Tabs */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mt-6">
          {SCENARIOS_DATA.map((sc, idx) => {
            const isCurrent = sc.id === activeScenario.id;
            return (
              <button
                key={sc.id}
                id={`btn-scenario-${sc.id}`}
                onClick={() => handleSelectScenario(sc.id)}
                className={`p-4 rounded-xl border text-left transition-all ${
                  isCurrent
                    ? 'bg-teal-50 border-teal-500 shadow-xs ring-2 ring-teal-500/20'
                    : 'bg-white hover:bg-slate-50 border-slate-200'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[11px] font-bold text-slate-400">Tình huống {idx + 1}</span>
                  {getContextBadge(sc.context)}
                </div>
                <div className="text-xs sm:text-sm font-bold text-slate-900 line-clamp-1">
                  {sc.title}
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Main Scenario Workspace */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Situation Description & Options */}
        <div className="lg:col-span-7 space-y-6">
          <div className="bg-white rounded-2xl p-6 sm:p-7 border border-slate-200 shadow-xs space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-teal-700 uppercase tracking-wider">
                Bối cảnh tình huống thực tế
              </span>
              {getContextBadge(activeScenario.context)}
            </div>

            <h3 className="text-lg font-extrabold text-slate-900">{activeScenario.title}</h3>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
              {activeScenario.situation}
            </p>

            {/* Direct Quote Box */}
            <div className="p-4 rounded-xl bg-rose-50 border border-rose-200 text-rose-950 text-xs sm:text-sm font-semibold italic">
              {activeScenario.quote}
            </div>

            <div className="pt-2">
              <span className="text-xs font-bold text-slate-900">
                Nếu rơi vào trường hợp này, bạn sẽ phản ứng như thế nào?
              </span>
            </div>

            {/* Options List */}
            <div className="space-y-3 pt-1">
              {activeScenario.options.map((opt, i) => {
                const isSelected = selectedOptionId === opt.id;
                return (
                  <button
                    key={opt.id}
                    id={`opt-btn-${opt.id}`}
                    onClick={() => setSelectedOptionId(opt.id)}
                    className={`w-full text-left p-4 rounded-xl border text-xs sm:text-sm transition-all flex items-start gap-3 ${
                      isSelected
                        ? 'bg-teal-50/90 border-teal-500 ring-2 ring-teal-500/20 text-teal-950 font-semibold shadow-xs'
                        : 'bg-white hover:bg-slate-50 border-slate-200 text-slate-700'
                    }`}
                  >
                    <span
                      className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5 ${
                        isSelected
                          ? 'bg-teal-700 text-white'
                          : 'bg-slate-100 text-slate-600 border border-slate-300'
                      }`}
                    >
                      {String.fromCharCode(65 + i)}
                    </span>
                    <div className="flex-1">
                      <div className="text-xs font-medium leading-relaxed">{opt.text}</div>
                      <div className="mt-1.5 inline-block text-[11px] px-2 py-0.5 rounded bg-slate-100 text-slate-600 font-bold">
                        {opt.badgeLabel}
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Psychological Feedback & Analysis */}
        <div className="lg:col-span-5 space-y-6">
          {selectedOption ? (
            <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-xs space-y-4 animate-in fade-in duration-300">
              <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                  Phân tích tâm lý học
                </span>
                <span
                  className={`text-xs px-2.5 py-0.5 rounded-full font-bold ${
                    selectedOption.effectiveness === 'high'
                      ? 'bg-emerald-100 text-emerald-800'
                      : selectedOption.effectiveness === 'medium'
                      ? 'bg-amber-100 text-amber-800'
                      : 'bg-rose-100 text-rose-800'
                  }`}
                >
                  {selectedOption.effectiveness === 'high'
                    ? 'Hiệu quả cao / Khuyến khích'
                    : selectedOption.effectiveness === 'medium'
                    ? 'Hiệu quả trung bình'
                    : 'Không khuyến khích'}
                </span>
              </div>

              <div>
                <div className="text-xs text-slate-500 font-bold mb-1">Đánh giá phản ứng:</div>
                <p className="text-xs sm:text-sm text-slate-800 leading-relaxed font-medium">
                  {selectedOption.feedback}
                </p>
              </div>

              <div className="p-3.5 rounded-xl bg-teal-50 border border-teal-200 text-xs text-teal-950 space-y-1">
                <div className="font-bold flex items-center gap-1.5 text-teal-800">
                  <Sparkles className="w-3.5 h-3.5 text-amber-500" /> Góc nhìn tâm lý chuyên sâu
                </div>
                <p className="text-[11px] leading-relaxed text-teal-900">
                  {selectedOption.psychologicalInsight}
                </p>
              </div>

              <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-700">
                <div className="font-bold text-slate-900 mb-1">Gợi ý từ kết quả nghiên cứu:</div>
                <p className="text-[11px] leading-relaxed">{activeScenario.expertAdvice}</p>
              </div>

              <button
                onClick={() => setSelectedOptionId(null)}
                className="w-full py-2 text-xs font-semibold text-slate-600 hover:text-slate-900 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors flex items-center justify-center gap-1"
              >
                <RotateCcw className="w-3.5 h-3.5" /> Thử nghiệm lựa chọn khác
              </button>
            </div>
          ) : (
            <div className="bg-slate-50 rounded-2xl p-8 border border-dashed border-slate-300 text-center text-slate-500 flex flex-col items-center justify-center h-full min-h-[300px] space-y-3">
              <HelpCircle className="w-10 h-10 text-slate-400" />
              <div className="text-sm font-bold text-slate-700">Chưa chọn phản ứng</div>
              <p className="text-xs text-slate-500 max-w-xs leading-relaxed">
                Nhấp vào một trong các phương án ở bên trái để xem phân tích tâm lý học và lời khuyên của chuyên gia.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
