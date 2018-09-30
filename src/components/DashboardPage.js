import React from 'react';
import JobList from './JobList';
import JobsSummary from './JobsSummary';

const DashboardPage = () => (
  <div>
    <JobsSummary />
    <JobList />
  </div>
);

export default DashboardPage;
