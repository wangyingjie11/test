import reuire from './require'
export const stu = (data)=>{
    return reuire({
        url:'/students',
        method:'get',
        data
    })
}