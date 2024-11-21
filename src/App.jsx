import { ThemeProvider } from './contexts/ThemeProvider';
import { useTheme } from './contexts/useTheme';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Sections } from './components/sections/Sections';
import { ThemeToggle } from './components/ThemeToggle';
import { createStyles } from './styles/styles';
import { KonamiCode } from './components/KonamiCode';
import ParticleCursor from './components/ParticleCursor';

const AppContent = () => {
  const { isDarkMode } = useTheme();
  const styles = createStyles();

  return (
    <div className={`min-h-screen transition-colors duration-300 ${isDarkMode ? 'dark' : ''}`}>
      <div className={styles.colors.bg.primary}>
        <Navbar />
        <Hero />
        <Sections />
        <ThemeToggle />
        <KonamiCode />
      </div>
    </div>
  );
};

function App() {
  return (
    <div id='app' className="min-h-full max-w-full font-sans">
      <ParticleCursor />
      <ThemeProvider>
        <AppContent />
      </ThemeProvider>
    </div>
  );
}

export default App;
