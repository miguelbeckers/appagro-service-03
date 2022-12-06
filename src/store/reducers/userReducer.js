import userConstant from "../constants/userConstant";
import messageConstant from "../../common/messageConstant";

const defaultState = {
    logged: {
        loading: false,
        token: null,
        message: {},
        checked: false,
    },
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

const userReducer = (state = defaultState, action) => {
    switch (action.type) {
        case userConstant.GET_USER_LIST_LOADING:
            return {
                ...state,
                list: {
                    ...state.list,
                    loading: true
                }
            };
        case userConstant.GET_USER_LIST_FAIL:
            return {
                ...state,
                list: {
                    ...state.list,
                    loading: false,
                    message: { content: action.payload, type: messageConstant.FAIL }
                }
            };
        case userConstant.GET_USER_LIST_SUCCESS:
            return {
                ...state,
                list: {
                    ...state.list,
                    loading: false,
                    data: action.payload,
                    message: { content: "Users loaded", type: messageConstant.INFO }
                }
            };
        case userConstant.GET_USER_LOADING:
            return {
                ...state,
                current: {
                    ...state.current,
                    loading: true
                }
            };
        case userConstant.GET_USER_FAIL:
            return {
                ...state,
                current: {
                    ...state.current,
                    loading: false,
                    message: { content: action.payload, type: messageConstant.FAIL }
                }
            };
        case userConstant.GET_USER_SUCCESS:
            return {
                ...state,
                current: {
                    ...state.current,
                    loading: false,
                    data: action.payload,
                    message: { content: "User loaded", type: messageConstant.INFO }
                }
            };
        case userConstant.CREATE_USER_LOADING:
            return {
                ...state,
                current: {
                    ...state.current,
                    loading: true
                }
            };
        case userConstant.CREATE_USER_FAIL:
            return {
                ...state,
                current: {
                    ...state.current,
                    loading: false,
                    message: { content: action.payload, type: messageConstant.FAIL }
                }
            };
        case userConstant.CREATE_USER_SUCCESS:
            return {
                ...state,
                current: {
                    ...state.current,
                    loading: false,
                    data: action.payload,
                    message: { content: "User created", type: messageConstant.SUCCESS }
                }
            };
        case userConstant.UPDATE_USER_LOADING:
            return {
                ...state,
                current: {
                    ...state.current,
                    loading: true
                }
            };
        case userConstant.UPDATE_USER_FAIL:
            return {
                ...state,
                current: {
                    ...state.current,
                    loading: false,
                    message: { content: action.payload, type: messageConstant.FAIL }
                }
            };
        case userConstant.UPDATE_USER_SUCCESS:
            return {
                ...state,
                current: {
                    ...state.current,
                    loading: false,
                    data: action.payload,
                    message: { content: "User updated", type: messageConstant.SUCCESS }
                }
            };
        case userConstant.DELETE_USER_LOADING:
            return {
                ...state,
                current: {
                    ...state.current,
                    loading: true
                }
            };
        case userConstant.DELETE_USER_FAIL:
            return {
                ...state,
                current: {
                    ...state.current,
                    loading: false,
                    message: { content: action.payload, type: messageConstant.FAIL }
                }
            };
        case userConstant.DELETE_USER_SUCCESS:
            return {
                ...state,
                current: {
                    ...state.current,
                    loading: false,
                    data: {},
                    message: { content: "User deleted", type: messageConstant.SUCCESS }
                }
            };
        case userConstant.LOGIN_LOADING:
            return {
                ...state,
                logged: {
                    ...state.logged,
                    loading: true,
                }
            };
        case userConstant.LOGIN_FAIL:
            return {
                ...state,
                logged: {
                    ...state.logged,
                    loading: false,
                    message: { content: action.payload, type: messageConstant.FAIL },
                    checked: true
                }
            };
        case userConstant.LOGIN_SUCCESS:
            return {
                ...state,
                logged: {
                    ...state.logged,
                    loading: false,
                    token: action.payload,
                    message: { content: "User logged in", type: messageConstant.INFO },
                    checked: true
                }
            };
        case userConstant.LOGOUT:
            return {
                ...state,
                logged: {
                    ...state.logged,
                    loading: false,
                    token: null,
                    checked: false
                },
                current: {
                    ...state.current,
                    data: {}
                }
            };
        default:
            return state;
    }
};

export default userReducer;