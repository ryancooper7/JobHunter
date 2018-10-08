//Get visible expenses
export default (jobs, { text }) => {
    return jobs.filter((job) => {
        const companyTextMatch = job.company.toLowerCase().includes(text.toLowerCase());
        return companyTextMatch;
    });
};