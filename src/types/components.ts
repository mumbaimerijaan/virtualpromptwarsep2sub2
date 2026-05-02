import { FAQ } from '../utils/intentMatcher';

export interface FAQItemProps {
  faq: FAQ;
  index: number;
  isOpen: boolean;
  onToggle: () => void;
}

export interface TabIcons {
  [key: string]: React.ComponentType<any>;
}
