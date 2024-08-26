import { useState } from 'react';
import {
  IconCalendar,
  IconCreditCard,
  IconFileText,
  IconUsers,
  IconNetwork,
} from '@tabler/icons-react';
import classes from './NavbarSegmented.module.css';
import assessmentsImage from './assig.png';
import schedulingImage from './schedule.png';
import paymentsImage from './payments.jpeg';
import managementImage from './management.jpg';
import networkingImage from './networking.jpeg';


const tabs = {
  main: [
    {
      link: '',
      label: 'Assessments',
      icon: IconFileText,
      image: assessmentsImage,
      bio: 'Access a wide array of validated psychological assessments.',
    },
    {
      link: '',
      label: 'Scheduling',
      icon: IconCalendar,
      image: schedulingImage,
      bio: 'Efficiently manage your appointments with our scheduling tools.',
    },
    {
      link: '',
      label: 'Payments',
      icon: IconCreditCard,
      image: paymentsImage,
      bio: 'Handle all your financial transactions with ease and security.',
    },
    {
      link: '',
      label: 'Management',
      icon: IconUsers,
      image: managementImage,
      bio: 'Organize and manage your team effectively.',
    },
    {
      link: '',
      label: 'Networking',
      icon: IconNetwork,
      image: networkingImage,
      bio: 'Connect with professionals in your industry.',
    },
  ],
};

export function NavbarSegmented() {
  const [hovered, setHovered] = useState<string | null>(null);

  const links = tabs.main.map((item) => (
    <div
      key={item.label}
      className={`${classes.linkContainer} ${
        hovered === item.label ? classes.showBioContainer : ''
      }`}
      onMouseEnter={() => setHovered(item.label)}
      onMouseLeave={() => setHovered(null)}
    >
      <a
        className={classes.link}
        href={item.link}
      >
        <item.icon className={classes.linkIcon} stroke={1.5} />
        <span>{item.label}</span>
      </a>
      <div
        className={`${classes.bio} ${
          hovered === item.label ? classes.showBio : ''
        }`}
      >
        {item.bio}
      </div>
    </div>
  ));

  const currentTab = tabs.main.find(
    (item) => item.label === hovered
  );

  return (
    <div className={classes.container}>
      <nav className={classes.navbar}>
        <div className={classes.navbarMain}>{links}</div>
      </nav>
      <div className={classes.imageContainer}>
        {currentTab && (
          <img
            src={currentTab.image}
            alt={currentTab.label}
            className={classes.tabImage}
          />
        )}
      </div>
    </div>
  );
}
