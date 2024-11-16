import { ExternalLink, Code } from 'lucide-react';
import { SECTIONS } from './sections';

// For navbar items
export const NAV_ITEMS = Object.values(SECTIONS).map((section) => section.navItem);

export const BUTTON_ICONS = {
  viewProject: ExternalLink,
  code: Code,
};
