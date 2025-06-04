// import ListGroup from "./components/ListGroup";

import Alert from "./components/Alert";

function App() {
  // // Each component in React has its own state. So in case we add one more  <ListGroup />, it will not act as the same as the first  <ListGroup />

  // let items = [
  //   "New York",
  //   "San Francisco",
  //   "Philadelphia",
  //   "Los Angeles",
  //   "Paris",
  // ];

  // Event handler for SelectItem
  // const handleSelectItem = (item: string) => {
  //   console.log(item);
  // };

  return (
    <div>
      {
        /* <ListGroup
        items={items}
        heading="Cities"
        onSelectItem={handleSelectItem}
      /> */

        <Alert>Hello World!</Alert>
      }
    </div>
  );
}

// Exporting the app componentn so that it can be used somewhere else as well.
export default App;
