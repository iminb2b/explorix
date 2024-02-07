import { Global, css } from "@emotion/react";
import { FC, ReactNode, memo } from "react";
import Header from "./Header";
import globalStyles from "../styles/globalStyles";
import Footer from "./Footer";

const pageContainer = css({});
const contentContainer = css({});

const Layout: FC<{ children: ReactNode; primary?: boolean }> = memo(
  ({ children, primary = true }) => {
    return (
      <div css={pageContainer}>
        <Global styles={globalStyles} />
        <Header primary={primary} />
        <main css={contentContainer}>{children}</main>
        <Footer />
      </div>
    );
  }
);

export default Layout;
