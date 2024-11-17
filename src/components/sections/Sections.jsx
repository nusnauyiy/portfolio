import { Section } from './BaseSection';
import { SECTIONS } from './sectionsContents';

export const Sections = () => {
  return Object.values(SECTIONS).map((section, index) => {
    const ContentComponent = section.component;

    return (
      <Section
        index={index}
        key={section.id}
        id={section.id}
        title={section.title}
        titleStyles={section.titleStyles}
        contentStyles={section.contentStyles}
      >
        <ContentComponent />
      </Section>
    );
  });
};
