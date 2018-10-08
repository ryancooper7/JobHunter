import React from 'react';
import JobForm from './JobForm';
import { connect } from 'react-redux';
import { startRemoveJob, startEditJob } from '../actions/jobs';

export class EditJobPage extends React.Component {
    onRemove = () => {
        this.props.startRemoveJob({ id: this.props.job.id });
        this.props.history.push('/');
    }

    onSubmit = (job) => {
        this.props.startEditJob(this.props.job.id, job);
        this.props.history.push('/');
    };


    render() {
        return (
            <div>
                <JobForm
                    job={this.props.job} 
                    onSubmit={this.onSubmit}
                />
                <button onClick={this.onRemove}>Remove Job</button>
            </div>
        );
    }
}

const mapStateToProps = (state, props) => ({
    job: state.jobs.find((job) => job.id === props.match.params.id)
});

const mapDispatchToProps = (dispatch, props) => ({
    startRemoveJob: (data) => dispatch(startRemoveJob(data)),
    startEditJob: (id, job) => dispatch(startEditJob(id, job))
});

export default connect(mapStateToProps, mapDispatchToProps)(EditJobPage);