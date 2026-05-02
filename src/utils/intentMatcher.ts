import faqData from '../data/faqs_full.json';
import { ROUTES } from '../lib/routes';

export interface FAQ {
  question: string;
  answer: string;
  keywords?: string[];
  search_text?: string;
  category?: string;
}

export interface FAQData {
  tabs: {
    id: string;
    label: string;
    faqs: FAQ[];
  }[];
}

export interface RouteMatch {
  keywords: string[];
  route: string;
  title: string;
}

/**
 * Finds a matching FAQ based on user input.
 * @param query The user input query.
 * @returns The best matching FAQ or null.
 */
export const findFAQMatch = (query: string): FAQ | null => {
  if (!query) return null;
  const q = query.toLowerCase();
  let bestMatch: FAQ | null = null;
  let maxScore = 0;

  (faqData as FAQData).tabs.forEach(tab => {
    tab.faqs.forEach(faq => {
      let score = 0;
      if (faq.question.toLowerCase().includes(q)) score += 10;
      if (faq.search_text?.toLowerCase().includes(q)) score += 5;
      if (faq.keywords?.some(k => q.includes(k.toLowerCase()))) score += 2;
      
      if (score > maxScore) {
        maxScore = score;
        bestMatch = faq;
      }
    });
  });

  return maxScore >= 5 ? bestMatch : null;
};

/**
 * Finds a matching route based on keywords.
 * @param query The user input query.
 * @returns The matching page object or null.
 */
export const findRouteMatch = (query: string): RouteMatch | null => {
  if (!query) return null;
  const q = query.toLowerCase();
  const pageMap: RouteMatch[] = [
    { keywords: ['register', 'form 6', 'new voter', 'apply', 'enroll'], route: ROUTES.REGISTER, title: 'Register as a Voter' },
    { keywords: ['status', 'track', 'application', 'reference', 'pending'], route: ROUTES.STATUS, title: 'Track Application Status' },
    { keywords: ['list', 'name', 'check name', 'epic', 'search', 'electoral roll'], route: ROUTES.CHECK_VOTER_LIST, title: 'Check Voter List' },
    { keywords: ['update', 'correct', 'change', 'details', 'form 8'], route: ROUTES.UPDATE_DETAILS, title: 'Update Voter Details' },
    { keywords: ['vote', 'how to vote', 'process', 'booth', 'evm', 'vvpat'], route: ROUTES.VOTING_PROCESS, title: 'Voting Process' },
    { keywords: ['understand', 'learn', 'how it works', 'about elections'], route: ROUTES.HOW_ELECTIONS_WORK, title: 'Understand Elections' },
    { keywords: ['updates', 'news', 'announcement', 'latest'], route: ROUTES.UPDATES, title: 'Latest Updates' },
    { keywords: ['faq', 'frequently asked', 'help'], route: ROUTES.FAQ, title: 'FAQs' }
  ];

  for (const page of pageMap) {
    if (page.keywords.some(k => q.includes(k))) {
      return page;
    }
  }

  return null;
};
