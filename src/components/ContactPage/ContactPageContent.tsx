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

const ContactPageContent: FC = memo(() => (
  <div css={container} data-aos="fade-up">
    <div css={contentContainer}>
      <h3 css={mainTitle}>
        Have questions, need assistance, or just want to say hello? We'd love to
        hear from you! Get in touch with the Explorix team using the contact
        information below:
      </h3>
    </div>
    <div css={contentContainer}>
      <h3 css={mainTitle}>Customer Support</h3>
      <p css={description}>
        For assistance with bookings, inquiries about our services, or any other
        travel-related questions, our dedicated customer support team is
        available 24/7.
      </p>
      <ul css={list}>
        <li>
          <b>Phone:&nbsp;</b>+1 (800) 123-4567
        </li>
        <li>
          <b>Email:&nbsp;</b>support@explorix.com
        </li>
      </ul>
    </div>
    <div css={contentContainer}>
      <h3 css={mainTitle}>Business Inquiries</h3>
      <p css={description}>
        Interested in partnership opportunities, advertising on our platform, or
        collaborating with Explorix? Contact our business development team to
        discuss how we can work together.
      </p>
      <ul css={list}>
        <li>
          <b>Email:&nbsp;</b>business@explorix.com
        </li>
      </ul>
    </div>

    <div css={contentContainer}>
      <h3 css={mainTitle}>Feedback and Suggestions</h3>
      <p css={description}>
        We value your feedback and are constantly striving to improve our
        services. Share your thoughts, suggestions, or concerns with us—we're
        here to listen.
      </p>
      <ul css={list}>
        <li>
          <b>Email:&nbsp;</b>feedback@explorix.com
        </li>
      </ul>
    </div>

    <div css={contentContainer}>
      <h3 css={mainTitle}>Address</h3>
      <p css={description}>
        Visit us at our headquarters or send us mail at the following address:
      </p>
      <p css={description}>
        Explorix Travel
        <br />
        123 Adventure Avenue
        <br />
        Cityville, Country
      </p>
    </div>
    <div css={contentContainer}>
      <h3 css={mainTitle}>Social Media</h3>
      <p css={description}>
        Connect with us on social media to stay updated on the latest travel
        inspiration, deals, and community updates.
      </p>
      <ul css={list}>
        <li>
          <b>Facebook: &nbsp;</b>facebook.com/explorix
        </li>
        <li>
          <b>Twitter: &nbsp;</b>Twitter.com/explorix
        </li>
        <li>
          <b>Instagram: &nbsp;</b>Instagram.com/explorix
        </li>
      </ul>
    </div>
    <div css={contentContainer}>
      <h3 css={mainTitle}>We're Here to Help</h3>
      <p css={description}>
        At Explorix, we're committed to providing exceptional service and
        support to our valued customers. Whether you're planning your next
        adventure or need assistance during your travels, don't hesitate to
        reach out to us. Your journey starts here!
      </p>
    </div>
  </div>
));

export default ContactPageContent;
