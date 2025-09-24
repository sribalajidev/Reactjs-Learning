import Card from "./Card";

function CompositionViaProps() {
  return (
    <div>
      <h2>Composition via Props Example</h2>

      <Card
        header={<h3>Card Title 1</h3>}
        body={<p>This is the body content of Card 1.</p>}
        footer={<button>Click Me</button>}
      />

      <Card
        header={<h3>Card Title 2</h3>}
        body={<ul><li>Item A</li><li>Item B</li></ul>}
        footer={<p>Footer Text</p>}
      />
    </div>
  );
}

export default CompositionViaProps;