import { ABOUT_SECTION } from './sectionsContents';
import { styles } from '../../styles/styles';

export const About = () => (
  <p className={`${styles.text.body} ${styles.colors.text.secondary}`}>{ABOUT_SECTION}</p>
);
