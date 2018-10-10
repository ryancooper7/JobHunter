import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

const JobsSummary = ({ numberOfJobs, numberOfOffers }) => (
    <div className="page-header">
        <div className="content-container">
            <div className="jobs-summary">
                <h1 className="page-header__title">You have applied to <span>{numberOfJobs}</span> Jobs and received <span>{numberOfOffers}</span> offers</h1>
                <Link className="jobs-summary__link" to="./add">Add a Job</Link>
            </div>
        </div>
    </div>
);

const mapStateToProps = (state) => ({
    numberOfJobs: state.jobs.length,
    numberOfOffers: state.jobs.filter((job) => job.status === 'offered').length
});

export default connect(mapStateToProps)(JobsSummary);