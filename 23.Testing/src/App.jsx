// Import all components
import BasicButton from "./components/BasicButton/BasicButton";
import Counter from "./components/Counter/Counter";
import FetchData from "./components/FetchData/FetchData";
import LoginForm from "./components/LoginForm/LoginForm";
import ConditionalRender from "./components/ConditionalRender/ConditionalRender";
import SnapshotDemo from "./components/SnapshotDemo/SnapshotDemo";
import IntegrationDemo from "./components/IntegrationDemo/IntegrationDemo";
import AdvancedPOC from "./components/AdvancedPOC/AdvancedPOC";

export default function App() {
  const handleButtonClick = () => alert("Button clicked!");
  const handleLoginSubmit = (values) => alert(`Email: ${values.email}, Password: ${values.password}`);

  return (
    <div style={{ padding: "20px" }}>
      <h1>React Testing Components Preview</h1>

      <section>
        <h2>BasicButton</h2>
        <BasicButton label="Click Me" onClick={handleButtonClick} />
      </section>
      <hr />
      <section>
        <h2>Counter</h2>
        <Counter />
      </section>
      <hr />
      <section>
        <h2>FetchData</h2>
        <FetchData />
      </section>
      <hr />
      <section>
        <h2>LoginForm</h2>
        <LoginForm onSubmit={handleLoginSubmit} />
      </section>
      <hr />
      <section>
        <h2>ConditionalRender</h2>
        <ConditionalRender />
      </section>
      <hr />
      <section>
        <h2>SnapshotDemo</h2>
        <SnapshotDemo title="My Snapshot Component" />
      </section>
      <hr />
      <section>
        <h2>IntegrationDemo</h2>
        <IntegrationDemo />
      </section>
      <hr />
      <section>
        <h2>AdvancedPOC</h2>
        <AdvancedPOC />
      </section>
    </div>
  );
}