import React from 'react';
import JobForm from './JobForm';
import { connect } from 'react-redux';

export class EditJobPage extends React.Component {
    render() {
        return (
            <div>
                <JobForm job={this.props.job} />
                <button>Remove Job</button>
            </div>
        );
    }
}

const mapStateToProps = (state, props) => ({
    job: state.jobs.find((job) => job.id === props.match.params.id)
});