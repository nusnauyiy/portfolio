import { styles } from '../styles/styles';

export const Section = ({
  id,
  title,
  containerStyles = '',
  titleStyles = '',
  contentStyles = '', // New prop for content wrapper styles
  children,
}) => {
  return (
    <section id={id} className={`${styles.layout.section} ${containerStyles}`}>
      <div className={`${styles.layout.container} ${contentStyles}`}>
        {title && (
          <h2
            className={`
            ${styles.text.h2} 
            ${styles.colors.text.primary} 
            ${styles.spacing.mb[12]}
            ${titleStyles}
          `}>
            {title}
          </h2>
        )}
        {children}
      </div>
    </section>
  );
};
