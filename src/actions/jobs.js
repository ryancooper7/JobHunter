import database from '../firebase/firebase';

//ADD_JOB
export const addJob = (job) => ({
    type: 'ADD_JOB',
    job
});

export const startAddJob = (jobData = {}) => {
    return (dispatch, getState) => {
        const uid = getState().auth.uid;
        //Fills in values that are not present with default values
        const {
            title = '',
            company = '',
            salary = '',
            interview = 'placeholder'
        } = jobData;
        const job = { title, company, salary, interview};

        return database.ref(`users/${uid}/jobs`).push(job).then((ref) => {
            dispatch(addJob({
                id: ref.key,
                ...job
            }))
        });
    };
};

//SET_JOBS
export const setJobs = (jobs) => ({
    type: 'SET_JOBS',
    jobs
});

export const startSetJobs = () => {
    return(dispatch, getState) => {
        const uid = getState().auth.uid;
        return database.ref(`users/${uid}/jobs`).once('value').then((snapshot) => {
            const jobs = [];

            snapshot.forEach((childSnapshot) => {
                jobs.push({
                    id: childSnapshot.key,
                    ...childSnapshot.val()
                });
            });

            dispatch(setJobs(jobs));
        });
    };
};

//REMOVE_JOB
export const removeJob = ({ id } = {}) => ({
    type: 'REMOVE_JOB',
    id
});

export const startRemoveJob = ({ id } = {}) => {
    return (dispatch, getState) => {
        const uid = getState().auth.uid;
        return database.ref(`users/${uid}/jobs/${id}`).remove().then(() => {
            dispatch(removeJob({ id }));
        });
    };
};

//EDIT_JOB
export const editJob = (id, updates) => ({
    type: 'EDIT_JOB',
    id,
    updates
});

export const startEditJob = (id, updates) => {
    return (dispatch, getState) => {
        const uid = getState().auth.uid;
        return database.ref(`users/${uid}/jobs/${id}`).update(updates).then(() => {
            dispatch(editJob(id, updates));
        });
    };
};