import React from "react";
import Syntax from "./components/Syntax";
import PropsState from "./components/PropsState";
import POC from "./components/POC";
import EventHandling from "./components/EventHandling";
import DefaultProps from "./components/DefaultProps";
import PropsTypeValidation from "./components/PropsTypeValidation";

function App() {
  return (
    <div>
      <h1>1. Class Component Syntax</h1>
      <Syntax />

      <h1>2. Props & State</h1>
      <PropsState name="User" />

      <h1>3. POC: Countdown Timer (Lifecycle Methods)</h1>
      <POC start={20} />

      <h1>4. Event Handling</h1>
      <EventHandling />

      <h1>5. Default Props</h1>
      <DefaultProps /> {/* Will use default "Guest" */}
      <DefaultProps name="User" />

      <h1>6. Prop Types Validation</h1>
      <PropsTypeValidation name="User Name" age={28} />
      {/* <PropTypesExample name="Sri" age="25" /> // Will show console warning */}
    </div>
  );
}

export default App;
