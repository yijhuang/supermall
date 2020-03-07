import axios from 'axios'

export function request(config){
    const instance = axios.create({
        baseURL:'http://106.54.54.237:8000/api/wh',
        timeout:5000
    });

    // instance.interceptors.request.use(config=>{
    // //1.对config中的数据进行加工

    // //2.每次发送网络请求时，希望在界面显示请求图标

    // //3.网络请求时，必须携带一些特殊信息
    // });

    instance.interceptors.response.use(res=>{
        return res.data;
    })
    return instance(config);
}