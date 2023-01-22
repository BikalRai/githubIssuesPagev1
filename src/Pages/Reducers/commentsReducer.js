const commentState = {
    loading: true,
    error: '',
    issue: [],
    comments: [],
    userContent: [],
    allComments: [],
};

const commentReducer = (state, action) => {
    switch (action.type) {
        case 'FETCH_ISSUE_SUCCESS':
            return {
                ...state,
                loading: false,
                error: '',
                issue: action.payload,
            };
        case 'FETCH_COMMENTS_SUCCESS':
            return {
                ...state,
                loading: false,
                error: '',
                comments: action.payload,
            };
        case 'FETCH_COMMENTS_ERROR':
            return {
                ...state,
                loading: false,
                error: 'Ooops! Something went wrong!',
                comments: [],
            };
        case 'GET_HTML_DATA':
            return {
                ...state,
                loading: false,
                error: 'Ooops! Something went wrong!',
                userContent: action.payload,
            };
        case 'POST_TEXT_SUCCESS':
            return {
                ...state,
                loading: false,
                error: '',
                allComments: action.payload,
            };
        default:
            return state;
    }
};

export { commentState, commentReducer };
