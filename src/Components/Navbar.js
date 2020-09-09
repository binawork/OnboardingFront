import React from "react";

function Navbar() {
    return(
        <nav className="top-bar navbar navbar-expand-lg navbar-dark bg-dark">
            <a className="navbar-brand">Online Onboarding</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse"
                    data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                    aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"/>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav d-flex">
                    <li className="nav-item active">
                        <a className="nav-link">Home <span className="sr-only">(current)</span></a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link">Link</a>
                    </li>
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button"
                           data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Dropdown
                        </a>
                        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                            <a className="dropdown-item" href="#">Akcja</a>
                            <a className="dropdown-item" href="#">Reakcja</a>
                            <div className="dropdown-divider"/>
                            <a className="dropdown-item" href="#">Lorem Ipsum</a>
                        </div>
                    </li>
                </ul>
                    <div className="my-2 my-lg-0 col-6 p-0">
                        <form className="form-inline">
                            <input className="form-control mr-sm-2 col-9" type="search" placeholder="Szukaj" aria-label="Search"/>
                            <button className="btn btn-outline-success my-2 my-sm-0 col-2 float-left" type="submit">Szukaj</button>
                        </form>
                    </div>
                    <div className="ml-4">
                        <div className="form-inline my-2 my-lg-0">
                            <p><em>Witaj #login</em></p>
                        </div>
                    </div>
            </div>
        </nav>
    )
}
export default Navbar;

