// src/components/sections/Sections.jsx
import { Section } from '../Section';
import { SECTIONS } from '../../constants/sections';
import { About } from './About';
import { Contact } from './Contact';
import { Portfolio } from './Portfolio';
import { Skills } from './Skills';

const SECTION_CONTENTS = {
  about: About,
  skills: Skills,
  portfolio: Portfolio,
  contact: Contact,
};

export const Sections = () => {
  return Object.values(SECTIONS).map((section) => {
    const ContentComponent = SECTION_CONTENTS[section.component];

    return (
      <Section
        key={section.id}
        id={section.id}
        title={section.title}
        titleStyles={section.titleStyles}
        contentStyles={section.contentStyles}>
        <ContentComponent />
      </Section>
    );
  });
};
