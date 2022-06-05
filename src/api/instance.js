import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://baebae02.kr',
    timeout: 2000,
    validateStatus: () => true,
});

//Request Interceptor
instance.interceptors.request.use(
    config => {
        //TODO: 요청을 보내기 전 수행할 로직
        return config
    },
    error => {
        //TODO: 요청 에러가 발생했을 때 수행할 로직
        console.log(error); //DEBUGING
        return Promise.reject(error);
    }
);

//Response Interceptor
instance.interceptors.response.use(
    response => {
        //TODO: 응답에 대한 로직 생성
        return response.data
    },
    error => {
        //TODO: 응답 에러가 발생했을 때 수행할 로직
        console.log(error); //DEBUGING
        return Promise.reject(error);
    }
);

export default instance;