// src/constants/index.js
import { Github, Linkedin as LinkedInIcon, Mail as MailIcon } from 'lucide-react';

export const SECTIONS = {
  about: {
    id: 'about',
    navItem: 'About',
    title: 'About Me',
    titleStyles: '', // Default styling
    component: 'about', // Used to identify which content to render
  },
  skills: {
    id: 'skills',
    navItem: 'Skills',
    title: 'Technical Skills',
    titleStyles: 'bg-gray-50 dark:bg-gray-800', // Different background
    component: 'skills',
  },
  portfolio: {
    id: 'portfolio',
    navItem: 'Portfolio',
    title: 'Portfolio',
    titleStyles: '', // Default styling
    component: 'portfolio',
  },
  contact: {
    id: 'contact',
    navItem: 'Contact',
    title: 'Get in Touch',
    titleStyles: '', // Default styling
    contentStyles: 'text-center', // Center align content
    component: 'contact',
  },
};

export const ABOUT_SECTION = `I'm a passionate software engineer with expertise in building modern web applications. With
        a strong foundation in both frontend and backend development, I create elegant solutions to
        complex problems. When I'm not coding, you can find me contributing to open-source projects
        and exploring new technologies.`;

export const PROJECTS = [
  {
    title: 'Project One',
    description: 'A full-stack web application built with React and Node.js',
    image: '/api/placeholder/600/400',
    link: '#',
    github: '#',
  },
  {
    title: 'Project Two',
    description: 'Mobile-first responsive design system',
    image: '/api/placeholder/600/400',
    link: '#',
    github: '#',
  },
  {
    title: 'Project Three',
    description: 'API integration and data visualization dashboard',
    image: '/api/placeholder/600/400',
    link: '#',
    github: '#',
  },
];

export const SKILLS = [
  {
    name: 'HTML5',
    icon: '/path/to/html5.svg',
    category: 'Frontend',
  },
  {
    name: 'CSS3',
    icon: '/path/to/css3.svg',
    category: 'Frontend',
  },
  {
    name: 'JavaScript',
    icon: '/path/to/javascript.svg',
    category: 'Frontend',
  },
  {
    name: 'React',
    icon: '/path/to/react.svg',
    category: 'Frontend',
  },
  {
    name: 'Node.js',
    icon: '/path/to/nodejs.svg',
    category: 'Backend',
  },
  {
    name: 'Python',
    icon: '/path/to/python.svg',
    category: 'Backend',
  },
  {
    name: 'Java',
    icon: '/path/to/java.svg',
    category: 'Backend',
  },
  {
    name: 'AWS',
    icon: '/path/to/aws.svg',
    category: 'DevOps',
  },
  {
    name: 'Docker',
    icon: '/path/to/docker.svg',
    category: 'DevOps',
  },
  // Add more skills as needed
];

export const SOCIAL_LINKS = [
  {
    name: 'GitHub',
    icon: Github,
    url: 'https://github.com',
  },
  {
    name: 'LinkedIn',
    icon: LinkedInIcon, // Fixed casing
    url: 'https://linkedin.com',
  },
  {
    name: 'Email',
    icon: MailIcon, // Fixed casing
    url: 'mailto:hello@example.com',
  },
];
