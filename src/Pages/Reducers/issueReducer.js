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
        case 'INCREMENT_PAGE':
            return {
                ...state,
                loading: false,
                error: '',
                page: action.payload,
            };
        case 'DECREASE_PAGE':
            return {
                ...state,
                loading: false,
                error: '',
                page: state.page - action.value,
            };
        default:
            return state;
    }
};

export { issueDetails, issueReducer };
