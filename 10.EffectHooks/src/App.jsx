import { useState } from "react";
import { ThemeProvider } from "./components/context/ThemeContext";
import BasicEffect from "./components/BasicEffect";
import EffectWithDependencies from "./components/EffectWithDependencies";
import CleanupEffect from "./components/CleanupEffect";
import APIDataFetching from "./components/APIDataFetching";
import MultipleEffects from "./components/MultipleEffects";
import ConditionalEffect from "./components/ConditionalEffect";
import EffectWithContext from "./components/EffectWithContext";
import ErrorHandlingEffect from "./components/ErrorHandlingEffect";
import PerformanceConsiderations from "./components/PerformanceConsiderations";
import AdvancedPatterns from "./components/AdvancedPatterns";

function App() {
  const [showAdvanced, setShowAdvanced] = useState(false);

  return (
    <>
      <ThemeProvider>
        <BasicEffect />
        <hr />
        <EffectWithDependencies />
        <hr />
        <CleanupEffect />
        <hr />
        <APIDataFetching />
        <hr />
        <MultipleEffects />
        <hr />
        <ConditionalEffect />
        <hr />
        <EffectWithContext />
        <hr />
        <ErrorHandlingEffect />
        <hr />
        <PerformanceConsiderations />
        <hr />
        {!showAdvanced ? (
        <>
          <PerformanceConsiderations />
          <button onClick={() => setShowAdvanced(true)}>
            Click here to see Advanced Patterns
          </button>
        </>
        ) : (
          <AdvancedPatterns goBack={() => setShowAdvanced(false)} />
        )}
      </ThemeProvider>
    </>
  )
}

export default App
