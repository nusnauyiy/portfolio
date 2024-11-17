export const createStyles = () => ({
  layout: {
    section: 'py-20',
    container: 'max-w-4xl mx-auto px-4',
  },

  text: {
    h1: 'text-5xl font-bold',
    h2: 'text-3xl font-bold',
    h3: 'text-2xl font-extralight',
    body: 'text-md leading-relaxed',
    small: 'text-sm',
  },

  colors: {
    accent: {
      primary: 'bg-amber-600',
      hover: 'hover:bg-amber-700',
      text: 'text-amber-600',
      textHover: 'hover:text-amber-700',
      border: 'border-amber-600',
    },
    text: {
      primary: `text-ash-700 dark:text-white`,
      secondary: `text-ash-400 dark:text-ash-200`,
      nav: 'text-white',
      navScrolled: `text-ash-700 dark:text-white`,
    },
    bg: {
      primary: `bg-white dark:bg-ash-700`,
      secondary: `bg-ash-50 dark:bg-ash-600`,
      card: `bg-white dark:bg-ash-500`,
      nav: {
        transparent: `bg-ash-700/20`,
        solid: {
          light: 'bg-white/90 bg-opacity-90 backdrop-blur-md border-y border-amber-200',
          dark: `bg-ash-700/95 bg-opacity-95 backdrop-blur-md border-y border-amber-900/20`,
        },
      },
    },
  },

  components: {
    card: {
      base: 'rounded-lg shadow-lg overflow-hidden',
      hover: 'hover:shadow-xl transition-shadow duration-300',
    },
    button: {
      primary: 'bg-amber-600 hover:bg-amber-700 text-white',
      secondary: `bg-ash-600 hover:bg-ash-500 dark:bg-ash-500 dark:hover:bg-ash-400 text-white`,
      nav: `px-4 py-2 rounded-full transition-colors hover:text-amber-700 dark:hover:text-amber-500`,
    },
    nav: {
      container: 'fixed w-full z-50 transition-all duration-300',
      inner: 'rounded-lg backdrop-blur-md px-6 py-3 transition-all duration-300',
      menu: 'hidden md:flex space-x-8',
      mobileMenu: {
        container: 'md:hidden transition-all duration-300 overflow-hidden mt-2',
        inner: 'rounded-lg py-2',
        item: `px-4 py-2 block w-full text-left hover:bg-amber-600/30 dark:hover:bg-amber-800/30 transition-colors`,
      },
      solid: {
        light: `bg-white/90 bg-opacity-90 backdrop-blur-md border-b`,
        dark: `bg-ash-700/95 bg-opacity-95 backdrop-blur-md border-b`,
      },
    },
    themeToggle: {
      base: `
        fixed bottom-6 right-6 p-3 rounded-full z-50
        transition-all duration-300 transform hover:scale-110
        shadow-lg hover:shadow-xl
      `,
      light: `bg-white text-amber-600 hover:bg-ash-50`,
      dark: `bg-ash-600 text-amber-400 hover:bg-ash-500`,
      icon: 'w-6 h-6',
    },
  },

  grid: {
    skills: 'grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6',
  },

  spacing: {
    mb: {
      4: 'mb-4',
      6: 'mb-6',
      8: 'mb-8',
      12: 'mb-12',
    },
    gap: {
      6: 'gap-6',
      12: 'gap-12',
    },
  },

  sections: {
    hero: {
      wrapper: 'h-screen relative flex items-center justify-center overflow-hidden',
      overlay: `absolute inset-0 bg-ash-800/60`,
      image: 'absolute inset-0 w-full h-[120%] object-cover -z-10',
      content: 'text-center z-10',
    },
    skills: {
      card: `
        flex flex-col items-center p-4 rounded-xl
        bg-white dark:bg-ash-500 shadow-lg
        transition-all duration-500
      `,
      icon: 'w-12 h-12 mb-3',
    },
    social: {
      wrapper: 'flex justify-center gap-12',
      link: `text-ash-400 hover:text-amber-500 dark:text-ash-200 dark:hover:text-white transition-colors`,
    },
  },

  // Animation utilities
  animation: {
    fadeIn: 'transition-all duration-700',
    fadeInInitial: 'opacity-0 translate-y-8',
    fadeInVisible: 'opacity-100 translate-y-0',
    hover: 'transition-all duration-300 hover:scale-105',
  },
});

export const styles = createStyles();