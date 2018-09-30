import React from 'react';
import { JobListItem } from './JobListItem';
import { connect } from 'react-redux';

const JobList = (props) => (
    <div>
        {
            props.jobs.map((job, index) => {
                return <JobListItem key={index} {...job} />
            })
        }
    </div>
);

const mapStateToProps = (state) => ({
    jobs: state.jobs
});

export default connect(mapStateToProps)(JobList);