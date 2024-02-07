import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import Layout from "../components/Layout";
import Contact from "../components/Contact";
import AOS from "aos";
import "aos/dist/aos.css";
import ContactPageContent from "../components/ContactPage/ContactPageContent";

const ContactPage: React.FC<PageProps> = () => {
  React.useEffect(() => {
    AOS.init({
      duration: 600,
    });
  }, []);

  return (
    <Layout primary={false}>
      <ContactPageContent />
      <Contact />
    </Layout>
  );
};

export default ContactPage;

export const Head: HeadFC = () => <title>Explorix - Contact Us</title>;
