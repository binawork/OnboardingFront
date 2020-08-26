import React from "react";

function FormTableRow(row) {
    return(
        <tr>
            <td>{row.name}</td>
            <td>{row.order}</td>
            <td>{row.last_edit}</td>
            <td>edit/delete/stats</td>
        </tr>
    )
}
export default FormTableRow;