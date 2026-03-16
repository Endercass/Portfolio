const Home: Component = function () {
  this.css = `
    display: flex;
    height: 100%;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: left;

    h1 {
      font-size: 3em;
      width: 60%;
    }

    p {
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
      <h1>My name is Cas!</h1>

      <p>
        I am a 17 year old dual enrollment student starting my career in Computer Science.
        I have spent the last few years progressing from being a self-taught maker and hobbyist 
        to a full-time enrolled student. I will be graduating with my associates degree and 
        high school diploma this summer. I like interacting with hardware and software, and 
        have a focus on operating systems, embedded systems, and framework development.
      </p>

      <p>
        I also have a history with web development, and I am highly skilled at 
        CSS and web technologies. I primarily align myself with vanilla javascript,
        though I have enjoyed working with <a href="https://dreamland.js.org">dreamland.js</a>,
        which is what I used for this website. I prefer to work with technologies and
        frameworks that I can fully understand, because that familiarity inspires me. 
      </p>

      <p>
        I highly value the applied art of data structures, algorithms, and software architecture.
        I avoid usages of Large Language Models (LLMs) in the structure and development of my projects,
        but recognize its utility for code completion and situations where it can be used as a tool to
        increase development speed while being closely monitored by a human. I do not use LLMs to generate 
        code for me, because my joy and satisfaction in programming is derived from being a creative.
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
