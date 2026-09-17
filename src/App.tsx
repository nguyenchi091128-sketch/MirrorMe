import React, { useState } from 'react';
import { TabType } from './types';
import { Navbar } from './components/Navbar';
import { HandbookReaderView } from './components/HandbookReaderView';
import { SelfAssessmentView } from './components/SelfAssessmentView';
import { ScenarioSimulatorView } from './components/ScenarioSimulatorView';
import { CognitiveReframingView } from './components/CognitiveReframingView';
import { SupportChannelsView } from './components/SupportChannelsView';
import {
  BookOpen,
  ClipboardCheck,
  MessageSquare,
  Sparkles,
  LifeBuoy,
  Heart,
  ShieldCheck,
  CheckCircle,
  Wind,
} from 'lucide-react';

export default function App() {
  const [currentTab, setCurrentTab] = useState<TabType>('guide');

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans text-slate-800">
      {/* Navigation Bar */}
      <Navbar currentTab={currentTab} onSelectTab={setCurrentTab} />

      {/* Hero Welcome Banner (Visible if Guide tab or for quick jump) */}
      {currentTab === 'guide' && (
        <section className="bg-gradient-to-b from-teal-900 via-teal-950 to-slate-900 text-white pt-8 pb-12 px-4 sm:px-6 lg:px-8 border-b border-teal-800/40">
          <div className="max-w-7xl mx-auto">
            <div className="max-w-3xl space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-800/80 border border-teal-600/30 text-teal-200 text-xs font-semibold">
                <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                Cẩm Nang Khoa Học Tâm Lý Dành Cho Học Sinh THPT
              </div>
              <h1 className="text-2xl sm:text-4xl font-black tracking-tight leading-tight text-white">
                Cơ Thể Của Bạn • Giá Trị Của Bạn
              </h1>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
                Sản phẩm cẩm nang đồng hành giúp học sinh THPT thấu hiểu bản thân, vững vàng trước những bình phẩm ngoại hình và xây dựng lòng tự trọng đa trụ cột: Bạn không cần một vẻ ngoài hoàn hảo để có một giá trị sống vững vàng!
              </p>

              {/* Quick Jump Action Pills */}
              <div className="flex flex-wrap items-center gap-2.5 pt-2">
                <button
                  onClick={() => setCurrentTab('assessment')}
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-teal-500 hover:bg-teal-400 text-slate-950 font-bold text-xs transition-all shadow-xs"
                >
                  <ClipboardCheck className="w-4 h-4" /> Trắc nghiệm bản thân ngay
                </button>
                <button
                  onClick={() => setCurrentTab('scenarios')}
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-white/10 hover:bg-white/15 text-white border border-white/20 font-bold text-xs transition-all"
                >
                  <MessageSquare className="w-4 h-4 text-amber-300" /> Kịch bản đối đáp khi bị trêu
                </button>
                <button
                  onClick={() => setCurrentTab('mindset')}
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-white/10 hover:bg-white/15 text-white border border-white/20 font-bold text-xs transition-all"
                >
                  <Wind className="w-4 h-4 text-teal-300" /> Bài tập thở 4-7-8 &amp; Tái định hình
                </button>
              </div>
            </div>

            {/* Practical Core Principles Strip */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-8 pt-6 border-t border-white/10">
              <div className="bg-white/5 rounded-xl p-3.5 border border-white/5">
                <div className="text-sm font-extrabold text-teal-300 flex items-center gap-1.5">
                  <CheckCircle className="w-4 h-4" /> Body Neutrality
                </div>
                <div className="text-[11px] text-slate-300 mt-1">Trân trọng cơ thể vì chức năng sống, không phải vật trang trí</div>
              </div>
              <div className="bg-white/5 rounded-xl p-3.5 border border-white/5">
                <div className="text-sm font-extrabold text-amber-300 flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4" /> Tấm Khiên Tâm Lý
                </div>
                <div className="text-[11px] text-slate-300 mt-1">Lời chê bai phản chiếu sự bất an của người nói, không phải bạn</div>
              </div>
              <div className="bg-white/5 rounded-xl p-3.5 border border-white/5">
                <div className="text-sm font-extrabold text-rose-300 flex items-center gap-1.5">
                  <Heart className="w-4 h-4" /> Tự Trọng Đa Chiều
                </div>
                <div className="text-[11px] text-slate-300 mt-1">Giá trị con người nằm ở trí tuệ, lòng nhân hậu và sự kiên trì</div>
              </div>
              <div className="bg-white/5 rounded-xl p-3.5 border border-white/5">
                <div className="text-sm font-extrabold text-emerald-300 flex items-center gap-1.5">
                  <Sparkles className="w-4 h-4" /> Lướt Mạng Tỉnh Thức
                </div>
                <div className="text-[11px] text-slate-300 mt-1">Dũng cảm unfollow những nội dung độc hại và filter ảo ảnh</div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Main Container */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        {currentTab === 'guide' && <HandbookReaderView />}
        {currentTab === 'assessment' && <SelfAssessmentView />}
        {currentTab === 'scenarios' && <ScenarioSimulatorView />}
        {currentTab === 'mindset' && <CognitiveReframingView />}
        {currentTab === 'support' && <SupportChannelsView />}
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-slate-200 mt-auto py-8 px-4 sm:px-6 lg:px-8 text-xs text-slate-600">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-teal-700 text-white flex items-center justify-center font-bold text-xs">
              THPT
            </div>
            <div>
              <div className="font-bold text-slate-900">
                Cẩm Nang Hình Ảnh Cơ Thể &amp; Lòng Tự Trọng Dành Cho Học Sinh THPT
              </div>
              <div className="text-[11px] text-slate-500">
                Tài liệu tâm lý học đường đồng hành cùng thanh thiếu niên
              </div>
            </div>
          </div>

          <div className="text-center md:text-right text-[11px] text-slate-500 space-y-1">
            <div>
              Xây dựng bởi học sinh: <strong>Nguyễn Ngọc Xuyến Chi, Lê Nguyễn Hồng Trâm</strong>
            </div>
            <div>
              Hướng dẫn chuyên môn: <strong>ThS. Nguyễn Thị Tân Lương</strong> (Trường THPT Nguyễn Hiền, TP.HCM)
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
