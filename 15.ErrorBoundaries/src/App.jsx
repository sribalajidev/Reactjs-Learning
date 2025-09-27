import BasicErrorBoundary from './components/BasicErrorBoundary';
import ErrorFallbackUI from './components/ErrorFallbackUI';
import NestedErrorBoundary from './components/NestedErrorBoundary';
import ErrorBoundaryWithAPI from './components/ErrorBoundaryWithAPI';
import AdvancedErrorPOC from './components/AdvancedErrorPOC'; 

function App() {
  return (
    <>
      <BasicErrorBoundary />
      <ErrorFallbackUI />
      <NestedErrorBoundary />
      <ErrorBoundaryWithAPI />
      <AdvancedErrorPOC />
    </>
  )
}

export default App
