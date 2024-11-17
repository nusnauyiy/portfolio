import { ExternalLink, Code } from 'lucide-react';
import { SECTIONS } from '../components/sections/sectionsContents';

export const INITIALS = 'YS'

export const NAME = 'Suzette Sun'

export const SUBTITLE = "Software Engineer based in Vancouver"

export const NAV_ITEMS = Object.values(SECTIONS).map((section) => section.id);

export const BUTTON_ICONS = {
  viewProject: ExternalLink,
  code: Code,
};
