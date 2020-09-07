import React from "react";


function PageAddressBar(props) {
    return(
        <header className="page-title-bar">
            <div className="card card-fluid">
                <div className="card-body">
                    <h4 className="card-title">  </h4>
                    <hr />
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item">
                            <a href="#">Home</a>
                        </li>
                        <li className="breadcrumb-item active">{ props.page }</li>
                    </ol>
                </div>
            </div>
        </header>
    )
}

export default PageAddressBar;

