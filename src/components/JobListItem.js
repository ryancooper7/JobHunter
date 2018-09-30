import React from 'react';

export const JobListItem = ({ title, company, salary, interview }) => (
    <div>
        <h3>{title} at {company}</h3>
        <p>Salary: {salary}</p>
        <p>Next Interview Step: {interview}</p>
    </div>

);