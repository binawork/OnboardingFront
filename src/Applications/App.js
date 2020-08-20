import React from 'react';
import "../static/css/style.css";
import Navbar from "../Components/Navbar";
import UserListRow from "../Components/UserListRow";

function App() {
  return (
      <UserListRow user = { {name: "Craig Hansen", email: "chansen@example.com", position: "Software Developer", department: "Foo Bar", localization: "Lorem Ipsum", sent: 4, finished: 2} } />
  );
}

export default App;

