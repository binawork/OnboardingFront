import React, { useState, useEffect } from "react";
import { getPath } from "../utils.js";
import FormTableRow from "../FormTable/FormTableRow";

function PackagePage(id){
	var [rows , setRows] = useState([]),
		[loaded, isLoaded] = useState(false);
	const [error, showError] = useState(null);
	let url = getPath(),
		fetchProps = {method:"GET", headers:{"Accept":"application/json", "Content-Type":"application/json", "X-CSRFToken":""}};

	useEffect(() => {
		fetch(url + "api/page/" + id + "/list_by_package_hr/", fetchProps).then(res => res.json()).then(
			(result) => {
				isLoaded(true);
				setRows(result);
			},
			(error) => {
				console.log(error);
			}
		);
	}, []);

	if(error){
		return <PackagesRow key={0} row={ {name: error.message, last_edit: ""} }/>
	} else if(!loaded)
		return <PackagesRow key={0} row={ {name: "Loading ...", last_edit: ""} }/>
	else {
		var form_table = [], i, count = rows.length;
		for(i = 0; i < count; i++)
			form_table.push(<PackagesRow key={ rows[i].id } row={ {name: rows[i].title, last_edit: rows[i].updated_on} }/>);
		return ( <>{ form_table }</> )
	}

}

export default PackagePage;

