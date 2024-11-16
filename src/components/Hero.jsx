import { styles } from '../styles/styles';
import { useScrollPosition } from '../hooks/useScrollPosition';
import { NAME, SUBTITLE } from '../constants';

export const Hero = () => {
  const scrollY = useScrollPosition();

  const parallaxStyle = (multiplier) => ({
    transform: `translateY(${scrollY * multiplier}px)`,
    transition: 'transform 0.1s ease-out',
  });

  return (
    <section className={styles.sections.hero.wrapper}>
      <div className="absolute inset-0" style={parallaxStyle(0.5)}>
        <img
          src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80"
          alt="background"
          className={styles.sections.hero.image}
        />
      </div>

      <div className={styles.sections.hero.overlay} />

      <div className={styles.sections.hero.content} style={parallaxStyle(-0.2)}>
        <h1 className={`${styles.text.h1} text-white ${styles.spacing.mb[6]}`}>{NAME}</h1>
        <p className="text-xl text-white">{SUBTITLE}</p>
      </div>
    </section>
  );
};
