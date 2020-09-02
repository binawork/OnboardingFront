import React from "react";

import "../../static/looper/stylesheets/theme.min.css";
//import "../static/looper/stylesheets/theme-dark.min.css";
//import "../static/looper/vendor/fontawesome/all.min.css";

function FormChoiceAnswer(props) {

    return(
      <div className="task-issue">
          <div className="card">
              <div className="card-header">Title</div>
              <div className="card-body">"Description (markdown)"</div>

              <div className="card-body">
                  <form> {/* form placeholder */}
                    <table className="table table-hover"><tbody>
                        <tr>
                            <td>
                                <div className="custom-control custom-radio">
                                    <input type="radio" className="custom-control-input" id="rd1" /> <label className="custom-control-label" htmlFor="rd1">Answer One</label>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <div className="custom-control custom-radio">
                                    <input type="radio" className="custom-control-input" id="rd2" checked /> <label className="custom-control-label" htmlFor="rd2">Answer Two</label>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <div className="custom-control custom-radio">
                                    <input type="radio" className="custom-control-input is-valid" id="rd3" /> <label className="custom-control-label" htmlFor="rd3">Answer Three</label>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <div className="custom-control custom-radio">
                                    <input type="radio" className="custom-control-input" id="rd4" /> <label className="custom-control-label" htmlFor="rd4">Answer Four</label>
                                </div>
                            </td>
                        </tr>
                    </tbody></table>
                  </form>
              </div>
          </div>
      </div>
    )
}

export default FormChoiceAnswer;

