import {serviceConfig, RequestConfig} from "./config";
import axios from "axios";

const api = {
    getCards: ['get', '/card'],
    postCard: ['post', '/card'],
    updateCard: ['patch', '/card'],
    deleteCard: ['delete', '/card'],
};

const getCards = () => {
    let [method, url] = api.getCards;

    let requestConfig: RequestConfig = serviceConfig.makeRequestConfig({method, url});
    return axios.request(requestConfig);
}

const register = () => {
    // let [method, url] = api.register;
    // let data = {
    //     email: params.email,
    //     password: params.password,
    //     name: params.name,
    //     phone: params.phone
    // };
    //
    // let requestConfig: RequestConfig = serviceConfig.makeRequestConfig({method, url, data});
    // return axios.request(requestConfig);
}

const login = () => {
    // let [method, url] = api.login;
    // let  data = {
    //     email: params.email,
    //     password: params.password
    // };
    //
    // let requestConfig: RequestConfig = serviceConfig.makeRequestConfig({method, url, data});
    // return axios.request(requestConfig)
}



export const cardService = {
    getCards
};
