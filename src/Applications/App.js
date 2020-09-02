import React from 'react';
import "../static/css/style.css";

import Navbar from "../Components/Navbar";
//import UserListSearch from "../Components/UserListSearch";
//import UserListRow from "../Components/UsersList/UserListRow";
import DashboardPage from "../Components/DashboardPage";
import UserListPage from "../Components/UsersList/UserListPage";
import FormsEditPage from "../Components/FormsEditPage";
import FormTablePage from "../Components/FormTable/FormTablePage";
import AddUserTablePage from "../Components/AddUserTable/AddUserTablePage";
import UserManagerProfilePage from "../Components/UserManagerProfilePage";

function App() {
  return (
      <AddUserTablePage />
  );
}

export default App;

