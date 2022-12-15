import areaConstant from "../constants/areaConstant";
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

const areaReducer = (state = defaultState, action) => {
    switch (action.type) {
        case areaConstant.GET_AREA_LIST_LOADING:
            return {
                ...state,
                list: {
                    ...state.list,
                    loading: true
                }
            };
        case areaConstant.GET_AREA_LIST_FAIL:
            return {
                ...state,
                list: {
                    ...state.list,
                    loading: false,
                    message: { content: action.payload, type: messageConstant.FAIL }
                }
            };
        case areaConstant.GET_AREA_LIST_SUCCESS:
            return {
                ...state,
                list: {
                    ...state.list,
                    loading: false,
                    data: action.payload,
                    message: { content: "Users loaded", type: messageConstant.INFO }
                }
            };
        case areaConstant.GET_AREA_LOADING:
            return {
                ...state,
                current: {
                    ...state.current,
                    loading: true
                }
            };
        case areaConstant.GET_AREA_FAIL:
            return {
                ...state,
                current: {
                    ...state.current,
                    loading: false,
                    message: { content: action.payload, type: messageConstant.FAIL }
                }
            };
        case areaConstant.GET_AREA_SUCCESS:
            return {
                ...state,
                current: {
                    ...state.current,
                    loading: false,
                    data: action.payload,
                    message: { content: "User loaded", type: messageConstant.INFO }
                }
            };
        case areaConstant.CREATE_AREA_LOADING:
            return {
                ...state,
                current: {
                    ...state.current,
                    loading: true
                }
            };
        case areaConstant.CREATE_AREA_FAIL:
            return {
                ...state,
                current: {
                    ...state.current,
                    loading: false,
                    message: { content: action.payload, type: messageConstant.FAIL }
                }
            };
        case areaConstant.CREATE_AREA_SUCCESS:
            return {
                ...state,
                current: {
                    ...state.current,
                    loading: false,
                    data: action.payload,
                    message: { content: "User created", type: messageConstant.SUCCESS }
                }
            };
        case areaConstant.UPDATE_AREA_LOADING:
            return {
                ...state,
                current: {
                    ...state.current,
                    loading: true
                }
            };
        case areaConstant.UPDATE_AREA_FAIL:
            return {
                ...state,
                current: {
                    ...state.current,
                    loading: false,
                    message: { content: action.payload, type: messageConstant.FAIL }
                }
            };
        case areaConstant.UPDATE_AREA_SUCCESS:
            return {
                ...state,
                current: {
                    ...state.current,
                    loading: false,
                    data: action.payload,
                    message: { content: "User updated", type: messageConstant.SUCCESS }
                }
            };
        case areaConstant.DELETE_AREA_LOADING:
            return {
                ...state,
                current: {
                    ...state.current,
                    loading: true
                }
            };
        case areaConstant.DELETE_AREA_FAIL:
            return {
                ...state,
                current: {
                    ...state.current,
                    loading: false,
                    message: { content: action.payload, type: messageConstant.FAIL }
                }
            };
        case areaConstant.DELETE_AREA_SUCCESS:
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

export default areaReducer;