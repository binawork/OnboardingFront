import React from "react";

function FormTableRow(props) {
    return(
        <tr>
            <td>{props.row.name}</td>
            <td>{props.row.order}</td>
            <td>{props.row.last_edit}</td>
            <td>edit/delete/stats</td>
        </tr>
    )
}
export default FormTableRow;