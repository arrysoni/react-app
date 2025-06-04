// import ListGroup from "./components/ListGroup";

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

/* <ListGroup
        items={items}
        heading="Cities"
        onSelectItem={handleSelectItem}
      /> */

import Button from "./components/Button";
import Alert from "./components/Alert";
import { useState } from "react";

function App() {
  const [alertVisible, setAlertVisibility] = useState(false);
  return (
    <div>
      {alertVisible && (
        <Alert onClose={() => setAlertVisibility(false)}>My Alert</Alert>
      )}

      <Button color="primary" onClick={() => setAlertVisibility(true)}>
        Aarya's Button
      </Button>
    </div>
  );
}

// Exporting the app componentn so that it can be used somewhere else as well.
export default App;
