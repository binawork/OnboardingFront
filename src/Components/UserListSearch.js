import React from "react";


function UserListSearch() {
    return(
        <>
        <div className="row mb-4">
            <div className="col">
                <div className="has-clearable">
                    <button type="button" className="close" aria-label="Close"><span aria-hidden="true"><i className="fa fa-times-circle"></i></span></button>
                    <input type="text" className="form-control" placeholder="Search" />
                </div>
            </div>
            <div className="col-auto">
                <div className="dropdown">
                    <button className="btn btn-secondary" data-toggle="dropdown" data-display="static" style={{color: '#000'}} aria-haspopup="true" aria-expanded="false">Update users</button>
                </div>
            </div>
        </div>

        <div className="row mb-4">
            <div className="col">
                <div className="has-clearable">
                    <button type="button" className="close" aria-label="Close"><span aria-hidden="true"><i className="fa fa-times-circle"></i></span></button>
                    <input type="text" className="form-control" placeholder="Department" />
                </div>
            </div>
            <div className="col">
                <div className="has-clearable">
                    <button type="button" className="close" aria-label="Close"><span aria-hidden="true"><i className="fa fa-times-circle"></i></span></button>
                    <input type="text" className="form-control" placeholder="Position" />
                </div>
            </div>
            <div className="col">
                <div className="has-clearable">
                    <button type="button" className="close" aria-label="Close"><span aria-hidden="true"><i className="fa fa-times-circle"></i></span></button>
                    <input type="text" className="form-control" placeholder="Localization" />
                </div>
            </div>
            <div className="col-auto">
                <div className="dropdown"></div>
            </div>
        </div>
        </>
    )
}

export default UserListSearch;

