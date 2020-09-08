import React from "react";
import { Link } from 'react-router-dom';
// todos: add key = { ... }

function EmployePageFillRow(props) {
console.log(props);
    return(
        <tr>
            <td><Link to="/employe_page_fill">{props.row.name}</Link></td>
            <td>{props.row.progress}</td>
        </tr>
    )
}
export default EmployePageFillRow;

