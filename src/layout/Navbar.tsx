import { Link, router } from "dreamland/router";
import FontAwesomeIcon from "../icons";

import pfp from "/icons/icon_32.png";
import { faGithub } from "@fortawesome/free-brands-svg-icons/faGithub";
import { Component, css } from "dreamland/core";

const Navbar: Component<{ links: { title: string; path: string }[] }> =
  function () {
    return (
      <header>
        <nav>
          <Link href="/">
            <img
              src={pfp}
              alt="Profile Picture"
              style={{
                width: "32px",
                height: "32px",
                'border-radius': "16px",
              }}
            />
          </Link>
          <ul>
            {use(this.links).map((links) =>
              links.map((link) => (
                <li>
                  <Link class="page-link" href={link.path}>{link.title}</Link>
                </li>
              )),
            )}
          </ul>
          <a
            class="github"
            href="https://github.com/Endercass/Portfolio"
            target="_blank"
          >
            <div
              aria-label="Github"
              style={{
                width: "32px",
                height: "32px",
                display: "flex",
                'justify-content': "center",
                'align-items': "center",
              }}
            >
              <FontAwesomeIcon icon={faGithub} transform={{ size: 32 }} />
            </div>
          </a>
        </nav>
      </header>
    );
  };

Navbar.style = css`
  :scope {
    background-color: var(--mantle);
    height: 64px;
    box-shadow: 0 4px 8px var(--mantle);
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 4px;
    user-select: none;
    user-drag: none;
    flex-shrink: 0;
  }

  nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    padding: 0 16px;
  }

  ul {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    margin: 0;
    padding: 0;
  }
  
  li {
    list-style: none;
    margin: 0 16px;
    font-size: 1.25rem;
    font-weight: 600;
    text-decoration: none;
    text-transform: uppercase;
  }

  :global(.page-link) {
    color: var(--text);
    text-decoration: none;
    transition: all 0.3s;
  }

  li:hover :global(.page-link),
  li:focus-within :global(.page-link) {

    color: var(--red);
    filter: drop-shadow(0 0 0.5em var(--red));
  }

  .github {
    text-decoration: none;
    color: var(--text);
    transition: all 0.3s;
  }

  .github:hover {
    color: var(--red);
    filter: drop-shadow(0 0 0.5em var(--red));
  }
`;

export default Navbar;
