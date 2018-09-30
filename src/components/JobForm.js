import React from 'react';
import { connect } from 'react-redux';
import { addJob } from '../actions/jobs';

class JobForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            title: '',
            company: '',
            salary: '',
            interview: 'placeholder',
            error:''
        };
    }

    onTitleChange = (e) => {
        const title = e.target.value;
        this.setState(() => ({title}));
    };

    onCompanyChange = (e) => {
        const company = e.target.value;
        this.setState(() => ({company}));
    };

    onSalaryChange = (e) => {
        const salary = e.target.value;
        this.setState(() => ({salary}));
    };

    onInterviewChange = (e) => {
        const interview = e.target.value;
        this.setState(() => ({interview}));
    }

    onSubmit = (e) => {
        e.preventDefault();
        if (!this.state.title || !this.state.company || !this.state.salary || (this.state.interview == 'placeholder')) {
            this.setState(() => ({
                error: 'Please provide all the necessary infromation'
            }));
        } else {
            this.setState(() => ({
                error: ''
            }));
            this.props.addJob({
                title: this.state.title,
                company: this.state.company,
                salary: this.state.salary,
                interview: this.state.interview
            });
        }
        this.props.onSubmit();
    };

    render() {
        return (
            <form onSubmit={this.onSubmit}>
                {this.state.error && <p>{this.state.error}</p>}
                <input 
                    type="text" 
                    placeholder="Job Title"
                    value ={this.state.value}
                    onChange={this.onTitleChange}
                />
                <input 
                    type="text"
                    placeholder="Company"
                    value={this.state.company}
                    onChange={this.onCompanyChange}
                />
                <input 
                    type="text"
                    placeholder="Salary"
                    value={this.state.salary}
                    onChange={this.onSalaryChange}

                />
                <select onChange={this.onInterviewChange} value={this.state.interview}>
                    <option disabled value="placeholder">Next Interview</option>
                    <option value="screen">Initial Screen</option>
                    <option value="phone">Phone Interview</option>
                    <option value="video">Video Conference</option>
                    <option value="inPerson">In Person Interview</option>
                </select>
                <button>Add Job</button>
            </form>
        );
    }
};

const mapDispatchToProps = (dispatch) => ({
    addJob: (job) => dispatch(addJob(job))
});

export default connect(undefined, mapDispatchToProps)(JobForm);