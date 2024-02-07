import { css } from "@emotion/react";
import { FC, memo } from "react";
import colors from "../../values/colors";

const container = css`
  padding: 3rem calc((100vw - 1300px) / 2);
`;
const contentContainer = css`
  display: flex;
  gap: 3rem;
  flex-direction: column;
`;

const infoContainer = css`
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
  max-width: 600px;
`;

const videoBg = css`
  width: 100%;
  -o-object-fit: cover;
  object-fit: cover;
`;

const TripContent: FC = memo(() => {
  return (
    <div css={container}>
      <div css={contentContainer}>
        <div css={infoContainer}>
          <h1 css={title} data-aos="fade-right">
            About Bali
          </h1>
          <p css={description} data-aos="fade-right">
            Bali packs a lot into one small island— from breathtaking waterfalls
            like Sekumpul in the north to the white sand beaches of Nyang Nyang
            in the south. Whatever you’re seeking, you’ll probably find:
            surf-able waves in Batu Bolong, all-night clubs in Seminyak, luxury
            clifftop hotels in Nusa Dua, and spiritual refuges all around. Snap
            a pic at the Gateway to Heaven, cut through the jungle to the hidden
            Gunung Kawi Temple, and catch the sunset and a traditional fire
            dance at Uluwatu Temple. Just don’t miss the markets—hunt for
            handcrafted artwork and textiles at the Sukawati Art Market, or
            snack on street food staples like satay and bakso at the Sindhu
            Night Market. For even more tastes and things to do, check out our
            recs below.
          </p>
        </div>

        <video
          data-aos="fade-right"
          src="https://video-direct-tacdn-com.global.ssl.fastly.net/media/video-v/2b/0d/90/14/caption_720.mp4"
          css={videoBg}
          autoPlay
          loop
          muted
          playsInline
        />
      </div>
    </div>
  );
});

export default TripContent;
