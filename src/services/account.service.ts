import {serviceConfig, RequestConfig} from "./config";
import axios from "axios";
import {loginInterface, registerInterface} from "../actions/auth";
const api = {
    getAccounts: ['get', '/account'],
    postAccount: ['post', '/account'],
    updateAccount: ['patch', '/account'],
    deleteAccount: ['delete', '/account'],
};

const getAccounts = () => {
    let [method, url] = api.getAccounts;

    let requestConfig: RequestConfig = serviceConfig.makeRequestConfig({method, url});
    return axios.request(requestConfig);
}


export const accountService = {
    getAccounts,
};
