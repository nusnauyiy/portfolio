// src/components/ProjectCard.jsx
import { ExternalLink, Code } from 'lucide-react';
import { styles } from '../styles/styles';

export const ProjectCard = ({ project, index, isVisible, isHidden }) => {
  return (
    <div
      className={`
        ${styles.components.card.base}
        ${styles.colors.bg.card}
        ${styles.animation.fadeIn}
        ${isHidden ? styles.animation.fadeInInitial : ''}
        ${isVisible ? styles.animation.fadeInVisible : ''}
      `}>
      <div
        className={`
        flex flex-col
        ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}
        items-stretch
      `}>
        <div className="w-full md:w-3/5">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-64 md:h-full object-cover"
          />
        </div>
        <div className="w-full md:w-2/5 p-8 flex flex-col justify-center">
          <h3 className={`${styles.text.h3} ${styles.colors.text.primary} mb-4`}>
            {project.title}
          </h3>
          <p className={`${styles.text.body} ${styles.colors.text.secondary} mb-6`}>
            {project.description}
          </p>
          <div className="flex gap-4">
            <a
              href={project.link}
              className={`${styles.components.button.primary} px-6 py-2 rounded-md 
                inline-flex items-center gap-2`}>
              <ExternalLink size={16} />
              View
            </a>
            <a
              href={project.github}
              className={`${styles.components.button.secondary} px-6 py-2 rounded-md 
                inline-flex items-center gap-2`}>
              <Code size={16} />
              Code
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
