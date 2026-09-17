import React from 'react';
import { TabType } from '../types';
import { BookOpen, ClipboardCheck, MessageSquare, Sparkles, LifeBuoy, GraduationCap } from 'lucide-react';

interface NavbarProps {
  currentTab: TabType;
  onSelectTab: (tab: TabType) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentTab, onSelectTab }) => {
  const navItems: { id: TabType; label: string; icon: React.ReactNode; badge?: string }[] = [
    { id: 'guide', label: 'Cẩm Nang Tri Thức', icon: <BookOpen className="w-4 h-4" /> },
    { id: 'assessment', label: 'Trắc Nghiệm Bản Thân', icon: <ClipboardCheck className="w-4 h-4" />, badge: 'Tự đánh giá' },
    { id: 'scenarios', label: 'Kịch Bản Thực Chiến', icon: <MessageSquare className="w-4 h-4" /> },
    { id: 'mindset', label: 'Tái Định Hình & Thở', icon: <Sparkles className="w-4 h-4" /> },
    { id: 'support', label: 'Kênh Hỗ Trợ & FAQ', icon: <LifeBuoy className="w-4 h-4" /> },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur border-b border-slate-200 shadow-xs">
      {/* Top Banner */}
      <div className="bg-gradient-to-r from-teal-800 via-emerald-800 to-teal-900 text-white px-4 py-2 text-xs">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-2 font-medium">
            <span className="inline-flex items-center gap-1 bg-teal-700/80 px-2 py-0.5 rounded text-[11px] font-semibold text-teal-100">
              <GraduationCap className="w-3.5 h-3.5" /> TÂM LÝ HỌC ĐƯỜNG THPT
            </span>
            <span className="hidden sm:inline text-teal-100">
              Cẩm nang Hình ảnh cơ thể &amp; Lòng tự trọng học sinh THPT
            </span>
          </div>
          <div className="text-teal-200 text-[11px] flex items-center gap-2">
            <span>Trường THPT Nguyễn Hiền • Cụm 1 TP. Hồ Chí Minh</span>
          </div>
        </div>
      </div>

      {/* Main App Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 gap-4">
          <div className="flex items-center gap-3 cursor-pointer" onClick={() => onSelectTab('guide')}>
            <div className="w-10 h-10 rounded-xl bg-teal-600 text-white flex items-center justify-center font-bold text-lg shadow-sm shadow-teal-500/20">
              CT
            </div>
            <div>
              <div className="text-base font-bold text-slate-900 leading-tight">
                Cẩm Nang Hình Ảnh Cơ Thể &amp; Lòng Tự Trọng
              </div>
              <div className="text-xs text-slate-500">
                Thấu hiểu bản thân • Vững vàng trước bình phẩm • Kiến tạo giá trị
              </div>
            </div>
          </div>

          {/* Navigation Buttons for Large Screens */}
          <nav className="hidden lg:flex items-center gap-1.5" aria-label="Tabs">
            {navItems.map((item) => {
              const isActive = currentTab === item.id;
              return (
                <button
                  key={item.id}
                  id={`nav-btn-${item.id}`}
                  onClick={() => onSelectTab(item.id)}
                  className={`relative flex items-center gap-1.5 px-3 py-2 rounded-lg text-xs font-semibold transition-all ${
                    isActive
                      ? 'bg-teal-50 text-teal-800 border border-teal-200 shadow-xs'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100/80'
                  }`}
                >
                  {item.icon}
                  <span>{item.label}</span>
                  {item.badge && (
                    <span
                      className={`ml-1 text-[10px] px-1.5 py-0.5 rounded-full font-bold ${
                        isActive ? 'bg-teal-600 text-white' : 'bg-slate-200 text-slate-700'
                      }`}
                    >
                      {item.badge}
                    </span>
                  )}
                </button>
              );
            })}
          </nav>
        </div>

        {/* Mobile / Tablet Horizontal Navigation Scroll */}
        <div className="lg:hidden flex items-center gap-1 overflow-x-auto py-2.5 no-scrollbar border-t border-slate-100">
          {navItems.map((item) => {
            const isActive = currentTab === item.id;
            return (
              <button
                key={item.id}
                id={`nav-mobile-btn-${item.id}`}
                onClick={() => onSelectTab(item.id)}
                className={`flex-shrink-0 flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium whitespace-nowrap transition-colors ${
                  isActive
                    ? 'bg-teal-700 text-white font-semibold shadow-xs'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
              >
                {item.icon}
                <span>{item.label}</span>
                {item.badge && (
                  <span
                    className={`text-[10px] px-1 py-0.2 rounded-full font-bold ${
                      isActive ? 'bg-teal-800 text-teal-100' : 'bg-slate-200 text-slate-600'
                    }`}
                  >
                    {item.badge}
                  </span>
                )}
              </button>
            );
          })}
        </div>
      </div>
    </header>
  );
};
