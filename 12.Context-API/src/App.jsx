import BasicContext from './components/BasicContext';
import NestedContext from './components/NestedContext';
import DynamicContext from './components/DynamicContext';
import ContextWithReducer from './components/ContextWithReducer';
import ContextWithAPI from './components/ContextWithAPI';
import ThemeContextComponent from './components/ThemeContext';
import MultiContextComponent from './components/MultiContext';
import AdvancedPatternsContext from './components/AdvancedPatternsContext';

function App() {

  return (
    <>
      <BasicContext />
      <hr />
      <NestedContext />
      <hr />
      <DynamicContext />
      <hr />
      <ContextWithReducer />
      <hr />
      <ContextWithAPI />
      <hr />
      <ThemeContextComponent />
      <hr />
      <MultiContextComponent />
      <hr />
      <AdvancedPatternsContext />
    </>
  )
}

export default App
