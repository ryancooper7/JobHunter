//SET_COMPANY_TEXT_FILTER
export const setCompanyTextFilter = (companyText = '') => ({
    type: 'SET_COMPANY_TEXT_FILTER',
    companyText
});

//SET_POSITION_TEXT_FILTER
export const setPositionTextFilter = (positionText = '') => ({
    type: 'SET_POSITION_TEXT_FILTER',
    positionText
});