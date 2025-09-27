import BasicProps from "./components/BasicProps/BasicProps"
import CallbackProps from "./components/CallbackProps/CallbackProps"
import ChildrenProps from "./components/ChildrenProps/ChildrenProps"
import DefaultProps from "./components/DefaultProps/DefaultProps"
import PropTypesValidation from "./components/PropTypesValidation/PropTypesValidation"
import DestructuringProps from "./components/DestructuringProps/DestructuringProps"
import SpreadProps from "./components/SpreadProps/SpreadProps"
import RenderPropsPattern from "./components/RenderPropsPattern/RenderPropsPattern"
import CompositionViaProps from "./components/CompositionViaProps/CompositionViaProps"
import PolymorphicComponents from "./components/PolymorphicComponents/PolymorphicComponents"
import PropDrillingContext from "./components/PropDrillingContext/PropDrillingContext"
import DynamicComponents from "./components/DynamicComponents/DynamicComponents"
import AdvancedPatterns from "./components/AdvancedPatterns/AdvancedPatterns"

function App() {

  return (
    <>
      <BasicProps />
      <hr></hr>
      <CallbackProps />
      <hr></hr>
      <ChildrenProps />
      <hr></hr>
      <h2>Default Props Example</h2>
      <DefaultProps />                      {/* name = "Guest", age = 18 */}
      <DefaultProps name="Name" />          {/* name = "Name",  age = 18 */}
      <DefaultProps name="User" age={25} /> {/* name = "User",  age = 25 */}
      <hr></hr>
      <h2>PropTypes Validation Example</h2>
      <PropTypesValidation name="User" age={25} isMember={true} />
      <PropTypesValidation name="Guest" /> 
      <hr></hr>
      <h2>Destructuring Props Example</h2>
      <DestructuringProps name="User" age={25} isMember={true} />
      <DestructuringProps name="Guest" age={18} isMember={false} />
      <hr></hr>
      <SpreadProps />
      <hr></hr>
      <RenderPropsPattern />
      <hr></hr>
      <CompositionViaProps />
      <hr></hr>
      <PolymorphicComponents />
      <hr></hr>
      <PropDrillingContext />
      <hr></hr>
      <DynamicComponents />
      <hr></hr>
      <AdvancedPatterns />
    </>
  )
}

export default App
