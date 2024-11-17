import { ExternalLink, Code } from 'lucide-react';
import { SECTIONS } from './sections';

export const INITIALS = 'YS'

export const NAME = 'Suzette Sun'

export const SUBTITLE = "Full Stack Software Engineer"

export const NAV_ITEMS = Object.values(SECTIONS).map((section) => section.id);

export const BUTTON_ICONS = {
  viewProject: ExternalLink,
  code: Code,
};
