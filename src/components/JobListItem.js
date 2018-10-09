import React from 'react';
import { Link } from 'react-router-dom'; 

export default ({ title, company, salary, interview, id }) => (
    <Link className="list-item-dev" to={`/edit/${id}`}>
        <h3>{company}</h3>
        <p>{title}</p>
        <p>{salary}</p>
        <p>{interview}</p>
    </Link>

);