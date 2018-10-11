const filtersReducerDefaultState = {
    companyText: '',
    positionText: ''
}

export default (state = filtersReducerDefaultState, action) => {
    switch(action.type) {
        case 'SET_COMPANY_TEXT_FILTER':
            return {
                ...state,
                companyText: action.companyText
            };
        case 'SET_POSITION_TEXT_FILTER':
            return {
                ...state,
                positionText: action.positionText
            }
        default:
            return state;
    }
}