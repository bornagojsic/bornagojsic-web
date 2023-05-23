import {
  AcademicCapIcon,
  ArrowDownTrayIcon,
  CalendarIcon,
  FlagIcon,
  MapIcon,
  SparklesIcon,
} from '@heroicons/react/24/outline';

import GithubIcon from '../components/Icon/GithubIcon';
import InstagramIcon from '../components/Icon/InstagramIcon';
import LinkedInIcon from '../components/Icon/LinkedInIcon';
import StackOverflowIcon from '../components/Icon/StackOverflowIcon';
import heroImage from '../images/header-background.jpg';
import porfolioImage1 from '../images/portfolio/portfolio-1.jpg';
import porfolioImage2 from '../images/portfolio/portfolio-2.jpg';
import porfolioImage3 from '../images/portfolio/portfolio-3.jpg';
import porfolioImage4 from '../images/portfolio/portfolio-4.jpg';
import profilepic from '../images/profilepic.jpg';
import testimonialImage from '../images/testimonial.webp';
import {
  About,
  ContactSection,
  ContactType,
  Hero,
  HomepageMeta,
  PortfolioItem,
  SkillGroup,
  Social,
  TestimonialSection,
  TimelineItem,
} from './dataDef';

/**
 * Page meta data
 */
export const homePageMeta: HomepageMeta = {
  title: 'Borna Gojšić',
  description: "Site built with Tim Baker's react resume template",
};

/**
 * Section definition
 */
export const SectionId = {
  Hero: 'hero',
  About: 'about',
  Contact: 'contact',
  Portfolio: 'portfolio',
  Resume: 'resume',
  Skills: 'skills',
  Stats: 'stats',
  Testimonials: 'testimonials',
} as const;

export type SectionId = typeof SectionId[keyof typeof SectionId];

/**
 * Hero section
 */
export const heroData: Hero = {
  imageSrc: heroImage,
  name: `I'm Borna Gojšić.`,
  description: (
    <>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        I'm a 1st year student student at the Faculty of Electrical Engineering and Computing in Zagreb (<strong className="text-stone-100">FER</strong>) and a software developer.
      </p>
    </>
  ),
  actions: [
    {
      href: '/resume',
      text: 'Resume',
      primary: true,
      Icon: ArrowDownTrayIcon,
    },
    {
      href: `#${SectionId.Contact}`,
      text: 'Contact',
      primary: false,
    },
  ],
};

/**
 * About section
 */
export const aboutData: About = {
  profileImageSrc: profilepic,
  description: `My main interests are Frontend and AI development. I really liked working on my latest project (UTTT React App) in which I used both Frontend development in React as well as AI development in Python.`,
  aboutItems: [
    {label: 'Location', text: 'Zagreb, HR', Icon: MapIcon},
    {label: 'Age', text: '19', Icon: CalendarIcon},
    {label: 'Nationality', text: 'Croatian', Icon: FlagIcon},
    {label: 'Interests', text: 'Frontend, AI', Icon: SparklesIcon},
    {label: 'Study', text: 'University of Zagreb', Icon: AcademicCapIcon},
    // {label: 'Employment', text: 'Instant Domains, inc.', Icon: BuildingOffice2Icon},
  ],
};

/**
 * Skills section
 */
export const skills: SkillGroup[] = [
  {
    name: 'Frontend development',
    skills: [
      {
        name: 'React',
        level: 7,
      },
      {
        name: 'CSS',
        level: 6,
      },
      {
        name: 'Typescript',
        level: 3,
      },
    ],
  },
  {
    name: 'Other languages',
    skills: [
      {
        name: 'Python',
        level: 9,
      },
      {
        name: 'C++',
        level: 7,
      },
      {
        name: 'Java',
        level: 4,
      },
    ],
  },
];

/**
 * Portfolio section
 */
