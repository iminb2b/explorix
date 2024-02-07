import { css } from "@emotion/react";
import { FC, memo } from "react";
import ButtonLink from "../ButtonLink";

const heroContainer = css`
  background: #0c0c0c;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  padding: 0 1rem;
  position: relative;
  margin-top: -80px;
  color: #fff;

  ::before {
    content: "";
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 2;
    background: linear-gradient(
        180deg,
        rgba(0, 0, 0, 0.2) 0%,
        rgba(0, 0, 0, 0.6) 100%
      ),
      linear-gradient(180deg, rgba(0, 0, 0, 0.2) 0%, transparent 100%);
  }
`;
const videoBg = css`
  width: 100%;
  height: 100%;
  -o-object-fit: cover;
  object-fit: cover;
`;
const heroBg = css`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
`;
const heroContent = css`
  z-index: 3;
  height: calc(100vh - 80px);
  max-height: 100%;
  padding: 0 calc((1000vw - 1300px) / 2);
`;
const heroItems = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  height: 100vh;
  max-height: 100%;
  padding: 0;
  color: #fff;
  line-height: 1.1;
  font-weight: bold;
`;
const heroH1 = css`
  white-space: nowrap;
  font-size: clamp(1.5rem, 6vw, 4rem);
  margin-bottom: 1.5rem;
  letter-spacing: 3px;
  padding: 0 1rem;
`;
const heroP = css`
  font-size: clamp(1rem, 3vw, 3rem);
  font-weight: 400;
  margin-bottom: 2rem;
`;

const Hero: FC = memo(() => {
  return (
    <div css={heroContainer}>
      <div css={heroBg}>
        <video
          src="/static/hero-video.mp4"
          css={videoBg}
          autoPlay
          loop
          muted
          playsInline
        />
      </div>
      <div css={heroContent}>
        <div css={heroItems}>
          <h1 css={heroH1}>Unreal Destinations</h1>
          <p css={heroP}>Out of this world</p>
          <ButtonLink
            round
            size="large"
            primary
            text="Travel Now"
            href="#trips"
          ></ButtonLink>
        </div>
      </div>
    </div>
  );
});

export default Hero;
