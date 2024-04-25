import "dreamland";
import "./style.css";
import typescriptLogo from "/typescript.svg";
import dreamlandLogo from "/dreamland.svg";
import viteLogo from "/vite.svg";
import { Counter } from "./counter.tsx";

document.getElementById("app")!.appendChild(
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src={viteLogo} class="logo" alt="Vite logo" />
    </a>
    <a href="https://www.typescriptlang.org/" target="_blank">
      <img src={typescriptLogo} class="logo vanilla" alt="TypeScript logo" />
    </a>
    <a href="https://dreamland.js.org/" target="_blank">
      <img src={dreamlandLogo} class="logo vanilla" alt="dreamland logo" />
    </a>
    <h1>Vite + TypeScript + dreamland</h1>
    <div class="card">
      <Counter count={0} />
    </div>
    <p class="read-the-docs">
      Click on the Vite and TypeScript logos to learn more
    </p>
  </div>,
);
