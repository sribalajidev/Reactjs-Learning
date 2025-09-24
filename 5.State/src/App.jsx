import { useState } from "react";
import BasicState from "./components/BasicState/BasicState"
import UpdateState from "./components/UpdateState/UpdateState"
import MultipleState from "./components/MultipleState/MultipleState"
import StatePropsInteraction from "./components/StatePropsInteraction/StatePropsInteraction"
import ConditionalRendering from "./components/ConditionalRendering/ConditionalRendering"
import FormHandling from "./components/FormHandling/FormHandling"
import DerivedState from "./components/DerivedState/DerivedState"
import { Tabs, Accordion } from "./components/ComplexComponents"
import RealTimeState from "./components/RealTimeState/RealTimeState"
import PerformanceState from "./components/PerformanceState/PerformanceState"
import UseReducerState from "./components/UseReducerState/UseReducerState"
import StateWithContext from "./components/StateWithContext/StateWithContext"
import OptimisticUIState from "./components/OptimisticUIState/OptimisticUIState"
import { LocalStorage, SessionStorage } from "./components/Storage"
import DebouncedState from "./components/DebouncedState/DebouncedState"
import AdvancePOC from "./components/AdvancePOC/AppPOC";

function App() {
  // For AdvancePOC
  const [showPOC, setShowPOC] = useState(false);

  return (
    <>
      <BasicState />
      <hr></hr>
      <UpdateState />
      <hr></hr>
      <MultipleState />
      <hr></hr>
      <StatePropsInteraction />
      <hr></hr>
      <ConditionalRendering />
      <hr></hr>
      <FormHandling />
      <hr></hr>
      <DerivedState />
      <hr></hr>
      <section style={{ borderBottom: "2px solid #ccc", marginBottom: "20px" }}>
        <h1>Complex Components</h1>
        <Tabs />
        <Accordion />
      </section>
      <hr></hr>
      <RealTimeState />
      <hr></hr>
      <PerformanceState />
      <hr></hr>
      <UseReducerState />
      <hr></hr>
      <StateWithContext />
      <hr></hr>
      <OptimisticUIState />
      <hr></hr>
      <section style={{ borderBottom: "2px solid #ccc", marginBottom: "20px" }}>
        <h1>Storage Examples</h1>
        <LocalStorage />
        <SessionStorage />
      </section>
      <hr></hr>
      <DebouncedState />
      <hr></hr>
      {/* Button to show AdvancePOC overlay */}
      <button onClick={() => setShowPOC(true)}>
        To See AdvancePOC Click Here
      </button>

      {/* Overlay for AdvancePOC */}
      {showPOC && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0,0,0)",
            color: "#fff",
            zIndex: 1000,
            overflow: "auto",
            padding: "20px",
          }}
        >
          <button
            onClick={() => setShowPOC(false)}
            style={{ marginBottom: "20px", padding: "5px 10px" }}
          >
            Go Back
          </button>

          {/* AdvancePOC component */}
          <AdvancePOC />
        </div>
      )}
    </>
  )
}

export default App
