import React from 'react';
import JobList from './JobList';
import JobListFilters  from './JobListFilters';
import JobsSummary from './JobsSummary';

const DashboardPage = () => (
  <div>
    <JobsSummary />
    <JobListFilters />
    <JobList />
  </div>
);

export default DashboardPage;
