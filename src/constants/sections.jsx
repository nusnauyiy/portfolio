import { Github, Linkedin as LinkedInIcon, Mail as MailIcon } from 'lucide-react';
import { faHtml5, faJava, faCss3, faJs, faReact, faNodeJs, faPython, faAws, faDocker, faRProject } from '@fortawesome/free-brands-svg-icons'
import { faDatabase } from '@fortawesome/free-solid-svg-icons'
import { ThemedIcon } from '../components/ThemedIcon';
import { ReactComponent as Kubernetes } from '../assets/kubernetes.svg'
import { ReactComponent as Scala } from '../assets/scala.svg'

export const SECTIONS = {
  about: {
    id: 'About',
    title: 'About Me',
  },
  skills: {
    id: 'Skills',
    title: 'Technical Skills',
    containerStyles: 'bg-ash-100 dark:bg-ash-800',
  },
  portfolio: {
    id: 'Portfolio',
    title: 'Portfolio',
  },
  contact: {
    id: 'Contact',
    title: `Let's Connect!`,
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
const BE = "Backend"
const DEVOPS = "DevOps"
const DS = "Data Science"

export const SKILLS = [
  {
    name: 'HTML5',
    icon: <ThemedIcon Icon={faHtml5} />,
    category: FE,
  },
  {
    name: 'CSS3',
    icon: <ThemedIcon Icon={faCss3} />,
    category: FE,
  },
  {
    name: 'JavaScript',
    icon: <ThemedIcon Icon={faJs} />,
    category: FE,
  },
  {
    name: 'React',
    icon: <ThemedIcon Icon={faReact} />,
    category: FE,
  },
  {
    name: 'Node.js',
    icon: <ThemedIcon Icon={faNodeJs} />,
    category: BE,
  },
  {
    name: 'Python',
    icon: <ThemedIcon Icon={faPython} />,
    category: BE,
  },
  {
    name: 'Java',
    icon: <ThemedIcon Icon={faJava} />,
    category: BE,
  },
  {
    name: 'Scala',
    icon: <ThemedIcon Icon={Scala} isFA={false} />,
    category: BE,
  },
  {
    name: 'AWS',
    icon: <ThemedIcon Icon={faAws} />,
    category: DEVOPS,
  },
  {
    name: 'Docker',
    icon: <ThemedIcon Icon={faDocker} />,
    category: DEVOPS,
  },
  {
    name: 'Kubernetes',
    icon: <ThemedIcon Icon={Kubernetes} isFA={false} />,
    category: DEVOPS,
  },
  {
    name: 'R',
    icon: <ThemedIcon Icon={faRProject} />,
    category: DS,
  },
  {
    name: 'SQL',
    icon: <ThemedIcon Icon={faDatabase} />,
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
