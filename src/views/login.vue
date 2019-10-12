<template>
  <div class="login">
      <div class="container">
          <img src="../assets/fo.png" alt="" class="avatar">
        <el-form 
          :model="loginForm" 
          :rules="rules" 
          ref="loginForm"  
          class="demo-ruleForm">
            <el-form-item  prop="username">
                <el-input v-model="loginForm.username" placeholder='请输入用户名'  prefix-icon='myicon-user myicon'></el-input>
            </el-form-item>
            <el-form-item  prop="password">
                <el-input v-model="loginForm.password" placeholder='请输入密码' prefix-icon='myicon-key myicon'></el-input>
            </el-form-item>
            <el-form-item >
                <el-button type="primary" class="login-btn " @click="login">登录</el-button>
            </el-form-item>        
       </el-form>
      </div>
  </div>
</template>

<script>
export default {
    data(){
        return{
            loginForm:{
                username:"",
                passsword:''
            },
            rules: {
          username: [
            { required: true, message: '请输入用户名称', trigger: 'blur' }
          ],
          password:[
            { required: true, message: '请输入密码', trigger: 'blur'}
          ]
          }
        }
    },
    methods:{
        login(){
            this.$refs.loginForm.validate((valid)=>{
                if(valid){
                    console.log('可以发送请求了！！')
                }else{
                    // console.log('用户数据输入有错')
                    this.$message({
                        message:"请输入所有必填的数据",
                        type:'warning'
                    })
                    return false
                }
            })
        }
    }

}
</script>

<style lang="less" scoped>
.login {
  position: fixed;
  width: 100%;
  height: 100%;
  background-color: #e0b26c;
  .container {
    position: absolute;
    left: 0;
    right: 0;
    width: 400px;
    padding: 0px 40px 15px 40px;
    margin: 200px auto;
    background: white;
    .avatar {
      position: relative;
      left: 50%;
      width: 120px;
      height: 120px;
      margin-left: -60px;
      margin-top: -60px;
      box-sizing: border-box;
      border-radius: 50%;
      border: 10px solid #fff;
      box-shadow: 0 1px 5px #ccc;
      overflow: hidden;
    }
    .login-btn {
      width: 100%;
    }
  }
}
</style>