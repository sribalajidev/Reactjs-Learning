import Card from "./components/Card"; // Clean import via index.js

function App() {
  // Sample button click handler
  const handleClick = (cardTitle) => {
    alert(`Button clicked inside ${cardTitle}`);
  };

  return (
    <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
      <Card
        title="Card 1"
        description="This is the description for Card 1."
        onButtonClick={() => handleClick("Card 1")}
      />
      <Card
        title="Card 2"
        description="This is the description for Card 2."
        onButtonClick={() => handleClick("Card 2")}
      />
      <Card
        title="Card 3"
        description="This is the description for Card 3."
        onButtonClick={() => handleClick("Card 3")}
      />
    </div>
  );
}

export default App;
