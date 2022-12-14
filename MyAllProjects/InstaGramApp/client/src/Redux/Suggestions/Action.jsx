import axios from "axios"
import { GET_USER_FAIL, GET_USER_REQ, GET_USER_SUC } from "./Actiontype"

export const getUserReq = () => {
    return {
        type: GET_USER_REQ,
    }
}

export const getUserSuc = (payload) => {
    return{
        type:GET_USER_SUC,
        payload
    }
}
export const getUserFail = (error) => {
    return{
        type:GET_USER_FAIL,
        payload: error
    }
}

export const getUsers = () => (dispatch) => {
    dispatch(getUserReq())
    return axios.get("http://localhost:2511/users")
    .then(res => dispatch(getUserSuc(res.data.data)))
    .catch(err => dispatch(getUserFail(err)))
}
