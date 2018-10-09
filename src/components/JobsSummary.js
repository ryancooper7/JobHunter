import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

const JobsSummary = ({ numberOfJobs }) => (
    <div className="page-header">
        <div className="content-container">
            <div className="jobs-summary">
                <h1 className="page-header__title">You have applied to <span>{numberOfJobs}</span> Jobs and received <span>0</span> offers</h1>
                <Link className="jobs-summary__link" to="./add">Add a Job</Link>
            </div>
        </div>
    </div>
);

const mapStateToProps = (state) => ({
    numberOfJobs: state.jobs.length
});

export default connect(mapStateToProps)(JobsSummary);