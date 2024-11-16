// src/styles/styles.js
const DEFAULT_COLOR = {
  name: 'amber',
  base: 'amber-600',
  light: 'amber-500',
  dark: 'amber-700',
  text: 'amber-600',
};

export const createStyles = (accentColor = DEFAULT_COLOR) => ({
  // Layout
  layout: {
    section: 'py-20',
    container: 'max-w-4xl mx-auto px-4',
  },

  // Typography
  text: {
    h1: 'text-5xl font-bold',
    h2: 'text-3xl font-bold',
    h3: 'text-xl font-semibold',
    body: 'text-lg leading-relaxed',
    small: 'text-sm',
  },

  // Colors & Backgrounds
  colors: {
    accent: {
      primary: `bg-${accentColor.base}`,
      hover: `hover:bg-${accentColor.dark}`,
      text: `text-${accentColor.text}`,
      textHover: `hover:text-${accentColor.text}`,
      border: `border-${accentColor.base}`,
    },
    // Text colors
    text: {
      primary: 'text-gray-900 dark:text-white',
      secondary: 'text-gray-600 dark:text-gray-300',
      nav: 'text-white',
      navScrolled: 'text-gray-900 dark:text-white',
    },
    // Background colors
    bg: {
      primary: 'bg-white dark:bg-gray-900',
      secondary: 'bg-gray-50 dark:bg-gray-800',
      card: 'bg-white dark:bg-gray-700',
      nav: {
        transparent: 'bg-black/20',
        solid: {
          light: 'bg-white/90 bg-opacity-90 backdrop-blur-sm border-y border-amber-200',
          dark: 'bg-gray-900/95 bg-opacity-95 backdrop-blur-sm border-y border-amber-900/20',
        },
      },
    },
  },

  // Components
  components: {
    // Card styles
    card: {
      base: 'rounded-lg shadow-lg overflow-hidden',
      hover: 'hover:shadow-xl transition-shadow duration-300',
    },
    // Button styles
    button: {
      primary: `bg-${accentColor.base} hover:bg-${accentColor.dark} text-white`,
      secondary: 'bg-gray-900 hover:bg-gray-800 dark:bg-gray-700 dark:hover:bg-gray-600 text-white',
      nav: 'px-4 py-2 rounded-full transition-colors',
    },
    // Navigation
    nav: {
      container: 'fixed w-full z-50 transition-all duration-300',
      inner: 'rounded-lg backdrop-blur-sm px-6 py-3 transition-all duration-300',
      menu: 'hidden md:flex space-x-8',
      mobileMenu: {
        container: 'md:hidden transition-all duration-300 overflow-hidden mt-2',
        inner: 'rounded-lg py-2',
        item: 'px-4 py-2 block w-full text-left hover:bg-amber-50/10 dark:hover:bg-amber-900/10 transition-colors',
      },
      solid: {
        light: `bg-white/90 bg-opacity-90 backdrop-blur-sm border-b border-${accentColor.base}/10`,
        dark: `bg-gray-900/95 bg-opacity-95 backdrop-blur-sm border-b border-${accentColor.base}/20`,
      },
    },
    themeToggle: {
      base: `
        fixed bottom-6 right-6 p-3 rounded-full z-50
        transition-all duration-300 transform hover:scale-110
        shadow-lg hover:shadow-xl
      `,
      light: 'bg-white text-amber-600 hover:bg-gray-50',
      dark: 'bg-gray-800 text-amber-400 hover:bg-gray-700',
      icon: 'w-6 h-6',
    },
  },

  // Additional styles
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
      overlay: 'absolute inset-0 bg-black/50',
      image: 'absolute inset-0 w-full h-[120%] object-cover -z-10',
      content: 'text-center z-10',
    },
    skills: {
      card: `
        flex flex-col items-center p-4 rounded-xl
        bg-white dark:bg-gray-700 shadow-lg
        transition-all duration-500
      `,
      icon: 'w-12 h-12 mb-3',
    },
    social: {
      wrapper: 'flex justify-center gap-12',
      link: 'text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors',
    },
  },

  // Animations
  animation: {
    fadeIn: 'transition-all duration-700',
    fadeInInitial: 'opacity-0 translate-y-8',
    fadeInVisible: 'opacity-100 translate-y-0',
    hover: 'transition-all duration-300 hover:scale-105',
  },
});

export const styles = createStyles(DEFAULT_COLOR);
