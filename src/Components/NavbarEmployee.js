import React from "react";

function NavbarEmployee() {
    return(
      <nav className="top-bar navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="top-bar-brand"><a className="navbar-brand" style={{ color:"#000" }}>Online Onboarding</a></div>
        
        <div className="top-bar-list" id="navbarSupportedContent">
            <div className="top-bar-item top-bar-item-full">
                <ul className="navbar-nav d-flex breadcrumb my-2 my-lg-0">
                    <li className="breadcrumb-item">
                        <a style={{ color:"#000" }}>Dashboard</a>
                    </li>
                    <li className="breadcrumb-item active">
                        tytuł folmularza
                    </li>
                </ul>

                <div className="my-2 my-lg-0 col-6 p-0"></div>

                <div className="ml-4">
                    <div className="form-inline my-2 my-lg-0">
                        <p><em>Witaj #login</em></p>
                    </div>
                </div>
            </div>
        </div>
      </nav>
    )
}
export default NavbarEmployee;

