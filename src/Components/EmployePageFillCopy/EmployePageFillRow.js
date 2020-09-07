import React from "react";

function EmployePageFillRow(props) {
    return(
        <tr>
            <td>{props.row.name}</td>
            <td>{props.row.progress}</td>
        </tr>
    )
}
export default EmployePageFillRow;