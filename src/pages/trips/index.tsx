import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import Layout from "../../components/Layout";
import Contact from "../../components/Contact";
import AOS from "aos";
import "aos/dist/aos.css";
import TripsHero from "../../components/Trips/TripsHero";
import TripsContent from "../../components/Trips/TripsContent";
import TripsList from "../../components/Trips/TripsList";

const Trips: React.FC<PageProps> = () => {
  React.useEffect(() => {
    AOS.init({
      duration: 600,
    });
  }, []);

  return (
    <Layout primary={false}>
      <TripsHero />
      <TripsContent />
      <TripsList />
      <Contact />
    </Layout>
  );
};

export default Trips;

export const Head: HeadFC = () => (
  <title>Explorix - Explore destinations</title>
);
