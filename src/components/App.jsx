import React from "react";
import Form from "./Form";

var userIsRegistered = false;
//Login form will be displayed if UserIsRegistered is true.
//Register form will be displayed if UserIsRegistered is false.
function App() {
  return (
    <div className="container">
      <Form userIsRegistered={userIsRegistered} />
    </div>
  );
}

export default App;
