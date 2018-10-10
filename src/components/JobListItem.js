import React from 'react';
import { Link } from 'react-router-dom'; 

export default ({ title, company, salary, interview, id }) => (
    <tr>
        <td>{company}</td>
        <td>{title}</td>
        <td>{salary}</td>
        <td>{interview}</td>
        <td>
            <select className="list-item__select">
                <option value="interviewing">Interviewing</option>
                <option value="rejected">Rejected</option>
                <option value="ghosted">Ghosted</option>
                <option value="offered">Offered</option>
            </select>
        </td>
    </tr>
);

/*<div className="list-item-dev">
<h3>{company}</h3>
<p>{title}</p>
<p>{salary}</p>
<p>{interview}</p>
<select className="list-item__select">
    <option value="interviewing">Interviewing</option>
    <option value="rejected">Rejected</option>
    <option value="ghosted">Ghosted</option>
    <option value="offered">Offered</option>
</select>
<button>Edit</button>
</div>*/