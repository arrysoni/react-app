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

  let items = [
    "New York",
    "San Francisco",
    "Philadelphia",
    "Los Angeles",
    "Paris",
  ];

  items = [];

  /* Representing this in the form of a function. 
  const getMessage = () => {
    items.length === 0 ? <p>No item found</p> : null;
  };

  Another way to render the data dynamically, is we can avoid using the keyword "null". In JavaScript, the logical operators work in the following way:
  1. true && 1 = 1
  2. true && "Aarya" = "Aarya"
  3. false && "Aarya" = false

  If the condition is false, the output will automatically turn false. This is basic computing logic. 
  */

  /*  This is a repetition of the fragment <h1>List</h1> and repetition is not a good practice. So we will use a different way to implement this condition. 
  We get rid of the following if statement, and try rendering this condition inside our jsx component i.e., the return statement.
  Since we cannot use an if statement inside the return statement (illegal in JavaScript), we again wrap the condition in {} and use a ternary operator instead. 

  if (items.length === 0)
    return (
      <>
        <h1>List</h1>   
        <p>No Item Found</p>
      </>
    );
    */

  // We want to render the list now, but since JavaScript doesn't allow for loops,n we use a function called map. We convert one data type into another.
  // Since the map function isn't allowed in the middle of the code, or under any other component, wrap the map function using '{}'. We can also use a method here as shown in the code.
  return (
    <>
      <h1>List</h1>
      {items.length === 0 && <p>No item found</p>}
      <ul className="list-group">
        {items.map((item) => (
          <li key={item}>{item}</li> // It is necessary to give each element of the list a unique key, since in our list each sting is unique, we go for key as the item itself.
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
