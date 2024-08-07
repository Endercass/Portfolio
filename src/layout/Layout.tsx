import Footer from "./Footer";
import Navbar from "./Navbar";

const Layout: Component<EmptyArgs, { outlet: Element }> = function () {
  this.css = `
    height: 100%;
    width: calc(100%);
    display: flex;
    flex-direction: column;

    main {
      flex: 1;
    }
  `;

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

export default Layout;
