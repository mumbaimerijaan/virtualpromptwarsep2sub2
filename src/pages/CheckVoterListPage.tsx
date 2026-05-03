import React, { useState } from 'react';
import { 
  ChevronRight, 
  IdCard, 
  Search, 
  HelpCircle, 
  X, 
  ExternalLink, 
  User, 
  MapPin, 
  Calendar, 
  FileText, 
  Settings, 
  Edit3, 
  Navigation, 
  ShieldAlert, 
  CheckCircle, 
  FileWarning, 
  Clock 
} from 'lucide-react';
import heroImg from '../assets/check-voter-hero.png';

interface InfoModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
}

// Reusable Modal Component
const InfoModal: React.FC<InfoModalProps> = ({ isOpen, onClose, title, children }) => {
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 z-[110] flex items-center justify-center p-4 bg-slate-900/40 backdrop-blur-sm animate-fade-in" onClick={onClose}>
      <div 
        className="bg-white rounded-[28px] w-[80%] md:w-[48%] shadow-2xl overflow-hidden animate-slide-up"
        onClick={e => e.stopPropagation()}
      >
        <div className="px-6 py-5 border-b border-slate-100 flex justify-between items-center bg-slate-50/50">
          <h3 className="font-bold text-slate-800 text-[18px]">{title}</h3>
          <button 
            onClick={onClose} 
            autoFocus
            className="p-2 text-slate-400 hover:bg-slate-200 rounded-full transition-colors"
            aria-label="Close Modal"
          >
            <X size={20} />
          </button>
        </div>
        <div className="p-6 max-h-[75vh] overflow-y-auto no-scrollbar">
          {children}
        </div>
      </div>
    </div>
  );
};

