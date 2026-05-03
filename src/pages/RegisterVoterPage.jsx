import React, { useState } from 'react';
import { 
  CheckCircle2, 
  IdCard, 
  Home, 
  Calendar, 
  FileText, 
  CloudUpload, 
  Send, 
  User, 
  Search, 
  Edit3, 
  HelpCircle, 
  X, 
  ShieldCheck, 
  ExternalLink, 
  Clock, 
  ChevronRight, 
  AlertCircle 
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { ROUTES } from '../lib/routes';
import heroImg from '../assets/register-hero.png';

// Reusable Modal Component
const InfoModal = ({ isOpen, onClose, title, children }) => {
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 z-[110] flex items-center justify-center p-4 bg-slate-900/40 backdrop-blur-sm animate-fade-in" onClick={onClose}>
      <div 
        className="bg-white rounded-[24px] w-[80%] md:w-[48%] shadow-2xl overflow-hidden animate-slide-up"
        onClick={e => e.stopPropagation()}
      >
        <div className="px-5 py-4 border-b border-slate-100 flex justify-between items-center bg-slate-50">
          <h3 className="font-bold text-slate-800 text-[16px]">{title}</h3>
          <button onClick={onClose} className="p-1.5 text-slate-400 hover:bg-slate-200 rounded-full transition-colors">
            <X size={20} />
          </button>
        </div>
        <div className="p-5">
          {children}
        </div>
      </div>
    </div>
  );
};

