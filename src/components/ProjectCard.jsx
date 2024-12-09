import { ExternalLink, Code } from 'lucide-react';
import { styles } from '../styles/styles';

export const ProjectCard = ({ project, index, isVisible, isHidden, isPaper = false }) => {
  const reverse = index % 2 === 0
  return (
    <div
      className={`
        ${styles.components.card.base}
        ${isPaper && styles.colors.bg.card}
        ${styles.animation.fadeIn}
        ${isHidden ? reverse ? styles.animation.fadeInInitialX1 : styles.animation.fadeInInitialX2 : ''}
        ${isVisible ? styles.animation.fadeInVisible : ''}
      `}>
      <div
        className={`
        flex flex-col
        ${!reverse ? 'md:flex-row' : 'md:flex-row-reverse'}
        items-stretch
      `}>
        <div className={`w-full ${!isPaper && "md:w-3/5"} p-8 flex flex-col justify-center`}>
          <h3 className={`${styles.text.h3} ${styles.colors.text.primary} mb-4`}>
            {project.title}
          </h3>
          <p className={`${styles.text.body} ${styles.colors.text.secondary} mb-6`}>
            {project.description}
          </p>
          <div className="flex gap-4">
            {project.link &&
              <a
                href={project.link}
                className={`${styles.components.button.primary} ${styles.animation.hover} px-6 py-2 rounded-md 
                inline-flex items-center gap-2`}>
                <ExternalLink size={16} />
                {isPaper ? "Read" : "View"}
              </a>
            }
            {project.github &&
              <a
                href={project.github}
                className={`${styles.components.button.secondary} ${styles.animation.hover} px-6 py-2 rounded-md 
                inline-flex items-center gap-2`}>
                <Code size={16} />
                Code
              </a>}
          </div>
        </div>
        {!isPaper && <div className="w-full md:w-2/5 items-center justify-center">
          {project.image}
        </div>}
      </div>
    </div>
  );
};
