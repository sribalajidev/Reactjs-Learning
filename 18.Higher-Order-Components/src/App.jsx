import BasicHOC from './components/BasicHOC';
import HOCWithProps from "./components/HOCWithProps";
import HOCWithState from './components/HOCWithState';
import HOCWithAPI from './components/HOCWithAPI';
import AdvancedHOCPOC from './components/AdvancedHOCPoC';

function App() {
  

  return (
    <>
      <BasicHOC />
      <hr />
      <HOCWithProps name="User" />
      <hr />
      <HOCWithState />
      <hr />
      <HOCWithAPI />
      <hr />
      <AdvancedHOCPOC />
      <hr />
    </>
  )
}

export default App
