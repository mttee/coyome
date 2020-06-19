import * as actiontypes from './actionTypes';

const initialState = {
    sidebarToggle: false,
}

const layout = (state=initialState, action) =>{
    switch(action.type){
        case actiontypes.SIDEBARTOGGLE:
            return {...state, sidebarToggle: !state.sidebarToggle}
            break;

        default:
            break;
    }

    return state;
}

export default layout;