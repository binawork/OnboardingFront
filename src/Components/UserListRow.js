import React from "react";


function UserListRow() {
    return(
        <div className="card mb-2">
            <div className="card-body">
                <div className="row align-items-center">

                    <div className="col-auto">
                        <a href="#" className="user-avatar user-avatar-xl"><img src="bootstrap/images/uifaces9.jpg" alt="" /> <span className="avatar-badge idle" title="idle"></span></a>
                    </div>

                    <div className="col">
                        <h3 className="card-title">
                            <a href="#">Jane Barrnes</a> <small className="text-muted"><a href="#">barnes@example.com</a></small>
                        </h3>
                        <h6 className="card-subtitle text-muted"> Social Worker </h6>
                    </div>

                    <div className="col">
                        <h3 className="card-title">
                            <small className="text-muted">Department:</small> Foo Bar
                        </h3>
                        <h3 className="card-title">
                            <small className="text-muted">Localization:</small> Lorem Ipsum
                        </h3>
                    </div>

                    <div className="col-auto">
                        <h3 className="card-title">
                            <small className="text-muted">Packages sent:</small> 4
                        </h3>
                        <h3 className="card-title">
                            <small className="text-muted">Finished Packages:</small> 2
                        </h3>
                        <button type="button" className="btn btn-secondary" data-toggle="tooltip">Edit Profile</button>
                        <button type="button" className="btn btn-secondary" data-toggle="tooltip">Add "package"</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UserListRow;