export const RegisterVoterPage = ({ t }) => {
  const navigate = useNavigate();
  const [modalState, setModalState] = useState(null); // 'not-sure' | 'need-help' | 'apply-offline' | null

  if (!t) return null;

  return (
    <main id="main-content" className="flex-1 flex flex-col bg-[#F9FAFB] pb-24 relative overflow-x-hidden">
      
      {/* Top Header */}
      <header className="px-5 py-4 flex items-center justify-center sticky top-0 bg-[#F9FAFB]/90 backdrop-blur-md z-30">
        <h1 className="font-bold text-[16px] text-slate-800 text-center w-full">
          {t.title}
        </h1>
      </header>

      {/* Hero Section */}
      <div className="px-5 pt-2 pb-6 relative overflow-hidden">
        <div className="w-[60%] relative z-10 pt-4">
          <h2 className="text-[28px] font-extrabold text-[#111827] leading-[1.1] tracking-tight whitespace-pre-line">
            {t.hero.title}
          </h2>
          <p className="text-[13px] text-slate-500 mt-3 max-w-[200px] leading-relaxed font-medium">
            {t.hero.subtitle}
          </p>
          <a 
            href="https://voters.eci.gov.in/login" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 mt-5 bg-[#146A4A] text-white px-5 py-3 rounded-full text-[14px] font-bold shadow-lg shadow-green-900/20 hover:bg-[#0f543a] transition-colors"
          >
            {t.hero.button} <ExternalLink size={16} />
          </a>
        </div>
        
        {/* Right Illustration */}
        <div className="absolute top-0 right-0 bottom-0 w-[45%] pointer-events-none flex items-center justify-end z-0 pr-2">
          <img src={heroImg} alt="Registration Illustration" className="w-full h-auto max-h-[140px] object-contain object-right" />
        </div>
      </div>

      <div className="px-4 flex flex-col gap-4 relative z-10 pb-10">
        
        {/* Card 1: Eligibility */}
        <div className="bg-white p-5 rounded-[20px] shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] border border-slate-100">
          <div className="flex justify-between items-start mb-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-emerald-50 text-emerald-500 rounded-full flex items-center justify-center border border-emerald-100/50 flex-shrink-0">
                <ShieldCheck size={24} strokeWidth={2.5} />
              </div>
              <h3 className="font-bold text-[16px] text-slate-800">{t.sections.eligibility.title}</h3>
            </div>
            <button 
              onClick={() => setModalState('not-sure')}
              className="text-blue-600 text-[12px] font-bold mt-1 hover:underline whitespace-nowrap"
            >
              {t.sections.eligibility.notSure}
            </button>
          </div>
          
          <div className="pl-1">
            <p className="text-[13px] text-slate-600 font-medium mb-3">{t.sections.eligibility.subtitle}</p>
            <ul className="flex flex-col gap-2.5">
              {t.sections.eligibility.points.map((text, i) => (
                <li key={i} className="flex items-start gap-2">
                  <CheckCircle2 size={16} className="text-emerald-500 mt-0.5 flex-shrink-0" />
                  <span className="text-[13px] text-slate-700 leading-snug font-medium">{text}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Card 2: Documents */}
        <div className="bg-white p-5 rounded-[20px] shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] border border-slate-100">
          <div className="flex justify-between items-center mb-4">
            <h3 className="font-bold text-[16px] text-slate-800">{t.sections.documents.title}</h3>
            <button 
              onClick={() => setModalState('need-help')}
              className="text-blue-600 text-[12px] font-bold flex items-center hover:underline"
            >
              {t.sections.documents.needHelp} <ChevronRight size={14} />
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {/* Identity Proof */}
            <div className="bg-purple-50/50 border border-purple-100 rounded-[16px] p-3 flex flex-col items-center text-center relative overflow-hidden">
              <div className="absolute top-0 right-0 w-16 h-16 bg-purple-100/50 rounded-bl-full -mr-4 -mt-4 z-0"></div>
              <IdCard size={24} className="text-purple-500 mb-2 relative z-10" />
              <h4 className="text-[12px] font-bold text-purple-700 mb-1 relative z-10">{t.sections.documents.items.identity.title}</h4>
              <p className="text-[10px] text-slate-600 leading-tight mb-3 flex-1 relative z-10">{t.sections.documents.items.identity.description}</p>
              <span className="text-[9px] font-bold text-purple-600 border border-purple-200 bg-white px-3 py-1 rounded-full relative z-10 shadow-sm">{t.sections.documents.items.identity.requirement}</span>
            </div>
            {/* Address Proof */}
            <div className="bg-blue-50/50 border border-blue-100 rounded-[16px] p-3 flex flex-col items-center text-center relative overflow-hidden">
              <div className="absolute top-0 right-0 w-16 h-16 bg-blue-100/50 rounded-bl-full -mr-4 -mt-4 z-0"></div>
              <Home size={24} className="text-blue-500 mb-2 relative z-10" />
              <h4 className="text-[12px] font-bold text-blue-700 mb-1 relative z-10">{t.sections.documents.items.address.title}</h4>
              <p className="text-[10px] text-slate-600 leading-tight mb-3 flex-1 relative z-10">{t.sections.documents.items.address.description}</p>
              <span className="text-[9px] font-bold text-blue-600 border border-blue-200 bg-white px-3 py-1 rounded-full relative z-10 shadow-sm">{t.sections.documents.items.address.requirement}</span>
            </div>
            {/* Age Proof */}
            <div className="bg-orange-50/50 border border-orange-100 rounded-[16px] p-3 flex flex-col items-center text-center relative overflow-hidden">
              <div className="absolute top-0 right-0 w-16 h-16 bg-orange-100/50 rounded-bl-full -mr-4 -mt-4 z-0"></div>
              <Calendar size={24} className="text-orange-500 mb-2 relative z-10" />
              <h4 className="text-[12px] font-bold text-orange-700 mb-1 relative z-10">{t.sections.documents.items.age.title}</h4>
              <p className="text-[10px] text-slate-600 leading-tight mb-3 flex-1 relative z-10">{t.sections.documents.items.age.description}</p>
              <span className="text-[9px] font-bold text-orange-600 border border-orange-200 bg-white px-3 py-1 rounded-full relative z-10 shadow-sm">{t.sections.documents.items.age.requirement}</span>
            </div>
          </div>
          <p className="text-[11px] text-slate-500 font-medium text-center mt-3 bg-slate-50 py-1.5 rounded-lg border border-slate-100">
            {t.sections.documents.note}
          </p>
        </div>

        {/* Card 3: How to Apply */}
        <div className="bg-white p-5 rounded-[20px] shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] border border-slate-100">
          <div className="flex justify-between items-center mb-6">
            <h3 className="font-bold text-[16px] text-slate-800">{t.sections.howToApply.title}</h3>
            <button 
              onClick={() => setModalState('apply-offline')}
              className="text-blue-600 text-[12px] font-bold flex items-center hover:underline"
            >
              {t.sections.howToApply.offlineProcess}
            </button>
          </div>

          <div className="relative flex justify-between items-start px-2">
            {/* Connecting Dashed Line */}
            <div className="absolute top-5 left-8 right-8 h-0 border-t-2 border-dashed border-slate-200 z-0"></div>
            
            {/* Steps */}
            {[
              { num: 1, icon: FileText, color: 'text-emerald-500', bg: 'bg-emerald-50' },
              { num: 2, icon: CloudUpload, color: 'text-blue-500', bg: 'bg-blue-50' },
              { num: 3, icon: Send, color: 'text-purple-500', bg: 'bg-purple-50' },
              { num: 4, icon: User, color: 'text-orange-500', bg: 'bg-orange-50' },
            ].map((step, idx) => (
              <div key={step.num} className="relative z-10 flex flex-col items-center text-center w-1/4">
                <div className={`w-12 h-12 rounded-full ${step.bg} ${step.color} flex items-center justify-center mb-2 shadow-sm border border-white outline outline-4 outline-white`}>
                  <step.icon size={20} />
                </div>
                <div className="flex items-center justify-center gap-1 mb-1">
                  <span className="w-4 h-4 rounded-full bg-slate-800 text-white text-[9px] font-bold flex items-center justify-center">
                    {step.num}
                  </span>
                  <span className="text-[10px] font-bold text-slate-800 leading-tight">
                    {t.sections.howToApply.steps[idx].title}
                  </span>
                </div>
                <span className="text-[9px] text-slate-500 font-medium leading-tight px-1">
                  {t.sections.howToApply.steps[idx].description}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Card 4: What's Next? */}
        <div className="bg-white p-5 rounded-[20px] shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] border border-slate-100">
          <h3 className="font-bold text-[16px] text-slate-800 mb-5">{t.sections.whatsNext.title}</h3>
          
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-5">
            {[
              { icon: Search, color: 'text-emerald-500', bg: 'bg-emerald-50' },
              { icon: User, color: 'text-blue-500', bg: 'bg-blue-50' },
              { icon: IdCard, color: 'text-purple-500', bg: 'bg-purple-50' },
              { icon: CheckCircle2, color: 'text-orange-500', bg: 'bg-orange-50' },
            ].map((item, idx) => (
              <div key={idx} className="flex items-center gap-3">
                <div className={`w-10 h-10 rounded-full ${item.bg} ${item.color} flex items-center justify-center flex-shrink-0 shadow-sm border border-slate-100/50`}>
                  <item.icon size={18} />
                </div>
                <span className="text-[11px] font-bold text-slate-700 leading-tight">{t.sections.whatsNext.items[idx]}</span>
              </div>
            ))}
          </div>

          <div className="bg-orange-50/80 border border-orange-100 rounded-xl p-3 flex gap-3 items-start">
            <div className="text-orange-500 mt-0.5"><HelpCircle size={18} className="fill-orange-100" /></div>
            <p className="text-[12px] text-slate-700 font-medium leading-snug">
              {t.sections.whatsNext.note}
            </p>
          </div>

          <div className="mt-5 p-4 bg-indigo-50 border border-indigo-100 rounded-2xl flex flex-col gap-3 shadow-sm">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-white text-indigo-600 flex items-center justify-center shadow-sm"><Clock size={20} /></div>
              <p className="text-[14px] font-bold text-indigo-900 leading-tight">{t.sections.whatsNext.appliedHeader}</p>
            </div>
            <button 
              onClick={() => navigate(ROUTES.STATUS)}
              className="w-full py-3 bg-[#1A237E] text-white font-bold text-[14px] rounded-xl flex items-center justify-center gap-2 hover:bg-[#151b60] transition-all shadow-md shadow-indigo-900/10"
            >
              {t.sections.whatsNext.appliedButton} <ChevronRight size={18} />
            </button>
          </div>
        </div>

        {/* Card 5: Facing an issue? */}
        <div className="bg-white p-5 rounded-[20px] shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] border border-slate-100">
          <h3 className="font-bold text-[16px] text-slate-800 mb-4">{t.sections.facingIssue.title}</h3>
          
          <div className="grid grid-cols-2 gap-3">
            {t.sections.facingIssue.options.map((text, idx) => {
              const icons = [Clock, Edit3, IdCard, HelpCircle];
              const Icon = icons[idx] || HelpCircle;
              const colors = ['text-red-500', 'text-amber-500', 'text-blue-500', 'text-purple-500'];
              
              const links = [
                { link: ROUTES.STATUS, external: false },
                { link: 'open-chat', external: false },
                { link: ROUTES.UPDATE_DETAILS, external: false },
                { link: ROUTES.FAQ, external: false }
              ];
              const link = links[idx] || links[3];
              
              if (link.external) {
                return (
                  <a key={idx} href={link.link} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 p-3 bg-[#F9FAFB] rounded-xl hover:bg-slate-100 transition-colors border border-slate-100">
                    <Icon size={18} className={colors[idx]} />
                    <span className="text-[12px] font-bold text-slate-700 leading-tight">{text}</span>
                  </a>
                );
              }
              
              return (
                <button 
                  key={idx}
                  onClick={() => {
                    if (link.link === 'open-chat') window.dispatchEvent(new CustomEvent('open-chat'));
                    else navigate(link.link);
                  }}
                  className="flex items-center gap-3 p-3 bg-[#F9FAFB] rounded-xl hover:bg-slate-100 transition-colors border border-slate-100 text-left w-full"
                >
                  <Icon size={18} className={colors[idx]} />
                  <span className="text-[12px] font-bold text-slate-700 leading-tight">{text}</span>
                </button>
              );
            })}
          </div>
        </div>

      </div>

      {/* Modals */}
      <InfoModal isOpen={modalState === 'not-sure'} onClose={() => setModalState(null)} title={t.modals.notSure.title}>
        <div className="flex flex-col gap-3">
          {t.modals.notSure.items.map((item, idx) => {
            const icons = [CheckCircle2, Home, AlertCircle];
            const Icon = icons[idx] || CheckCircle2;
            const bgs = ['bg-emerald-50', 'bg-blue-50', 'bg-purple-50'];
            const borders = ['border-emerald-100', 'border-blue-100', 'border-purple-100'];
            const iconColors = ['text-emerald-600', 'text-blue-600', 'text-purple-600'];
            
            return (
              <div key={idx} className={`p-4 ${bgs[idx]} rounded-xl border ${borders[idx]} flex items-start gap-4`}>
                <div className={`mt-0.5 ${iconColors[idx]}`}>
                  <Icon size={20} />
                </div>
                <div className="flex flex-col">
                  <span className="font-bold text-slate-800 text-[13px]">{item.title}</span>
                  <span className="text-[12px] text-slate-500 leading-tight mt-1">{item.action}</span>
                </div>
              </div>
            );
          })}
        </div>
      </InfoModal>

      <InfoModal isOpen={modalState === 'need-help'} onClose={() => setModalState(null)} title={t.modals.commonProblems.title}>
        <div className="flex flex-col gap-4">
          {t.modals.commonProblems.items.map((item, idx) => (
            <div key={idx}>
              <div className="flex items-start gap-2 mb-1">
                <span className="text-red-500 font-bold text-[14px]">❌</span>
                <span className="text-[13px] font-bold text-slate-800">{item.title}</span>
              </div>
              {item.link ? (
                <a href={item.link} target="_blank" rel="noopener noreferrer" className="text-[13px] text-indigo-700 font-bold ml-6 bg-indigo-50 p-2.5 rounded-lg border border-indigo-200 flex items-center gap-1 hover:bg-indigo-100 transition-colors inline-flex shadow-sm">
                  {item.cta} <ExternalLink size={12} />
                </a>
              ) : (
                <p className="text-[13px] text-amber-700 ml-6 bg-amber-50 p-2.5 rounded-lg border border-amber-100 font-medium">{item.cta}</p>
              )}
            </div>
          ))}
        </div>
      </InfoModal>

      <InfoModal isOpen={modalState === 'apply-offline'} onClose={() => setModalState(null)} title={t.modals.offlineProcess.title}>
        <div className="flex flex-col gap-4">
          <p className="text-[13px] text-slate-600 leading-relaxed font-medium">
            {t.modals.offlineProcess.description}
          </p>
          <div className="flex flex-col gap-2">
            {t.modals.offlineProcess.locations.map((loc, idx) => (
              <div key={idx} className="flex items-center gap-3 p-3 bg-slate-50 border border-slate-100 rounded-xl">
                <div className="p-2 bg-white rounded-full text-slate-600 shadow-sm"><User size={18} /></div>
                <span className="text-[14px] font-bold text-slate-800">{loc}</span>
              </div>
            ))}
          </div>
        </div>
      </InfoModal>

    </main>
  );
};
