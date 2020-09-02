import React from "react";

import "../static/looper/stylesheets/theme.min.css";
//import "../static/looper/stylesheets/theme-dark.min.css";

import UserProfileManage from "./UserProfileManage";
import Navbar from "../Components/Navbar";
import LeftMenu from "./LeftMenu";
import PageAddressBar from "./PageAddressBar"

function UserManagerProfilePage() {
	const singleUser = {name: "Craig Hansen", email: "chansen@example.com", position: "Software Developer", department: "Foo Bar", localization: "Lorem Ipsum", sent: 4, finished: 2};
	var allUsers = [], i;
	for(i = 0; i < 5; i++){
		allUsers.push(singleUser);
	}

    return (
    	<div className="app">
    		<header className="app-header app-header-dark">
    			<Navbar />
    		</header>
    		<LeftMenu />
    		<main className="app-main">
    			<div className="wrapper"><div className="page">
    				<div className="page-inner">
    					<PageAddressBar page = { "User profile" } />

    					<div className="page-section">
    						<div className="card card-fluid">
    							<div className="card-header">View content</div>
    							<div className="row"> {/* placeholder */}
    								<div className="col">
    									<div className="card-body align-items-center text-center">
    										<div className="user-avatar user-avatar-xl fileinput-button">
    											<div className="fileinput-button-label"> Change photo </div><img src={process.env.PUBLIC_URL+"/images/unknown-profile.jpg"} alt="" />
    											<input id="fileupload-avatar" type="file" name="avatar" />
    										</div>
    									</div>
    								</div>

    								<div className="col">
    									<UserProfileManage /> {/* placeholder */}
    								</div>
    							</div>
    						</div>
    					</div>
    				</div>
    			</div></div>
    	    </main>
        </div>
    );
}

export default UserManagerProfilePage;

