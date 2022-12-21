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

interface accountInterface {
    name: string
    number: string
    description: string
}

const registerAccount = (account: accountInterface) => {
    let [method, url] = api.postAccount;
    let data = account;
    let requestConfig: RequestConfig = serviceConfig.makeRequestConfig({method, url, data});
    return axios.request(requestConfig);
}

const deleteAccounts = (accountIdList: string[]) => {
    let [method, url] = api.deleteAccount;
    let data = {
        idList: accountIdList
    };
    let requestConfig: RequestConfig = serviceConfig.makeRequestConfig({method, url, data});
    return axios.request(requestConfig);
}

export const accountService = {
    getAccounts,
    registerAccount,
    deleteAccounts
};
