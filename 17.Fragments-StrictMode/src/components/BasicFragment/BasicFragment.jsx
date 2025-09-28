export default function BasicFragment() {
  return (
    <>
      {/* Using React.Fragment shorthand <> </> */}
      <h2>Basic Fragment Example</h2>
      <p>
        React Fragments let you group multiple elements without adding extra DOM
        nodes.
      </p>
      <p>This is another paragraph rendered inside the same fragment.</p>
    </>
  );
}