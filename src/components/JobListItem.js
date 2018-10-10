import React from 'react';
import { connect } from 'react-redux';
import { startEditJob } from '../actions/jobs';
import { Link } from 'react-router-dom';

class JobListItem extends React.Component {
    onStatusChange = (e) => {
        console.log(this.props.job.id);
        this.props.startEditJob(this.props.job.id, {status: e.target.value});
    };


    render() {
        let color;
        switch(this.props.job.status) {
            case 'interviewing':
                color = "yellow-row"
                break;
            case 'rejected':
                color = "red-row"
                break;
            case 'ghosted':
                color = "gray-row"
                break;
            case 'offered':
                color = "green-row"
                break;
            default:
                color = {}
        }

        let interviewText;
        switch(this.props.job.interview) {
            case 'inPerson':
            interviewText = "In Person"
                break;
            case 'video':
            interviewText = "Video Conference"
                break;
            case 'phone':
            interviewText = "Phone"
                break;
            case 'screen':
            interviewText = "Initial Screen"
                break;
            default:
        }

    

        return (
            <tr className={color}>
                <td>
                    <h4>{this.props.job.company}</h4>
                </td>
                <td>{this.props.job.title}</td>
                <td>{this.props.job.salary}</td>
                <td>{interviewText}</td>
                <td>
                    <select onChange={this.onStatusChange} className="table__select" value={this.props.job.status}>
                        <option value="interviewing">Interviewing</option>
                        <option value="rejected">Rejected</option>
                        <option value="ghosted">Ghosted</option>
                        <option value="offered">Offered</option>
                    </select>
                </td>
                <td>
                    <Link className="table__link" to={`/edit/${this.props.job.id}`}>Edit</Link>
                </td>
            </tr>
        );
    }
}

const mapStateToProps = (state, props) => ({
    job: state.jobs.find((job) => job.id === props.job.id)
});

const mapDispatchToProps = (dispatch) => ({
    startEditJob: (id, job) => dispatch(startEditJob(id, job))
});

export default connect(mapStateToProps, mapDispatchToProps)(JobListItem);