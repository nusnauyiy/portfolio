import { Section } from '../Section';
import { SECTIONS } from '../../constants/sections';
import { About } from './About';
import { Contact } from './Contact';
import { Portfolio } from './Portfolio';
import { Skills } from './Skills';

const SECTION_CONTENTS = {
  About,
  Skills,
  Portfolio,
  Contact,
};

export const Sections = () => {
  return Object.values(SECTIONS).map((section) => {
    const ContentComponent = SECTION_CONTENTS[section.id];

    return (
      <Section
        key={section.id}
        id={section.id}
        title={section.title}
        titleStyles={section.titleStyles}
        contentStyles={section.contentStyles}
        containerStyles={section.containerStyles}>
        <ContentComponent />
      </Section>
    );
  });
};