export const CheckVoterListPage: React.FC<{ t: any }> = ({ t }) => {
  const [modalState, setModalState] = useState<string | null>(null); // 'all-issues' | 'search-help' | 'what-you-see' | 'advanced-options' | null

  if (!t) return null;

  return (
    <main id="main-content" className="flex-1 flex flex-col bg-[#F9FAFB] pb-32 relative overflow-x-hidden">
      
      {/* Hero Section */}
      <div className="pt-2 pb-8 relative overflow-hidden">
        <div className="w-[60%] relative z-10 pt-4">
          <h2 className="text-[32px] font-extrabold text-[#111827] leading-[1.1] tracking-tight whitespace-pre-line">
            {t.hero.title}
          </h2>
          <p className="text-[14px] text-slate-500 mt-4 max-w-[220px] leading-relaxed font-medium">
            {t.hero.subtitle}
          </p>
          
          <div className="mt-7 flex flex-col gap-4">
            <a 
              href={t.hero.cta.primary.link} 
              target="_blank" 
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-between bg-[#1C51E3] text-white pl-5 pr-4 py-4 rounded-[20px] text-[15px] font-bold shadow-xl shadow-blue-600/20 hover:bg-blue-700 transition-all active:scale-95 w-full max-w-[240px]"
            >
              <div className="flex items-center gap-2">
                <ExternalLink size={18} />
                <span>{t.hero.officialPortal}</span>
              </div>
              <ChevronRight size={20} className="opacity-70 group-hover:translate-x-1 transition-transform" />
            </a>
            
            <a 
              href={t.hero.cta.secondary.link}
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-[13px] font-bold text-blue-600 hover:text-blue-800 transition-colors px-1"
            >
              <ExternalLink size={16} />
              <span>{t.hero.cta.secondary.text}</span>
            </a>
          </div>
        </div>
        
        {/* Right Illustration */}
        <div className="absolute top-0 right-0 bottom-0 w-[45%] pointer-events-none flex items-center justify-end z-0 pr-2">
          <img src={heroImg} alt="Search Voter List Illustration" className="w-full h-auto max-h-[140px] object-contain object-right" />
        </div>
      </div>

      <div className="px-5 flex flex-col gap-6 relative z-10">
        
        {/* Section 1: Search Options */}
        <div className="flex flex-col gap-4">
          <div className="flex justify-between items-center">
            <h3 className="font-bold text-[17px] text-slate-800 tracking-tight">{t.sections.searchOptions.title}</h3>
            <button 
              onClick={() => setModalState('search-help')}
              className="text-blue-600 text-[13px] font-bold flex items-center gap-1.5 hover:underline whitespace-nowrap bg-blue-50/50 px-3 py-1.5 rounded-full border border-blue-100"
            >
              <HelpCircle size={15} /> {t.sections.searchOptions.help}
            </button>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* By Name Card */}
            <div className="bg-emerald-50/30 border border-emerald-100 p-5 rounded-[24px] flex flex-col shadow-sm">
               <div className="flex items-center gap-3 mb-5">
                 <div className="w-12 h-12 rounded-full bg-emerald-100/80 flex items-center justify-center text-emerald-600 shadow-sm">
                    <User size={24} />
                 </div>
                 <h4 className="font-bold text-emerald-900 text-[15px]">{t.sections.searchOptions.byName.title}</h4>
               </div>
               
               <ul className="flex flex-col gap-3.5 mb-8 flex-1">
                 {t.sections.searchOptions.byName.fields.map((item: string) => (
                   <li key={item} className="flex items-center gap-3 text-[13px] text-slate-600 font-semibold px-1">
                     <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 shadow-sm"></div>
                     <span className="flex items-center gap-2">
                       {item.includes('Name') && <User size={14} className="opacity-60" />}
                       {item.includes('Birth') && <Calendar size={14} className="opacity-60" />}
                       {item.includes('State') && <MapPin size={14} className="opacity-60" />}
                       {item}
                     </span>
                   </li>
                 ))}
               </ul>

               <a 
                 href="https://electoralsearch.eci.gov.in/" 
                 target="_blank" rel="noopener noreferrer"
                 className="w-full bg-[#146A4A] text-white py-3.5 rounded-xl font-bold text-[14px] flex items-center justify-between px-5 hover:bg-[#0f543a] transition-all shadow-lg shadow-emerald-900/10 active:scale-[0.98]"
               >
                 <span>{t.sections.searchOptions.byName.button}</span>
                 <ChevronRight size={18} className="opacity-70" />
               </a>
            </div>

            {/* By EPIC Card */}
            <div className="bg-purple-50/30 border border-purple-100 p-5 rounded-[24px] flex flex-col shadow-sm">
               <div className="flex items-center gap-3 mb-5">
                 <div className="w-12 h-12 rounded-full bg-purple-100/80 flex items-center justify-center text-purple-600 shadow-sm">
                    <IdCard size={24} />
                 </div>
                 <h4 className="font-bold text-purple-900 text-[15px]">{t.sections.searchOptions.byEPIC.title}</h4>
               </div>
               
               <div className="mb-8 flex-1">
                 <p className="text-[13px] text-slate-600 font-semibold px-1 leading-relaxed whitespace-pre-line">
                   {t.sections.searchOptions.byEPIC.description}
                 </p>
               </div>

               <a 
                 href="https://electoralsearch.eci.gov.in/" 
                 target="_blank" rel="noopener noreferrer"
                 className="w-full bg-[#7C3AED] text-white py-3.5 rounded-xl font-bold text-[14px] flex items-center justify-between px-5 hover:bg-purple-700 transition-all shadow-lg shadow-purple-900/10 active:scale-[0.98]"
               >
                 <span>{t.sections.searchOptions.byEPIC.button}</span>
                 <ChevronRight size={18} className="opacity-70" />
               </a>
            </div>
          </div>
        </div>

        {/* Section 2: Quick Help */}
        <div className="flex flex-col gap-4">
          <h3 className="font-bold text-[17px] text-slate-800 tracking-tight">{t.sections.quickHelp.title}</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 px-1">
             {/* Not in list Card */}
             <div className="bg-white border border-slate-100 rounded-[24px] p-5 flex flex-col shadow-sm">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 rounded-full bg-red-100 flex items-center justify-center text-red-500 shadow-sm">
                    <X size={16} strokeWidth={3} />
                  </div>
                  <h4 className="font-bold text-[13px] text-slate-800">{t.sections.quickHelp.notInList.title}</h4>
                </div>
                <ul className="flex flex-col gap-2.5 pl-11 mb-6 flex-1">
                  {t.sections.quickHelp.notInList.steps.map((p: string, i: number) => (
                    <li key={i} className="text-[12px] text-slate-500 font-bold list-disc">{p}</li>
                  ))}
                </ul>
                <a 
                  href="https://voters.eci.gov.in/login" target="_blank" rel="noopener noreferrer"
                  className="w-full py-2.5 bg-white border border-red-100 text-red-600 text-[13px] font-bold rounded-xl text-center flex items-center justify-center gap-2 hover:bg-red-50 transition-colors shadow-sm"
                >
                  {t.sections.quickHelp.notInList.button} <ExternalLink size={14} />
                </a>
             </div>

             {/* Details incorrect Card */}
             <div className="bg-white border border-slate-100 rounded-[24px] p-5 flex flex-col shadow-sm">
                <div className="flex items-start gap-3 mb-4">
                  <div className="w-8 h-8 rounded-full bg-amber-100 flex items-center justify-center text-amber-600 shadow-sm mt-0.5">
                    <Edit3 size={16} strokeWidth={2.5} />
                  </div>
                  <h4 className="font-bold text-[13px] text-slate-800">{t.sections.quickHelp.detailsIncorrect.title}</h4>
                </div>
                <div className="pl-11 mb-6 flex-1">
                  <p className="text-[12px] text-slate-500 font-bold list-disc list-item ml-1">{t.sections.quickHelp.detailsIncorrect.description}</p>
                </div>
                <a 
                  href="https://voters.eci.gov.in/login" target="_blank" rel="noopener noreferrer"
                  className="w-full py-2.5 bg-white border border-amber-100 text-amber-600 text-[13px] font-bold rounded-xl text-center flex items-center justify-center gap-2 hover:bg-amber-50 transition-colors shadow-sm mt-auto"
                >
                  {t.sections.quickHelp.detailsIncorrect.button} <ExternalLink size={14} />
                </a>
             </div>

             {/* More Help Card */}
             <div className="bg-blue-50/50 border border-blue-100 rounded-[24px] p-5 flex flex-col justify-between items-start cursor-pointer hover:bg-blue-100/50 transition-all group shadow-sm" onClick={() => setModalState('all-issues')}>
                <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 mb-4 shadow-sm group-hover:scale-110 transition-transform">
                  <HelpCircle size={22} strokeWidth={2.5} />
                </div>
                <div>
                  <h4 className="font-bold text-[14px] text-slate-800 mb-1">{t.sections.quickHelp.moreHelp.title}</h4>
                  <p className="text-[11px] text-slate-500 font-bold leading-tight">{t.sections.quickHelp.moreHelp.subtitle}</p>
                </div>
                <div className="self-end text-blue-600 bg-white p-1.5 rounded-full shadow-sm mt-2 group-hover:translate-x-1 transition-transform">
                  <ChevronRight size={20} />
                </div>
             </div>
          </div>
        </div>

        {/* Card 3: Polling Booth */}
        <div className="bg-white p-5 rounded-[24px] shadow-[0_4px_25px_-5px_rgba(0,0,0,0.04)] border border-slate-100 flex flex-col sm:flex-row items-start sm:items-center gap-4">
          <div className="w-14 h-14 rounded-full bg-emerald-50/80 flex items-center justify-center text-emerald-600 flex-shrink-0 border border-emerald-100 shadow-sm">
            <MapPin size={28} />
          </div>
          <div className="flex-1">
            <h3 className="font-bold text-[15px] text-slate-800 mb-1 leading-tight">{t.sections.booth.title}</h3>
            <p className="text-[12px] text-slate-500 font-bold leading-relaxed max-w-[280px]">{t.sections.booth.subtitle}</p>
          </div>
          <a 
            href={t.sections.booth.cta.link} target="_blank" rel="noopener noreferrer"
            className="flex items-center gap-2 bg-white border border-emerald-100 text-emerald-700 font-bold text-[13px] px-5 py-3 rounded-xl whitespace-nowrap hover:bg-emerald-50 transition-colors shadow-sm w-full sm:w-auto justify-center"
          >
            {t.sections.booth.cta.text} <ExternalLink size={14} />
          </a>
        </div>

        {/* Card 4: What you see in results? */}
        <div className="bg-white p-6 rounded-[24px] shadow-[0_4px_25px_-5px_rgba(0,0,0,0.04)] border border-slate-100">
           <div className="flex items-center gap-3 mb-6">
             <div className="w-12 h-12 rounded-full bg-blue-50/80 flex items-center justify-center text-blue-600 border border-blue-100 shadow-sm">
               <ShieldAlert size={24} />
             </div>
             <h3 className="font-bold text-[16px] text-slate-800 tracking-tight">{t.sections.whatYouSee.title}</h3>
           </div>

           <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
              {[
                { icon: Navigation, bg: "bg-orange-50", color: "text-orange-500" },
                { icon: MapPin, bg: "bg-emerald-50", color: "text-emerald-500" },
                { icon: FileText, bg: "bg-amber-50", color: "text-amber-500" },
                { icon: User, bg: "bg-blue-50", color: "text-blue-500" }
              ].map((item, i) => (
                <div key={i} className="flex flex-col items-center sm:items-start text-center sm:text-left gap-3 p-2 group">
                  <div className={`w-10 h-10 rounded-full ${item.bg} flex items-center justify-center ${item.color} flex-shrink-0 border border-white shadow-sm transition-transform group-hover:scale-110`}>
                    <item.icon size={18} />
                  </div>
                  <span className="text-[11px] font-bold text-slate-600 leading-snug px-1">{t.sections.whatYouSee.items[i]?.title ?? t.sections.whatYouSee.items[i]}</span>
                </div>
              ))}
           </div>
           
           <div className="flex justify-center border-t border-slate-50 pt-5">
             <button 
               onClick={() => setModalState('what-you-see')}
               className="text-blue-600 text-[13px] font-bold flex items-center gap-1.5 hover:underline"
             >
               {t.sections.whatYouSee.preview} <ChevronRight size={16} />
             </button>
           </div>
        </div>

        {/* Card 5: Advanced Options */}
        <button 
          onClick={() => setModalState('advanced-options')}
          className="bg-white p-5 rounded-[24px] shadow-[0_4px_25px_-5px_rgba(0,0,0,0.04)] border border-slate-100 flex items-center justify-between hover:bg-slate-50 transition-all text-left active:scale-[0.99] group"
        >
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-purple-50 flex items-center justify-center text-purple-600 border border-purple-100 shadow-sm group-hover:bg-purple-100 transition-colors">
              <Settings size={24} />
            </div>
            <div>
              <h3 className="font-bold text-[15px] text-slate-800">{t.sections.advancedOptions.title}</h3>
              <p className="text-[12px] text-slate-500 font-bold mt-0.5 leading-relaxed">{t.sections.advancedOptions.desc}</p>
            </div>
          </div>
          <ChevronRight size={24} className="text-slate-300 group-hover:text-slate-500 group-hover:translate-x-1 transition-all" />
        </button>

      </div>



      {/* Modals */}
      
      {/* 1. Search Help */}
      <InfoModal isOpen={modalState === 'search-help'} onClose={() => setModalState(null)} title={t.modals.searchHelp.title}>
        <div className="flex flex-col gap-4">
          {t.modals.searchHelp.items.map((item: any, i: number) => {
             const icons = [Search, Edit3, IdCard];
             const colors = ['text-blue-600', 'text-purple-600', 'text-emerald-600'];
             const bgs = ['bg-blue-50', 'bg-purple-50', 'bg-emerald-50'];
             const Icon = icons[i] || Search;
             return (
               <div key={i} className={`p-4 ${bgs[i]} border border-slate-100 rounded-2xl flex items-start gap-3`}>
                 <div className="bg-white p-1.5 rounded-lg shadow-sm flex-shrink-0"><Icon size={18} className={colors[i]} /></div>
                 <span className="text-[14px] font-semibold text-slate-700 leading-relaxed"><strong className={`block mb-1 text-[15px] ${colors[i].replace('text-', 'text-').replace('-600', '-900')}`}>{item.title}</strong>{item.desc}</span>
               </div>
             );
          })}
        </div>
      </InfoModal>

      {/* 2. All Issues */}
      <InfoModal isOpen={modalState === 'all-issues'} onClose={() => setModalState(null)} title={t.modals.troubleshooting.title}>
        <div className="flex flex-col gap-4">
          <p className="text-[14px] text-slate-600 font-bold mb-1">{t.modals.troubleshooting.subtitle}</p>
          
          {t.modals.troubleshooting.items.map((issue: any, i: number) => {
            const icons = [User, FileWarning, Clock, ShieldAlert, Edit3];
            const colors = ["text-blue-600", "text-red-600", "text-amber-600", "text-orange-600", "text-purple-600"];
            const bgs = ["bg-blue-50", "bg-red-50", "bg-amber-50", "bg-orange-50", "bg-purple-50"];
            const borders = ["border-blue-100", "border-red-100", "border-amber-100", "border-orange-100", "border-purple-100"];
            const Icon = icons[i] || HelpCircle;
            
            return (
              <div key={i} className={`p-4 border ${borders[i]} rounded-2xl flex items-start gap-4 ${bgs[i]}`}>
                 <div className="bg-white p-2 rounded-xl shadow-sm"><Icon size={20} className={`${colors[i]}`} /></div>
                 <div>
                   <strong className={`block text-[14px] mb-1 leading-tight ${colors[i].replace('text-', 'text-').replace('-600', '-900')}`}>{issue.title}</strong>
                   <span className="text-[12px] font-bold text-slate-500 leading-relaxed">{issue.desc}</span>
                 </div>
              </div>
            );
          })}
          
          <button 
             onClick={() => window.dispatchEvent(new CustomEvent('open-chat'))}
             className="w-full mt-4 py-4 bg-slate-900 text-white font-bold text-[15px] rounded-2xl hover:bg-slate-800 flex items-center justify-center gap-3 shadow-lg active:scale-95 transition-all"
          >
             <HelpCircle size={20} /> {t.modals.troubleshooting.cta}
          </button>
        </div>
      </InfoModal>

      {/* 3. What you will see */}
      <InfoModal isOpen={modalState === 'what-you-see'} onClose={() => setModalState(null)} title={t.modals.resultsPreview.title}>
        <p className="text-[14px] text-slate-600 font-bold mb-5">{t.modals.resultsPreview.subtitle}</p>
        <ul className="flex flex-col gap-4">
          {t.modals.resultsPreview.items.map((item: any, i: number) => {
             const icons = [MapPin, Navigation, FileText, User, CheckCircle];
             const colors = ["text-emerald-600", "text-blue-600", "text-amber-600", "text-purple-600", "text-orange-600"];
             const bgs = ["bg-emerald-50", "bg-blue-50", "bg-amber-50", "bg-purple-50", "bg-orange-50"];
             const Icon = icons[i] || CheckCircle;
             return (
               <li key={i} className={`flex items-start gap-4 p-4 border border-slate-100 rounded-2xl ${bgs[i]}/30 shadow-sm`}>
                  <div className="bg-white p-2 rounded-xl shadow-sm flex-shrink-0"><Icon size={20} className={colors[i]} /></div>
                  <div>
                    <strong className="block text-[14px] text-slate-800 mb-1 leading-tight">{item.title}</strong>
                    <span className="text-[12px] font-bold text-slate-500 leading-relaxed">{item.desc}</span>
                  </div>
               </li>
             );
          })}
        </ul>
      </InfoModal>

      {/* 4. Advanced Options */}
      <InfoModal isOpen={modalState === 'advanced-options'} onClose={() => setModalState(null)} title={t.modals.advanced.title}>
        <p className="text-[14px] text-slate-600 font-bold mb-5 leading-relaxed">{t.modals.advanced.subtitle}</p>
        <div className="flex flex-col gap-4">
          {t.modals.advanced.links.map((link: any, i: number) => {
            const icons = [FileText, User, MapPin];
            const colors = ['text-blue-600', 'text-purple-600', 'text-emerald-600'];
            const bgs = ['bg-blue-100', 'bg-purple-100', 'bg-emerald-100'];
            const Icon = icons[i] || FileText;
            
            return (
              <a key={i} href={link.link} target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 p-4 bg-white border-2 border-slate-50 rounded-2xl hover:border-blue-200 hover:bg-blue-50/30 transition-all group shadow-sm">
                <div className={`p-3 bg-slate-100 rounded-xl group-hover:${bgs[i]} text-slate-500 group-hover:${colors[i]} transition-all`}><Icon size={22} /></div>
                <div className="flex-1">
                  <strong className={`block text-[15px] text-slate-800 group-hover:${colors[i].replace('-600', '-900')} leading-tight mb-1`}>{link.title}</strong>
                  <span className="text-[12px] font-bold text-slate-500">{link.desc}</span>
                </div>
                <ExternalLink size={18} className="text-slate-300 group-hover:text-blue-500 transition-all" />
              </a>
            );
          })}
        </div>
      </InfoModal>

    </main>
  );
};
