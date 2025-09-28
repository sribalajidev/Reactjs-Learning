import React, { useState, useEffect, Fragment, StrictMode } from "react";

// Simulated list item component
function ListItem({ item }) {
  useEffect(() => {
    console.log(`Item ${item} mounted`);
    return () => console.log(`Item ${item} unmounted`);
  }, [item]);

  return <li>Item: {item}</li>;
}

export default function AdvancedFragmentsStrictModePOC() {
  const [items, setItems] = useState([1, 2, 3]);
  const [showList, setShowList] = useState(true);

  const addItem = () => setItems([...items, items.length + 1]);

  return (
    <StrictMode>
      <div style={{ padding: "20px", border: "1px solid #ccc", margin: "10px 0" }}>
        <h2>Advanced Fragments & StrictMode POC</h2>

        <button onClick={() => setShowList(!showList)}>
          {showList ? "Hide" : "Show"} List
        </button>
        <button onClick={addItem} style={{ marginLeft: "10px" }}>
          Add Item
        </button>

        <hr />

        {showList && (
          <ul>
            {items.map((item) => (
              <Fragment key={item}>
                <ListItem item={item} />
              </Fragment>
            ))}
          </ul>
        )}

        <p>Observe console logs to understand StrictMode behavior and fragment usage.</p>
      </div>
    </StrictMode>
  );
}
