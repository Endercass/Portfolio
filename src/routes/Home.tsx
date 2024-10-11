const Home: Component = function () {
  this.css = `
    display: flex;
    height: 100%;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;

    h2 {
      font-size: 2em;
    }
    h1 {
      font-size: 3em;
      margin-top: 0;
    }

    p {
      text-align: left;
      width: 60%;
      font-size: 1.25em;
    }

    a {
      color: var(--sapphire);
      cursor: pointer;
      text-decoration: none;
      transition: all 0.3s;
    }

    a:hover {
      color: var(--red);
      filter: drop-shadow(0 0 0.5rem var(--red));
    }

    ul,
    ol {
      text-align: left;
      width: 60%;
      font-size: 1.25rem;
    }

    li {
      margin-bottom: 0.25em;
    }

    li::marker {
      color: var(--red);
    }

    @media (max-width: 768px) {
      .home p,
      .home ul,
      .home ol {
        width: 90%;
      }
    }
  `;

  return (
    <div class="home">
      <h2>Hi, my name is</h2>

      <h1>Endercass</h1>

      <p>
        I am a self-taught full-stack developer and computer science enthusiast,
        however I am beginning a formal education in computer science. I prefer
        to work on the backend, but am more experienced with frontend
        development. I am interested in operating systems and embedded systems,
        and I have a passion for low-level programming.
      </p>

      <p>Some web projects that I have worked on include:</p>

      <ul>
        <li>
          <a href="https://github.com/MercuryWorkshop/anuraOS" target="_blank">
            anuraOS
          </a>{" "}
          - An operating system in the browser with full x86 emulation and a
          versatile app format. My work on this project is the reason I joined{" "}
          <a href="https://mercurywork.shop/" target="_blank">
            Mercury Workshop
          </a>
        </li>
      </ul>

      <p>
        Some of the languages and technologies that I have experience with
        include:
      </p>

      <ul>
        <li>HTML, CSS</li>
        <li>JavaScript, TypeScript, Node.js</li>
        <li>Express.js, Axum</li>
        <li>React, Svelte(Kit), dreamland.js</li>
        <li>Rust, Go, C, C++</li>
        <li>Protocol Buffers, gRPC</li>
        <li>Java, Kotlin</li>
        <li>Git, GitHub</li>
        <li>Linux, Bash, Fish</li>
        <li>WebAssembly, Emscripten, wasm-bindgen</li>
        <li>SQL, GraphQL</li>
        <li>Python</li>
      </ul>

      <p>
        I am still considering these languages and technologies, and I am
        learning more about them:
      </p>

      <ul>
        <li>PHP, Laravel</li>
        <li>Effect TS</li>
      </ul>

      <p>
        You can see my complete portfolio on{" "}
        <a href="https://github.com/Endercass" target="_blank">
          my GitHub profile
        </a>
        .
      </p>
    </div>
  );
};

export default Home;
