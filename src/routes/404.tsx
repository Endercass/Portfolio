const Error404: Component = function () {
  this.css = `
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 2em;
    text-align: center;
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
  return (
    <div>
      <h1>404</h1>
      <p>Page not found</p>
    </div>
  );
};

export default Error404;
