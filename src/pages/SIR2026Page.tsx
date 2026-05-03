import React from 'react';
import { 
  Download, 
  Search, 
  ExternalLink, 
  Info, 
  AlertTriangle, 
  CheckCircle2, 
  ArrowRight,
  ShieldAlert,
  ClipboardList,
  FileText,
  UserCheck,
  ChevronRight,
  User,
  Building2
} from 'lucide-react';
import sirHeroImg from '../assets/updates-hero.png';
import { ECI_LINKS } from '../lib/constants';

export const SIR2026Page: React.FC = () => {
  return (
    <main id="main-content" className="flex-1 flex flex-col bg-[#F9FAFB] pb-32">
      {/* Header Section */}
      <div className="px-5 pt-8 pb-10 bg-white relative overflow-hidden">
        <div className="relative z-10 w-[60%]">
          <h1 className="text-[28px] font-extrabold text-[#1A237E] leading-tight">
            Special Intensive Revision (SIR) 2026
          </h1>
          <p className="text-[14px] text-slate-500 mt-3 leading-relaxed font-medium">
            Update or verify your voter details to avoid issues during elections.
          </p>
        </div>

        {/* Hero Illustration */}
        <div className="absolute top-0 right-0 w-[50%] h-full pointer-events-none flex items-center justify-end pr-2">
          <img 
            src={sirHeroImg} 
            alt="SIR 2026 Illustration" 
            className="w-full h-auto object-contain max-h-[160px]"
          />
        </div>
      </div>

      <div className="px-5 mt-6 flex flex-col gap-6">
        {/* Quick Access */}
        <div>
          <h2 className="text-[13px] font-bold text-slate-400 uppercase tracking-wider mb-4">Quick Access</h2>
          <div className="grid grid-cols-1 gap-4">
            {/* Download Voter List */}
            <a 
              href={ECI_LINKS.VOTER_LIST_DOWNLOAD} 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-4 bg-[#EEF2FF] rounded-[24px] border border-indigo-50 group hover:border-indigo-200 transition-all shadow-sm"
            >
              <div className="w-12 h-12 rounded-[18px] bg-indigo-600 flex items-center justify-center text-white">
                <Download size={22} />
              </div>
              <div className="flex-1">
                <h3 className="text-[15px] font-bold text-slate-800">Download Voter List</h3>
                <div className="flex items-center gap-1 mt-0.5">
                  <span className="text-[12px] font-bold text-indigo-600">Go to link</span>
                  <ChevronRight size={14} className="text-indigo-600 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </a>

            {/* Check Your Details */}
            <a 
              href={ECI_LINKS.SIR_CHECK} 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-4 bg-[#ECFDF5] rounded-[24px] border border-emerald-50 group hover:border-emerald-200 transition-all shadow-sm"
            >
              <div className="w-12 h-12 rounded-[18px] bg-emerald-600 flex items-center justify-center text-white">
                <Search size={22} />
              </div>
              <div className="flex-1">
                <h3 className="text-[15px] font-bold text-slate-800">Check Your Details (SIR)</h3>
                <div className="flex items-center gap-1 mt-0.5">
                  <span className="text-[12px] font-bold text-emerald-600">Go to link</span>
                  <ChevronRight size={14} className="text-emerald-600 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </a>

            {/* Official Portal */}
            <a 
              href={ECI_LINKS.ECI_ADVANCE_SEARCH} 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-4 bg-[#F5F3FF] rounded-[24px] border border-violet-50 group hover:border-violet-200 transition-all shadow-sm"
            >
              <div className="w-12 h-12 rounded-[18px] bg-violet-600 flex items-center justify-center text-white">
                <ExternalLink size={22} />
              </div>
              <div className="flex-1">
                <h3 className="text-[15px] font-bold text-slate-800">Official Portal</h3>
                <div className="flex items-center gap-1 mt-0.5">
                  <span className="text-[12px] font-bold text-violet-600">Go to link</span>
                  <ChevronRight size={14} className="text-violet-600 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </a>
          </div>
        </div>

        {/* What is SIR? */}
        <section className="bg-white rounded-[28px] border border-slate-100 p-6 shadow-sm">
          <div className="flex items-start gap-4 mb-5">
            <div className="w-12 h-12 rounded-[18px] bg-indigo-50 flex items-center justify-center text-indigo-600">
              <Info size={24} />
            </div>
            <div>
              <h2 className="text-[17px] font-bold text-slate-800">What is SIR?</h2>
              <p className="text-[14px] text-slate-500 mt-1 leading-relaxed">
                SIR (Special Intensive Revision) is a process by the Election Commission to verify and update the voter list.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-4 pt-4 border-t border-slate-50">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-blue-600 flex-shrink-0">
                <User size={20} />
              </div>
              <p className="text-[13px] font-bold text-slate-700">Only eligible voters are included</p>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-orange-50 flex items-center justify-center text-orange-600 flex-shrink-0">
                <ClipboardList size={20} />
              </div>
              <p className="text-[13px] font-bold text-slate-700">Incorrect or duplicate entries are removed</p>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-emerald-50 flex items-center justify-center text-emerald-600 flex-shrink-0">
                <CheckCircle2 size={20} />
              </div>
              <p className="text-[13px] font-bold text-slate-700">Your details are kept up to date</p>
            </div>
          </div>
        </section>

        {/* Why this matters */}
        <section className="bg-[#FFFBEB] rounded-[28px] border border-amber-100 p-6 shadow-sm">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-[18px] bg-white flex items-center justify-center text-amber-500 shadow-sm">
              <AlertTriangle size={24} />
            </div>
            <div>
              <h2 className="text-[17px] font-bold text-slate-800">Why this matters</h2>
              <p className="text-[14px] text-slate-600 mt-2 leading-relaxed">
                If your details are not correct or updated, your name may be missing from the voter list and you may face issues while voting.
              </p>
            </div>
          </div>
        </section>

        {/* Who should take action? */}
        <section className="bg-white rounded-[28px] border border-slate-100 p-6 shadow-sm">
          <div className="flex items-start gap-4 mb-6">
            <div className="w-12 h-12 rounded-[18px] bg-emerald-50 flex items-center justify-center text-emerald-600">
              <UserCheck size={24} />
            </div>
            <div>
              <h2 className="text-[17px] font-bold text-slate-800">Who should take action?</h2>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-6">
            {[
              "You recently moved to a new address",
              "You did not vote in previous elections",
              "You changed your name or details",
              "You received any notice from officials"
            ].map((text, i) => (
              <div key={i} className="flex items-center gap-3">
                <div className="flex-shrink-0 w-5 h-5 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600">
                  <CheckCircle2 size={12} strokeWidth={3} />
                </div>
                <span className="text-[13px] font-bold text-slate-600">{text}</span>
              </div>
            ))}
          </div>
        </section>

        {/* What should you do? */}
        <section>
          <h2 className="text-[17px] font-bold text-slate-800 mb-6 px-1">What should you do?</h2>
          <div className="flex flex-col gap-6 relative">
            {/* Steps connection line */}
            <div className="absolute left-6 top-6 bottom-6 w-0.5 bg-slate-100 md:hidden" aria-hidden="true" />
            
            <div className="flex gap-5 relative z-10">
              <div className="w-12 h-12 rounded-full bg-indigo-600 text-white flex items-center justify-center font-bold text-lg shadow-lg flex-shrink-0">1</div>
              <div className="flex-1 bg-white p-5 rounded-[24px] border border-slate-100 shadow-sm">
                <FileText className="text-indigo-600 mb-3" size={24} />
                <h3 className="text-[15px] font-bold text-slate-800 leading-snug">Check your name in the voter list</h3>
              </div>
            </div>

            <div className="flex gap-5 relative z-10">
              <div className="w-12 h-12 rounded-full bg-emerald-600 text-white flex items-center justify-center font-bold text-lg shadow-lg flex-shrink-0">2</div>
              <div className="flex-1 bg-white p-5 rounded-[24px] border border-slate-100 shadow-sm">
                <UserCheck className="text-emerald-600 mb-3" size={24} />
                <h3 className="text-[15px] font-bold text-slate-800 leading-snug">Verify your details</h3>
              </div>
            </div>

            <div className="flex gap-5 relative z-10">
              <div className="w-12 h-12 rounded-full bg-orange-600 text-white flex items-center justify-center font-bold text-lg shadow-lg flex-shrink-0">3</div>
              <div className="flex-1 bg-white p-5 rounded-[24px] border border-slate-100 shadow-sm">
                <AlertTriangle className="text-orange-600 mb-3" size={24} />
                <h3 className="text-[15px] font-bold text-slate-800 leading-snug">If incorrect, follow official instructions to update</h3>
              </div>
            </div>
          </div>
        </section>

        {/* Important Tip */}
        <div className="mt-4 p-6 bg-[#F5F3FF] border border-indigo-100 rounded-[28px] shadow-sm relative overflow-hidden">
          <div className="flex items-start gap-4 relative z-10">
            <div className="w-12 h-12 rounded-[18px] bg-white flex items-center justify-center text-indigo-600 shadow-sm flex-shrink-0">
              <ShieldAlert size={26} />
            </div>
            <div>
              <h3 className="text-[16px] font-bold text-indigo-900">Important Tip</h3>
              <p className="text-[13px] font-medium text-indigo-700/80 mt-1 leading-relaxed">
                Always use official ECI links. Avoid sharing personal details on unknown websites or with unauthorised persons.
              </p>
            </div>
          </div>
          {/* Subtle background decoration */}
          <div className="absolute right-[-20px] bottom-[-20px] opacity-[0.03] pointer-events-none scale-150">
            <Building2 size={120} className="text-indigo-900" />
          </div>
        </div>

        {/* Footer Note */}
        <div className="text-center py-4">
          <p className="text-[11px] font-bold text-slate-400 flex items-center justify-center gap-1.5 uppercase tracking-widest">
            <CheckCircle2 size={12} />
            Information simplified from official Election Commission sources
          </p>
        </div>
      </div>
    </main>
  );
};
