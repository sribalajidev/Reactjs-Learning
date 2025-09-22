import React from "react";

// Import all functional component examples
import Syntax from "./components/Syntax";
import Props from "./components/Props";
import State from "./components/State";
import Effect from "./components/Effect";
import EffectsAPI from "./components/EffectsAPI";
import EventHandling from "./components/EventHandling";
import DefaultProps from "./components/DefaultProps";
import PropTypeValidation from "./components/PropTypeValidation";
import NestedComponents from "./components/NestedComponents";
import POC from "./components/POC";

function App() {
  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      {/* Syntax */}
      <section style={{ borderBottom: "2px solid #ccc", marginBottom: "20px" }}>
        <h1>Syntax of Functional Component</h1>
        <Syntax />
      </section>

      {/* Props */}
      <section style={{ borderBottom: "2px solid #ccc", marginBottom: "20px" }}>
        <h1>Props</h1>
        <Props name="User" age={25} />
      </section>

      {/* State */}
      <section style={{ borderBottom: "2px solid #ccc", marginBottom: "20px" }}>
        <h1>State</h1>
        <State />
      </section>

      {/* useEffect / Countdown Timer */}
      <section style={{ borderBottom: "2px solid #ccc", marginBottom: "20px" }}>
        <h1>useEffect Hook - Countdown Timer</h1>
        <Effect start={10} />
      </section>

      {/* useEffect with API fetch */}
      <section style={{ borderBottom: "2px solid #ccc", marginBottom: "20px" }}>
        <h1>useEffect Hook - Fetching Data from API</h1>
        <EffectsAPI />
      </section>

      {/* Event Handling */}
      <section style={{ borderBottom: "2px solid #ccc", marginBottom: "20px" }}>
        <h1>Event Handling</h1>
        <EventHandling />
      </section>

      {/* Default Props */}
      <section style={{ borderBottom: "2px solid #ccc", marginBottom: "20px" }}>
        <h1>Default Props</h1>
        <DefaultProps />
        <DefaultProps name="User" />
        <DefaultProps name="User Name" age={25} />
      </section>

      {/* PropType Validation */}
      <section style={{ borderBottom: "2px solid #ccc", marginBottom: "20px" }}>
        <h1>PropTypes Validation</h1>
        <PropTypeValidation name="User" age={25} />
      </section>

      {/* Nested Components */}
      <section style={{ borderBottom: "2px solid #ccc", marginBottom: "20px" }}>
        <h1>Nested Components</h1>
        <NestedComponents />
      </section>

      {/* POC Countdown Timer */}
      <section style={{ borderBottom: "2px solid #ccc", marginBottom: "20px" }}>
        <h1>POC - Countdown Timer</h1>
        <POC start={15} />
      </section>
    </div>
  );
}

export default App;
