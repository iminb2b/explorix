import { css } from "@emotion/react";
import { Link } from "gatsby";
import { FC, memo } from "react";
import { FaBars } from "react-icons/fa";
import { menuData } from "../data/MenuData";
import ButtonLink from "./ButtonLink";

const navContainer = ({ primary }: { primary: boolean }) => css`
  background: transparent;
  height: 80px;
  display: flex;
  justify-content: space-between;
  padding: 0.5rem calc((100vw - 1300px) / 2);
  z-index: 100;
  position: relative;
  color: ${primary ? "#fff" : "#f26a2e"};
  top: 0;
  left: 0;
  right: 0;
`;

const navLink = ({ primary }: { primary: boolean }) => css`
  color: ${primary ? "#fff" : "#f26a2e"};
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    color: #f26a2e;
    text-decoration: underline;
  }
`;

const barIcon = css`
  display: none;
  color: #fff;

  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 75%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`;

const navMenu = css`
  display: flex;
  align-items: center;
  margin-right: -48px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const navBtn = css`
  display: flex;
  align-items: center;
  margin-right: 24px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const Header: FC<{ primary: boolean }> = memo(({ primary = true }) => {
  return (
    <nav css={navContainer({ primary })}>
      <FaBars css={barIcon} />
      <Link to="/" css={navLink({ primary })}>
        EXPLORIX
      </Link>
      <ul css={navMenu}>
        {menuData.map((item) => (
          <Link key={item.title} to={item.link} css={navLink({ primary })}>
            {item.title}
          </Link>
        ))}
      </ul>
      <div css={navBtn}>
        <ButtonLink
          primary={true}
          round
          href="/trips"
          size="medium"
          text="Book a Flight"
        />
      </div>
    </nav>
  );
});

export default Header;
