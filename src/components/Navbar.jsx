import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { styles } from '../styles/styles';
import { INITIALS } from '../constants';

const NAV_ITEMS = ['About', 'Skills', 'Portfolio', 'Contact'];

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setHasScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    const navHeight = 80;
    const targetPosition = element.offsetTop - navHeight;

    window.scrollTo({
      top: targetPosition,
      behavior: 'smooth',
    });

    setIsMenuOpen(false);
  };

  const navClasses = {
    wrapper: `${styles.components.nav.container} ${hasScrolled ? 'py-2' : 'py-4'}`,
    background: `${styles.components.nav.inner} ${
      hasScrolled ? styles.colors.bg.nav.solid : styles.colors.bg.nav.transparent
    }`,
    text: hasScrolled ? styles.colors.text.navScrolled : styles.colors.text.nav,
    mobileMenu: `${styles.components.nav.mobileMenu.container} ${
      isMenuOpen ? 'max-h-64' : 'max-h-0'
    }`,
  };

  return (
    <nav className={navClasses.wrapper}>
      <div className={styles.layout.container}>
        <div className={navClasses.background}>
          <div className="flex justify-between items-center">
            {/* Logo */}
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('home');
              }}
              className={`font-extrabold text-xl ${navClasses.text}`}>
              {INITIALS}
            </a>

            {/* Desktop Navigation */}
            <div className={styles.components.nav.menu}>
              {NAV_ITEMS.map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className={`${styles.components.button.nav} ${navClasses.text}`}>
                  {item}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button - Now uses the same color as the text */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden"
              aria-label="Toggle menu">
              {isMenuOpen ? (
                <X className={navClasses.text} />
              ) : (
                <Menu className={navClasses.text} />
              )}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className={navClasses.mobileMenu}>
              <div
                className={`
                ${styles.components.nav.mobileMenu.inner}
                ${hasScrolled ? styles.colors.bg.nav.solid : 'bg-black/20'}
              `}>
                {NAV_ITEMS.map((item) => (
                  <button
                    key={item}
                    onClick={() => scrollToSection(item)}
                    className={`
                      ${styles.components.nav.mobileMenu.item}
                      ${navClasses.text}
                    `}>
                    {item}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};
