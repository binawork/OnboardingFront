import React from 'react';
import "../static/css/style.css";
//import { BrowserRouter, Route } from 'react-router-dom';

//import Navbar from "../Components/Navbar";
//import UserListSearch from "../Components/UserListSearch";
//import UserListRow from "../Components/UsersList/UserListRow";
import DashboardPage from "../Components/DashboardPage";
import UserListPage from "../Components/UsersList/UserListPage";
import FormsEditPage from "../Components/FormsEditPage";
import FormTablePage from "../Components/FormTable/FormTablePage";
import AddUserTablePage from "../Components/AddUserTable/AddUserTablePage";
import UserManagerProfilePage from "../Components/UserManagerProfilePage";

import FormsEmployeePage from "../Components/FormsEmployeePage";
import FormsManagerCheckPage from "../Components/FormsManagerCheckPage";
import EmployeProfilePage from "../Components/EmployeProfile/EmployeProfilePage";
import EmployePageFillCopyPage from "../Components/EmployePageFillCopy/EmployePageFillCopyPage";

function App() {
  return (
      <>
      {/*<BrowserRouter>
        <Route path="/profile" component={ UserManagerProfilePage } />
        <Route path="/users" component={ UserListPage } />
        <Route path="/create-page" component={ FormsEditPage } />
        <Route path="/employee/:formid/:pageid/answers" component={ FormsManagerCheckPage } />*/}
      <DashboardPage />
      {/*</BrowserRouter>*/}
      </>
  );
}

export default App;

