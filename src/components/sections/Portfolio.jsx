import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';
import { ProjectCard } from '../ProjectCard';
import { PROJECTS } from '../../constants/sections';

export const Portfolio = () => {
  const { registerElement, visibleElements, hiddenElements } = useIntersectionObserver();

  return (
    <div className="space-y-12">
      {PROJECTS.map((project, index) => (
        <div key={index} ref={registerElement(`project-${index}`)}>
          <ProjectCard
            project={project}
            index={index}
            isVisible={visibleElements.has(`project-${index}`)}
            isHidden={hiddenElements.has(`project-${index}`)}
          />
        </div>
      ))}
    </div>
  );
};
