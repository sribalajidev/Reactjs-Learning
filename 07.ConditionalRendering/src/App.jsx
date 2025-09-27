import BasicBasicConditional from './components/BasicConditional';
import ElementVariables from './components/ElementVariables';
import InlineConditional from './components/InlineConditional';
import ConditionalComponents from './components/ConditionalComponents';
import SwitchCaseRendering from './components/SwitchCaseRendering';
import ShortCircuitOperator from './components/ShortCircuitOperator';
import GuardClausesConditional from './components/GuardClausesConditional';
import AdvancedConditional from './components/AdvancedConditional';

function App() {


  return (
    <>
      <BasicBasicConditional />
      <hr></hr>
      <ElementVariables />
      <hr></hr>
      <InlineConditional />
      <hr></hr>
      <ConditionalComponents />
      <hr></hr>
      <SwitchCaseRendering />
      <hr></hr>
      <ShortCircuitOperator />
      <hr></hr>
      <GuardClausesConditional user={{ name: "John Doe", email: "john@email.com" }} />
      <hr></hr>
      <AdvancedConditional />
    </>
  )
}

export default App
