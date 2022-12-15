import deviceConstant from "../constants/deviceConstant";
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

const deviceReducer = (state = defaultState, action) => {
    switch (action.type) {
        case deviceConstant.GET_DEVICE_LIST_LOADING:
            return {
                ...state,
                list: {
                    ...state.list,
                    loading: true
                }
            };
        case deviceConstant.GET_DEVICE_LIST_FAIL:
            return {
                ...state,
                list: {
                    ...state.list,
                    loading: false,
                    message: { content: action.payload, type: messageConstant.FAIL }
                }
            };
        case deviceConstant.GET_DEVICE_LIST_SUCCESS:
            return {
                ...state,
                list: {
                    ...state.list,
                    loading: false,
                    data: action.payload,
                    message: { content: "Users loaded", type: messageConstant.INFO }
                }
            };
        case deviceConstant.GET_DEVICE_LOADING:
            return {
                ...state,
                current: {
                    ...state.current,
                    loading: true
                }
            };
        case deviceConstant.GET_DEVICE_FAIL:
            return {
                ...state,
                current: {
                    ...state.current,
                    loading: false,
                    message: { content: action.payload, type: messageConstant.FAIL }
                }
            };
        case deviceConstant.GET_DEVICE_SUCCESS:
            return {
                ...state,
                current: {
                    ...state.current,
                    loading: false,
                    data: action.payload,
                    message: { content: "User loaded", type: messageConstant.INFO }
                }
            };
        case deviceConstant.CREATE_DEVICE_LOADING:
            return {
                ...state,
                current: {
                    ...state.current,
                    loading: true
                }
            };
        case deviceConstant.CREATE_DEVICE_FAIL:
            return {
                ...state,
                current: {
                    ...state.current,
                    loading: false,
                    message: { content: action.payload, type: messageConstant.FAIL }
                }
            };
        case deviceConstant.CREATE_DEVICE_SUCCESS:
            return {
                ...state,
                current: {
                    ...state.current,
                    loading: false,
                    data: action.payload,
                    message: { content: "User created", type: messageConstant.SUCCESS }
                }
            };
        case deviceConstant.UPDATE_DEVICE_LOADING:
            return {
                ...state,
                current: {
                    ...state.current,
                    loading: true
                }
            };
        case deviceConstant.UPDATE_DEVICE_FAIL:
            return {
                ...state,
                current: {
                    ...state.current,
                    loading: false,
                    message: { content: action.payload, type: messageConstant.FAIL }
                }
            };
        case deviceConstant.UPDATE_DEVICE_SUCCESS:
            return {
                ...state,
                current: {
                    ...state.current,
                    loading: false,
                    data: action.payload,
                    message: { content: "User updated", type: messageConstant.SUCCESS }
                }
            };
        case deviceConstant.DELETE_DEVICE_LOADING:
            return {
                ...state,
                current: {
                    ...state.current,
                    loading: true
                }
            };
        case deviceConstant.DELETE_DEVICE_FAIL:
            return {
                ...state,
                current: {
                    ...state.current,
                    loading: false,
                    message: { content: action.payload, type: messageConstant.FAIL }
                }
            };
        case deviceConstant.DELETE_DEVICE_SUCCESS:
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

export default deviceReducer;