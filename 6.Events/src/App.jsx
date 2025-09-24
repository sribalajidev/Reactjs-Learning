import BasicEvents from "./components/BasicEvents"
import PassingArguments from "./components/PassingArguments"
import SyntheticEvents from "./components/SyntheticEvents"
import EventBindingClass from "./components/EventBindingClass"
import FormEvents from "./components/FormEvents"
import KeyboardEvents from "./components/KeyboardEvents"
import MouseEvents from "./components/MouseEvents"
import EventDelegation from "./components/EventDelegation"
import EventPropagation from "./components/EventPropagation"
import AdvancedPatterns from "./components/AdvancedPatterns"

function App() {
  return (
    <>
    <BasicEvents />
    <hr></hr>
    <PassingArguments />
    <hr></hr>
    <SyntheticEvents />
    <hr></hr>
    <EventBindingClass />
    <hr></hr>
    <FormEvents />
    <hr></hr>
    <KeyboardEvents />
    <hr></hr>
    <MouseEvents />
    <hr></hr>
    <EventDelegation />
    <hr></hr>
    <EventPropagation />
    <hr></hr>
    <AdvancedPatterns />
    </>
  )
}

export default App
