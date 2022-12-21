import {serviceConfig, RequestConfig} from "./config";
import axios from "axios";
import {loginInterface, registerInterface} from "../actions/auth";
const api = {
    getHistories: ['get', '/history'],
    postHistory: ['post', '/history'],
    updateHistory: ['patch', '/history'],
    deleteHistory: ['delete', '/history'],
};

const getHistories = () => {
    let [method, url] = api.getHistories;
    let params = {
        size: 100,
        page: 1
    }
    let requestConfig: RequestConfig = serviceConfig.makeRequestConfig({method: method, url: url, params: params});
    return axios.request(requestConfig);
}


export const historyService = {
    getHistories,
};
