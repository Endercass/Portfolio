import { Component, css } from "dreamland/core";

const Error404: Component = function () {
  return (
    <div>
      <h1>404</h1>
      <p>Page not found</p>
    </div>
  );
};

Error404.style = css`
  :scope {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 2em;
    text-align: center;
  }
  h1 {
    font-size: 5em;
    margin: 0;
    color: var(--red);
  }
  p {
    font-size: 2em;
    margin: 0;
    color: var(--subtext1);
  }
`;

export default Error404;
