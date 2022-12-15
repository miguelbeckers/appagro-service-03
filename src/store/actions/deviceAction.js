import deviceService from "../services/deviceService";
import deviceConstant from "../constants/deviceConstant";

export const getAllDevices = () => async dispatch => {
    try {
        dispatch({
            type: deviceConstant.GET_DEVICE_LIST_LOADING
        });

        const res = await deviceService.getAllDevices();

        dispatch({
            type: deviceConstant.GET_DEVICE_LIST_SUCCESS,
            payload: res.data
        });
    } catch (e) {
        dispatch({
            type: deviceConstant.GET_DEVICE_LIST_FAIL,
            payload: e.response && e.response.data ? e.response.data.message || e.response.data.error : e.message
        });
    }
};

export const getDeviceById = (id) => async dispatch => {
    try {
        dispatch({
            type: deviceConstant.GET_DEVICE_LOADING
        });

        const res = await deviceService.getDeviceById(id);

        dispatch({
            type: deviceConstant.GET_DEVICE_SUCCESS,
            payload: res.data
        });
    } catch (e) {
        dispatch({
            type: deviceConstant.GET_DEVICE_FAIL,
            payload: e.response && e.response.data ? e.response.data.message || e.response.data.error : e.message
        });
    }
};

export const createDevice = (data, id) => async dispatch => {
    try {
        dispatch({
            type: deviceConstant.CREATE_DEVICE_LOADING
        });

        const res = await deviceService.createDevice(data, id);

        dispatch({
            type: deviceConstant.CREATE_DEVICE_SUCCESS,
            payload: res.data
        });
    } catch (e) {
        dispatch({
            type: deviceConstant.CREATE_DEVICE_FAIL,
            payload: e.response && e.response.data ? e.response.data.message || e.response.data.error : e.message
        });
    }
};

export const updateDevice = (data, id) => async dispatch => {
    try {
        dispatch({
            type: deviceConstant.UPDATE_DEVICE_LOADING
        });

        const res = await deviceService.updateDevice(id, data);

        dispatch({
            type: deviceConstant.UPDATE_DEVICE_SUCCESS,
            payload: res.data
        });
    } catch (e) {
        dispatch({
            type: deviceConstant.UPDATE_DEVICE_FAIL,
            payload: e.response && e.response.data ? e.response.data.message || e.response.data.error : e.message
        });
    }
};

export const deleteDevice = (id) => async dispatch => {
    try {
        dispatch({
            type: deviceConstant.DELETE_DEVICE_LOADING
        });

        const res = await deviceService.deleteDevice(id);

        dispatch({
            type: deviceConstant.DELETE_DEVICE_SUCCESS,
            payload: res.data
        });
    } catch (e) {
        dispatch({
            type: deviceConstant.DELETE_DEVICE_FAIL,
            payload: e.response && e.response.data ? e.response.data.message || e.response.data.error : e.message
        });
    }
};