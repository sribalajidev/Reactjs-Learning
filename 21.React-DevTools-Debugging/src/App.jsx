import BasicDevTools from "./components/BasicDevTools";
import DebuggingWithConsole from "./components/DebuggingWithConsole";
import DebuggingWithBreakpoints from './components/DebuggingWithBreakpoints';
import DebuggingWithReactDevTools from "./components/DebuggingWithReactDevTools";
import DebuggingStateProps from './components/DebuggingStateProps';
import AdvancedDebugPOC from './components/AdvancedDebugPOC';

function App() {

  return (
    <>
      <BasicDevTools />
      <hr />
      <DebuggingWithConsole />
      <hr />
      <DebuggingWithBreakpoints />
      <hr />
      <DebuggingWithReactDevTools />
      <hr />
      <DebuggingStateProps />
      <hr />
      <AdvancedDebugPOC />
    </>
  )
}

export default App
