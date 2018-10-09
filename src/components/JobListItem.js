import React from 'react';
import { Link } from 'react-router-dom'; 

export default ({ title, company, salary, interview, id }) => (
    <Link to={`/edit/${id}`}>
        <h3>{title} at {company}</h3>
        <p>Salary: {salary}</p>
        <p>Next Interview Step: {interview}</p>
    </Link>

);