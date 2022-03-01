import Head from "next/head";
import Hero from "../components/hero";
import Navbar from "../components/navbar";
import SectionTitle from "../components/sectionTitle";

import { benefitOne, benefitTwo } from "../components/data";
import Benefits from "../components/benefits";
import Footer from "../components/footer";
import Testimonials from "../components/testimonials";
import Pricing from "../components/pricing";
import Cta from "../components/cta";
import PopupWidget from "../components/popupWidget";
import Contact from "../components/contact";

//import dynamic from "next/dynamic";

// const Video = dynamic(() => import("../components/video"));

// const Benefits = dynamic(() => import("../components/benefits"));
// const Footer = dynamic(() => import("../components/footer"));
// const Testimonials = dynamic(() => import("../components/testimonials"));
// const Cta = dynamic(() => import("../components/cta"));
// const Faq = dynamic(() => import("../components/faq"));

// const PopupWidget = dynamic(() => import("../components/popupWidget"));

export default function Home() {
  return (

    <>
      <Head>
        <title>Performant - Web Development Services </title>
        <meta
          name="description"
          content="Solving your business problems with modern technology"
        />
      </Head>

      <Navbar />
      <Hero />
      <div id="services" className="relative bottom-[80px]"></div>
      <SectionTitle
        pretitle="Performant Benefits"
        title=" Why choose Performant?">
        Performant is a small agency that works with a minimal number of clients to ensure your business gets the time and attention it deserves
      </SectionTitle>
      <Benefits data={benefitOne} />
      <Benefits imgPos="right" data={benefitTwo} />
      <div id="pricing" className="relative bottom-[95px]"></div>
      <SectionTitle
        pretitle="Pricing"
        title="Monthly Plans">
        All plans include Hosting, Domain Name, Backups, Security, Maintenance and Support. Everything you need for one monthly payment, no upfront costs.
      </SectionTitle>
      <Pricing />
      <div id="projects" className="relative bottom-[80px]"></div>
      <SectionTitle
        pretitle="Past Project"
        title="Brochure">
      </SectionTitle>
      <figure className=" items-center flex w-full flex-col">
      <a href="https://darrenbeattylandscape.ca">
      <img src="./img/dble.webp" className= "rounded mx-auto opacity-95" width="892" height="501" alt="Darren Beatty Landscaping brochure website" />
      </a>
      <figcaption className="text-center mt-0 max-w-4xl py-4 text-lg leading-normal text-gray-500 lg:text-xl xl:text-xl dark:text-gray-300">
        DB Landscaping wanted a website to showcase the services they provide. Shortly after launch they attracted their largest contract yet booked through the new site.
      </figcaption>
      </figure>
      <div id="blog" className="relative bottom-[80px]"></div>
      <SectionTitle
        pretitle="Past Project"
        title="Blog">
      </SectionTitle>
      <figure className=" items-center flex w-full flex-col">
      <img src="./img/dennis.webp" className= "rounded mx-auto opacity-95" width="892" height="501" alt="Dennis McNish Mortgage Broker blog website"/>
      <figcaption className="text-center mt-0 max-w-4xl py-4 text-lg leading-normal text-gray-500 lg:text-xl xl:text-xl dark:text-gray-300">
        A Mortgage Broker needed a site with a clean, professional layout. He wanted to be able to add blog posts, testimonials, and information about his services.
      </figcaption>
      </figure>
      <div id="ecommerce" className="relative bottom-[80px]"></div>
      <SectionTitle
        pretitle="Past Project"
        title="E-Commerce">
      </SectionTitle>
      <figure className=" items-center flex w-full flex-col">
      <a href="https://tractorfab.com">
      <img src="./img/tf.webp" className= "rounded mx-auto opacity-95" width="892" height="503" alt="Tractor Fab E-Commerce website"/>
      </a>
      <figcaption className="text-center mt-0 max-w-4xl py-4 text-lg leading-normal text-gray-500 lg:text-xl xl:text-xl dark:text-gray-300">
        Tractor Fab had an international E-Commerce site with more than 10 years of orders and customers. We migrated over 200 products to a new custom WooCommerce store.
      </figcaption>
      </figure>

      <div id="reviews" className="relative bottom-[80px]"></div>
      <SectionTitle
        pretitle="Testimonials"
        title="Here's what people are saying">
        Communication is key. We work with you to get the results you need
      </SectionTitle>
      <Testimonials />
      <Cta />
      <Footer />
      <PopupWidget />
    </>
  );
}
