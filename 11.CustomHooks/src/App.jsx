import BasicCustomHook from "./components/BasicCustomHook";
import UsePreviousHook from "./components/UsePreviousHook";
import UseWindowSizeHook from "./components/UseWindowSizeHook";
import UseFetchHook from "./components/UseFetchHook";
import UseLocalStorageHook from "./components/UseLocalStorageHook";
import UseSessionStorageHook from "./components/UseSessionStorageHook";
import UseDebounceHook from "./components/UseDebounceHook";
import UseIntervalHook from "./components/UseIntervalHook";
import UseToggleHook from "./components/UseToggleHook";
import AdvancedPatternsHook from "./components/AdvancedPatternsHook/AdvancedPatternsHook";

function App() {

  return (
    <>
      <BasicCustomHook />
      <hr />
      <UsePreviousHook />
      <hr />
      <UseWindowSizeHook />
      <hr />
      <UseFetchHook />
      <hr />
      <UseLocalStorageHook />
      <hr />
      <UseSessionStorageHook />
      <hr />
      <UseDebounceHook />
      <hr />
      <UseIntervalHook />
      <hr />
      <UseToggleHook />
      <hr />
      <AdvancedPatternsHook />
    </>
  )
}

export default App
