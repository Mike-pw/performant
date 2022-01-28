import Container from "./container";
import { 
  SiWoocommerce, 
  SiWordpress, 
  SiReact, 
  SiNextdotjs, 
  SiNodedotjs 
} from 'react-icons/si'
import { GiGraduateCap } from "react-icons/gi";

function handleContactClick() {
  document.querySelector("#headlessui-disclosure-button-4").click()
}

export default function Hero() {
  return (
    <>
      <Container className="flex flex-wrap py-15">
          <div className="mx-auto max-w-2xl mb-8">
            <h1 className="text-center text-6xl font-bold leading-snug tracking-tight text-gray-800 lg:text-7xl lg:leading-tight xl:text-8xl xl:leading-tight dark:text-white">
              Performant
            </h1>
            <h2 className="text-center py-0 text-3xl leading-normal text-red-500 lg:text-2xl xl:text-3xl">
              Web Development Services
            </h2>
            <p className="text-center py-3 text-xl leading-normal text-gray-500 lg:text-xl xl:text-1xl dark:text-gray-300">
              Solving your business problems with modern technology
            </p>
            <div className=" py-3 mx-auto w-3/4 flex flex-col justify-around space-y-3 sm:space-x-4 sm:space-y-0 sm:items-center sm:flex-row">
              <a
                className="px-8 py-2 text-lg font-medium text-center text-white bg-red-600 rounded-md hover:bg-red-500"
                onClick={handleContactClick}>
                Get Started
              </a>
              <a
                href="#services"
                className="flex items-center space-x-2 text-gray-500 dark:text-gray-400 hover:text-black dark:hover:text-white">
                <GiGraduateCap size="1.5em"/>
                  <title>Learn More</title>
                <span> Learn More</span>
              </a>
          </div>
        </div>
      </Container>
      <Container>
        <div className="flex flex-col justify-center">
          <h2 className="text-xl text-center text-gray-500 dark:text-white">
            Trusted by clients across Canada</h2>
          <div className="flex flex-wrap justify-center gap-5 mt-5 md:justify-around">
            <div className="flex items-center text-gray-400 dark:text-gray-400">
              <SiWordpress size="5em"/>
            </div>
            <div className="flex items-center text-gray-400 dark:text-gray-400">
              <SiReact size="5em"/>
            </div>
            <div className="flex items-center pt-2 text-gray-400 dark:text-gray-400">
              <SiWoocommerce size="10em"/>
            </div>
            <div className="flex items-center pt-1 text-gray-400 dark:text-gray-400">
              <SiNextdotjs size="5em"/>
            </div>
            <div className="flex items-center pt-2 text-gray-400 dark:text-gray-400">
              <SiNodedotjs size="5em"/>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}