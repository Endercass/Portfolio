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
        I'm a sophomore in highschool from New York State. Next year, I will be
        a full-time student at my local community college. I will major in
        Computer Science, receiving my AS Computer Science degree in 2026. I
        will then pursue a BS Computer Science degree, although I am unsure
        where I will study.
      </p>

      <p>
        Professionally, I do not have much experience. I have never been
        employed, but I have worked with and operated multiple teams and groups
        related to development. I am currently a Licensed member of{" "}
        <a href="https://mercurywork.shop/" target="_blank">
          Mercury Workshop
        </a>
        , an organization that writes public FOSS software. I am also the owner
        of the{" "}
        <a href="https://oogabooga.games/" target="_blank">
          Ooga Booga Games
        </a>{" "}
        project, which is an in-development web game project.
      </p>

      <p>
        As part of the early college program I am enrolled in, I have taken the
        following college-level courses:
      </p>

      <ul>
        <li>Intermediate Mathematics</li>
        <li>Drafting and Design Using AutoCAD</li>
      </ul>

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
        These courses will allow me to obtain a strong foundation in
        college-level computer science and mathematics. I will also be able to
        obtain a strong foundation in writing and communication, as well as a
        strong foundation in history and physical education.
      </p>

      <p>
        I am currently a hobbyist full-stack developer, and I love to build
        things and learn new technologies. I am proficient in the following
        languages and technologies:
      </p>

      <ul>
        <li>HTML, CSS, JavaScript</li>
        <li>TypeScript</li>
        <li>React, Node.js, Express.js</li>
        <li>Svelte(Kit), dreamland.js</li>
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
        <li>SQL</li>
        <li>Dart, Flutter</li>
        <li>Machine Learning</li>
      </ul>

      <p>
        In the following languages and technologies, I have enough experience to
        realize that I do not want to pursue them further:
      </p>

      <ul>
        <li>
          Python
          {/* Say what you want, it's slow and has awful syntax. Truely a bad language */}
        </li>
        <li>
          PHP
          {/* Ehh maybe like 10 years ago, but not now */}
        </li>
        <li>
          WordPress
          {/* No fun */}
        </li>
        <li>
          Effect
          {/* Too much rambling below, maybe I will make a blog post instead */}
          {/* <ul>
            <li>
              Effect is an interesting technology, however I feel as though it
              simply just adds so much overhead and complexity to a project that
              it requires almost a full re-learning of typescript to use
              effectively
            </li>
            <li>
              I would be open to using Effect in a professional environmen where
              the benefits of Effect would be more apparent, but I will not be
              using it in any personal projects aside from projects in which I
              am using it for the sole purpose of familiarizing myself with the
              technology
            </li>
          </ul> */}
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

      <p>
        PS:
        <br />
        <br />I am no longer affiliated with the Titanium Network community. I
        may contribute to projects related to it in the future, but I will not
        interact with the community itself, aside from the friends I have made
        in it. I have left the discord server as of a few months ago, and I have
        no intention of rejoining. If you are coming here from the Titanium
        Network community, I advise you to contact me directly through my
        Discord account. If you are looking for my reasons for leaving, I can
        explain them very simply:
      </p>

      <ol>
        <li>
          The projects and services provided by the community are not of
          interest to me anymore for the most part, as I no longer have the free
          time to use them. Most of my free time is spent on my own projects and
          studies.
        </li>
        <li>
          The drama is honestly pathetic and frustrating. I enjoy hanging out
          with a lot of the members, but when certain members, past and present,
          are involved, the drama follows. Leaving the community gives me the
          freedom to interact with the my friends without having to deal with
          constant drama.
        </li>
      </ol>

      <p>
        That's all I have to say on the matter. If you have any questions, feel
        free to ask me directly. I have no problem with answering questions or a
        conversation about the matter. I also need to make it clear that I have
        no problem with the community itself, just the drama that follows
        certain members. It is also worth noting that I was only ever a member,
        so my presence is not an obligation to the community. I wish all the
        best to the community and its members, except for those whom the drama
        follows.
      </p>

      {/* Large content for testing */}
      {/* <div style={{ height: "1000px" }}></div> */}
    </div>
  );
};

export default Home;
