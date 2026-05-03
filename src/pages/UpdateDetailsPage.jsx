import React, { useState } from "react";
import {
  ChevronRight,
  Search,
  Edit3,
  HelpCircle,
  X,
  ExternalLink,
  User,
  Home,
  Camera,
  Info,
  CheckCircle2,
  Clock,
  MapPin,
  AlertCircle,
  FileText,
  FileEdit,
  MessageSquare,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../lib/routes";
import updateHeroImg from "../assets/update-hero.png";

// Reusable Modal Component
const InfoModal = ({ isOpen, onClose, title, children }) => {
  if (!isOpen) return null;
  return (
    <div
      className="fixed inset-0 z-[110] flex items-center justify-center p-4 bg-slate-900/40 backdrop-blur-sm animate-fade-in"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-[28px] w-[80%] md:w-[48%] shadow-2xl overflow-hidden animate-slide-up"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="px-6 py-5 border-b border-slate-100 flex justify-between items-center bg-slate-50/50">
          <h3 className="font-bold text-slate-800 text-[18px]">{title}</h3>
          <button
            onClick={onClose}
            className="p-2 text-slate-400 hover:bg-slate-200 rounded-full transition-colors"
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

export const UpdateDetailsPage = ({ t }) => {
  const navigate = useNavigate();
  const [modalState, setModalState] = useState(null); // 'all-issues' | null

  if (!t) return null;

  return (
    <main
      id="main-content"
      className="flex-1 flex flex-col bg-[#F9FAFB] pb-24 relative overflow-x-hidden"
    >
      {/* Hero Section */}
      <div className="pt-6 pb-10 relative">
        <div className="w-[65%] relative z-10">
          <h2 className="text-[32px] font-extrabold text-[#111827] leading-[1.1] tracking-tight whitespace-pre-line">
            {t.hero.title}
          </h2>
          <p className="text-[14px] text-slate-500 mt-4 max-w-[220px] leading-relaxed font-medium">
            {t.hero.subtitle}
          </p>

          <div className="mt-8 flex flex-col gap-4">
            <a
              href="https://voters.eci.gov.in/login"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-between bg-[#1C51E3] text-white pl-5 pr-4 py-4 rounded-[20px] text-[15px] font-bold shadow-xl shadow-blue-600/20 hover:bg-blue-700 transition-all active:scale-95 w-full max-w-[300px] whitespace-nowrap"
            >
              <div className="flex items-center gap-3">
                <Edit3 size={22} strokeWidth={2.5} />
                <span>{t.hero.button}</span>
              </div>
              <ChevronRight
                size={20}
                className="opacity-70 group-hover:translate-x-1 transition-transform"
              />
            </a>

            <p className="text-[12px] text-slate-500 font-bold px-1">
              {t.hero.officialPortalsNote}
            </p>

            <a
              href="https://voters.eci.gov.in/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-[13px] font-bold text-blue-600 hover:text-blue-800 transition-colors px-1"
            >
              <ExternalLink size={16} />
              <span>{t.hero.officialPortal}</span>
            </a>

            <button
              onClick={() => navigate(ROUTES.STATUS)}
              className="flex items-center gap-2 text-[13px] font-bold text-[#146A4A] hover:text-[#0f543a] transition-colors px-1"
            >
              <Clock size={16} />
              <span>{t.hero.checkStatus}</span>
            </button>
          </div>
        </div>

        {/* Hero Image */}
        <div className="absolute top-0 right-0 bottom-0 w-[45%] pointer-events-none flex items-center justify-end z-0 pr-2">
          <img
            src={updateHeroImg}
            alt="Update Details"
            className="w-full h-auto max-h-[140px] object-contain object-right"
          />
        </div>
      </div>

      <div className="flex flex-col gap-6 relative z-10">
        {/* Section 1: What do you want to update? */}
        <div className="flex flex-col gap-4">
          <h3 className="font-bold text-[17px] text-slate-800 tracking-tight">
            {t.sections.categories.title}
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {/* Address Change */}
            <div className="bg-emerald-50/30 border border-emerald-100 p-5 rounded-[24px] flex flex-col items-center text-center shadow-sm">
              <div className="w-12 h-12 rounded-full bg-emerald-100/80 flex items-center justify-center text-emerald-600 shadow-sm mb-4">
                <Home size={24} />
              </div>
              <h4 className="font-bold text-emerald-900 text-[15px] mb-2">
                {t.sections.categories.items[0].title}
              </h4>
              <p className="text-[12px] text-slate-600 font-medium leading-relaxed whitespace-pre-line">
                {t.sections.categories.items[0].desc}
              </p>
            </div>

            {/* Name Correction */}
            <div className="bg-purple-50/30 border border-purple-100 p-5 rounded-[24px] flex flex-col items-center text-center shadow-sm">
              <div className="w-12 h-12 rounded-full bg-purple-100/80 flex items-center justify-center text-purple-600 shadow-sm mb-4">
                <User size={24} />
              </div>
              <h4 className="font-bold text-purple-900 text-[15px] mb-2">
                {t.sections.categories.items[1].title}
              </h4>
              <p className="text-[12px] text-slate-600 font-medium leading-relaxed whitespace-pre-line">
                {t.sections.categories.items[1].desc}
              </p>
            </div>

            {/* Photo Update */}
            <div className="bg-orange-50/30 border border-orange-100 p-5 rounded-[24px] flex flex-col items-center text-center shadow-sm">
              <div className="w-12 h-12 rounded-full bg-orange-100/80 flex items-center justify-center text-orange-600 shadow-sm mb-4">
                <Camera size={24} />
              </div>
              <h4 className="font-bold text-orange-900 text-[15px] mb-2">
                {t.sections.categories.items[2].title}
              </h4>
              <p className="text-[12px] text-slate-600 font-medium leading-relaxed whitespace-pre-line">
                {t.sections.categories.items[2].desc}
              </p>
            </div>
          </div>
        </div>

        {/* Important Note */}
        <div className="bg-blue-50 border border-blue-100 rounded-[20px] p-4 flex gap-4 items-center shadow-sm">
          <div className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center flex-shrink-0">
            <Info size={20} />
          </div>
          {t.sections.whatToUpdate.items.map((item, idx) => {
            const icons = [Home, FileEdit, User];
            const Icon = icons[idx] || Edit3;
            const bgs = [
              "bg-blue-50/50",
              "bg-emerald-50/50",
              "bg-purple-50/50",
            ];
            const borders = [
              "border-blue-100",
              "border-emerald-100",
              "border-purple-100",
            ];
            const iconColors = [
              "text-blue-500",
              "text-emerald-500",
              "text-purple-500",
            ];
            const iconBgs = [
              "bg-blue-100/50",
              "bg-emerald-100/50",
              "bg-purple-100/50",
            ];
            const textColors = [
              "text-blue-900",
              "text-emerald-900",
              "text-purple-900",
            ];

            return (
              <div
                key={idx}
                className={`${bgs[idx]} border ${borders[idx]} p-4 rounded-[20px] flex flex-col items-center text-center relative overflow-hidden transition-all hover:shadow-md`}
              >
                <div
                  className={`absolute top-0 right-0 w-16 h-16 ${iconBgs[idx]} rounded-bl-full -mr-4 -mt-4 z-0`}
                ></div>
                <div
                  className={`w-12 h-12 rounded-full bg-white flex items-center justify-center ${iconColors[idx]} mb-3 shadow-sm relative z-10`}
                >
                  <Icon size={20} strokeWidth={2.5} />
                </div>
                <h4
                  className={`text-[14px] font-bold ${textColors[idx]} mb-2 relative z-10`}
                >
                  {item.title}
                </h4>
                <p className="text-[11px] text-slate-600 leading-relaxed font-medium relative z-10 whitespace-pre-line">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>

        <div className="mt-5 bg-amber-50/80 border border-amber-100 rounded-xl p-3 flex gap-3 items-start">
          <div className="text-amber-500 mt-0.5">
            <AlertCircle size={18} className="fill-amber-100" />
          </div>
          <p className="text-[12px] text-slate-700 font-semibold leading-snug">
            {t.sections.importantNote}
          </p>
        </div>
      </div>

      {/* Section 2: Quick Help */}
      <div className="flex flex-col gap-4 mb-6 relative z-10">
        <h3 className="font-bold text-[17px] text-slate-800 tracking-tight pl-1">
          {t.sections.quickHelp.title}
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {t.sections.quickHelp.items.map((item, idx) => {
            const icons = [AlertCircle, MapPin, Search];
            const Icon = icons[idx] || Edit3;

            return (
              <div
                key={idx}
                className="bg-white border border-slate-100 rounded-[20px] p-5 flex flex-col shadow-[0_2px_15px_-5px_rgba(0,0,0,0.03)]"
              >
                <div className="flex items-start gap-3 mb-2">
                  <div className="mt-0.5 text-[#1C51E3]">
                    <Icon size={18} strokeWidth={2.5} />
                  </div>
                  <h4 className="font-bold text-[14px] text-slate-800 leading-tight">
                    {item.title}
                  </h4>
                </div>
                <p className="text-[13px] text-slate-500 font-medium pl-7 leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}

          {/* More Help Card */}
          <div
            onClick={() => setModalState("troubleshoot")}
            className="bg-[#111827] rounded-[20px] p-5 flex flex-col justify-between items-start cursor-pointer hover:bg-slate-800 transition-all group shadow-md"
          >
            <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white mb-3 group-hover:scale-110 transition-transform">
              <HelpCircle size={20} strokeWidth={2.5} />
            </div>
            <div>
              <h4 className="font-bold text-[15px] text-white mb-1">
                {t.sections.quickHelp.moreHelp.title}
              </h4>
              <p className="text-[12px] text-slate-400 font-medium">
                {t.sections.quickHelp.moreHelp.subtitle}
              </p>
            </div>
            <div className="self-end mt-4 bg-white/10 px-4 py-2 rounded-full flex items-center gap-2 group-hover:bg-white/20 transition-colors">
              <span className="text-[12px] font-bold text-white">
                {t.sections.quickHelp.moreHelp.button}
              </span>
              <ChevronRight size={14} className="text-white" />
            </div>
          </div>
        </div>
      </div>

      {/* Section 3: How it works */}
      <div className="grid grid-cols-1 bg-white p-6 rounded-[24px] border border-slate-100 shadow-[0_4px_25px_-5px_rgba(0,0,0,0.04)] mb-6 relative z-10">
        <div>
          <h3 className="font-bold text-[16px] text-slate-800 mb-6">
            {t.sections.howItWorks.title}
          </h3>
          <ul className="flex flex-col gap-5">
            {t.sections.howItWorks.steps.map((item, idx) => (
              <li key={idx} className="flex gap-4">
                <div className="w-6 h-6 rounded-full bg-[#146A4A] text-white flex items-center justify-center text-[11px] font-bold flex-shrink-0 mt-0.5 shadow-sm">
                  {idx + 1}
                </div>
                <div className="flex-1 pb-4 border-b border-slate-50 last:border-0 last:pb-0">
                  <h4 className="text-[14px] font-bold text-slate-800 leading-tight mb-1">
                    {item.title}
                  </h4>
                  <p className="text-[12px] text-slate-500 font-medium leading-snug">
                    {item.description}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Section 4: What Happens After */}
      <div className="bg-white p-5 rounded-[24px] shadow-[0_4px_25px_-5px_rgba(0,0,0,0.04)] border border-slate-100 mb-4 relative z-10">
        <div className="flex items-center justify-between mb-5">
          <h3 className="font-bold text-[17px] text-slate-800 tracking-tight">
            {t.sections.afterUpdate.title}
          </h3>
          <div className="bg-orange-50 text-orange-600 text-[11px] font-bold px-3 py-1 rounded-full border border-orange-100 flex items-center gap-1.5 whitespace-nowrap">
            <Clock size={12} /> {t.sections.timeTaken.value}
          </div>
        </div>

        <div className="flex flex-col gap-4">
          {t.sections.afterUpdate.items.map((item, idx) => (
            <div key={idx} className="flex items-start gap-4">
              <div className="mt-0.5">
                <div className="w-6 h-6 rounded-full bg-[#F0FDF4] border border-emerald-200 text-emerald-600 flex items-center justify-center">
                  <CheckCircle2 size={14} strokeWidth={3} />
                </div>
              </div>
              <div className="flex-1 pb-4 border-b border-slate-100 last:border-0 last:pb-0">
                <h4 className="text-[14px] font-bold text-slate-800 mb-1">
                  {item.title}
                </h4>
                <p className="text-[13px] text-slate-500 font-medium">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modals */}
      <InfoModal
        isOpen={modalState === "troubleshoot"}
        onClose={() => setModalState(null)}
        title={t.modals.troubleshooting.title}
      >
        <div className="flex flex-col gap-4">
          <p className="text-[14px] text-slate-600 font-bold mb-1">
            {t.modals.troubleshooting.description}
          </p>

          {t.modals.troubleshooting.issues.map((issue, i) => {
            const icons = [AlertCircle, Clock, Edit3];
            const colors = [
              "text-red-600",
              "text-amber-600",
              "text-purple-600",
            ];
            const bgs = ["bg-red-50", "bg-amber-50", "bg-purple-50"];
            const Icon = icons[i] || AlertCircle;
            return (
              <div
                key={i}
                className="p-4 border border-slate-100 rounded-2xl flex items-start gap-4 bg-white shadow-sm"
              >
                <div className={`${bgs[i]} p-2 rounded-xl`}>
                  <Icon size={20} className={`${colors[i]}`} />
                </div>
                <div>
                  <strong className="block text-[14px] text-slate-800 mb-1 leading-tight">
                    {issue.title}
                  </strong>
                  <span className="text-[12px] font-bold text-slate-500 leading-relaxed">
                    {issue.description}
                  </span>
                </div>
              </div>
            );
          })}

          <button
            onClick={() => window.dispatchEvent(new CustomEvent("open-chat"))}
            className="w-full mt-4 py-4 bg-slate-900 text-white font-bold text-[15px] rounded-2xl hover:bg-slate-800 flex items-center justify-center gap-3 shadow-lg active:scale-95 transition-all"
          >
            <MessageSquare size={20} />{" "}
            {t.modals.troubleshooting.chatWithAssistant}
          </button>
        </div>
      </InfoModal>
    </main>
  );
};

export default UpdateDetailsPage;
