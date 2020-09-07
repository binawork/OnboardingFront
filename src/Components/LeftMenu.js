import React from "react";
import ModeButton from './ModeButton'
//import Contact from "./Contact";


function LeftMenu() {
    return(
        <aside className="app-aside app-aside-expand-md app-aside-light">
            <div className="aside-content">
                <header className="aside-header d-block d-md-none">

                </header>
                <div className="aside-menu overflow-hidden">
                    <nav id="stacked-menu" className="stacked-menu">

                      <ul className="menu">
                        <li className="menu-header">
                            <span className="menu-icon fas fa-home"></span> <span className="menu-text">Dashboard</span>
                        </li>

                        <li className="menu-item has-child has-active">
                            <a href="#" className="menu-link"><span className="menu-icon far fa-file"></span> <span className="menu-text">Wdrożenia</span></a>
                            <ul className="menu">
                                <li className="menu-item">
                                    <a href="#" className="menu-link">Lista formularzy wdrożeń</a>
                                </li>
                                <li className="menu-item">
                                    <a href="#" className="menu-link">- dodaj pracownika</a>
                                </li>
                            </ul>
                        </li>

                        <li className="menu-item">
                            <a href="#" className="menu-link"><span className="menu-icon fas fa-file"></span> <span className="menu-text">Add new user</span></a>
                        </li>
                        <li className="menu-item">
                            <a href="#" className="menu-link"><span className="menu-icon fas fa-file"></span> <span className="menu-text">Lista pracowników</span></a>
                        </li>
                      </ul>

                    </nav>
                </div>
                <ModeButton />
            </div>
        </aside>
    )
}
export default LeftMenu;

