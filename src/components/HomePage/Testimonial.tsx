import { css } from "@emotion/react";
import { FC, memo } from "react";
import { FaRegLightbulb } from "react-icons/fa";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";

const container = css`
  width: 100%;
  background: #fcfcfc;
  color: #000;
  padding: 5rem calc((100vw - 1300px) / 2);
  height: 100%;
`;
const topLine = css`
  color: #077bf1;
  font-size: 1rem;
  padding-left: 2rem;
  margin-bottom: 0%, 75rem;
`;
const description = css`
  text-align: start;
  padding-left: 2rem;
  margin-bottom: 4rem;
  font-size: clamp(1.5rem, 5vw, 2rem);
  font-weight: bold;
`;
const contentWrapper = css`
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding: 0 2rem;

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;
const columnOne = css`
  display: grid;
  grid-template-rows: 1fr 1fr;
`;

const columnTwo = css`
  display: grid;
  grid-template-columns: 1fr 1fr;

  margin-top: 2rem;
  grid-gap: 10px;

  @media screen and (max-width: 500px) {
    grid-template-columns: 1fr;
  }
`;
const testimonial = css`
  padding-top: 1rem;
  padding-right: 2rem;

  h3 {
    margin-bottom: 1rem;
    font-style: italic;
    font-size: 1.5rem;
  }

  p {
    color: #3b3b3b;
    line-height: 1.7;
  }
`;

const checkIcon = css`
  color: #3fffa8;
  font-size: 2rem;
  margin-bottom: 1rem;
`;

const lightBulbIcon = css`
  color: #f9b19b;
  font-size: 2rem;
  margin-bottom: 1rem;
`;
const image = css`
  border-radius: 10px;
  width: 100%;
`;

const Testimonials: FC = memo(() => {
  return (
    <div css={container}>
      <p css={topLine} data-aos="fade-right">
        Testimonial
      </p>
      <p css={description} data-aos="fade-right">
        What people are saying
      </p>

      <div css={contentWrapper}>
        <div css={columnOne}>
          <div css={testimonial} data-aos="fade-right">
            <IoMdCheckmarkCircleOutline css={checkIcon} />
            <h3>Sean Micheal</h3>
            <p>
              "The greatest experience of my life! It was so much fun exploring
              the mountain and they made it super easy to book my trip and
              accommodation. The greatest experience of my life! It was so much
              fun exploring the mountain and they made it super easy to book my
              trip and accommodation."
            </p>
          </div>
          <div css={testimonial} data-aos="fade-right">
            <FaRegLightbulb css={lightBulbIcon} />
            <h3>Sarah Kim</h3>
            <p>
              "The greatest experience of my life! It was so much fun exploring
              the mountain and they made it super easy to book my trip and
              accommodation. The greatest experience of my life! It was so much
              fun exploring the mountain and they made it super easy to book my
              trip and accommodation."
            </p>
          </div>
        </div>
        <div css={columnTwo} data-aos="fade-down">
          <img src="/static/user1.jpg" css={image} />
          <img src="/static/user2.jpg" css={image} />
        </div>
      </div>
    </div>
  );
});

export default Testimonials;
