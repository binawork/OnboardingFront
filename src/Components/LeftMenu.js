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

                    </nav>
                </div>
                <ModeButton />
            </div>
        </aside>
    )
}
export default LeftMenu;

