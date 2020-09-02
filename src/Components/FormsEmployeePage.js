import React from "react";

import "../static/looper/stylesheets/theme.min.css";
//import "../static/looper/stylesheets/theme-dark.min.css";
//import "../static/looper/vendor/fontawesome/all.min.css";

import Navbar from "./Navbar";
import LeftMenu from "./LeftMenu";
import PageAddressBar from "./PageAddressBar";
import FormOpenAnswer from "./FormsEdit/FormOpenAnswer";
import FormChoiceAnswer from "./FormsEdit/FormChoiceAnswer";
import FormMultiChoiceAnswer from "./FormsEdit/FormMultiChoiceAnswer";
import FormAddSection from "./FormsEdit/FormAddSection";


function FormsEmployeePage() {

    return(
    	<div className="app">
    		<header className="app-header app-header-dark">
    			{/* todo: add employee navbar; */}
    		</header>

    		<aside className="app-aside app-aside-expand-md app-aside-light"></aside>

    		<main className="app-main">
				<div className="wrapper"><div className="page has-sidebar-expand-xl">
					<div className="page-inner">
						<PageAddressBar page = { "Form title" } /> {/* placeholder */}

    					<div className="page-section">
    						<div className="card card-fluid">
    							<div className="card-header">
    							View content
    							</div>
    									<div className="card-body">
    										<FormOpenAnswer /> {/* placeholder */}
    									</div>

    									<div className="card-body">
    										<FormChoiceAnswer /> {/* placeholder */}
    									</div>

    									<div className="card-body">
    										<FormMultiChoiceAnswer /> {/* placeholder */}
    									</div>
    						</div>
    					</div>
    				</div>

    			</div></div>
    		</main>
    	</div>
    )
}

export default FormsEmployeePage;

