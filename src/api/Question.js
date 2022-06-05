import instance from "@/api/instance";

/*
질문 목록을 가져옵니다.
@param {number} page
@param {number} limit
 */
const getQuestionList = async (page, limit) => {
    return instance.request.use('/api/list', {
        page: page,
        limit: limit
    });
};

/*
질문 정보를 가져옵니다.
@param id
 */
const getQuestion = async id => {
    return instance.request.use('GET', '/api/detail', { id });
};

/*
질문을 생성합니다.
@param {Object} data
@param {string} data.subject
@param {string} data.content
 */
const createQuestion = async data => {
    return instance.request.use('POST', '/api/create', data);
};

/*
질문을 수정합니다.
@param {Object} data
@param {string} data.subject
@param {string} data.content
 */
const updateQuestion = async data => {
    return instance.request.use('PUT', '/api/modify', data);
};

/*
질문을 삭제합니다.
@param {string} id
 */
const deleteQuestion = async id => {
    return instance.request.use('DELETE', '/api/delete', { id} );
};

export default {
    getQuestion,
    getQuestionList,
    createQuestion,
    updateQuestion,
    deleteQuestion,
};