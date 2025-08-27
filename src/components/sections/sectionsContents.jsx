import { Github, Linkedin as LinkedInIcon, Mail as MailIcon } from 'lucide-react';
import { faHtml5, faJava, faCss3, faJs, faReact, faNodeJs, faPython, faAws, faDocker, faRProject, faGolang } from '@fortawesome/free-brands-svg-icons'
import { faDatabase } from '@fortawesome/free-solid-svg-icons'
import { ThemedIcon } from '../ThemedIcon';
import { ReactComponent as Kubernetes } from '../../assets/kubernetes.svg'
import { ReactComponent as Scala } from '../../assets/scala.svg'
import { ReactComponent as Solid } from '../../assets/solid.svg'
import { ReactComponent as Bear } from '../../assets/bear.svg'
import { ReactComponent as Palette } from '../../assets/palette.svg'
import { ReactComponent as MusicPlayer } from '../../assets/music-player.svg'
import { About } from './About';
import { Contact } from './Contact';
import { Skills } from './Skills';
import { ResearchProjects } from './ResearchProjects';
import { Portfolio } from './Portfolio';

export const SECTIONS = {
  about: {
    id: 'About',
    title: 'About Me',
    component: About,
  },
  skills: {
    id: 'Skills',
    title: 'Technical Skills',
    component: Skills,
  },
  researchProjects: {
    id: 'Research',
    title: 'Research Projects',
    component: ResearchProjects,
  },
  portfolio: {
    id: 'Portfolio',
    title: 'SWE Portfolio',
    component: Portfolio,
  },
  contact: {
    id: 'Contact',
    title: `Let's Connect!`,
    contentStyles: 'text-center',
    titleStyles: 'font-sub',
    component: Contact,
  },
};

export const ABOUT_SECTION = `As a software engineer at Splunk, I build modern web applications and APIs that bridge complex cloud services with refined user experiences.
        My engineering journey was shaped by my time at Univerity of British Columbia, where I explored various computer science topics with extensive research and found my sweet spot: the intersection of robust software engineering and human-computer interaction.
        Today, I channel that foundation into crafting clean, user-friendly solutions.
        When I'm not coding, you can find me designing graphics, arranging music, or convincing my cat, 
        Rumba, that keyboards are not nap spots (still WIP).`;

export const RESEARCH_PROJECTS = [
  {
    title: 'Grammar Inference from Pseudo-Grammar',
    description: `Investigation GRIMOIRE Fuzzer's suitability as a grammar mining tool. UBC BSc Computer Science Honours thesis supervised by Dr. Caroline Lemieux.`,
    link: 'https://drive.google.com/file/d/16ZVR54J0cytihtzncTr8wqTQQ7FX2rau/view?usp=sharing',
    github: 'https://github.com/nusnauyiy/SimpleGrimoire',
  },
  {
    title: 'What is Affective Touch Made Of?',
    description: 'Co-authored paper (UIST 2024) on how high-fidelity soft capacitive sensor array reveals the interplay of shear and pressure in affective touch, supervised by Dr. Karon MacLean from UBC Sensory Perception and Interaction Research Group and Dr. John Madden from UBC Molecular Mechatronics Lab.',
    link: 'https://dl.acm.org/doi/abs/10.1145/3654777.3676346',
  },
  {
    title: 'VR Controller for Open-World Adventure Games',
    description: 'Detailing of the design of a minimal VR controller for open-world adventure games. Final report submitted to a graduate-level Human-Computer Interaction course ran by Dr. Dongwook Yoon at UBC.',
    link: 'https://drive.google.com/file/d/1msrIqbMBeEhufXTiKhQLlVuniTdOL7Oc/view?usp=sharing6',
  },
]

export const PROJECTS = [
  {
    title: 'PLAICraft',
    description: 'A social platform that provides free multi-player Minecraft gameplay and collects gameplay data for AI research, developed in collaboration with UBC Pacific Laboratory of AI, supervised by Dr. Frank Wood.',
    link: 'https://plaicraft.ai',
    image: <img src='https://plaicraft.ai/logo.png' />,
  },
  {
    title: 'Palette Viz',
    description: 'A color palette visualization tool that generates website palettes from standard color theory.',
    link: 'https://palette.artzie.stream/',
    image: <ThemedIcon Icon={Palette} height={'85%'} isFA={false} />,
    github: 'https://github.com/nusnauyiy/PaletteViz',
  },
  {
    title: 'Bear Buddies',
    description: 'A pet-nurturing web-based game that received Honourable Mention in nwHacks 2021.',
    image: <ThemedIcon Icon={Bear} height={'85%'} isFA={false} />,
    link: 'https://bear-buddies.herokuapp.com/',
    github: 'https://github.com/n-lina/bear-buddies',
  },
  {
    title: 'My Music Player',
    description: 'A custom music player that manage your local playlists with multiple play modes.',
    image: <ThemedIcon Icon={MusicPlayer} height={'100%'} isFA={false} />,
    github: 'https://github.com/nusnauyiy/MyMusicPlayer',
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
    name: 'JS/TS',
    icon: <ThemedIcon Icon={faJs} />,
    category: FE,
  },
  {
    name: 'React.js',
    icon: <ThemedIcon Icon={faReact} />,
    category: FE,
  },
  {
    name: 'Solid.js',
    icon: <ThemedIcon Icon={Solid} isFA={false} />,
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
    name: 'Golaong',
    icon: <ThemedIcon Icon={faGolang} />,
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
