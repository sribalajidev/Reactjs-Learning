function Child({ onIncrement }) {
  return (
    <div>
      <button onClick={onIncrement}>Increment Parent Counter</button>
    </div>
  );
}

export default Child;