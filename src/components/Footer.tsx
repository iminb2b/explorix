import { css } from "@emotion/react";
import { FC, memo } from "react";
import { Link } from "gatsby";

const container = css`
  padding: 5rem calc((100vw - 1100px) / 2);
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  color: #000;
  background: #fafafb;

  @media screen and (max-width: 820px) {
    grid-template-columns: 1fr 1fr;
  }

  @media screen and (max-width: 400px) {
    grid-template-columns: 1fr;
  }
`;

const footerDesc = css`
  padding: 0 2rem;

  h1 {
    margin-bottom: 3rem;
    color: #f26a2e;
  }

  @media screen and (max-width: 400px) {
    padding: 1rem;
  }
`;
const footerLinkItems = css`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 1rem 2rem;

  @media screen and (max-width: 400px) {
    padding: 1rem;
  }
`;
const linkTitle = css`
  font-size: 0.9875rem;
  margin-bottom: 16px;
`;

const link = css`
  text-decoration: none;
  margin-bottom: 0.5rem;
  font-size: 0.9875rem;
  color: #3d3d4e;

  &:hover {
    color: #f26a2e;
    transform: 0.3s ease-out;
  }
`;

const Footer: FC = memo(() => {
  return (
    <div css={container}>
      <div css={footerDesc}>
        <h1>EXPLORIX</h1>
        <p>We strive to create the best experience for our customer</p>
      </div>
      <div css={footerLinkItems}>
        <h2 css={linkTitle}>Contact Us</h2>
        <Link css={link} to="/about">
          Contact
        </Link>
        <Link css={link} to="/support">
          Support
        </Link>
        <Link css={link} to="/destination">
          Destination
        </Link>
        <Link css={link} to="/about">
          Sponsorship
        </Link>
      </div>
      <div css={footerLinkItems}>
        <h2 css={linkTitle}>Videos</h2>
        <Link css={link} to="/about">
          Submit Video
        </Link>
        <Link css={link} to="/support">
          Ambassadors
        </Link>
        <Link css={link} to="/destination">
          Agency
        </Link>
        <Link css={link} to="/about">
          Influencer
        </Link>
      </div>
      <div css={footerLinkItems}>
        <h2 css={linkTitle}>Social Media</h2>
        <Link css={link} to="/about">
          Instagram
        </Link>
        <Link css={link} to="/support">
          Facebook
        </Link>
        <Link css={link} to="/destination">
          Youtube
        </Link>
        <Link css={link} to="/about">
          Twitter
        </Link>
      </div>
    </div>
  );
});

export default Footer;
