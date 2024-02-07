import { css } from "@emotion/react";
import { FC, memo } from "react";

const container = css`
  padding: 5rem calc((100vw - 1100px) / 2);
`;
const contentContainer = css`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1rem 1rem;
  line-height: 1.6;
`;

const mainTitle = css``;
const description = css``;
const list = css`
  padding-left: 2rem;
`;

const AboutPageContent: FC = memo(() => (
  <div css={container} data-aos="fade-up">
    <div css={contentContainer}>
      <h3 css={mainTitle}>
        Welcome to Explorix, your ultimate destination for unforgettable travel
        experiences!
      </h3>
      <p css={description}>
        At Explorix, we believe that travel is not just about visiting new
        places, but about creating meaningful connections, embracing diverse
        cultures, and embarking on adventures that enrich our lives. Whether
        you're a seasoned explorer or a first-time traveler, we're here to
        inspire and guide you on your journey.
      </p>
    </div>
    <div css={contentContainer}>
      <h3 css={mainTitle}>Our Mission</h3>
      <p css={description}>
        Our mission at Explorix is to ignite the spirit of exploration in every
        traveler. We aim to provide unparalleled access to breathtaking
        destinations, curated experiences, and expert advice to help you
        discover the world on your terms.
      </p>
    </div>
    <div css={contentContainer}>
      <h3 css={mainTitle}>What Sets Us Apart</h3>
      <ul css={list}>
        <li>
          <b>Curated Experiences:&nbsp;</b>We handpick every destination,
          activity, and accommodation to ensure that your travel experience is
          nothing short of extraordinary.
        </li>
        <li>
          <b>Expert Advice:&nbsp;</b>Our team of travel enthusiasts and experts
          are dedicated to providing you with insider tips, personalized
          recommendations, and invaluable insights to make your trip seamless
          and memorable.
        </li>
        <li>
          <b>Community-Centric Approach:&nbsp;</b>We believe in the power of
          community and strive to foster connections among travelers from around
          the globe. Share your stories, tips, and photos with our vibrant
          community of explorers.
        </li>
        <li>
          <b>Sustainability:&nbsp;</b>We are committed to promoting responsible
          travel practices that respect the environment, support local
          communities, and preserve cultural heritage for generations to come.
        </li>
      </ul>
    </div>
    <div css={contentContainer}>
      <h3 css={mainTitle}>Our Services</h3>
      <ul css={list}>
        <li>
          <b>Destination Guides: &nbsp;</b>Explore our comprehensive destination
          guides packed with insider tips, must-see attractions, and
          off-the-beaten-path experiences.
        </li>
        <li>
          <b>Trip Planning Tools:&nbsp;</b> Plan your perfect itinerary with our
          easy-to-use trip planning tools, including interactive maps, budget
          calculators, and packing checklists.
        </li>
        <li>
          <b>Tailored Travel Packages:&nbsp;</b>Whether you're dreaming of a
          relaxing beach getaway, an adrenaline-fueled adventure, or a cultural
          immersion, we offer customizable travel packages to suit every style
          and budget.
        </li>
        <li>
          <b>24/7 Support:&nbsp;</b>Enjoy peace of mind with our round-the-clock
          customer support team, ready to assist you with any questions or
          concerns before, during, and after your trip.
        </li>
      </ul>
    </div>
    <div css={contentContainer}>
      <h3 css={mainTitle}>Join the Explorix Community</h3>
      <p css={description}>
        Follow us on social media and subscribe to our newsletter to stay
        updated on the latest travel trends, exclusive deals, and inspiring
        stories from fellow explorers. Join the Explorix community today and let
        the adventure begin!
      </p>
    </div>
  </div>
));

export default AboutPageContent;
