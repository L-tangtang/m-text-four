import axios from 'axios';
export default (url, method, data = []) => {
    let configData = {};
    let type = method === 'get' ? 'params' : 'data';
    configData.url = url;
    configData.method = method;
    configData[type] = data;
    // configData.headers = {
    //     authors: 'tt',
    // };
    return axios(configData).catch(error => {
        if (error.response && error.response.status === 404) {
            alert('该接口不存在');
            return;
        }
        if (error.response && error.response.status === 500) {
            alert('服务器错误');
            return;
        }
    });
};
