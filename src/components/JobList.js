import React from 'react';
import JobListItem from './JobListItem';
import { connect } from 'react-redux';
import selectJobs from '../selectors/jobs';

const JobList = (props) => (
    <div className="table-whole">
        <div className="content-container">
            {props.jobs.length === 0 ? (
                <div>
                    <span>No Jobs</span> 
                </div>           
            ) : (
                <table className="table">
                    <thead className="table-head">
                        <tr>
                            <td>Company</td>
                            <td>Position</td>
                            <td>Salary</td>
                            <td>Next Interview Type</td>
                            <td>Status</td>
                            <td></td>
                        </tr>
                    </thead>
                    <tbody>
                        {props.jobs.map((job) => {
                            return <JobListItem key={job.id} job={job} />
                        })}
                    </tbody>
                </table>
            )
        
            }
        </div>
    </div>
);

const mapStateToProps = (state) => ({
    jobs: selectJobs(state.jobs, state.filters)
});

export default connect(mapStateToProps)(JobList);