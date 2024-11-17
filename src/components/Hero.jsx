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
    <section id={'home'} className={styles.sections.hero.wrapper}>
      <div className="absolute inset-0" style={parallaxStyle(0.5)}>
        <img
          src='/hero.jpg'
          alt="background"
          className={styles.sections.hero.image}
        />
      </div>

      <div className={styles.sections.hero.overlay} />

      <div className={styles.sections.hero.content} style={parallaxStyle(-0.2)}>
        <h1 className={`font-cursive ${styles.text.h1} text-white ${styles.spacing.mb[6]}`}>{NAME}</h1>
        <p className="font-sub text-xl text-white">{SUBTITLE}</p>
      </div>
    </section>
  );
};
