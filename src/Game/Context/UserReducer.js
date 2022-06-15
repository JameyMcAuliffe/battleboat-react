import { shipSetupReducer, moveShipReducer } from "./reducerFunctions";


const UserReducer = (state, action) => {
    switch(action.type) {
        case 'SHIP_SETUP':
            return shipSetupReducer(state, action);
        case 'MOVE_SHIP':
            return moveShipReducer(state, action);
        default:
            return state;
    }
}

export default UserReducer;