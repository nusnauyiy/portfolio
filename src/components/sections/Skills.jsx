import { styles } from '../../styles/styles';
import { SKILLS } from '../../constants/sections';
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';
export const Skills = () => {
  const { registerElement, visibleElements, hiddenElements } = useIntersectionObserver();
  const categories = [...new Set(SKILLS.map((skill) => skill.category))];

  return (
    <div className="space-y-12">
      {categories.map((category) => (
        <div key={category} className="mb-12 last:mb-0">
          <h3
            className={`${styles.text.h3} ${styles.colors.text.secondary} ${styles.spacing.mb[6]}`}>
            {category}
          </h3>
          <div className={styles.grid.skills}>
            {SKILLS.filter((skill) => skill.category === category).map((skill) => (
              <div
                key={`${category}-${skill.name}`}
                ref={registerElement(`${category}-${skill.name}`)}
                className={`
                    ${styles.sections.skills.card}
                    transition-all duration-500
                    ${hiddenElements.has(`${category}-${skill.name}`) ? 'opacity-0 translate-y-8' : ''}
                    ${visibleElements.has(`${category}-${skill.name}`) ? 'opacity-100 translate-y-0' : ''}
                  `}>
                {skill.icon}
                <span className={`${styles.text.small} ${styles.colors.text.primary}`}>
                  {skill.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};
