async function copyHandler(event: PointerEvent) {
  const target = event.target as HTMLElement;
  const code = target.closest("code");
  const selection = window.getSelection();
  if (code && selection) {
    const range = document.createRange();
    range.selectNodeContents(code);
    selection.removeAllRanges();
    selection.addRange(range);
    await navigator.clipboard.writeText(code.textContent || "");
  }
}

type UserPlatform = {
  name: string;
  type: "user";
  id: string;
  hoverText?: string;
};

type LinkPlatform = {
  name: string;
  type: "link";
  url: string;
  hoverText?: string;
};

type Platform = UserPlatform | LinkPlatform;

const platforms: Platform[] = [
  {
    name: "Discord",
    type: "user",
    id: "endercass",
  },
  {
    name: "GitHub",
    type: "link",
    url: "https://github.com/Endercass",
  },
  {
    name: "Twitter",
    type: "link",
    url: "https://twitter.com/Endercass0001",
  },
  {
    name: "Email",
    type: "user",
    // No
    id: "contact [at] this domain",
    hoverText: "Email hidden to prevent spam. Use common sense.",
  },
  {
    name: "Mastodon",
    type: "user",
    id: "@endercass@akkoma.mercurywork.shop",
    hoverText: "I will probably never check this.",
  },
  {
    name: "Reddit",
    type: "user",
    id: "u/Endercass",
  },
];

const Contact: Component<EmptyArgs, EmptyArgs> = function () {
  this.css = css`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    animation: fadeIn 0.3s cubic-bezier(0.64, 0, 0.78, 0);

    h1 {
      font-size: 3rem;
      margin-bottom: 0.5em;
    }

    p {
      font-size: 1.5rem;
      width: 60%;
      margin-bottom: 1em;
    }

    a {
      color: var(--sapphire);
      text-decoration: none;
      transition: all 0.3s;
    }

    a:hover {
      color: var(--red);
      filter: drop-shadow(0 0 0.5rem var(--red));
    }

    table {
      width: 60%;
      border-collapse: collapse;
      margin-top: 1em;

      th {
        font-size: 1.25rem;
        text-align: left;
        padding: 0.5em;
        border: 1px solid var(--text);
      }

      td {
        font-size: 1rem;
        padding: 0.5em;
        border: 1px solid var(--text);
      }
    }

    @media (max-width: 768px) {
      .contact table,
      .contact p {
        width: 90%;
      }
    }
  `;

  return (
    <div class="contact">
      <h1>Contact</h1>
      <p>
        My main social media is Discord, and you can find me at{" "}
        <code on:click={copyHandler}>endercass</code>. Below are some other ways
        you can reach me.
      </p>

      <table>
        <thead>
          <tr>
            <th>Platform</th>
            <th>User</th>
          </tr>
        </thead>
        <tbody>
          {platforms.map((platform) => (
            <tr>
              <td>{platform.name}</td>
              <td>
                {platform.type === "user" ? (
                  <code on:click={copyHandler} title={platform.hoverText || ""}>
                    {platform.id}
                  </code>
                ) : (
                  <a href={platform.url} target="_blank">
                    {platform.url}
                  </a>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Contact;
