import { css } from "@emotion/react";
import { FC, memo } from "react";
import colors from "../../values/colors";

const container = css`
  padding: 3rem calc((100vw - 1300px) / 2);
`;
const contentContainer = css`
  display: flex;
  gap: 1rem;
  flex-direction: column;
  line-height: 1.3;
  padding: 3rem 0;

  border-bottom: 1px solid ${colors.primary};
`;
const title = css`
  max-width: 1000px;
`;
const description = css`
  max-width: 1000px;
`;

const TripsContent: FC = memo(() => {
  return (
    <div css={container}>
      <div css={contentContainer}>
        <h1 css={title} data-aos="fade-right">
          Top Destinations - World
        </h1>
        <p css={description} data-aos="fade-right">
          Travelers’ Choice Awards Best of the Best winners are destinations
          whose hotels, restaurants and things to do received a high volume of
          above-and-beyond reviews and opinions from our community over a
          12-month period. Fewer than 1% of Tripadvisor’s 8 million listings are
          awarded Best of the Best, signifying the highest level of excellence
          in travel.
        </p>
        <p css={description} data-aos="fade-right">
          Congrats to all of the 2024 winners and a big thanks to the travelers
          who made it possible.
        </p>
        <p css={description} data-aos="fade-right">
          You’ve probably got one or two of these destinations on your list of
          dream vacays. What can we say? People love them—and for very good
          reason.
        </p>
      </div>
    </div>
  );
});

export default TripsContent;
