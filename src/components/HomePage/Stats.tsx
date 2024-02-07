import { css } from "@emotion/react";
import { FC, memo } from "react";
import { GiEarthAmerica } from "react-icons/gi";
import { MdAirplanemodeActive, MdTimer } from "react-icons/md";
import { FaMoneyCheck } from "react-icons/fa";

const container = css`
  width: 100%;
  background: #fff;
  color: #000;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 4rem calc((100vw - 1300px) / 2);
  height: 100%;
`;
const heading = css`
  text-align: start;
  font-size: clamp(1.5rem, 5vw, 2rem);
  margin-bottom: 3rem;
  padding: 0 2rem;
`;

const wrapper = css`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 10px;

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;
const moneyIcon = css`
  color: #3af576;
`;
const earthIcon = css`
  color: #047bf1;
`;
const airplaneIcon = css`
  color: #f3a82e;
`;
const timerIcon = css`
  color: #f34f2e;
`;

const statsBox = css`
  height: 100%;
  width: 100%;
  padding: 2rem;
`;

const icon = css`
  font-size: 3rem;
  margin-bottom: 1rem;
`;
const title = css`
  font-size: clamp(1rem, 2.5vw, 1.5rem);
  margin-bottom: 0.5rem;
`;
const description = css``;

const StatsData = [
  {
    icon: <GiEarthAmerica css={earthIcon} />,
    title: "Over 100 destinations",
    desc: "Travel to over 1000 unique places",
  },
  {
    icon: <MdAirplanemodeActive css={airplaneIcon} />,
    title: "1 Million Trips Made",
    desc: "Over 1 million trips completed last year",
  },
  {
    icon: <MdTimer css={timerIcon} />,
    title: "Fastest Support",
    desc: "Access our support team 24/7",
  },
  {
    icon: <FaMoneyCheck css={moneyIcon} />,
    title: "Best Deals",
    desc: "We offer the best prices",
  },
];

const Stats: FC = memo(() => {
  return (
    <div css={container}>
      <h1 css={heading} data-aos="fade-right">
        Why Choose Us
      </h1>

      <div css={wrapper} data-aos="fade-right">
        {StatsData.map((data, index) => (
          <div key={index} css={statsBox}>
            <div css={icon}>{data.icon}</div>
            <p css={title}>{data.title}</p>
            <p css={description}>{data.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
});

export default Stats;
