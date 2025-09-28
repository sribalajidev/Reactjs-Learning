import BasicRef from "./components/BasicRef";
import ForwardRefDemo from "./components/ForwardRefDemo";
import RefWithDOMManipulation from './components/RefWithDOMManipulation';
import CallbackRefDemo from "./components/CallbackRefDemo";
import AdvancedRefsPOC from "./components/AdvancedRefsPOC";

function App() {
  return (
    <>
      <BasicRef />      
      <hr />
      <ForwardRefDemo />
      <hr />
      <RefWithDOMManipulation />
      <hr />
      <CallbackRefDemo />
      <hr />
      <AdvancedRefsPOC />
    </>
  )
}

export default App
