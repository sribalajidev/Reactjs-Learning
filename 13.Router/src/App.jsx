import BasicRouter from "./components/BasicRouter";
import NestedRoutes from "./components/NestedRoutes";
import DynamicRoutes from "./components/DynamicRoutes";
import ProtectedRoutes from "./components/ProtectedRoutes";
import RouteParams from "./components/RouteParams";
import QueryParams from "./components/QueryParams";
import RedirectRoutes from "./components/RedirectRoutes";
import LayoutRoutes from "./components/LayoutRoutes";
import AdvancedRouterPOC from "./components/AdvancedRouterPOC";

function App() {

  return (
    <>
     <BasicRouter />
     <hr />
      <NestedRoutes />
      <hr />
      <DynamicRoutes />
      <hr />
      <ProtectedRoutes />
      <hr />
      <RouteParams />
      <hr />
      <QueryParams />
      <hr />
      <RedirectRoutes />
      <hr />
      <LayoutRoutes />
      <hr />
      <AdvancedRouterPOC />
    </>
  )
}

export default App
