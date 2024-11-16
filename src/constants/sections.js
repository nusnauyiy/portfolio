// src/constants/index.js
import { Github, Linkedin as LinkedInIcon, Mail as MailIcon } from 'lucide-react';

export const SECTIONS = {
  about: {
    id: 'About',
    title: 'About Me',
    titleStyles: '',
  },
  skills: {
    id: 'Skills',
    title: 'Technical Skills',
    titleStyles: 'bg-gray-50 dark:bg-gray-800',
  },
  portfolio: {
    id: 'Portfolio',
    title: 'Portfolio',
    titleStyles: '',
  },
  contact: {
    id: 'Contact',
    title: 'Get in Touch',
    titleStyles: '',
    contentStyles: 'text-center',
  },
};

export const ABOUT_SECTION = `I'm a passionate software engineer with expertise in building modern web applications. With
        a strong foundation in both frontend and backend development, I create elegant solutions to
        complex problems. When I'm not coding, you can find me designing graphics, arranging music, or convincing my cat, 
        Rumba, that keyboards are not cat beds (still a work in progress).`;

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

const FE = "Frontend"
const BE ="Backend"
const DEVOPS ="DevOps"
const DS = "Data Science"

export const SKILLS = [
  {
    name: 'HTML5',
    icon: '/path/to/html5.svg',
    category: FE,
  },
  {
    name: 'CSS3',
    icon: '/path/to/css3.svg',
    category: FE,
  },
  {
    name: 'JavaScript',
    icon: '/path/to/javascript.svg',
    category: FE,
  },
  {
    name: 'React',
    icon: '/path/to/react.svg',
    category: FE,
  },
  {
    name: 'Node.js',
    icon: '/path/to/nodejs.svg',
    category: BE,
  },
  {
    name: 'Python',
    icon: '/path/to/python.svg',
    category: BE,
  },
  {
    name: 'Java',
    icon: '/path/to/java.svg',
    category: BE,
  },
  {
    name: 'Scala',
    icon: '/path/to/java.svg',
    category: BE,
  },
  {
    name: 'AWS',
    icon: '/path/to/aws.svg',
    category: DEVOPS,
  },
  {
    name: 'Docker',
    icon: '/path/to/docker.svg',
    category: DEVOPS,
  },
  {
    name: 'Kubernetes',
    icon: '/path/to/docker.svg',
    category: DEVOPS,
  },
  {
    name: 'SQL',
    icon: '/path/to/docker.svg',
    category: DS,
  },
  {
    name: 'R',
    icon: '/path/to/docker.svg',
    category: DS,
  },
  {
    name: 'MATLAB',
    icon: '/path/to/docker.svg',
    category: DS,
  },
];

export const SOCIAL_LINKS = [
  {
    name: 'GitHub',
    icon: Github,
    url: 'https://github.com/nusnauyiy',
  },
  {
    name: 'LinkedIn',
    icon: LinkedInIcon, 
    url: 'https://ca.linkedin.com/in/y-suzette-sun/',
  },
  {
    name: 'Email',
    icon: MailIcon, 
    url: 'mailto:me@artzie.stream',
  },
];
