import React from "react";

function FormTableAddNew() {
    return(
        <div className="row mb-4">
            <div className="col">
                <div className="has-clearable">
                    <button type="button" className="close" aria-label="Close"><span aria-hidden="true"/></button>
                    <input type="text" className="form-control" placeholder="New Page Name" />
                </div>
            </div>
            <div className="col-auto">
                <div className="dropdown">
                    <button className="btn btn-secondary" data-toggle="dropdown" data-display="static" aria-haspopup="true" aria-expanded="false" style={{color: "black"}}>Add New Page</button>
                </div>
            </div>
        </div>
    )
}
export default FormTableAddNew;