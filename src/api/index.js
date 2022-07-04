import Question from "@/api/Question";
import axios from 'axios';

const instance = axios.create({
    // localhost:3000
    baseURL: 'http://127.0.0.1:5000'
});


function loginUser(userData) {
    return instance.post('auth/login', userData);
}

export { loginUser };

export const QuestionAPI = Question;

export * from './Question';
export default {
    QuestionAPI,
}
