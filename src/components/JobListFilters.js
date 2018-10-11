import React from 'react';
import { connect } from 'react-redux';
import { setCompanyTextFilter, setPositionTextFilter } from '../actions/filters';

export class JobListFilters extends React.Component {

    onCompanyTextChange = (e) => {
        this.props.setCompanyTextFilter(e.target.value);
    }

    onPositionTextChange = (e) => {
        this.props.setPositionTextFilter(e.target.value);
    }

    render () {
        return (
            <div className="content-container">
                <div className="input-group">
                    <input
                        className="text-input input-group__item"
                        type="text"
                        placeholder="Search by Company"
                        value={this.props.filters.companyText}
                        onChange={this.onCompanyTextChange}
                    />
                    <input
                        className="text-input input-group__item"
                        type="text"
                        placeholder="Search by Position"
                        value={this.props.filters.positionText}
                        onChange={this.onPositionTextChange}
                    />
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    filters: state.filters
});

const mapDispatchToProps = (dispatch) => ({
   setCompanyTextFilter: (companyText) => dispatch(setCompanyTextFilter(companyText)),
   setPositionTextFilter: (positionText) => dispatch(setPositionTextFilter(positionText))
});

export default connect(mapStateToProps, mapDispatchToProps)(JobListFilters);

/*
                    <select className="input-group__item">
                        <option value="placeholder" disabled>Sort By</option>
                        <option>Company</option>
                        <option>Position</option>
                        <option>Salary</option>
                        <option>Next Interview Type</option>
                        <option>Status</option>
                    </select>
*/
