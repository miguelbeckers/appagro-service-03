import areaService from "../services/areaService";
import areaConstant from "../constants/areaConstant";

export const getAllAreas = () => async dispatch => {
    try {
        dispatch({
            type: areaConstant.GET_AREA_LIST_LOADING
        });

        const res = await areaService.getAllAreas();

        dispatch({
            type: areaConstant.GET_AREA_LIST_SUCCESS,
            payload: res.data
        });
    } catch (e) {
        dispatch({
            type: areaConstant.GET_AREA_LIST_FAIL,
            payload: e.response && e.response.data ? e.response.data.message || e.response.data.error : e.message
        });
    }
};

export const getAreaById = (id) => async dispatch => {
    try {
        dispatch({
            type: areaConstant.GET_AREA_LOADING
        });

        const res = await areaService.getAreaById(id);

        dispatch({
            type: areaConstant.GET_AREA_SUCCESS,
            payload: res.data
        });
    } catch (e) {
        dispatch({
            type: areaConstant.GET_AREA_FAIL,
            payload: e.response && e.response.data ? e.response.data.message || e.response.data.error : e.message
        });
    }
};

export const createArea = (data, id) => async dispatch => {
    try {
        dispatch({
            type: areaConstant.CREATE_AREA_LOADING
        });

        const res = await areaService.createArea(data, id);

        dispatch({
            type: areaConstant.CREATE_AREA_SUCCESS,
            payload: res.data
        });
    } catch (e) {
        dispatch({
            type: areaConstant.CREATE_AREA_FAIL,
            payload: e.response && e.response.data ? e.response.data.message || e.response.data.error : e.message
        });
    }
};

export const updateArea = (data, id) => async dispatch => {
    try {
        dispatch({
            type: areaConstant.UPDATE_AREA_LOADING
        });

        const res = await areaService.updateArea(id, data);

        dispatch({
            type: areaConstant.UPDATE_AREA_SUCCESS,
            payload: res.data
        });
    } catch (e) {
        dispatch({
            type: areaConstant.UPDATE_AREA_FAIL,
            payload: e.response && e.response.data ? e.response.data.message || e.response.data.error : e.message
        });
    }
};

export const deleteArea = (id) => async dispatch => {
    try {
        dispatch({
            type: areaConstant.DELETE_AREA_LOADING
        });

        const res = await areaService.deleteArea(id);

        dispatch({
            type: areaConstant.DELETE_AREA_SUCCESS,
            payload: res.data
        });
    } catch (e) {
        dispatch({
            type: areaConstant.DELETE_AREA_FAIL,
            payload: e.response && e.response.data ? e.response.data.message || e.response.data.error : e.message
        });
    }
};