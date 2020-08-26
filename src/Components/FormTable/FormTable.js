import React from "react";
import FormTableSearch from "./FormTableSearch";
import FormTableAddNew from "./FormTableAddNew";
import FormTableRow from "./FormTableRow";
import { formDataList } from "./FormTableData";

function FormTable(props) {
    return(
        <div className="page-section">
            <div className="card card-fluid">
                <div className="card-header">
                    Lorem Ipsum
                </div>
                <div className="card-body">
                    <FormTableSearch />
                    <FormTableAddNew />
                </div>
            </div>
            <div className="card card-fluid">
                <div className="card-header">
                    Lista Formularzy
                </div>
                <div className="card-body">
                    <table className="table table-striped">
                        <thead>
                        <tr>
                            <th scope="col" style={{width: "50%"}}>Page Name</th>
                            <th scope="col" style={{width: "10%"}}>Order</th>
                            <th scope="col" style={{width: "25%"}}>Last Edit</th>
                            <th scope="col" style={{width: "15%"}}>Action</th>
                        </tr>
                        </thead>
                        <tbody id="form_table_data_container">
                            {
                                formDataList.forEach(function (row) {
                                    if(row)
                                        FormTableRow(row);
                                })
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}
export default FormTable;