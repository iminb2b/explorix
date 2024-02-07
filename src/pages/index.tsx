import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import Layout from "../components/Layout";
import Hero from "../components/HomePage/Hero";
import Trips from "../components/HomePage/Trips";
import Testimonials from "../components/HomePage/Testimonial";
import Stats from "../components/HomePage/Stats";
import Contact from "../components/Contact";
import AOS from "aos";
import "aos/dist/aos.css";

const IndexPage: React.FC<PageProps> = () => {
  React.useEffect(() => {
    AOS.init({
      duration: 600,
    });
  }, []);

  return (
    <Layout>
      <Hero />
      <Trips heading="Our Favorite Destination" />
      <Testimonials />
      <Stats />
      <Contact />
    </Layout>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Travel</title>;
