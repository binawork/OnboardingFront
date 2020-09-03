import React from "react";

import "../static/looper/stylesheets/theme.min.css";
//import "../static/looper/stylesheets/theme-dark.min.css";
//import "../static/looper/vendor/fontawesome/all.min.css";

import Navbar from "./Navbar";
import LeftMenu from "./LeftMenu";
import PageAddressBar from "./PageAddressBar";
import FormOpenText from "./FormsEdit/FormOpenText";
import FormChoiceEdit from "./FormsEdit/FormChoiceEdit";
import FormMultiChoiceEdit from "./FormsEdit/FormMultiChoiceEdit";
import FormAddSection from "./FormsEdit/FormAddSection";


function FormsEditPage() {

    return(
    	<div className="app">
    		<header className="app-header app-header-dark">
    			<Navbar /> {/* placeholder */}
    		</header>
    		<LeftMenu /> {/* placeholder */}
    		<main className="app-main">
				<div className="wrapper"><div className="page has-sidebar">
					<div className="page-inner">
						<PageAddressBar page = { "Page 1" } /> {/* placeholder */}

    					<div className="page-section">
    						<div className="card card-fluid">
    							<div className="card-header">
    							Strona
    							</div>
    							<div className="card-body">
    								<form> {/* form placeholder */}
    									<div className="form-group">
    										<div className="input-group">
    											<input type="text" className="form-control" placeholder="Enter new Page name" value="" />
    										</div>
    									</div>
    									<div className="form-group">
    										<div className="custom-file">
    											<input type="file" className="custom-file-input" id="docFile" multiple="" />
    											<label className="custom-file-label" for="docFile">Add video url/doc etc.</label>
    										</div>
    									</div>
    									<div className="form-group">
    										<textarea className="form-control" placeholder="Description" rows="4"></textarea>
    									</div>
    									<div className="form-group">
    										<div className="input-group-append">
    											<button className="btn btn-secondary" style={{color: '#000'}}>Save</button>
    										</div>
    									</div>
    								</form>
    							</div>
    						</div>
    					</div>

    					<div className="page-section">
    						<div className="card card-fluid">
    							<div className="card-header">
    							Sekcje strony
    							</div>
    							<div className="row">
    								<div className="col">
    									<div className="card-body">
    										<FormOpenText /> {/* placeholder */}
    									</div>

    									<div className="card-body">
    										<FormChoiceEdit /> {/* placeholder */}
    									</div>

    									<div className="card-body">
    										<FormMultiChoiceEdit /> {/* placeholder */}
    									</div>
    								</div>
    								<div className="col-auto">
    									<div className="card-body">
    										<FormAddSection />
    									</div>
    								</div>
    							</div>
    						</div>
    					</div>
    				</div>
    			</div></div>
    		</main>
    	</div>
    )
}

export default FormsEditPage;

