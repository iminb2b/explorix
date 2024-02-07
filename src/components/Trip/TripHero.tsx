import { css } from "@emotion/react";
import { FC, memo } from "react";

const heroContainer = css`
  background: #0c0c0c;
  display: flex;
  height: 30rem;
  padding: 0 calc((100vw - 1300px) / 2);
  position: relative;
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
        rgba(0, 0, 0, 0.1) 0%,
        rgba(0, 0, 0, 0.2) 100%
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
  display: flex;

  flex-direction: column;
  color: #fff;
  line-height: 1.1;
  font-weight: bold;

  justify-content: flex-end;
`;
const heroH1 = css`
  white-space: nowrap;
  font-size: clamp(1rem, 4vw, 3rem);
  margin-bottom: 1.5rem;
  letter-spacing: 3px;
`;
const heroP = css`
  font-size: clamp(1rem, 2vw, 2.5rem);
  font-weight: 400;
  margin-bottom: 2rem;
`;

const TripHero: FC = memo(() => {
  return (
    <div css={heroContainer}>
      <div css={heroBg}>
        <img
          src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2a/c7/90/94/caption.jpg?w=1200&h=-1&s=1"
          css={videoBg}
        />
      </div>
      <div css={heroContent} data-aos="fade-right">
        <h1 css={heroH1}>Bali</h1>
        <p css={heroP}>Best of the best destinations</p>
      </div>
    </div>
  );
});

export default TripHero;
