import { css } from "@emotion/react";
import { FC, memo } from "react";
import colors from "../../values/colors";
import { Link } from "gatsby";

const container = css`
  padding: 3rem calc((100vw - 1300px) / 2);
`;
const contentContainer = css``;
const listContainer = css`
  display: flex;
  gap: 1rem;
  flex-direction: column;
`;
const itemContainer = css`
  background-color: ${colors.backgroundLightPink};
  padding: 3rem 5rem;
  border-radius: 0.5rem;

  display: flex;
  gap: 2rem;
`;
const image = css`
  border-radius: 0.5rem;
`;
const likeButton = css``;
const infoContainer = css`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;
const order = css`
  font-size: 1.5rem;
`;
const name = css``;
const description = css`
  line-height: 1.4;
`;
const seeMore = css`
  font-size: 0.875rem;
  text-decoration: underline;
  cursor: pointer;
  color: ${colors.black};
`;

const TripsList: FC = memo(() => {
  return (
    <div css={container}>
      <div css={contentContainer}>
        <ul css={listContainer}>
          <li css={itemContainer} data-aos="fade-right">
            <img
              src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2a/c7/f1/d3/caption.jpg?w=500&h=400&s=1"
              css={image}
            />
            <div css={infoContainer}>
              <p css={order}>01.</p>
              <h1 css={name}>Bali</h1>
              <p css={description}>
                Bali is a living postcard, an Indonesian paradise that feels
                like a fantasy. Soak up the sun on a stretch of fine white sand,
                or commune with the tropical creatures as you dive along coral
                ridges or the...
              </p>
              <Link to="/trips/bali" css={seeMore}>
                See More
              </Link>
            </div>
          </li>

          <li css={itemContainer} data-aos="fade-right">
            <img
              src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/15/33/f5/de/london.jpg?w=500&h=400&s=1"
              css={image}
            />
            <div css={infoContainer}>
              <p css={order}>02.</p>
              <h1 css={name}>London</h1>
              <p css={description}>
                From Shoreditch’s swaggering style to Camden’s punky vibe and
                chic Portobello Road, London is many worlds in one. The city’s
                energy means that no two days are the same. Explore royal or
                historic sites,...
              </p>
              <Link to="/trips/bali/" css={seeMore}>
                See More
              </Link>
            </div>
          </li>
          <li css={itemContainer} data-aos="fade-right">
            <img
              src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1b/33/f7/12/caption.jpg?w=500&h=400&s=1"
              css={image}
            />
            <div css={infoContainer}>
              <p css={order}>03.</p>
              <h1 css={name}>Ha Noi</h1>
              <p css={description}>
                The charming Vietnamese capital has aged well, preserving the
                Old Quarter, monuments and colonial architecture, while making
                room for modern developments alongside. Hanoi may have shrugged
                off several...
              </p>
              <Link to="/trips/bali/" css={seeMore}>
                See More
              </Link>
            </div>
          </li>
          <li css={itemContainer} data-aos="fade-right">
            <img
              src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2a/c7/f1/d3/caption.jpg?w=500&h=400&s=1"
              css={image}
            />
            <div css={infoContainer}>
              <p css={order}>04.</p>
              <h1 css={name}>Bali</h1>
              <p css={description}>
                Bali is a living postcard, an Indonesian paradise that feels
                like a fantasy. Soak up the sun on a stretch of fine white sand,
                or commune with the tropical creatures as you dive along coral
                ridges or the...
              </p>
              <Link to="/trips/bali/" css={seeMore}>
                See More
              </Link>
            </div>
          </li>

          <li css={itemContainer} data-aos="fade-right">
            <img
              src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/15/33/f5/de/london.jpg?w=500&h=400&s=1"
              css={image}
            />
            <div css={infoContainer}>
              <p css={order}>05.</p>
              <h1 css={name}>London</h1>
              <p css={description}>
                From Shoreditch’s swaggering style to Camden’s punky vibe and
                chic Portobello Road, London is many worlds in one. The city’s
                energy means that no two days are the same. Explore royal or
                historic sites,...
              </p>
              <Link to="/trips/bali/" css={seeMore}>
                See More
              </Link>
            </div>
          </li>
          <li css={itemContainer} data-aos="fade-right">
            <img
              src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1b/33/f7/12/caption.jpg?w=500&h=400&s=1"
              css={image}
            />
            <div css={infoContainer}>
              <p css={order}>06.</p>
              <h1 css={name}>Ha Noi</h1>
              <p css={description}>
                The charming Vietnamese capital has aged well, preserving the
                Old Quarter, monuments and colonial architecture, while making
                room for modern developments alongside. Hanoi may have shrugged
                off several...
              </p>
              <Link to="/trips/bali/" css={seeMore}>
                See More
              </Link>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
});

export default TripsList;
