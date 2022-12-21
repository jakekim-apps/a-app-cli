import {serviceConfig, RequestConfig} from "./config";
import axios from "axios";
import {loginInterface, registerInterface} from "../actions/auth";

const api = {
    getUsers: ['get', '/user'],
    postUser: ['post', '/user'],
    updateUser: ['patch', '/user'],
    deleteUser: ['delete', '/user'],
};


const getUsers = () => {
    let [method, url] = api.getUsers;

    let requestConfig: RequestConfig = serviceConfig.makeRequestConfig({method, url});
    return axios.request(requestConfig);
}

export const userService = {
    getUsers,
};
