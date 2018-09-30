import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

const JobsSummary = ({ numberOfJobs }) => (
    <div>
        <h2>You have applied to {numberOfJobs} Jobs and received 0 offers</h2>
        <Link to="./add">Add a Job</Link>
    </div>
);

const mapStateToProps = (state) => ({
    numberOfJobs: state.jobs.length
});

export default connect(mapStateToProps)(JobsSummary);