import BasicList from "./components/BasicList";
import DynamicList from "./components/DynamicList";
import KeyProps from "./components/KeyProps";
import ListFiltering from "./components/ListFiltering";
import NestedLists from "./components/NestedLists";
import RenderingListsWithComponents from "./components/RenderingListsWithComponents";
import AdvancedListPatterns from "./components/AdvancedListPatterns";

function App() {

  return (
    <>
      <BasicList />
      <hr />
      <DynamicList />
      <hr />
      <KeyProps />
      <hr />
      <ListFiltering />
      <hr />
      <NestedLists />
      <hr />
      <RenderingListsWithComponents />
      <hr />
      <AdvancedListPatterns />
      <hr />
    </>
  )
}

export default App
