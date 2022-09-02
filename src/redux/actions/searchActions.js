// import {SEARCH_PLACE} from '../actions/index';

export const searchPlace = (text) => dispatch => {
    dispatch({
        type: 'SEARCH_PLACE',
        payload: text,

    })
}