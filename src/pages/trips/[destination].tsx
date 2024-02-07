import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import Layout from "../../components/Layout";
import AOS from "aos";
import "aos/dist/aos.css";
import TripContent from "../../components/Trip/TripContent";
import TripHero from "../../components/Trip/TripHero";
import Contact from "../../components/Contact";
import Testimonials from "../../components/HomePage/Testimonial";

const Trip: React.FC<PageProps> = () => {
  React.useEffect(() => {
    AOS.init({
      duration: 600,
    });
  }, []);

  return (
    <Layout primary={false}>
      <TripHero />
      <TripContent />
      <Testimonials />
      <Contact />
    </Layout>
  );
};

export default Trip;

export const Head: HeadFC = () => (
  <title>Explorix - Explore destinations</title>
);
