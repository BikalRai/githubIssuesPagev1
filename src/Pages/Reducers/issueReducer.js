const issueDetails = {
    loading: true,
    error: '',
    issues: [],
    rowsPerPage: 10,
    page: 1,
};

const issueReducer = (state, action) => {
    console.log(action, 'issuereducer action');

    switch (action.type) {
        case 'ISSUES_FETCH_SUCCESS':
            return { ...state, loading: false, issues: action.payload };
        case 'ISSUES_FETCH_ERROR':
            return {
                ...state,
                loading: false,
                error: 'Opps! Something went wrong!!',
                issues: [],
            };
        case 'CHANGING_PAGE':
            return {
                ...state,
                page: action.payload,
            };
        default:
            return state;
    }
};

export { issueDetails, issueReducer };
