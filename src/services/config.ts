const BASE_URL = process.env.REACT_APP_BASE_API;

export const serviceConfig = {
    makeRequestConfig,
};


export interface RequestConfig {
    method: string,
    url: string,
    data?: object,
    params?: object
}

function makeRequestConfig(request: RequestConfig) {
    const { url, method, data, params } = request;

    let requestConfig = {
        baseURL: BASE_URL,
        responseType: 'json',
        url: url,
        method,
        data,
        params
    };

    return requestConfig;
}
