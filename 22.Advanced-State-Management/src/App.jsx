import Counter from "./components/ReduxBasic/Counter";
import Products from "./components/ReduxWithAPI/Products";
import Dashboard from "./components/AdvancedReduxPOC/Dashboard";
import CounterZustand from "./components/ZustandBasic/CounterZustand";

function App() {
  return (
    <>
      <Counter />
      <hr />
      <Products />
      <hr />
      <Dashboard />
      <hr />
      <CounterZustand />
      <hr />
    </>
  )
}

export default App
