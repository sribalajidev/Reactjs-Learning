import Card from './Card';

function ChildrenProps() {
  return (
    <>
      <h2>Children Props Example</h2>
      <div style={{ display: 'flex', gap: '20px',}}>
        {/* Passing JSX as children */}
        <Card>
          <h3>Title: Product 1</h3>
          <p>Price: $25</p>
          <button>Buy Now</button>
        </Card>

        <Card>
          <h3>Title: Product 2</h3>
          <p>Price: $45</p>
          <button>Buy Now</button>
        </Card>
      </div>
    </>
  );
}

export default ChildrenProps;