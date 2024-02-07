import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import Layout from "../components/Layout";
import Contact from "../components/Contact";
import AOS from "aos";
import "aos/dist/aos.css";
import AboutPageContent from "../components/AboutPage/AboutPageContent";

const AboutPage: React.FC<PageProps> = () => {
  React.useEffect(() => {
    AOS.init({
      duration: 600,
    });
  }, []);

  return (
    <Layout primary={false}>
      <AboutPageContent />
      <Contact />
    </Layout>
  );
};

export default AboutPage;

export const Head: HeadFC = () => <title>Explorix - About Us</title>;
