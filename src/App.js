import React from 'react';
import "./static/css/style.css";
import { BrowserRouter, Route } from 'react-router-dom';

//import Navbar from "./Components/Navbar";
//import UserListSearch from "./Components/UserListSearch";
//import UserListRow from "../Components/UsersList/UserListRow";
import DashboardPage from "./Components/DashboardPage";
import UserListPage from "./Components/UsersList/UserListPage";
import FormsEditPage from "./Components/FormsEdit/FormsEditPage";
import FormTablePage from "./Components/FormTable/FormTablePage";
import AddUserTablePage from "./Components/AddUserTable/AddUserTablePage";
import UserManagerProfilePage from "./Components/UserManagerProfilePage";

import FormsEmployeePage from "./Components/FormsEmployeePage";
import FormsManagerCheckPage from "./Components/FormsManagerCheckPage";
import EmployeProfilePage from "./Components/EmployeProfile/EmployeProfilePage";
import EmployePageFillCopyPage from "./Components/EmployePageFillCopy/EmployePageFillCopyPage";
import Navbar from "./Components/Navbar";

function App() {
    return (
        <BrowserRouter>
            <Route path="/profile/manager" component={ UserManagerProfilePage } />
            <Route path="/profile/employee" component={ EmployeProfilePage } />
            <Route path="/add_user" component={ EmployePageFillCopyPage } />
            <Route path="/employe_page_fill" component={ EmployeProfilePage } />
            <Route path="/form_edit" component={ FormsEditPage } />
            <Route path="/form_table" component={ FormTablePage } />
            <Route path="/user_list" component={ UserListPage } />
            <Route path="/" component={ DashboardPage } />

        </BrowserRouter>
    );
}

export default App;

