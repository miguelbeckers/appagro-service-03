import {combineReducers} from "redux";

import userReducer from "./store/reducers/userReducer";
import areaReducer from "./store/reducers/areaReducer";
import deviceReducer from "./store/reducers/deviceReducer";
import measurementReducer from "./store/reducers/measurementReducer";

const rootReducer = combineReducers({
    area: areaReducer,
    user: userReducer,
    device: deviceReducer,
    measurement: measurementReducer,
});

export default rootReducer;
