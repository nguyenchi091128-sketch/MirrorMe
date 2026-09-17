import React, { useState } from 'react';
import { HANDBOOK_CHAPTERS, HandbookSection } from '../data/handbookContent';
import {
  BookOpen,
  CheckCircle2,
  Clock,
  Sparkles,
  ShieldAlert,
  Eye,
  HeartHandshake,
  Smartphone,
  Users,
  ChevronRight,
  Bookmark,
  Share2,
  AlertCircle,
  Flame,
} from 'lucide-react';

export const HandbookReaderView: React.FC = () => {
  const [activeChapterId, setActiveChapterId] = useState<string>('chapter-1');
  const [completedChapters, setCompletedChapters] = useState<string[]>([]);
  const [copiedNotification, setCopiedNotification] = useState<boolean>(false);

  const activeChapter =
    HANDBOOK_CHAPTERS.find((c) => c.id === activeChapterId) || HANDBOOK_CHAPTERS[0];

  const toggleChapterCompleted = (id: string) => {
    setCompletedChapters((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const getChapterIcon = (iconName: string) => {
    switch (iconName) {
      case 'Eye':
        return <Eye className="w-4 h-4" />;
      case 'ShieldAlert':
        return <ShieldAlert className="w-4 h-4" />;
      case 'HeartHandshake':
        return <HeartHandshake className="w-4 h-4" />;
      case 'Smartphone':
        return <Smartphone className="w-4 h-4" />;
      case 'Users':
        return <Users className="w-4 h-4" />;
      default:
        return <BookOpen className="w-4 h-4" />;
    }
  };

  const handleShare = () => {
    navigator.clipboard?.writeText(window.location.href);
    setCopiedNotification(true);
    setTimeout(() => setCopiedNotification(false), 2500);
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pb-12">
      {/* Chapter Navigation Sidebar */}
      <div className="lg:col-span-4 space-y-4">
        <div className="bg-white rounded-2xl p-5 border border-slate-200 shadow-xs sticky top-24">
          <div className="flex items-center justify-between mb-4">
            <div>
              <span className="text-xs font-bold text-teal-700 uppercase tracking-wider">Mục Lục Cẩm Nang</span>
              <h2 className="text-sm font-extrabold text-slate-900">5 Chương Trọng Tâm</h2>
            </div>
            <div className="text-xs bg-slate-100 text-slate-700 px-2 py-1 rounded-full font-semibold">
              {completedChapters.length}/{HANDBOOK_CHAPTERS.length} Hoàn tất
            </div>
          </div>

          <div className="space-y-2">
            {HANDBOOK_CHAPTERS.map((ch) => {
              const isSelected = ch.id === activeChapter.id;
              const isDone = completedChapters.includes(ch.id);
              return (
                <button
                  key={ch.id}
                  id={`chapter-tab-${ch.id}`}
                  onClick={() => setActiveChapterId(ch.id)}
                  className={`w-full text-left p-3 rounded-xl transition-all flex items-start gap-3 border ${
                    isSelected
                      ? 'bg-teal-50/80 border-teal-300 text-teal-950 shadow-xs'
                      : 'bg-white hover:bg-slate-50 border-slate-100 text-slate-700'
                  }`}
                >
                  <div
                    className={`w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5 text-xs font-bold ${
                      isSelected
                        ? 'bg-teal-700 text-white'
                        : isDone
                        ? 'bg-emerald-100 text-emerald-800'
                        : 'bg-slate-100 text-slate-600'
                    }`}
                  >
                    {isDone ? <CheckCircle2 className="w-4 h-4 text-emerald-600" /> : ch.chapterNumber}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-xs font-bold leading-tight line-clamp-1">
                      Chương {ch.chapterNumber}: {ch.title}
                    </div>
                    <div className="text-[11px] text-slate-500 mt-1 flex items-center gap-2">
                      <span className="flex items-center gap-1">
                        <Clock className="w-3 h-3" /> {ch.readTime}
                      </span>
                    </div>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Quick Motivational Card */}
          <div className="mt-5 pt-4 border-t border-slate-100 bg-gradient-to-br from-teal-50 to-emerald-50 rounded-xl p-3.5 text-xs text-teal-950">
            <div className="font-bold flex items-center gap-1 text-teal-800 mb-1">
              <Sparkles className="w-3.5 h-3.5 text-amber-500" /> Thông điệp cẩm nang
            </div>
            <p className="text-[11px] text-slate-700 leading-relaxed">
              Bạn không cần phải có một cơ thể không tì vết để cảm thấy mình đáng giá. Giá trị con người bạn bắt nguồn từ trí tuệ, lòng nhân hậu và sự kiên trì.
            </p>
          </div>
        </div>
      </div>

      {/* Main Chapter Content */}
      <div className="lg:col-span-8 space-y-6">
        {/* Chapter Header Card */}
        <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-xs">
          <div className="flex flex-wrap items-center justify-between gap-2 text-xs text-slate-500 mb-3">
            <div className="flex items-center gap-2">
              <span className="px-2.5 py-0.5 rounded-full bg-teal-100 text-teal-800 font-bold">
                Chương {activeChapter.chapterNumber}
              </span>
              <span className="flex items-center gap-1 text-slate-500">
                <Clock className="w-3.5 h-3.5" /> {activeChapter.readTime}
              </span>
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={() => toggleChapterCompleted(activeChapter.id)}
                className={`flex items-center gap-1 px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors border ${
                  completedChapters.includes(activeChapter.id)
                    ? 'bg-emerald-50 text-emerald-700 border-emerald-200'
                    : 'bg-slate-50 text-slate-600 hover:bg-slate-100 border-slate-200'
                }`}
              >
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>
                  {completedChapters.includes(activeChapter.id) ? 'Đã đọc xong' : 'Đánh dấu đã đọc'}
                </span>
              </button>
              <button
                onClick={handleShare}
                className="p-1.5 rounded-lg bg-slate-50 hover:bg-slate-100 border border-slate-200 text-slate-600"
                title="Sao chép liên kết cẩm nang"
              >
                <Share2 className="w-4 h-4" />
              </button>
            </div>
          </div>

          {copiedNotification && (
            <div className="mb-3 px-3 py-1.5 bg-teal-50 border border-teal-200 rounded-lg text-xs text-teal-800 font-medium">
              Đã sao chép liên kết vào bộ nhớ tạm!
            </div>
          )}

          <h1 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
            {activeChapter.title}
          </h1>
          <p className="text-xs sm:text-sm text-slate-600 mt-2 font-medium">
            {activeChapter.subtitle}
          </p>

          {activeChapter.researchBadge && (
            <div className="mt-4 inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-50 text-amber-900 border border-amber-200 text-xs font-semibold">
              <Flame className="w-3.5 h-3.5 text-amber-600" />
              <span>{activeChapter.researchBadge}</span>
            </div>
          )}

          {/* Key Takeaway Callout */}
          <div className="mt-5 p-4 rounded-xl bg-slate-50 border-l-4 border-teal-600 text-xs text-slate-800 leading-relaxed font-medium">
            <strong>Ý chính cốt lõi:</strong> {activeChapter.keyTakeaway}
          </div>
        </div>

        {/* Chapter Body Sections */}
        <div className="space-y-6">
          {activeChapter.content.map((sec, idx) => (
            <div key={idx} className="bg-white rounded-2xl p-6 sm:p-7 border border-slate-200 shadow-xs space-y-4">
              <h3 className="text-base font-bold text-slate-900">{sec.heading}</h3>
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">{sec.text}</p>

              {sec.bulletPoints && (
                <ul className="space-y-2 mt-3">
                  {sec.bulletPoints.map((bp, bpIdx) => (
                    <li key={bpIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                      <span className="w-1.5 h-1.5 rounded-full bg-teal-600 mt-2 flex-shrink-0"></span>
                      <span>{bp}</span>
                    </li>
                  ))}
                </ul>
              )}

              {sec.callout && (
                <div
                  className={`mt-4 p-4 rounded-xl text-xs border ${
                    sec.callout.type === 'science'
                      ? 'bg-blue-50/80 border-blue-200 text-blue-950'
                      : sec.callout.type === 'warning'
                      ? 'bg-rose-50/80 border-rose-200 text-rose-950'
                      : 'bg-emerald-50/80 border-emerald-200 text-emerald-950'
                  }`}
                >
                  <div className="font-bold mb-1 flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>{sec.callout.title}</span>
                  </div>
                  <p className="leading-relaxed">{sec.callout.body}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Action Toolkit Box */}
        <div className="bg-gradient-to-br from-teal-900 to-emerald-950 text-white rounded-2xl p-6 sm:p-8 shadow-md">
          <div className="flex items-center gap-2 text-teal-300 text-xs font-bold uppercase tracking-wider mb-2">
            <Sparkles className="w-4 h-4 text-amber-400" /> Thực Hành Ngay
          </div>
          <h3 className="text-lg sm:text-xl font-black tracking-tight mb-4">
            {activeChapter.actionToolkit.title}
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
            {activeChapter.actionToolkit.steps.map((st) => (
              <div key={st.number} className="bg-white/10 backdrop-blur rounded-xl p-4 border border-white/10">
                <div className="text-2xl font-black text-teal-300 mb-1">{st.number}</div>
                <div className="text-xs font-bold text-white mb-2">{st.stepName}</div>
                <p className="text-[11px] text-slate-200 leading-relaxed mb-2">{st.description}</p>
                {st.example && (
                  <div className="p-2 rounded bg-black/20 border border-white/5 text-[11px] text-amber-200 italic">
                    {st.example}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Chapter Switcher */}
        <div className="flex items-center justify-between pt-4 border-t border-slate-200">
          {activeChapter.chapterNumber > 1 ? (
            <button
              onClick={() => {
                const prev = HANDBOOK_CHAPTERS[activeChapter.chapterNumber - 2];
                if (prev) setActiveChapterId(prev.id);
              }}
              className="px-4 py-2 rounded-lg bg-white border border-slate-200 text-slate-700 text-xs font-bold hover:bg-slate-50 transition-colors"
            >
              ← Chương {activeChapter.chapterNumber - 1}
            </button>
          ) : <div />}

          {activeChapter.chapterNumber < HANDBOOK_CHAPTERS.length ? (
            <button
              onClick={() => {
                const next = HANDBOOK_CHAPTERS[activeChapter.chapterNumber];
                if (next) setActiveChapterId(next.id);
              }}
              className="px-4 py-2 rounded-lg bg-teal-700 text-white text-xs font-bold hover:bg-teal-800 transition-colors flex items-center gap-1 shadow-xs"
            >
              <span>Chương {activeChapter.chapterNumber + 1}</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          ) : (
            <button
              onClick={() => toggleChapterCompleted(activeChapter.id)}
              className="px-4 py-2 rounded-lg bg-emerald-600 text-white text-xs font-bold hover:bg-emerald-700 transition-colors"
            >
              ✓ Đã hoàn thành cẩm nang
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
