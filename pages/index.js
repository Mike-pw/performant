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
      <a href="#" id="services" className="relative bottom-[80px]"></a>
      <SectionTitle
        pretitle="Performant Benefits"
        title=" Why choose Performant?">
        Performant is a small agency that works with a minimal number of clients to ensure your business gets the time and attention it deserves
      </SectionTitle>
      <Benefits data={benefitOne} />
      <Benefits imgPos="right" data={benefitTwo} />
      <a href="#" id="pricing" className="relative bottom-[95px]"></a>
      <SectionTitle
        pretitle="Pricing"
        title="Monthly Plans">
        All plans include Hosting, Domain Name, Backups, Security, Maintenance and Support. Everything you need for one monthly payment, no upfront costs.
      </SectionTitle>
      <Pricing />
      <a href="#" id="projects" className="relative bottom-[80px]"></a>
      <SectionTitle
        pretitle="Past Project"
        title="Brochure">
        DB Landscaping wanted a website to showcase the services they provide. Shortly after launch they attracted their largest contract yet booked through the new site.
      </SectionTitle>
      <a href="https://darrenbeattylandscape.ca">
      <img src="./img/dble.webp" className= "rounded mx-auto opacity-95" width="892" height="501" alt="Darren Beatty Landscaping brochure website" />
      </a>
      <a href="#" id="blog" className="relative bottom-[80px]"></a>
      <SectionTitle
        pretitle="Past Project"
        title="Blog">
        User login and dashboard for a video game development studio. The interface handled user registration, login, authentication and forgotten passwords.
      </SectionTitle>
      <a href="https://dennismcnish.ca">
      <img src="./img/dennis.webp" className= "rounded mx-auto opacity-95" width="892" height="501" alt="Dennis McNish Mortgage Broker blog website"/>
      </a>
      <a href="#" id="ecommerce" className="relative bottom-[80px]"></a>
      <SectionTitle
        pretitle="Past Project"
        title="E-Commerce">
        Tractor Fab had an international E-Commerce site with more than 10 years of orders and customers. We migrated over 200 products to a new custom WooCommerce store.
      </SectionTitle>
      <a href="https://tractorfab.com">
      <img src="./img/tf.webp" className= "rounded mx-auto opacity-95" width="892" height="503" alt="Tractor Fab E-Commerce website"/>
      </a>
      <a href="#" id="reviews" className="relative bottom-[80px]"></a>
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
