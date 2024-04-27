import Footer from "./Footer";
import Navbar from "./Navbar";

const Layout: Component<
  { passthrough?: string[] } & any,
  { children: any; container: DLElement<any> }
> = function () {
  this.css = css`
    height: 100%;
    width: calc(100%);
    display: flex;
    flex-direction: column;

    main {
      flex: 1;
    }
  `;

  this.mount = () => {
    if (this.passthrough) {
      for (const key of this.passthrough) {
        handle(use(this[key]), (value) => {
          const firstChild = this.container.children[0];
          if (firstChild && firstChild.$) {
            firstChild.$[key] = value;
          }
        });
      }
    }
  };
  return (
    <div>
      <Navbar
        links={[
          {
            title: "Home",
            path: "/home",
          },
          {
            title: "Contact",
            path: "/contact",
          },
        ]}
      />
      <main bind:this={use(this.container)}>{use(this.children)}</main>
      <Footer />
    </div>
  );
};

export default Layout;
