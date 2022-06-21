import { userShipReducer, placeUserShipReducer } from "./reducerFunctions";

//rename reducer to include computer, add computer cases, consolidate redundancy 
//figure out all actions on submit
const GameReducer = (state, action) => {
    switch(action.type) {
        case 'USER_SHIP_REDUCER':
            return userShipReducer(state, action);
        // case 'MOVE_SHIP':
        //     return moveShipReducer(state, action);
        case 'PLACE_USER_SHIP':
            return placeUserShipReducer(state, action);
        default:
            return state;
    }
}

export default GameReducer;