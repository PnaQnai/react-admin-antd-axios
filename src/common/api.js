import {
    Get,
    Post,
    UserGet,
    UserPost
} from './http'

// 求职招聘列表
let recruitmentList = function (params) {
    return Get('/v1/baseline/recruitment/recruitmentListtttttt', params)
}
export const dataApi = {
        recruitmentList: recruitmentList
}

export const userApi = {
 
}