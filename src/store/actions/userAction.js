import userService from "../services/userService";
import userConstant from "../constants/userConstant";

export const checkToken = () => async dispatch => {
    try {
        dispatch({
            type: userConstant.LOGIN_LOADING
        });

        await userService.hello();

        dispatch({
            type: userConstant.LOGIN_SUCCESS,
            payload: JSON.parse(localStorage.getItem('token'))
        });
    } catch (e) {
        dispatch({
            type: userConstant.LOGIN_FAIL,
            payload: e.response && e.response.data ? e.response.data.message || e.response.data.error : e.message
        });
    }
};

export const login = (data) => async dispatch => {
    try {
        dispatch({
            type: userConstant.LOGIN_LOADING
        });

        const res = await userService.login(data);
        localStorage.setItem("token", JSON.stringify(res.data));

        dispatch({
            type: userConstant.LOGIN_SUCCESS,
            payload: JSON.parse(localStorage.getItem('token'))
        });
    } catch (e) {
        dispatch({
            type: userConstant.LOGIN_FAIL,
            payload: e.response && e.response.data ? e.response.data.message || e.response.data.error : e.message
        });
    }
};

export const logout = () => async dispatch => {
    localStorage.removeItem("token");
    // window.location.reload(true);

    dispatch({
        type: userConstant.LOGOUT
    });
};

export const getAllUsers = () => async dispatch => {
    try {
        dispatch({
            type: userConstant.GET_USER_LIST_LOADING
        });

        const res = await userService.getAllUsers();

        dispatch({
            type: userConstant.GET_USER_LIST_SUCCESS,
            payload: res.data
        });
    } catch (e) {
        dispatch({
            type: userConstant.GET_USER_LIST_FAIL,
            payload: e.response && e.response.data ? e.response.data.message || e.response.data.error : e.message
        });
    }
};

export const getUserByUsername = (username) => async dispatch => {
    try {
        dispatch({
            type: userConstant.GET_USER_LOADING
        });

        const res = await userService.getUserByUsername(username);

        dispatch({
            type: userConstant.GET_USER_SUCCESS,
            payload: res.data
        });
    } catch (e) {
        dispatch({
            type: userConstant.GET_USER_FAIL,
            payload: e.response && e.response.data ? e.response.data.message || e.response.data.error : e.message
        });
    }
};

export const getUserByToken = () => async dispatch => {
    try {
        dispatch({
            type: userConstant.GET_USER_LOADING
        });

        const res = await userService.getUserByToken();

        dispatch({
            type: userConstant.GET_USER_SUCCESS,
            payload: res.data
        });
    } catch (e) {
        dispatch({
            type: userConstant.GET_USER_FAIL,
            payload: e.response && e.response.data ? e.response.data.message || e.response.data.error : e.message
        });
    }
};

export const getUserById = (id) => async dispatch => {
    try {
        dispatch({
            type: userConstant.GET_USER_LOADING
        });

        const res = await userService.getUserById(id);

        dispatch({
            type: userConstant.GET_USER_SUCCESS,
            payload: res.data
        });
    } catch (e) {
        dispatch({
            type: userConstant.GET_USER_FAIL,
            payload: e.response && e.response.data ? e.response.data.message || e.response.data.error : e.message
        });
    }
};

export const createUser = (data) => async dispatch => {
    try {
        dispatch({
            type: userConstant.CREATE_USER_LOADING
        });

        const res = await userService.createUser(data);

        dispatch({
            type: userConstant.CREATE_USER_SUCCESS,
            payload: res.data
        });
    } catch (e) {
        dispatch({
            type: userConstant.CREATE_USER_FAIL,
            payload: e.response && e.response.data ? e.response.data.message || e.response.data.error : e.message
        });
    }
};

export const updateUser = (id, data) => async dispatch => {
    try {
        dispatch({
            type: userConstant.UPDATE_USER_LOADING
        });

        const res = await userService.updateUser(id, data);

        dispatch({
            type: userConstant.UPDATE_USER_SUCCESS,
            payload: res.data
        });
    } catch (e) {
        dispatch({
            type: userConstant.UPDATE_USER_FAIL,
            payload: e.response && e.response.data ? e.response.data.message || e.response.data.error : e.message
        });
    }
};

export const deleteUser = (id) => async dispatch => {
    try {
        dispatch({
            type: userConstant.DELETE_USER_LOADING
        });

        const res = await userService.deleteUser(id);

        dispatch({
            type: userConstant.DELETE_USER_SUCCESS,
            payload: res.data
        });
    } catch (e) {
        dispatch({
            type: userConstant.DELETE_USER_FAIL,
            payload: e.response && e.response.data ? e.response.data.message || e.response.data.error : e.message
        });
    }
};