
const UI_FREEZE = 'UI_FREEZE';
const UI_UNFREEZE = 'UI_UNFREEZE';

function freeze(state = false, action) {
    switch (action.type) {
        case UI_FREEZE:
            return true;

        case UI_UNFREEZE:
            return false;

        default:
            return state;
    }
}

export default freeze;
