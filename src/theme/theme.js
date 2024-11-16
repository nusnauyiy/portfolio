// src/theme/theme.js
export const theme = {
  light: {
    background: {
      primary: 'bg-white',
      secondary: 'bg-gray-50',
      card: 'bg-white',
    },
    text: {
      primary: 'text-gray-900',
      secondary: 'text-gray-600',
    },
    navbar: {
      bg: 'bg-white/90',
      text: 'text-gray-800',
      hover: 'hover:text-amber-600',
    },
    button: {
      primary: 'bg-amber-600 hover:bg-amber-700',
      secondary: 'bg-gray-900 hover:bg-gray-800',
    },
  },
  dark: {
    background: {
      primary: 'bg-gray-900',
      secondary: 'bg-gray-800',
      card: 'bg-gray-800',
    },
    text: {
      primary: 'text-gray-100',
      secondary: 'text-gray-300',
    },
    navbar: {
      bg: 'bg-gray-900/90',
      text: 'text-gray-300',
      hover: 'hover:text-amber-400',
    },
    button: {
      primary: 'bg-amber-500 hover:bg-amber-600',
      secondary: 'bg-gray-700 hover:bg-gray-600',
    },
  },
  animation: {
    fadeIn: 'transition-all duration-700 ease-out',
    fadeInInitial: 'opacity-0 translate-y-8',
    fadeInVisible: 'opacity-100 translate-y-0',
  },
};
