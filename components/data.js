import {
  PencilAltIcon,
  TerminalIcon,
  CogIcon,
  DeviceMobileIcon,
  SearchIcon,
  PresentationChartLineIcon,
} from "@heroicons/react/outline";

import benefitOneImg from "../public/img/benefit-one.svg";
import benefitTwoImg from "../public/img/benefit-two.svg";

const benefitOne = {
  title: "Our Services",
  desc: "We build and maintain small business websites. Whether you want to modify your existing site, or create something  new, we can help.",
  image: benefitOneImg,
  bullets: [
    {
      title: "Web Design",
      desc: "Match your existing brand colors, font and logo",
      icon: <PencilAltIcon />,
    },
    {
      title: "Custom Development",
      desc: "Code written specific to your unique business needs",
      icon: <TerminalIcon />,
    },
    {
      title: "Maintenance and Performance",
      desc: "Keep your site current and operating at it's best",
      icon: <CogIcon />,
    },
  ],
};

const benefitTwo = {
  title: "The Extras",
  desc: "All websites are built to modern standards to ensure your business is accessible to the largest audience possible.",
  image: benefitTwoImg,
  bullets: [
    {
      title: "Mobile Responsive",
      desc: "Sites that work seamlessly on any browser or device",
      icon: <DeviceMobileIcon />,
    },
    {
      title: "Search Optimization",
      desc: "Improve your chances of getting found on the web",
      icon: <SearchIcon />,
    },
    {
      title: "Google Analytics",
      desc: "Track how users interact with your website",
      icon: <PresentationChartLineIcon />,
    },
  ],
};

export { benefitOne, benefitTwo };
