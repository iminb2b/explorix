import { css } from "@emotion/react";
import { graphql, useStaticQuery } from "gatsby";
import { FC, memo } from "react";
import ButtonLink from "../ButtonLink";
import { ImLocation } from "react-icons/im";

const productsContainer = css`
  min-height: 100vh;
  padding: 5rem calc((100vw - 1300px) / 2);
  color: #fff;
`;
const productsHeading = css`
  font-size: clamp(1.2rem, 5vw, 3rem);
  text-align: center;
  margin-bottom: 5rem;
  color: #000;
`;
const productsWrapper = css`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 10px;
  justify-content: center;
  padding: 0 2rem;

  @media screen and (max-width: 1200px) {
    grid-template-columns: 1fr 1fr;
  }

  @media screen and (max-width: 868px) {
    grid-template-columns: 1fr;
  }
`;
const productCard = css`
  line-height: 2;
  height: 500px;
  border-radius: 10px;
  transition: 0.2s ease;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const productContent = css`
  line-height: 2;
  height: 450px;
  position: relative;
  border-radius: 10px;
  transition: 0.2s ease;
  width: 100%;
`;
const img = css`
  height: 100%;
  max-width: 100%;
  position: absolute;
  border-radius: 10px;
  filter: brightness(70%);
  transition: 0.4s cubic-bezier(0.075, 0.82, 0.165, 1);

  &:hover {
    filter: brightness(100%);
  }
`;

const productsInfo = css`
  display: flex;
  flex-direction: column;
  padding: 0 2rem;
  align-items: flex-start;
  position: absolute;
  bottom: 50px;
  gap: 1rem;

  @media screen and (max-width: 280px) {
    padding: 0 1rem;
  }
`;
const textWrap = css`
  display: flex;
  align-items: center;
`;
const imLocation = css``;
const productTitle = css`
  font-weight: 400;
  font-size: 1rem;
  margin-left: 1rem;
`;
const buttonLinkContainer = css`
  font-size: 14px;
`;
const buttonContainer = css`
  justify-content: center;
  display: flex;
  margin-top: 5rem;
`;

const Trips: FC<{ heading: string }> = memo(({ heading }) => {
  type GqlTrip = {
    alt: string;
    button: string;
    name: string;
    img: string;
  };
  type GqlTrips = {
    allTripsJson: {
      edges: Array<{
        node: GqlTrip;
      }>;
    };
  };

  const data: GqlTrips = useStaticQuery(graphql`
    query TripsQuery {
      allTripsJson {
        edges {
          node {
            alt
            button
            name
            img
          }
        }
      }
    }
  `);

  const trips: GqlTrip[] = data.allTripsJson.edges.reduce(
    (acc, edge) => [...acc, edge.node],
    []
  );

  console.log(trips);

  return (
    <div css={productsContainer} id="trips">
      <div css={productsHeading}>{heading}</div>
      <div css={productsWrapper} data-aos="fade-up">
        {trips.map((trip, index) => (
          <div css={productCard} key={index}>
            <div css={productContent}>
              <img src={trip.img} alt={trip.alt} css={img} />
              <div css={productsInfo}>
                <div css={textWrap}>
                  <ImLocation css={imLocation} />
                  <p css={productTitle}>{trip.name}</p>
                </div>
                <div css={buttonLinkContainer}>
                  <ButtonLink
                    href="/trips"
                    text={trip.button}
                    round
                    primary
                    size="medium"
                  ></ButtonLink>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div css={buttonContainer}>
        <ButtonLink
          href="/trips"
          text={"See More"}
          primary={false}
          round={false}
          size="large"
        ></ButtonLink>
      </div>
    </div>
  );
});

export default Trips;
