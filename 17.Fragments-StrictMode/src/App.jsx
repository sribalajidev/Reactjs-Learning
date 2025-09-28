import BasicFragment from "./components/BasicFragment";
import MultipleFragments from "./components/MultipleFragments/MultipleFragments";
import StrictModeDemo from "./components/StrictModeDemo";
import AdvancedFragmentsStrictModePOC from './components/AdvancedFragmentsStrictModePOC'

function App() {

  return (
    <>
      <BasicFragment />
      <hr />
      <MultipleFragments />
      <hr />
      <StrictModeDemo />
      <hr />
      <AdvancedFragmentsStrictModePOC />
    </>
  )
}

export default App
