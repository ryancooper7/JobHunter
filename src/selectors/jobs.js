//Get visible expenses
export default (jobs, { companyText, positionText}) => {
    return jobs.filter((job) => {
        const companyTextMatch = job.company.toLowerCase().includes(companyText.toLowerCase());
        const positionTextMatch = job.title.toLowerCase().includes(positionText.toLowerCase());

        return (companyTextMatch && positionTextMatch);
    });
};