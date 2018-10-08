import React from 'react';
import JobListItem from './JobListItem';
import { connect } from 'react-redux';

const JobList = (props) => (
    <div>
        {
            props.jobs.length === 0 ? (
                <div>
                    <span>No jobs</span>
                </div>
            ) : (
                props.jobs.map((job) => {
                    return <JobListItem key={job.id} {...job} />
                })
            )
        }
    </div>
);

const mapStateToProps = (state) => ({
    jobs: state.jobs
});

export default connect(mapStateToProps)(JobList);