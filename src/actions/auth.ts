import * as types from './types';
import {authService} from "../services/auth.service";

export interface registerInterface {
    email: string,
    password: string,
    name: string,
    phone: string
}

export interface loginInterface {
    email: string,
    password: string
}

interface responseInterface {
    status_code: number,
    message: string
}



const handleResponse = (response: responseInterface) => {
    const { status_code, message } = response;
    if (status_code === 200) {
        return response
    } else {
        throw new Error(message)
    }
}

const handleErrorMessage = (e: any) => {
    const { response } = e;
    return response.data;
};

async function doRegister(data: registerInterface) {
    try {
        const res = await authService.register(data);
        if (res.status === 200) {
            return res.data
        } else {
            throw res;
        }
    } catch (e) {
        throw handleErrorMessage(e);
    }
}

async function doLogin(data: loginInterface) {
    try {
        let res = await authService.login(data);
        if (res.status === 200) {
            return res.data;
        } else {
            throw res.status
        }
    } catch (e) {
        throw handleErrorMessage(e);
    }
}

export const register = (data: registerInterface) => ({
    type: types.auth.REGISTER,
    payload: doRegister(data)
});

export const login = (data: loginInterface) => ({
    type: types.auth.LOGIN,
    payload: doLogin(data)
});
