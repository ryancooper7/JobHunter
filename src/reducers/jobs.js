const jobsReducerDefaultState = [];

export default (state = jobsReducerDefaultState, action) => {
    switch(action.type) {
        case 'ADD_JOB':
            return [
                ...state,
                action.job
            ];
        default:
        return state;
    }

}