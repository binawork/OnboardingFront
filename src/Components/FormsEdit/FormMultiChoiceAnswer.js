import React from "react";

import "../../static/looper/stylesheets/theme.min.css";
//import "../static/looper/stylesheets/theme-dark.min.css";
//import "../static/looper/vendor/fontawesome/all.min.css";

import Switcher from "../Switcher"

function FormMultiChoiceAnswer() {

    return(
      <div className="task-issue">
          <div className="card">
              <div className="card-header"><span className="drag-indicator"></span> One choice answer</div>
              <div className="card-body">
                  <form> {/* form placeholder */}
                    <div className="form-group">
                        <div className="input-group">
                            <input type="text" className="form-control" placeholder="Title" value="" />
                        </div>
                    </div>
                    <div className="form-group">
                        <textarea className="form-control" placeholder="Description (markdown)" rows="4"></textarea>
                    </div>
                    <hr />
                    <table className="table table-hover">
                        <tr><td><i className="fa fa-arrows">&#10018;</i></td>
                            <td>
                                <div className="custom-control custom-control-inline custom-checkbox">
                                    <input type="checkbox" className="custom-control-input" id="ckb1" /> <label className="custom-control-label" for="ckb1">Answer One</label>
                                </div>
                            </td>
                            <td> <a className="btn" href="#">&#9997; Edit</a> </td>
                            <td> <a className="btn" href="#"><i className="fa fa-trash-o fa-lg">&#61944;</i> Delete</a> </td>
                        </tr>
                        <tr><td><i className="fa fa-arrows">&#10018;</i></td>
                            <td>
                                <div className="custom-control custom-control-inline custom-checkbox">
                                    <input type="checkbox" className="custom-control-input" id="ckb2" checked /> <label className="custom-control-label" for="ckb2">Answer Two</label>
                                </div>
                            </td>
                            <td> <a className="btn" href="#">&#9997; Edit</a> </td>
                            <td> <a className="btn" href="#"><i className="fa fa-trash-o fa-lg">&#61944;</i> Delete</a> </td>
                        </tr>
                        <tr><td><i className="fa fa-arrows">&#10018;</i></td>
                            <td>
                                <div className="custom-control custom-control-inline custom-checkbox">
                                    <input type="checkbox" className="custom-control-input is-valid" id="ckb3" /> <label className="custom-control-label" for="ckb3">Answer Three</label>
                                </div>
                            </td>
                            <td> <a className="btn" href="#">&#9997; Edit</a> </td>
                            <td> <a className="btn" href="#"><i className="fa fa-trash-o fa-lg">&#61944;</i> Delete</a> </td>
                        </tr>
                        <tr><td><i className="fa fa-arrows">&#10018;</i></td>
                            <td>
                                <div className="custom-control custom-control-inline custom-checkbox">
                                    <input type="checkbox" className="custom-control-input" id="ckb4" /> <label className="custom-control-label" for="ckb4">Answer Four</label>
                                </div>
                            </td>
                            <td> <a className="btn" href="#">&#9997; Edit</a> </td>
                            <td> <a className="btn" href="#"><i className="fa fa-trash-o fa-lg">&#61944;</i> Delete</a> </td>
                        </tr>
                    </table>
                    <hr />
                    <div className="form-group">
                        <div className="input-group-append">
                            <button className="btn btn-secondary" style={{color: '#000'}}>Add answer</button>
                        </div>
                    </div>
                  </form>
              </div>
              <div className="card-footer align-items-center">

                  <div className="col">
                      <Switcher /> Required {/* form placeholder */}
                  </div>
                  <div className="col">
                      <a className="btn" href="#"><i className="fa fa-clone fa-lg"> </i> Duplicate</a>
                      <a className="btn" href="#"><i className="fa fa-files-o fa-lg">&#61637;</i> Duplicate</a>
                  </div>
                  <div className="col">
                      <a className="btn" href="#"><i className="fa fa-trash-o fa-lg">&#61944;</i> Delete</a>
                  </div>
              </div>

          </div>
      </div>
    )
}

export default FormMultiChoiceAnswer;
