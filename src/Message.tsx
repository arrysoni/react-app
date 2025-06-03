// Pascal Casing: The first letter of the function must be capital
function Message() {
  // JSX: JavaScript XML
  // This code underhood will get converted to a JavaScript code.
  const name = "Aarya";
  if (name) return <h1>Hello {name}</h1>;
  else return <h1>Hello World</h1>; // This is not an HTML code.
}

// To use this first we need to export this as a default object from this module
export default Message;
