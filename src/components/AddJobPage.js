import React from 'react';
import JobForm from './JobForm';

export class AddJobPage extends React.Component {
    onSubmit = () => {
        this.props.history.push('/');
    }

    render() {
        return (
            <div>
            <h1>Add a Job</h1>
            <JobForm onSubmit={this.onSubmit}/>
        </div>
        );
    }
}