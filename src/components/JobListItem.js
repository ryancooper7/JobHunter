import React from "react";
import { connect } from "react-redux";
import { startEditJob } from "../actions/jobs";
import { Link } from "react-router-dom";
import Select from "react-select";

const statusOptions = [
  { value: "interviewing", label: "Interviewing" },
  { value: "ghosted", label: "Ghosted" },
  { value: "rejected", label: "Rejected" },
  { value: "offered", label: "Offered" }
];

const interviewOptions = [
  { value: "screen", label: "Initial Screen" },
  { value: "phone", label: "Phone Interview" },
  { value: "video", label: "Video Conference" },
  { value: "inPerson", label: "In Person Interview" }
];

class JobListItem extends React.Component {
  onStatusChange = newStatus => {
    this.props.startEditJob(this.props.job.id, { status: newStatus.value });
  };

  onInterviewChange = newInterview => {
    this.props.startEditJob(this.props.job.id, {
      interview: newInterview.value
    });
  };

  render() {
    let color;
    switch (this.props.job.status) {
      case "interviewing":
        color = "yellow-row";
        break;
      case "rejected":
        color = "red-row";
        break;
      case "ghosted":
        color = "gray-row";
        break;
      case "offered":
        color = "green-row";
        break;
      default:
        color = {};
    }

    let interviewText;
    switch (this.props.job.interview) {
      case "inPerson":
        interviewText = "In Person";
        break;
      case "video":
        interviewText = "Video Conference";
        break;
      case "phone":
        interviewText = "Phone";
        break;
      case "screen":
        interviewText = "Initial Screen";
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
        <td>
          <Select
            onChange={this.onInterviewChange}
            value={interviewOptions.find(
              option => option.value === this.props.job.interview
            )}
            options={interviewOptions}
            className="interview-select"
          />
        </td>
        <td>
          <Select
            onChange={this.onStatusChange}
            value={statusOptions.find(
              option => option.value === this.props.job.status
            )}
            options={statusOptions}
            className="status-select"
          />
        </td>
        <td>
          <Link className="table__link" to={`/edit/${this.props.job.id}`}>
            Edit
          </Link>
        </td>
      </tr>
    );
  }
}

const mapStateToProps = (state, props) => ({
  job: state.jobs.find(job => job.id === props.job.id)
});

const mapDispatchToProps = dispatch => ({
  startEditJob: (id, job) => dispatch(startEditJob(id, job))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(JobListItem);
