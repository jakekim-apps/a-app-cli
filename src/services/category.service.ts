import {serviceConfig, RequestConfig} from "./config";
import axios from "axios";
import {string} from "prop-types";

const api = {
    getCategories: ['get', '/category'],
    postCategory: ['post', '/category'],
    updateCategory: ['patch', '/category'],
    deleteCategory: ['delete', '/category'],
};

const getCategories = () => {
    let [method, url] = api.getCategories;

    let requestConfig: RequestConfig = serviceConfig.makeRequestConfig({method, url});
    return axios.request(requestConfig);
}

interface categoryInterface {
    name: string
    description: string
}

const postCategory = (params: categoryInterface) => {
    let [method, url] = api.postCategory;
    let  data = {
        name: params.name,
        description: params.description
    };

    let requestConfig: RequestConfig = serviceConfig.makeRequestConfig({method, url, data});
    return axios.request(requestConfig)
}



export const categoryService = {
    getCategories,
    postCategory,
};
