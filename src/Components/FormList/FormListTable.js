import React from "react";
import PackagesAddNew from "./PackagesAddNew";
import PackagesRow from "./PackagesRow";
import { formDataList } from "../FormTable/FormTableData";

function FormListTable() {
    let form_table= [];
    if (formDataList) {
        formDataList.forEach(function (element) {
            form_table.push(<PackagesRow row={element}/>)
        });
    }
    return(
        <div className="page-section">
            <div className="card card-fluid">
                <div className="card-header">
                    Lorem Ipsum
                </div>
                <div className="card-body">
                    <PackagesAddNew />
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
                            <th scope="col" style={{width: "50%"}}>Package Name</th>
                            <th scope="col" style={{width: "25%"}}>Last Edit</th>
                            <th scope="col" style={{width: "15%"}}>Action</th>
                        </tr>
                        </thead>
                        <tbody id="form_table_data_container">
                            { form_table }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}
export default FormListTable;

