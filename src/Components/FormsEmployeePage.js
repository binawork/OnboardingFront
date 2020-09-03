import React from "react";

import "../static/looper/stylesheets/theme.min.css";
//import "../static/looper/stylesheets/theme-dark.min.css";
//import "../static/looper/vendor/fontawesome/all.min.css";

import NavbarEmployee from "./NavbarEmployee.js";
import PageAddressBar from "./PageAddressBar";
import FormOpenAnswer from "./FormsEdit/FormOpenAnswer";
import FormChoiceAnswer from "./FormsEdit/FormChoiceAnswer";
import FormMultiChoiceAnswer from "./FormsEdit/FormMultiChoiceAnswer";
import { formsEmployeeData } from "./FormsEdit/FormsEmployeeData.js";

function FormsEmployeePage() {
    var forms = [];
    for(var i = 0; i < formsEmployeeData.length; i++){
    	if(formsEmployeeData[i].type === "oa")
    		forms.push(<div className="card-body" key = { i }><FormOpenAnswer form = { formsEmployeeData[i] } /></div>);
    	else if(formsEmployeeData[i].type === "osa")
    		forms.push(<div className="card-body"  key = { i }><FormChoiceAnswer form = { formsEmployeeData[i] } /></div>);
    	else if(formsEmployeeData[i].type === "msa")
    		forms.push(<div className="card-body" key = { i }><FormMultiChoiceAnswer form = { formsEmployeeData[i] } /></div>);
    }

    return(
    	<div className="app">
    		<header className="app-header app-header-dark">
    			<NavbarEmployee />{/* placeholder; */}
    		</header>

    		<aside className="app-aside app-aside-expand-md app-aside-light"></aside>

    		<main className="app-main">
				<div className="wrapper"><div className="page has-sidebar-expand-xl">
					<div className="page-inner">

    					<div className="page-section">
    						<div className="card card-fluid">
    							<div className="card-header">
    							View content
    							</div>
    							<div className="card-body">Description</div>
    							{ forms }
    						</div>
    					</div>
    				</div>

    			</div></div>
    		</main>
    	</div>
    )
}

export default FormsEmployeePage;

