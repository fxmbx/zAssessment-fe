import { alertActionTypes } from "../../constant";

const setAlert = (message, type, timeout = 10000) => {
    return (dispatch) => {
        dispatch({ type: alertActionTypes.SET_ALERT, payload: { message, type } });

        setTimeout(() => {
            dispatch({ type: alertActionTypes.REMOVE_ALERT, payload: { message, type } });
        }, timeout);
    }
}

export { alertActionTypes, setAlert }