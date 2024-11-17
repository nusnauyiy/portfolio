import { styles } from '../../styles/styles';

export const Section = ({
  index,
  id,
  title,
  containerStyles = '',
  titleStyles = '',
  contentStyles = '',
  children,
}) => {
  return (
    <section id={id} className={`${styles.layout.section} ${index % 2 === 0 && 'bg-ash-100 dark:bg-ash-800'}${containerStyles}`}>
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
