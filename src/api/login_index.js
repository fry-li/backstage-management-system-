
// 引入封装好的axios
import axios from "@/utils/myaxios"

// 实现登陆验证
export const login= (data)=>{
    return axios({
        url:'login',
        method:'post',
        data
    })
}