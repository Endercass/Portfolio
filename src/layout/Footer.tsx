import FontAwesomeIcon from "../icons";
import { faPalette } from "@fortawesome/free-solid-svg-icons";

const Footer: Component<EmptyArgs, EmptyArgs> = function () {
  this.css = css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: var(--mantle);
    height: 256px;
    flex-shrink: 0;
    gap: 32px;
    box-shadow: 0 -4px 8px 0 var(--mantle);
    margin-top: 32px;

    .top-info {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 80%;
    }

    .right-info {
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 24px;
      color: var(--text);
      transition: all 0.3s;
    }

    .right-info:hover {
      color: var(--red);
      filter: drop-shadow(0 0 4px var(--red));
    }

    a {
      color: var(--sapphire);
      text-decoration: none;
      transition: all 0.3s;
    }

    a:hover {
      color: var(--red);
      filter: drop-shadow(0 0 2px var(--red));
    }

    .left-info {
      display: grid;
      margin-left: 16px;
      grid-template-rows: repeat(3, 1fr);
      grid-auto-flow: column;
      gap: 4px;
      font-size: 12px;
    }

    .divider {
      width: 80%;
      height: 1px;
      background-color: var(--text);
    }

    .bottom-info {
      display: grid;
      grid-template-rows: repeat(3, 1fr);
      gap: 8px;
      font-size: 16px;
      text-align: center;
    }
  `;
  return (
    <footer>
      <div class="top-info">
        <div class="left-info">
          <span>
            Made using{" "}
            <a href="https://dreamland.js.org/" target="_blank">
              dreamland.js
            </a>
          </span>
          <span>
            Colors from{" "}
            <a href="https://github.com/catppuccin/catppuccin" target="_blank">
              Catppuccin
            </a>
          </span>
          <span>
            Icons provided by{" "}
            <a href="https://fontawesome.com/" target="_blank">
              Font Awesome
            </a>
          </span>
          <span>
            Hosted statically on{" "}
            <a href="https://pages.cloudflare.com/" target="_blank">
              Cloudflare Pages
            </a>
          </span>
        </div>
        <div
          class="right-info"
          on:click={() => {
            alert("Theme switcher coming soon!");
          }}
        >
          <FontAwesomeIcon icon={faPalette} />
        </div>
      </div>
      <div class="divider"></div>
      <div class="bottom-info">
        <span>© 2024 Endercass All rights reserved</span>
        <span>Designed and developed by Endercass</span>
        <span>Site licensed under MIT</span>
      </div>
    </footer>
  );
};

export default Footer;
