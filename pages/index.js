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
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />
      <Hero />
      <SectionTitle
        pretitle="Performant Benefits"
        title=" Why choose Performant?">
        Performant is a small agency that works with a minimal number of clients to ensure your business gets the time and attention it deserves
      </SectionTitle>
      <a id="services" className="relative bottom-[80px]"></a>
      <Benefits data={benefitOne} />
      <Benefits imgPos="right" data={benefitTwo} />
      <a id="pricing" className="relative bottom-[95px]"></a>
      <SectionTitle
        pretitle="Pricing"
        title="Monthly Plans">
        All you need for one monthly payment.
      </SectionTitle>
      <Pricing />
      <a id="projects" className="relative bottom-[80px]"></a>
      <SectionTitle
        pretitle="Past Projects"
        title="DB Landscaping">
        DB Landscaping wanted a website to showcase the services they provide. Shortly after launch they attracted their largest contract yet booked through the new site.
      </SectionTitle>
      <a href="https://darrenbeattylandscape.ca">
      <img src="./img/dble.png" className= "rounded w-[896px] mx-auto opacity-95" />
      </a>
      <SectionTitle
        pretitle="Past Projects"
        title="Tractor Fab">
        Tractor Fab had an international E-Commerce site with more than 10 years of orders and customers. We migrated over 200 products to a new custom WooCommerce store.
      </SectionTitle>
      <a href="https://tractorfab.com">
      <img src="./img/tf.png" className= "rounded w-[896px] mx-auto opacity-95" />
      </a>
      <SectionTitle
        pretitle="Past Projects"
        title="Respark">
        User login and dashboard for a video game development studio. The interface handled user registration, login, authentication and forgotten passwords.
      </SectionTitle>
      <a href="https://user.playrespark.com">
      <img src="./img/respark.png" className= "rounded w-[896px] mx-auto opacity-95" />
      </a>
      <a id="reviews" className="relative bottom-[80px]"></a>
      <SectionTitle
        pretitle="Testimonials"
        title="Here's what people are saying">
        Communication is key
      </SectionTitle>
      <Testimonials />
      <Cta />
      <Footer />
      <PopupWidget />
    </>
  );
}
