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

interface cardInterface {
    name: string
    number: string
    description: string
}

const registerCard = (card: cardInterface) => {
    let [method, url] = api.postCard;
    let data = card;

    let requestConfig: RequestConfig = serviceConfig.makeRequestConfig({method, url, data});
    return axios.request(requestConfig);
}

const deleteCards = (idList: string[]) => {
    let [method, url] = api.deleteCard;
    let data = {
        idList: idList
    };

    let requestConfig: RequestConfig = serviceConfig.makeRequestConfig({method, url, data});
    return axios.request(requestConfig);
}



export const cardService = {
    getCards,
    registerCard,
    deleteCards
};
