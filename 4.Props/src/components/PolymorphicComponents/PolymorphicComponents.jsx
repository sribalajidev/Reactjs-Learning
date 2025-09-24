import Button from "./Button";

function PolymorphicComponents() {
  return (
    <div>
      <h2>Polymorphic Components Example</h2>

      {/* Default button */}
      <Button onClick={() => alert("Clicked!")}>Click Me</Button>

      {/* Render as anchor */}
      <Button as="a" href="https://example.com" target="_blank">
        Visit Example.com
      </Button>

      {/* Render as div */}
      <Button as="div" onClick={() => console.log("Div clicked")}>
        Div Button
      </Button>
    </div>
  );
}

export default PolymorphicComponents;