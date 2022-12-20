import {serviceConfig, RequestConfig} from "./config";
import axios from "axios";
import {loginInterface, registerInterface} from "../actions/auth";
const api = {
    register: ['post', '/auth/register'],
    login: ['post', '/auth/login'],
    logout: ['get', '/auth/logout']
};

const register = (params: registerInterface) => {
    let [method, url] = api.register;
    let data = {
        email: params.email,
        password: params.password,
        name: params.name,
        phone: params.phone
    };

    let requestConfig: RequestConfig = serviceConfig.makeRequestConfig({method, url, data});
    return axios.request(requestConfig);
}

const login = (params: loginInterface) => {
    let [method, url] = api.login;
    let  data = {
        email: params.email,
        password: params.password
    };

    let requestConfig: RequestConfig = serviceConfig.makeRequestConfig({method, url, data});
    return axios.request(requestConfig)
}

const logout = () => {
    console.log('logout service')
}

const resetPassword = () => {
    console.log('resetPassword service')
}

export const authService = {
    register,
    login,
    logout,
    resetPassword
};
