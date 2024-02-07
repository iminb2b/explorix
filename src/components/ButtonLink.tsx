import { css } from "@emotion/react";
import { Link } from "gatsby";
import { FC, memo } from "react";

const button = ({
  primary,
  size,
  round,
}: {
  primary: boolean;
  size: "medium" | "large";
  round: boolean;
}) => css`
  background: ${primary ? "#F26A2E" : "#077FB1"};
  white-space: nowrap;
  padding: ${size === "large" ? "16px 40px" : "10px 32px"};
  color: #fff;
  font-size: ${size === "large" ? "20px" : "16px"};
  outline: none;
  border: none;
  min-width: 100px;
  cursor: pointer;
  text-decoration: none;
  transition: 0.3s !important;
  border-radius: ${round ? "50px" : "none"};

  &:hover {
    background: ${primary ? "#077BF1" : "#F26A2E"};
    transform: translateY(-2px);
  }
`;

const ButtonLink: FC<{
  href: string;
  text: string;
  primary: boolean;
  size: "medium" | "large";
  round: boolean;
}> = memo(({ href, text, primary, size, round }) => {
  return (
    <Link to={href} css={button({ primary, size, round })}>
      {text}
    </Link>
  );
});

export default ButtonLink;
