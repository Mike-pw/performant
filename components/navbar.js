import ThemeChanger from "./DarkSwitch";
import { Disclosure } from "@headlessui/react";

export default function Navbar() {

  function handleContactClick() {
      document.querySelector("#headlessui-disclosure-button-4").click()
  }

  return (
    <div className="w-full px-12 sticky top-0 z-50 bg-white dark:bg-[#171717]">
      <nav className="container relative flex flex-wrap items-center justify-between p-8 mx-auto lg:justify-between xl:px-0">
        {/* Logo  */}
        <Disclosure>
          {({ open }) => (
            <>
              <div className="flex flex-wrap items-center justify-between w-full lg:w-auto">
                  <a href="/" className="flex items-center space-x-2 text-2xl font-medium text-red-500 dark:text-gray-100">
                  <div className="-mr-2">
                  <img
                        src="./img/logo-dark.png"
                        alt="Performant Logo"
                        width="27"
                        height="32"
                        className="w-8 block dark:hidden"/>
                      <img
                        src="./img/logo-light.png"
                        alt="Performant Logo"
                        width="27"
                        height="32"
                        className="w-8  hidden dark:block"
                      />
                      </div>
                  <span className="text-4xl text-black dark:text-white">erformant</span>
                  </a>
                <Disclosure.Button
                  aria-label="Toggle Menu"
                  className="px-2 py-1 ml-auto text-gray-500 rounded-md lg:hidden hover:text-red-500 focus:text-red-500 focus:bg-red-100 focus:outline-none dark:text-gray-300 dark:focus:bg-trueGray-700">
                  <svg
                    className="w-6 h-6 fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24">
                    {open && (
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"
                      />
                    )}
                    {!open && (
                      <path
                        fillRule="evenodd"
                        d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                      />
                    )}
                  </svg>
                </Disclosure.Button>

                <Disclosure.Panel className="flex flex-wrap w-full my-5 lg:hidden">
                  <>
                        <a href="#services" className="w-full px-4 py-2 -ml-4 text-gray-500 rounded-md dark:text-gray-300 hover:text-red-500 dark:hover:text-red-500 focus:text-red-500 focus:bg-red-100 dark:focus:bg-gray-800 focus:outline-none dark:focus:bg-trueGray-700">
                          <Disclosure.Button>Services</Disclosure.Button>
                        </a>
                        <a href="#pricing" className="w-full px-4 py-2 -ml-4 text-gray-500 rounded-md dark:text-gray-300 hover:text-red-500 dark:hover:text-red-500 focus:text-red-500 focus:bg-red-100 dark:focus:bg-gray-800 focus:outline-none dark:focus:bg-trueGray-700">
                        <Disclosure.Button>Pricing</Disclosure.Button>
                        </a>
                        <a href="#projects" className="w-full px-4 py-2 -ml-4 text-gray-500 rounded-md dark:text-gray-300 hover:text-red-500 dark:hover:text-red-500 focus:text-red-500 focus:bg-red-100 dark:focus:bg-gray-800 focus:outline-none dark:focus:bg-trueGray-700">
                        <Disclosure.Button>Projects</Disclosure.Button>
                        </a>
                        <a  href="#reviews" className="w-full px-4 py-2 -ml-4 text-gray-500 rounded-md hover:text-red-500 dark:text-gray-300  dark:hover:text-red-500 focus:text-red-500 focus:bg-red-100 dark:focus:bg-gray-800 focus:outline-none dark:focus:bg-trueGray-700">
                        <Disclosure.Button>Reviews</Disclosure.Button>
                        </a>
                      <a href="#contact" className="w-full px-6 py-2 mt-3 text-center text-white bg-red-600 rounded-md lg:ml-5"
                        onClick={handleContactClick}>
                        Contact
                      </a>
                  </>
                </Disclosure.Panel>
              </div>
            </>
          )}
        </Disclosure>

        {/* menu  */}
        <div className="hidden text-center lg:flex lg:items-center">
          <ul className="items-center justify-end flex-1 pt-6 list-none lg:pt-0 lg:flex">
              <li className="mr-3 nav__item">
                  <a href="#services" className="inline-block px-4 py-2 text-lg font-normal text-gray-800 no-underline rounded-md dark:text-gray-200 hover:text-red-500 dark:hover:text-red-500 focus:text-red-500 focus:bg-red-100 focus:outline-none dark:focus:bg-gray-800">
                    Services
                  </a>
                  <a href="#pricing" className="inline-block px-4 py-2 text-lg font-normal text-gray-800 no-underline rounded-md dark:text-gray-200 hover:text-red-500 focus:text-red-500 dark:hover:text-red-500 focus:bg-red-100 focus:outline-none dark:focus:bg-gray-800">
                    Pricing
                  </a>
                  <a href="#projects" className="inline-block px-4 py-2 text-lg font-normal text-gray-800 no-underline rounded-md dark:text-gray-200 hover:text-red-500 focus:text-red-500 focus:bg-red-100 dark:hover:text-red-500 focus:outline-none dark:focus:bg-gray-800">
                    Projects
                  </a>
                  <a href="#reviews" className="inline-block px-4 py-2 text-lg font-normal text-gray-800 no-underline rounded-md dark:text-gray-200 hover:text-red-500 focus:text-red-500 focus:bg-red-100 focus:outline-none dark:hover:text-red-500 dark:focus:bg-gray-800">
                    Reviews
                  </a>
              </li>
          </ul>
        </div>

        <div className="hidden mr-3 space-x-4 lg:flex nav__item">
            <a href="#contact" className="px-6 py-2 text-white bg-red-600 hover:bg-red-500 rounded-md md:ml-5"
              onClick={handleContactClick}>
              Contact
            </a>

          <ThemeChanger />
        </div>
      </nav>
    </div>
  );
}
