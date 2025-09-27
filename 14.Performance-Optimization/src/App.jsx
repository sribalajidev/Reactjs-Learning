import ReactMemo from "./components/ReactMemo/ReactMemo";
import UseMemo from "./components/UseMemo/UseMemo";
import UseCallback from "./components/UseCallback/UseCallback";
import LazyLoading from "./components/LazyLoading/LazyLoading";
import CodeSplitting from './components/CodeSplitting/CodeSplitting';
import Virtualization from "./components/Virtualization/Virtualization";
import ProfilerComponent from "./components/Profiler/Profiler";
import AvoidAnonymousFunctions from "./components/AvoidAnonymousFunctions/AvoidAnonymousFunctions";
import KeyOptimization from "./components/KeyOptimization/KeyOptimization";
import PerformancePOC from "./components/PerformancePOC/PerformancePOC";


function App() {

  return (
    <>
      <ReactMemo />
      <hr />
      <UseMemo />
      <hr />
      <UseCallback />
      <hr />
      <LazyLoading />
      <hr />
      <CodeSplitting />
      <hr />
      <Virtualization />
      <hr />
      <ProfilerComponent />
      <hr />
      <AvoidAnonymousFunctions />
      <hr />
      <KeyOptimization />
      <hr />
      <PerformancePOC />
    </>
  )
}

export default App
