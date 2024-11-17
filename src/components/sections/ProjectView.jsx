import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';
import { ProjectCard } from '../ProjectCard';

export const ProjectView = ({projects = [], isPaper = false}) => {
  const { registerElement, visibleElements, hiddenElements } = useIntersectionObserver();

  return (
    <div className="space-y-12">
      {projects.map((project, index) => (
        <div key={index} ref={registerElement(`project-${index}`)}>
          <ProjectCard
            project={project}
            index={index}
            isVisible={visibleElements.has(`project-${index}`)}
            isHidden={hiddenElements.has(`project-${index}`)}
            isPaper={isPaper}
          />
        </div>
      ))}
    </div>
  );
};
