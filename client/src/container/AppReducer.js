import {actionNames} from './actions';

export default function reducer(state = {
    procedureState: 'searchConfig'
}, action) {
    switch (action.type) {
        case actionNames.SET_PROCEDURE_STATE:
            return {
                ...state,
                procedureState: action.payload
            }
        default:
    }
    return state;
};