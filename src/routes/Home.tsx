const Home: Component<EmptyArgs, EmptyArgs> = function () {
  this.css = css`
    display: flex;
    height: 100%;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    animation: fadeIn 0.3s cubic-bezier(0.64, 0, 0.78, 0);

    h2 {
      font-size: 2em;
      // margin-bottom: 0;
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

    /* In the following block I specify the home class due to a bug in css parsing */
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
      <h2>Hello there, my name is</h2>

      <h1>Endercass</h1>

      <p>
        I have completed my sophomore year of high school and will be attending
        college full-time next year. I am currently enrolled in an early college
        program, and I am working towards an Associate of Science degree in
        Computer Science, which will be earned along with my NYS Regents diploma
        in 2026. I will then pursue a Bachelor of Science degree at a currently
        undecided institution.
      </p>

      <p>
        As part of the early college process, I have taken the following college
        courses:
      </p>

      <ul>
        <li>Intermediate Mathematics</li>
        <li>Drafting and Design Using AutoCAD</li>
      </ul>

      <p>
        After taking the Intermediate Mathematics course, I took the Accuplacer
        Advanced Algebra and Functions exam and scored a 287, which places me in
        Calculus I for the first semester of next year, allowing me to skip
        multiple math courses.
      </p>

      <p>
        The first semester of next year, I will be a full-time student on campus
        and will take the following courses:
      </p>

      <ul>
        <li>Prin. Programming</li>
        <li>Programming in C++</li>
        <li>English Composition I</li>
        <li>Calculus I</li>
        <li>History of Civilization I</li>
        <li>Physical Education Elective</li>
      </ul>

      <p>
        Professionally, I do not have much experience. I have never been
        employed, but I have worked with and operated multiple teams and groups
        related to development. I am currently a Licensed member of{" "}
        <a href="https://mercurywork.shop/" target="_blank">
          Mercury Workshop
        </a>
        , a group formerly responsible for the discovering of highly valuable
        Chrome OS vulnerabilities. However, most of my work in the group is
        dedicated to work on the{" "}
        <a href="https://github.com/MercuryWorkshop/anuraOS" target="_blank">
          anuraOS
        </a>{" "}
        project, an operating system in the browser with full x86 emulation and
        a versatile app format. I am also the owner of the{" "}
        <a href="https://oogabooga.games/" target="_blank">
          Ooga Booga Games
        </a>{" "}
        project, which is an in-development web game platform. This project is
        currently on hiatus, but I plan to resume development in the future.
      </p>

      <p>
        I am currently a hobbyist full-stack developer, and I love to build
        things and learn new technologies. I am proficient in the following
        languages and technologies:
      </p>

      <ul>
        <li>HTML, CSS</li>
        <li>Javascript, TypeScript, Node.js</li>
        <li>Express.js, Axum</li>
        <li>React, Svelte(Kit), dreamland.js</li>
        <li>Rust, Go, C</li>
        <li>Protocol Buffers, gRPC</li>
        <li>Java</li>
        <li>Git, GitHub</li>
        <li>Linux, Bash, Fish</li>
        <li>VS Code, IntelliJ IDEA, Zed</li>
        <li>WebAssembly, AssemblyScript</li>
      </ul>

      <p>I am currently learning the following languages and technologies:</p>

      <ul>
        <li>C++</li>
        <li>SQL, GraphQL</li>
        <li>Dart</li>
        <li>Machine Learning</li>
      </ul>

      <p>
        In the following languages and technologies, I have enough experience to
        realize that I do not want to pursue them further:
      </p>

      <ul>
        <li>Python</li>
        <li>PHP</li>
        <li>WordPress</li>
        <li>Effect (Could reconsider)</li>
        <li>
          Flutter
          {/* I appreciate Dart, but I do not like the Flutter framework */}
        </li>
      </ul>

      <p>
        I am planning on maintaining this website as a blog and portfolio. I
        will post updates on my projects and write about my experiences with
        computer science-related technologies. I will also write about my
        experiences with college, so that I can help others who are considering
        a degree in computer science, whether they are enrolled in an early
        college program or taking a more traditional route.
      </p>

      <p>
        You can see some of my projects on{" "}
        <a href="https://github.com/Endercass" target="_blank">
          my GitHub profile
        </a>
        .
      </p>
    </div>
  );
};

export default Home;
