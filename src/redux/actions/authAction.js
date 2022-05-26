import axios from 'axios'

import { authActionType } from '../../constant'
import { setAlert } from './alertAction'
const RegisterAction = (userState, navigate) => {
    return async (dispatch) => {
        try {
            console.log("😆", userState)
            const res = await axios.post('auth/register', userState)
            const { data } = res
            if (res.data.data === null || res.data.data === "") {
                dispatch({ type: authActionType.REGISTER_FAIL, payload: "" })
                dispatch(setAlert(res?.data?.message || 'Invalid Credentials', 'info'))

                return
            }
            dispatch({ type: authActionType.REGISTER_SUCCESS, payload: data })
            // console.log("🚥", navigate)
            navigate('/')

        } catch (error) {
            dispatch({ type: authActionType.REGISTER_FAIL, payload: "" })
            dispatch(setAlert('Invalid Credentials', 'error'))

        }

    }
}
const LoginAction = (loginState, navigate) => {
    return async (dispatch) => {
        try {
            console.log("📂", loginState)
            const res = await axios.post('auth/login', loginState)
            const { data } = res
            console.log("😀", res)
            if (res.data.data === null || res.data.data === "") {
                dispatch({ type: authActionType.LOGIN_FAIL, payload: data })
                dispatch(setAlert(data.message || 'Invalid Credentials', 'info'))

                return
            }
            dispatch({ type: authActionType.LOGIN_SUCCESS, payload: data })
            // console.log("🚥", navigate)
            navigate('/')

            // console.log(data)
        } catch (error) {
            // console.log(error)
            // console.log('login data', error)

            dispatch({ type: authActionType.REGISTER_FAIL, payload: '' })
            dispatch(setAlert('Invalid Credentials', 'error'))

        }

    }
}
const LogOutAction = (navigate) => {
    return async (dispatch) => {
        try {

            localStorage.clear()
            sessionStorage.clear()

            dispatch({ type: authActionType.LOGOUT_SUCCESS, payload: "" })
            navigate('/home')

        } catch (error) {
            dispatch({ type: authActionType.LOGOUT_FAIL, payload: "" })
        }

    }
}


export {
    LoginAction,
    RegisterAction,
    LogOutAction,
}