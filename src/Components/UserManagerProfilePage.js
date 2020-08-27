import React from "react";

import "../static/looper/stylesheets/theme.min.css";
//import "../static/looper/stylesheets/theme-dark.min.css";

import UserProfileManage from "./UserProfileManage";
import Navbar from "../Components/Navbar";
import LeftMenu from "./LeftMenu";
import PageAddressBar from "./PageAddressBar";

function UserManagerProfilePage() {

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
    							<div className="row">
    								<div className="col">
    									<div className="card-body">
											<div className="form-group"> {/* placeholder */}
												<div className="custom-file">
													<label for="docFile">New photo </label>
													<input type="file" id="docFile" accept="image/*" multiple="" />
												</div>
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

