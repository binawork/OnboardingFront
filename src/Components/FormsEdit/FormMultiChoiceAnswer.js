import React from "react";

import "../../static/looper/stylesheets/theme.min.css";
//import "../static/looper/stylesheets/theme-dark.min.css";
//import "../static/looper/vendor/fontawesome/all.min.css";

function FormMultiChoiceAnswer(props) {
    var localFormData = {title: "", description: "",
    		data: {
				answers: []
			}
    	}, valid = false;

    if(props.form){
    	if(!props.form.type || props.form.type !== "msa")
    		return <></>;

    	let allValid = 0;
		if(props.form.title){
			localFormData.title = props.form.title;
			allValid++;
		}
		if(props.form.description){
			localFormData.description = props.form.description;
			allValid++;
		}

		if(props.form.data)
			if(props.form.data.answers){
				localFormData.data.answers = props.form.data.answers;
				allValid++;
			}

		if(allValid == 3)
			valid = true;
    }

    if(!valid){
    	return <></>;
    }

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
                                <div className="custom-control custom-checkbox">
                                    <input type="checkbox" className="custom-control-input" id="ckb1" /> <label className="custom-control-label" htmlFor="ckb1">Answer One</label>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <div className="custom-control custom-checkbox">
                                    <input type="checkbox" className="custom-control-input" id="ckb2" checked /> <label className="custom-control-label" htmlFor="ckb2">Answer Two</label>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <div className="custom-control custom-checkbox">
                                    <input type="checkbox" className="custom-control-input is-valid" id="ckb3" /> <label className="custom-control-label" htmlFor="ckb3">Answer Three</label>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <div className="custom-control custom-checkbox">
                                    <input type="checkbox" className="custom-control-input" id="ckb4" /> <label className="custom-control-label" htmlFor="ckb4">Answer Four</label>
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

export default FormMultiChoiceAnswer;

