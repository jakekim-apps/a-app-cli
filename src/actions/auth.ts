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

async function doRegister(data: registerInterface) {
    try {
        const res = await authService.register(data);
        if (res.status === 200) {
            return res.data
        } else {
            return res;
        }
    } catch (e) {
        return e
    }

    // return handleResponse(res as any);
    // return await authService.register(data);
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
        throw e
    }
}

export const register = (data: registerInterface) => ({
    type: types.auth.REGISTER,
    payload: doRegister(data)
});

export const login = (data: loginInterface) => ({
    type: types.auth.LOGIN,
    payload: doLogin(data)
})
