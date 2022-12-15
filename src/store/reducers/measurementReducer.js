import measurementConstant from "../constants/measurementConstant";
import messageConstant from "../../common/messageConstant";

const defaultState = {
    current: {
        loading: false,
        data: {},
        message: {}
    },
    list: {
        loading: false,
        data: [],
        message: {}
    }
};

const measurementReducer = (state = defaultState, action) => {
    switch (action.type) {
        case measurementConstant.GET_MEASUREMENT_LIST_LOADING:
            return {
                ...state,
                list: {
                    ...state.list,
                    loading: true
                }
            };
        case measurementConstant.GET_MEASUREMENT_LIST_FAIL:
            return {
                ...state,
                list: {
                    ...state.list,
                    loading: false,
                    message: { content: action.payload, type: messageConstant.FAIL }
                }
            };
        case measurementConstant.GET_MEASUREMENT_LIST_SUCCESS:
            return {
                ...state,
                list: {
                    ...state.list,
                    loading: false,
                    data: action.payload,
                    message: { content: "Users loaded", type: messageConstant.INFO }
                }
            };
        case measurementConstant.GET_MEASUREMENT_LOADING:
            return {
                ...state,
                current: {
                    ...state.current,
                    loading: true
                }
            };
        case measurementConstant.GET_MEASUREMENT_FAIL:
            return {
                ...state,
                current: {
                    ...state.current,
                    loading: false,
                    message: { content: action.payload, type: messageConstant.FAIL }
                }
            };
        case measurementConstant.GET_MEASUREMENT_SUCCESS:
            return {
                ...state,
                current: {
                    ...state.current,
                    loading: false,
                    data: action.payload,
                    message: { content: "User loaded", type: messageConstant.INFO }
                }
            };
        case measurementConstant.CREATE_MEASUREMENT_LOADING:
            return {
                ...state,
                current: {
                    ...state.current,
                    loading: true
                }
            };
        case measurementConstant.CREATE_MEASUREMENT_FAIL:
            return {
                ...state,
                current: {
                    ...state.current,
                    loading: false,
                    message: { content: action.payload, type: messageConstant.FAIL }
                }
            };
        case measurementConstant.CREATE_MEASUREMENT_SUCCESS:
            return {
                ...state,
                current: {
                    ...state.current,
                    loading: false,
                    data: action.payload,
                    message: { content: "User created", type: messageConstant.SUCCESS }
                }
            };
        case measurementConstant.UPDATE_MEASUREMENT_LOADING:
            return {
                ...state,
                current: {
                    ...state.current,
                    loading: true
                }
            };
        case measurementConstant.UPDATE_MEASUREMENT_FAIL:
            return {
                ...state,
                current: {
                    ...state.current,
                    loading: false,
                    message: { content: action.payload, type: messageConstant.FAIL }
                }
            };
        case measurementConstant.UPDATE_MEASUREMENT_SUCCESS:
            return {
                ...state,
                current: {
                    ...state.current,
                    loading: false,
                    data: action.payload,
                    message: { content: "User updated", type: messageConstant.SUCCESS }
                }
            };
        case measurementConstant.DELETE_MEASUREMENT_LOADING:
            return {
                ...state,
                current: {
                    ...state.current,
                    loading: true
                }
            };
        case measurementConstant.DELETE_MEASUREMENT_FAIL:
            return {
                ...state,
                current: {
                    ...state.current,
                    loading: false,
                    message: { content: action.payload, type: messageConstant.FAIL }
                }
            };
        case measurementConstant.DELETE_MEASUREMENT_SUCCESS:
            return {
                ...state,
                current: {
                    ...state.current,
                    loading: false,
                    data: {},
                    message: { content: "User deleted", type: messageConstant.SUCCESS }
                }
            };
        default:
            return state;
    }
};

export default measurementReducer;