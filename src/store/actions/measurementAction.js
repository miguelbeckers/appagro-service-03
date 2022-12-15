import measurementService from "../services/measurementService";
import measurementConstant from "../constants/measurementConstant";

export const getAllMeasurements = () => async dispatch => {
    try {
        dispatch({
            type: measurementConstant.GET_MEASUREMENT_LIST_LOADING
        });

        const res = await measurementService.getAllMeasurements();

        dispatch({
            type: measurementConstant.GET_MEASUREMENT_LIST_SUCCESS,
            payload: res.data
        });
    } catch (e) {
        dispatch({
            type: measurementConstant.GET_MEASUREMENT_LIST_FAIL,
            payload: e.response && e.response.data ? e.response.data.message || e.response.data.error : e.message
        });
    }
};

export const getMeasurementById = (id) => async dispatch => {
    try {
        dispatch({
            type: measurementConstant.GET_MEASUREMENT_LOADING
        });

        const res = await measurementService.getMeasurementById(id);

        dispatch({
            type: measurementConstant.GET_MEASUREMENT_SUCCESS,
            payload: res.data
        });
    } catch (e) {
        dispatch({
            type: measurementConstant.GET_MEASUREMENT_FAIL,
            payload: e.response && e.response.data ? e.response.data.message || e.response.data.error : e.message
        });
    }
};

export const createMeasurement = (data, id) => async dispatch => {
    try {
        dispatch({
            type: measurementConstant.CREATE_MEASUREMENT_LOADING
        });

        const res = await measurementService.createMeasurement(data, id);

        dispatch({
            type: measurementConstant.CREATE_MEASUREMENT_SUCCESS,
            payload: res.data
        });
    } catch (e) {
        dispatch({
            type: measurementConstant.CREATE_MEASUREMENT_FAIL,
            payload: e.response && e.response.data ? e.response.data.message || e.response.data.error : e.message
        });
    }
};

export const updateMeasurement = (data, id) => async dispatch => {
    try {
        dispatch({
            type: measurementConstant.UPDATE_MEASUREMENT_LOADING
        });

        const res = await measurementService.updateMeasurement(id, data);

        dispatch({
            type: measurementConstant.UPDATE_MEASUREMENT_SUCCESS,
            payload: res.data
        });
    } catch (e) {
        dispatch({
            type: measurementConstant.UPDATE_MEASUREMENT_FAIL,
            payload: e.response && e.response.data ? e.response.data.message || e.response.data.error : e.message
        });
    }
};

export const deleteMeasurement = (id) => async dispatch => {
    try {
        dispatch({
            type: measurementConstant.DELETE_MEASUREMENT_LOADING
        });

        const res = await measurementService.deleteMeasurement(id);

        dispatch({
            type: measurementConstant.DELETE_MEASUREMENT_SUCCESS,
            payload: res.data
        });
    } catch (e) {
        dispatch({
            type: measurementConstant.DELETE_MEASUREMENT_FAIL,
            payload: e.response && e.response.data ? e.response.data.message || e.response.data.error : e.message
        });
    }
};