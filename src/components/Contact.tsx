import { css } from "@emotion/react";
import { FC, memo } from "react";
import ButtonLink from "./ButtonLink";

const container = css`
  background: linear-gradient(
      180deg,
      rgba(0, 0, 0, 0.5) 0%,
      rgba(0, 0, 0, 0.5) 35%,
      rgba(0, 0, 0, 0.1) 100%
    ),
    url("/static/travel-4.jpg") no-repeat center;

  background-size: cover;
  height: 450px;
  width: 100%;
  padding: 5rem calc((100vw - 1300px) / 2);
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const contentContainer = css`
  display: flex;
  flex-direction: column;
  align-items: center;

  h1 {
    text-align: center;
    margin-bottom: 1rem;
    font-size: clamp(1rem, 5vw, 3rem);
    padding: 0 1rem;
  }

  p {
    text-align: center;
    font-size: clamp(1rem, 2.5vw, 1.5rem);
    padding: 0 1rem;
    margin-bottom: 2rem;
  }

  form {
    z-index: 10;
  }
`;
const formWrap = css`
  input {
    padding: 1rem 1.5rem;
    outline: none;
    width: 350px;
    height: 48px;
    border-radius: 50px;
    border: none;
    margin-right: 1rem;
  }

  @media screen and (max-width: 760px) {
    display: flex;
    flex-direction: column;
    padding: 0 1rem;

    input {
      margin-bottom: 1rem;
      width: 100%;
      margin-right: 0;
    }
  }
`;

const Contact: FC = memo(() => {
  return (
    <div css={container}>
      <div css={contentContainer}>
        <h1 data-aos="fade-down">Get Access to Exclusive Offers</h1>
        <p data-aos="fade-down">
          Sign up for your newsletter below to get $100 off your first trip!
        </p>

        <form action="#" data-aos="fade-up">
          <div css={formWrap}>
            <label htmlFor="email">
              <input type="email" placeholder="Enter your email" id="email" />
            </label>
            <ButtonLink
              text="Sign Up"
              primary
              round
              size="medium"
              href="#"
            ></ButtonLink>
          </div>
        </form>
      </div>
    </div>
  );
});

export default Contact;
