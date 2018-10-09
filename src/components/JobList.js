import React from 'react';
import JobListItem from './JobListItem';
import { connect } from 'react-redux';
import selectJobs from '../selectors/jobs';

const JobList = (props) => (
    <div className="content-container">
        <div className="list-header-dev">
            <div>Company</div>
            <div>Position</div>
            <div>Salary</div>
            <div>Interview</div>
        </div>
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
    </div>
);

const mapStateToProps = (state) => ({
    jobs: selectJobs(state.jobs, state.filters)
});

export default connect(mapStateToProps)(JobList);