export const portfolioItems: PortfolioItem[] = [
  {
    title: 'UTTT React App',
    description: 'This is a project for playing against an AI in Ultimate Tic Tac Toe. Source code can be found on my GitHub profile.',
    url: 'https://uttt-bg.vercel.app/',
    image: porfolioImage1,
  },
  {
    title: 'Organic Chemistry Python App',
    description: 'This app allows you to easily draw complex organic molecules in their structured form. I made it in my juinor year of high school.',
    url: 'https://github.com/bornagojsic/organic-chemistry-py',
    image: porfolioImage3,
  },
  {
    title: 'Bela Python App',
    description: 'An app for playing the card game Belote. The app currently allows only one human player against one Ai player, but you can save and load your This was my final project for the informatics class senior year in high school.',
    url: 'https://github.com/bornagojsic/bela',
    image: porfolioImage2,
  },
  {
    title: 'Scotland Yard Python AI',
    description: 'This is currenty just a command line app for playing Scotland Yard against an AI, but there are plans to make it into a React App like the UTTT one. This project was made in collaboration with Ivan Bevanda.',
    url: 'https://github.com/bornagojsic/skotski-vrt',
    image: porfolioImage4,
  },
  // {
  //   title: 'Project title 5',
  //   description: 'Give a short description of your project here.',
  //   url: 'https://timbaker.me',
  //   image: porfolioImage5,
  // },
  // {
  //   title: 'Project title 6',
  //   description: 'Give a short description of your project here.',
  //   url: 'https://timbaker.me',
  //   image: porfolioImage6,
  // },
  // {
  //   title: 'Project title 7',
  //   description: 'Give a short description of your project here.',
  //   url: 'https://timbaker.me',
  //   image: porfolioImage7,
  // },
  // {
  //   title: 'Project title 8',
  //   description: 'Give a short description of your project here.',
  //   url: 'https://timbaker.me',
  //   image: porfolioImage8,
  // },
  // {
  //   title: 'Project title 9',
  //   description: 'Give a short description of your project here.',
  //   url: 'https://timbaker.me',
  //   image: porfolioImage9,
  // },
  // {
  //   title: 'Project title 10',
  //   description: 'Give a short description of your project here.',
  //   url: 'https://timbaker.me',
  //   image: porfolioImage10,
  // },
  // {
  //   title: 'Project title 11',
  //   description: 'Give a short description of your project here.',
  //   url: 'https://timbaker.me',
  //   image: porfolioImage11,
  // },
];

/**
 * Resume section -- TODO: Standardize resume contact format or offer MDX
 */
export const education: TimelineItem[] = [
  {
    date: 'October 2022 - Present',
    location: 'Faculty of Electrical Engineering and Computing, Zagreb',
    title: 'Bachelors in Computer Science',
    content: <p>Describe your experience at school, what you learned, what useful skills you have acquired etc.</p>,
  },
];

export const experience: TimelineItem[] = [
  {
    date: 'March 2010 - Present',
    location: 'Awesome Development Company',
    title: 'Senior UX Engineer',
    content: (
      <p>
        Describe work, special projects, notable achievements, what technologies you have been working with, and
        anything else that would be useful for an employer to know.
      </p>
    ),
  },
];

/**
 * Testimonial section
 */
export const testimonial: TestimonialSection = {
  imageSrc: testimonialImage,
  testimonials: [
    {
      name: 'John Doe',
      text: 'Use this as an opportunity to promote what it is like to work with you. High value testimonials include ones from current or past co-workers, managers, or from happy clients.',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/169.jpg',
    }
  ],
};

/**
 * Contact section
 */

export const contact: ContactSection = {
  headerText: 'Contact',
  description: 'Here are some other ways you can reach me.',
  items: [
    {
      type: ContactType.Email,
      text: 'bornagojsic@gmail.com',
      href: 'mailto:bornagojsic@gmail.com',
    },
    // {
    //   type: ContactType.Location,
    //   text: 'Zagreb, Croatia',
    //   href: 'https://www.google.com/maps/place/Zagreb/@45.8403167,15.7995223,11z/',
    // },
    {
      type: ContactType.Instagram,
      text: '@bornagojsic',
      href: 'https://www.instagram.com/bornagojsic/',
    },
    {
      type: ContactType.Github,
      text: 'bornagojsic',
      href: 'https://github.com/bornagojsic',
    },
  ],
};

/**
 * Social items
 */
export const socialLinks: Social[] = [
  {label: 'Github', Icon: GithubIcon, href: 'https://github.com/bornagojsic'},
  {label: 'Stack Overflow', Icon: StackOverflowIcon, href: 'https://stackoverflow.com/users/12075938/borna-goj%c5%a1i%c4%87'},
  {label: 'LinkedIn', Icon: LinkedInIcon, href: 'https://www.linkedin.com/in/borna-goj%C5%A1i%C4%87-0b75191bb/'},
  {label: 'Instagram', Icon: InstagramIcon, href: 'https://www.instagram.com/bornagojsic/'},
  // {label: 'Twitter', Icon: TwitterIcon, href: 'https://twitter.com/TimBakerx'},
];
