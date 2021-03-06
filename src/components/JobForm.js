import React from "react";
import Select from "react-select";

const options = [
  { value: "screen", label: "Initial Screen" },
  { value: "phone", label: "Phone Interview" },
  { value: "video", label: "Video Conference" },
  { value: "inPerson", label: "In Person Interview" }
];

export default class JobForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: props.job ? props.job.title : "",
      company: props.job ? props.job.company : "",
      salary: props.job ? props.job.salary : "",
      interview: props.job ? props.job.interview : "placeholder",
      error: ""
    };
  }

  onTitleChange = e => {
    const title = e.target.value;
    this.setState(() => ({ title }));
  };

  onCompanyChange = e => {
    const company = e.target.value;
    this.setState(() => ({ company }));
  };

  onSalaryChange = e => {
    const salary = e.target.value;
    this.setState(() => ({ salary }));
  };

  onInterviewChange = newInterview => {
    const interview = newInterview.value;
    this.setState(() => ({ interview }));
  };

  onSubmit = e => {
    e.preventDefault();
    if (
      !this.state.title ||
      !this.state.company ||
      !this.state.salary ||
      this.state.interview == "placeholder"
    ) {
      this.setState(() => ({
        error: "Please provide all the necessary infromation"
      }));
    } else {
      this.setState(() => ({
        error: ""
      }));
      this.props.onSubmit({
        title: this.state.title,
        company: this.state.company,
        salary: this.state.salary,
        interview: this.state.interview,
        status: this.props.job ? this.props.job.status : "interviewing"
      });
    }
  };

  render() {
    return (
      <form className="form" onSubmit={this.onSubmit}>
        {this.state.error && <p>{this.state.error}</p>}
        <input
          className="text-input"
          type="text"
          placeholder="Job Title"
          value={this.state.title}
          onChange={this.onTitleChange}
        />
        <input
          className="text-input"
          type="text"
          placeholder="Company"
          value={this.state.company}
          onChange={this.onCompanyChange}
        />
        <input
          className="text-input"
          type="text"
          placeholder="Salary"
          value={this.state.salary}
          onChange={this.onSalaryChange}
        />
        <Select
          className="form-select"
          onChange={this.onInterviewChange}
          value={options.find(option => this.state.interview === option.value)}
          options={options}
          placeholder="Next Interview Type"
        />
        <button className="button-form">
          {this.props.job ? "Update Job" : "Add Job"}
        </button>
      </form>
    );
  }
}
