import { Component, css } from "dreamland/core";

function createHandler(transformer: (input: string) => string) {
  return async function copyHandler(event: PointerEvent) {
    const target = event.target as HTMLElement;
    const code = target.closest("code");
    const selection = window.getSelection();
    if (code && selection) {
      const range = document.createRange();
      range.selectNodeContents(code);
      selection.removeAllRanges();
      selection.addRange(range);
      await navigator.clipboard.writeText(transformer(code.textContent || ""));
    }
  };
}
type UserPlatform = {
  name: string;
  type: "user";
  id: string;
  transform?: (input: string) => string;
  hoverText?: string;
};

type LinkPlatform = {
  name: string;
  type: "link";
  url: string;
  transform?: (input: string) => string;
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
    name: "Email",
    type: "user",
    id: "contact [at] this domain",
    transform: (input) =>
      input.replace(
        " [at] this domain",
        `@${window.location.hostname.split(".").slice(-2).join(".")}`,
      ),
    hoverText: "Email hidden to prevent spam. Click to copy the real address.",
  },
  {
    name: "XMPP",
    type: "user",
    id: "endercass [at] jabber [dot] this domain",
    transform: (input) =>
      input.replace(
        " [at] jabber [dot] this domain",
        `@jabber.${window.location.hostname.split(".").slice(-2).join(".")}`,
      ),
    hoverText: "JID hidden to prevent spam. Click to copy the real JID.",
  },
];

const Contact: Component = function () {
  return (
    <div class="contact">
      <h1>Contact</h1>

      <p>
        If you know me in real life, you probably have some way to contact me already. I am always looking to
        network with others even outside of STEM fields though (Artists and musicians are so inspiring!). If
        you know me from game dev communities, whether another programmer or an artist, I would love to hear
        your ideas!
      </p>

      <p>
        I typically keep my online and real-life presence separate, so nothing on this page represents
        my real name. I link to this page from my online and real-life presence though, and would appreciate
        any messages sent through the platforms below, so feel free to reach out! I am most active on Discord
        as <CopyableCode text="endercass" />, but I check all platforms regularly. If you are looking for a 
        way to contact me professionally, my email is likely the most effective way to reach me, but I won't
        be offended if I am contacted elsewhere.
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
                  <CopyableCode
                    text={platform.id}
                    hoverText={platform.hoverText}
                    transform={platform.transform}
                  />
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

Contact.style = css`
  :scope {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
    
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
  }

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

  @media (max-width: 768px) {
    .contact table,
    .contact p {
      width: 90%;
    }
  }
`;

const CopyableCode: Component<{
  text: string;
  hoverText?: string;
  transform?: (input: string) => string;
}> = function () {
  this.text ||= "missing text";
  this.transform ||= (input) => input;

  return (
    <code
      on:click={createHandler(this.transform)}
      title={use(this.hoverText)}
    >
      {use(this.text)}
    </code>
  );
};

export default Contact;
