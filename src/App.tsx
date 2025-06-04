import ListGroup from "./components/ListGroup";

function App() {
  // Each component in React has its own state. So in case we add one more  <ListGroup />, it will not act as the same as the first  <ListGroup />
  return (
    <div>
      <ListGroup />
    </div>
  );
}

// Exporting the app componentn so that it can be used somewhere else as well.
export default App;
