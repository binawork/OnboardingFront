import React from "react";

import "../static/looper/stylesheets/theme.min.css";
//import "../static/looper/stylesheets/theme-dark.min.css";

import Navbar from "../Components/Navbar";
import UsersList from "./UsersList"
import LeftMenu from "./LeftMenu";

function UserListPage() {
	const singleUser = {name: "Craig Hansen", email: "chansen@example.com", position: "Software Developer", department: "Foo Bar", localization: "Lorem Ipsum", sent: 4, finished: 2};
	var allUsers = [], i;
	for(i = 0; i < 5; i++){
		allUsers.push(singleUser);
	}

    return(
    	<div className="app">
    		<header className="app-header app-header-dark">
    			<Navbar />
    		</header>
			<LeftMenu />
			<main className="app-main">
				<div className="wrapper"><div className="page">
					<div className="page-inner">
						<header className="page-title-bar">
							<div className="card card-fluid">
								<div className="card-body">
									<h4 className="card-title">  </h4>
									<hr />
									<ol className="breadcrumb">
										<li className="breadcrumb-item">
											<a href="#">Home</a>
										</li>
										<li className="breadcrumb-item active">Accounts</li>
									</ol>
								</div>
							</div>
						</header>

						<UsersList users = { allUsers } />
					</div>
				</div></div>
		    </main>
        </div>
    )
}

export default UserListPage;

