
const SHOW_ERROR = 'SHOW_ERROR';
const HIDE_ERROR = 'HIDE_ERROR';

function error(state = false, action) {
    switch (action.type) {
        case SHOW_ERROR:
            return { message: action.data.message };

        case HIDE_ERROR:
            return false;

        default:
            return state;
    }
}

export default error;
