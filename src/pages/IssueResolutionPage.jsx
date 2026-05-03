import React, { useState } from 'react';
import { 
  ChevronLeft, 
  ShieldAlert, 
  CheckCircle2, 
  MapPin, 
  UserCircle, 
  Fingerprint, 
  ArrowRight,
  Send,
  Star,
  AlertCircle
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import feedbackHeroImg from '../assets/feedback-hero.png';

export const IssueResolutionPage = ({ t }) => {
  const navigate = useNavigate();
  const [selectedCat, setSelectedCat] = useState(null);
  const [rating, setRating] = useState(0);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [comment, setComment] = useState('');

  if (!t) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  const FEEDBACK_CATEGORIES = [
    { id: 'booth', label: t.sections.categories.items[0], icon: MapPin, color: 'text-emerald-600', bg: 'bg-emerald-50' },
    { id: 'registration', label: t.sections.categories.items[1], icon: UserCircle, color: 'text-blue-600', bg: 'bg-blue-50' },
    { id: 'voting', label: t.sections.categories.items[2], icon: Fingerprint, color: 'text-purple-600', bg: 'bg-purple-50' },
    { id: 'staff', label: t.sections.categories.items[3], icon: UserCircle, color: 'text-orange-600', bg: 'bg-orange-50' }
  ];

  if (isSubmitted) {
    return (
      <main className="flex-1 flex flex-col items-center justify-center bg-white px-8 text-center pb-20 h-screen">
        <div className="w-24 h-24 bg-emerald-50 text-emerald-500 rounded-full flex items-center justify-center mb-6 animate-bounce">
          <CheckCircle2 size={48} />
        </div>
        <h1 className="text-[28px] font-extrabold text-slate-900 mb-4 tracking-tight leading-tight whitespace-pre-line">
          {t.success.title}
        </h1>
        <p className="text-[15px] text-slate-500 font-medium mb-10 leading-relaxed">
          {t.success.subtitle}
        </p>
        <button 
          onClick={() => navigate('/')}
          className="w-full bg-slate-900 text-white py-4 rounded-2xl font-bold shadow-lg active:scale-95 transition-all"
        >
          {t.success.button}
        </button>
      </main>
    );
  }

  return (
    <main id="main-content" className="flex-1 flex flex-col bg-[#F9FAFB] pb-24 relative overflow-x-hidden">
      
      {/* Header */}
      <div className="px-5 pt-8 pb-10 relative overflow-hidden bg-white">
        <div className="w-[65%] relative z-10">
          <button 
            onClick={() => navigate(-1)}
            className="w-10 h-10 rounded-full border border-slate-100 flex items-center justify-center text-slate-400 mb-6 bg-white shadow-sm"
          >
            <ChevronLeft size={20} />
          </button>
          <h1 className="text-[32px] font-extrabold text-[#1A237E] leading-[1.1] tracking-tight">
            {t.hero.title}
          </h1>
          <p className="text-[14px] text-slate-500 mt-3 max-w-[240px] leading-relaxed font-medium">
            {t.hero.subtitle}
          </p>
        </div>
        
        {/* Right Illustration */}
        <div className="absolute top-0 right-0 bottom-0 w-[45%] pointer-events-none flex items-center justify-end z-0 pr-2">
          <img src={feedbackHeroImg} alt="Feedback Illustration" className="w-full h-auto max-h-[140px] object-contain object-right" />
        </div>
      </div>

      <div className="px-5 mt-6 flex flex-col gap-8">
        
        {/* Section 1: Categories */}
        <section>
          <h3 className="text-[17px] font-bold text-slate-800 mb-4 tracking-tight">{t.sections.categories.title}</h3>
          <div className="grid grid-cols-2 gap-3">
            {FEEDBACK_CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCat(cat.id)}
                className={`flex flex-col items-center gap-3 p-5 rounded-[24px] border transition-all ${
                  selectedCat === cat.id 
                  ? `bg-white border-indigo-200 ring-4 ring-indigo-50 shadow-md` 
                  : 'bg-white border-slate-100 hover:border-slate-200 shadow-sm'
                }`}
              >
                <div className={`w-12 h-12 rounded-full ${cat.bg} ${cat.color} flex items-center justify-center shadow-sm border border-white`}>
                  <cat.icon size={22} />
                </div>
                <span className={`text-[13px] font-bold ${selectedCat === cat.id ? 'text-indigo-600' : 'text-slate-600'}`}>
                  {cat.label}
                </span>
              </button>
            ))}
          </div>
        </section>

        {/* Section 2: Rating */}
        <section className="bg-white p-6 rounded-[32px] border border-slate-100 shadow-sm">
          <h3 className="text-[17px] font-bold text-slate-800 mb-2 tracking-tight">{t.sections.rating.title}</h3>
          <p className="text-[12px] text-slate-400 font-bold mb-6">{t.sections.rating.subtitle}</p>
          
          <div className="flex justify-between px-2">
            {[1, 2, 3, 4, 5].map((star) => (
              <button
                key={star}
                onClick={() => setRating(star)}
                className={`p-2 transition-transform active:scale-90 ${rating >= star ? 'text-amber-400 scale-110' : 'text-slate-200'}`}
              >
                <Star size={32} fill={rating >= star ? 'currentColor' : 'none'} strokeWidth={2.5} />
              </button>
            ))}
          </div>
        </section>

        {/* Section 3: Detailed Feedback */}
        <section>
          <h3 className="text-[17px] font-bold text-slate-800 mb-4 tracking-tight">{t.sections.comment.title}</h3>
          <textarea
            placeholder={t.sections.comment.placeholder}
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            className="w-full h-32 p-4 bg-white border border-slate-200 rounded-[24px] text-[15px] font-medium placeholder:text-slate-300 focus:outline-none focus:ring-4 focus:ring-indigo-50 shadow-sm transition-all resize-none"
          />
        </section>

        {/* Info Card */}
        <div className="p-4 bg-orange-50 border border-orange-100 rounded-[20px] flex items-start gap-3">
          <AlertCircle size={20} className="text-orange-500 shrink-0 mt-0.5" />
          <p className="text-[12px] text-orange-800 font-bold leading-relaxed">
            {t.sections.disclaimer.text}
          </p>
        </div>

        {/* Submit Button */}
        <button 
          onClick={handleSubmit}
          disabled={!rating && !comment}
          className="w-full bg-slate-900 text-white py-4 rounded-2xl font-bold text-[16px] shadow-lg flex items-center justify-center gap-3 disabled:bg-slate-200 disabled:text-slate-400 transition-all active:scale-[0.98] mb-10"
        >
          {t.sections.submit} <Send size={18} />
        </button>
      </div>
    </main>
  );
};
