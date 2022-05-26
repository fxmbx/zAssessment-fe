import axios from "axios";
import jwt_decode from 'jwt-decode'
import { authActionType } from "../../constant";

const authState = {
    isLogged: false,
    user: {
        data: "",
        success: false,
        message: "",
    }
}

const erroState = {
    isLogged: false,

    user: {
        success: false,
        error: ""
    }
}

const getAuthState = () => {
    const auth = localStorage.getItem("auth")
    try {
        const authobj = JSON.parse(auth)
        const { data } = authobj.user
        const decode = jwt_decode(data.token)
        console.log("😃", decode)
        localStorage.setItem("loggedInUserId", decode.id)
        if (new Date(decode.exp) < new Date()) {
            axios.defaults.headers.common['Authorization'] = `Bearer ${data.token}`
            return authobj;
        }
        return authState
    } catch (error) {
        return authState

    }
}

const newAuth = getAuthState()
console.log(newAuth)

const authReducer = (state = newAuth, action) => {
    switch (action.type) {
        case authActionType.LOGIN_SUCCESS:
            const loginAuthState =
            {
                isLogged: true,
                user: action.payload,
            }
            axios.defaults.headers.common[
                "Authorization"
            ] = `Bearer ${action.payload.data.token}`;
            localStorage.setItem('auth', JSON.stringify(loginAuthState))
            localStorage.setItem('loggedInUserId', jwt_decode(loginAuthState.user.data.token).id)
            return loginAuthState

        case authActionType.LOGIN_FAIL:
            const errorState = {
                isLogged: false,
                user: action.payload
            }
            return errorState

        case authActionType.REGISTER_SUCCESS:
            const newAuthState =
            {
                isLogged: true,
                user: action.payload,
            }
            axios.defaults.headers.common[
                "Authorization"
            ] = `Bearer ${action.payload.data.token}`;
            localStorage.setItem('auth', JSON.stringify(newAuthState))
            localStorage.setItem('loggedInUserId', jwt_decode(newAuthState.user.data.token).id)

            return newAuthState
        case authActionType.REGISTER_FAIL:
            return state

        case authActionType.LOGOUT_SUCCESS:
            return authState
        default:
            return state;
    }
}

export default authReducer
