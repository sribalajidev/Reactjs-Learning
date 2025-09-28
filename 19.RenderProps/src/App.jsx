import BasicRenderProps from './components/BasicRenderProps';
import Counter from './components/RenderPropsWithState';
import FetchData from './components/RenderPropsWithAPI';
import AdvancedRenderPropsPOC from './components/AdvancedRenderPropsPOC';

function App() {

  return (
    <>
      <BasicRenderProps />
      <hr />
      <div>
        <h1>Render Props with State Demo</h1>

        <Counter>
          {({ count, increment, decrement }) => (
            <div>
              <p>Count: {count}</p>
              <button onClick={increment}>Increment</button>
              <button onClick={decrement}>Decrement</button>
            </div>
          )}
        </Counter>
      </div>
      <hr />
      <div>
        <h1>Render Props with API Demo</h1>

        <FetchData>
          {({ data, loading, error }) => {
            if (loading) return <p>Loading products...</p>;
            if (error) return <p>Error: {error}</p>;

            return (
              <ul>
                {data.map((item) => (
                  <li key={item.id}>
                    {item.title} - ${item.price}
                  </li>
                ))}
              </ul>
            );
          }}
        </FetchData>
      </div>
      <hr />
      <AdvancedRenderPropsPOC />
    </>
  )
}

export default App
