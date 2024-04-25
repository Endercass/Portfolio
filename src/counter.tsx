export const Counter: Component<{ count?: number }, EmptyArgs> = function () {
  this.count ||= 0;

  return (
    <button
      on:click={() => this.count!++}
    >{use`count is ${this.count}`}</button>
  );
};
