import http from './https.js';

export function queryStudentList(data){
    return http.request({
        api: '/examples/query-student-list',
        method: 'GET',
        data
    })
}