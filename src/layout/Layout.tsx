import { Component, css } from "dreamland/core";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Layout: Component<EmptyArgs, { outlet: Element }> = function () {
  return (
    <div>
      <Navbar
        links={[
          {
            title: "Home",
            path: "/",
          },
          {
            title: "Contact",
            path: "/contact",
          },
        ]}
      />
      <main bind:this={use(this.container)}>{use(this.outlet)}</main>
      <Footer />
    </div>
  );
};

Layout.style = css`
  :scope {
    height: 100%;
    width: calc(100%);
    display: flex;
    flex-direction: column;
  }
  
  main {
    flex: 1;
  }
`;

export default Layout;
