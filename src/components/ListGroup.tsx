function ListGroup() {
  // <h1>List</h1>  // We cannot return multiple components in a React Component, the HTML code gets converted to React.createElement('h1'), and it's not allowed.

  // There are multiple ways to solve this issue.
  /*
    1. Wrap it using a <div> container: But that's like creating another element for the React App
    2. Using Fragments: 
        import { Fragment } from "react";
        <Fragment></Fragment> instead of <div /> inside the return statement. 

    3. Use empty <></>, and delete the import statement. It's a way of telling React that use fragments to wrap the two components. 
    */

  const items = [
    "New York",
    "San Francisco",
    "Philadelphia",
    "Los Angeles",
    "Paris",
  ];

  // We want to render the list now, but since JavaScript doesn't allow for loops,n we use a function called map. We convert one data type into another.
  // Since the map function isn't allowed in the middle of the code, or under any other component, wrap the map function using '{}'
  return (
    <>
      <h1>List</h1>
      <ul className="list-group">
        {items.map((item) => (
          <li key={item}>{item}</li> // It is necessary to give each element of the list a unique key, since in our list each sting is unique, we go for key as the item itself.
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
