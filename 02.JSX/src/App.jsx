import viteLogo from '/vite.svg'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  // Variables and Expressions
  const name = "World";
  const year = new Date().getFullYear();
  const isLoggedIn = true;

  // Lists
  const fruits = ["Apple", "Banana", "Mango"];

  // Function for event
  const handleClick = () => {
    alert(`Hello, ${name}!`);
  };

  return (
    <>
      {/* className and self-closing tag */}
      <div>
        <img src={viteLogo} className="logo" alt="Vite logo" />
        <img src={reactLogo} className="logo react" alt="React logo" />
      </div>

      {/* Embedding JS expressions */}
      <h1>Hello, {name}!</h1>
      <p>Current Year: {year}</p>
      <p>2 + 3 = {2 + 3}</p>

      {/* Conditional rendering */}
      {isLoggedIn ? (
        <p>Welcome back, {name}!</p>
      ) : (
        <p>Please log in.</p>
      )}

      {/* Rendering lists */}
      {fruits.map((fruit, index) => (
        <p key={index}>{fruit}</p>
      ))}

      {/* Event handling */}
      <button onClick={handleClick}>Click Me</button>
    </>
  );
}

export default App;
