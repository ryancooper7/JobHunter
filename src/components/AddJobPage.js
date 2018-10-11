import React from 'react';
import JobForm from './JobForm';
import { connect } from 'react-redux';
import { startAddJob } from '../actions/jobs';

export class AddJobPage extends React.Component {
    onSubmit = (job) => {
        this.props.startAddJob(job);
        this.props.history.push('/');
    }

    render() {
        return (
            <div className="content-container">
                <h1>Add a Job</h1>
                <JobForm onSubmit={this.onSubmit}/>
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch) => ({
    startAddJob: (job) => dispatch(startAddJob(job))
});

export default connect(undefined, mapDispatchToProps)(AddJobPage);