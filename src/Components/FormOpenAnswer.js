import React from "react";

import "../static/looper/stylesheets/theme.min.css";
//import "../static/looper/stylesheets/theme-dark.min.css";
//import "../static/looper/vendor/fontawesome/all.min.css";

import Switcher from "./Switcher"

function FormOpenAnswer() {

    return(
      <div className="task-issue">
          <div className="card">
              <div className="card-header"><span className="drag-indicator"></span> Open answer</div>
              <div className="card-body">
                  Form 1<br /><i className="fa fa-arrows">&#10018;</i>
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

export default FormOpenAnswer;

