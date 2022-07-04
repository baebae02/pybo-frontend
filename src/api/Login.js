import {axiosInstance} from "@/api/instance";
import router from "@/router";
import axios from "axios";

// const config = {
//     baseUrl: 'http://127.0.0.1:5000'
// };

/*
회원가입을 시도합니다.
@param {string} username
@param {string} password
@param {string} email
@param {string} phone
@param {string} nickname
@param {string} baekjoon
 */
const signUp= async (username, password, email, phone, nickname, baekjoon) => {
    return axiosInstance.request('POST','http://127.0.0.1:5000/auth/signup', {
        username: username,
        password: password,
        email: email,
        phone: phone,
        nickname: nickname,
        baekjoon: baekjoon,
    });
};

/*
로그인정보를 가져옵니다.
@param {string} username
@param {string} password
 */
const getLoginInfo= async (username, password) => {
    const res = axios.get('http://127.0.0.1:5000/auth/login', {
        username: username,
        password: password,
    }).catch(function (error) {
        alert(error);
    });
    let response = res.data
    alert(response['result'])
    if (response['result'] === 'success') {
        this.loginSuccess = true;
        alert('로그인 되었습니다.');
        await router.push({name: 'About'})
    } else {
        alert('오류가 발생했습니다. 다시 진행해주세요.');
    }
    return response
};

/*
로그인을 시도합니다.
@param {string} username
@param {string} password
 */
const getLogin= async (username, password) => {
    return axiosInstance.request('POST', '${config.baseUrl}/auth/login', {
        username: username,
        password: password
    });
};

export default {
    getLogin,
    getLoginInfo,
    signUp
};