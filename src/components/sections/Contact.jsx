import { SOCIAL_LINKS } from '../../constants/sections';
import { styles } from '../../styles/styles';
// src/components/sections/Contact.jsx
export const Contact = () => {
  return (
    <div className={styles.sections.social.wrapper}>
      {SOCIAL_LINKS.map(({ name, icon: Icon, url }) => (
        <a key={name} href={url} className={styles.sections.social.link} aria-label={name}>
          <Icon size={28} />
        </a>
      ))}
    </div>
  );
};
