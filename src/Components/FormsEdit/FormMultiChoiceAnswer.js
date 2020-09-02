import React from "react";

import "../../static/looper/stylesheets/theme.min.css";
//import "../static/looper/stylesheets/theme-dark.min.css";
//import "../static/looper/vendor/fontawesome/all.min.css";

function FormMultiChoiceAnswer() {

    return(
      <div className="task-issue">
          <div className="card">
              <div className="card-header">Title</div>
              <div className="card-body">"Description (markdown)"</div>

              <div className="card-body">
                  <form> {/* form placeholder */}
                    <table className="table table-hover">
                        <tr>
                            <td>
                                <div className="custom-control custom-checkbox">
                                    <input type="checkbox" className="custom-control-input" id="ckb1" /> <label className="custom-control-label" for="ckb1">Answer One</label>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <div className="custom-control custom-checkbox">
                                    <input type="checkbox" className="custom-control-input" id="ckb2" checked /> <label className="custom-control-label" for="ckb2">Answer Two</label>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <div className="custom-control custom-checkbox">
                                    <input type="checkbox" className="custom-control-input is-valid" id="ckb3" /> <label className="custom-control-label" for="ckb3">Answer Three</label>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <div className="custom-control custom-checkbox">
                                    <input type="checkbox" className="custom-control-input" id="ckb4" /> <label className="custom-control-label" for="ckb4">Answer Four</label>
                                </div>
                            </td>
                        </tr>
                    </table>
                  </form>
              </div>
          </div>
      </div>
    )
}

export default FormMultiChoiceAnswer;

