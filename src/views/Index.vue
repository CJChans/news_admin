<template>
  <el-container class="container">
      <!-- 侧边栏 -->
  <el-aside width="200px">
      
          <img src="../../static/timg.jpg" class="logo">
    

      <!-- default-active：当前高亮选中的菜单 -->
       <el-menu
        default-active="1"
        class="el-menu-vertical-demo"
        background-color="#545c64"
        text-color="#fff"
        active-text-color="#ffd04b">

         <!-- index是一标识，给default-actives使用的 -->
      <el-submenu index="1">
          <!-- slot="title"必须要保留 -->
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>文章管理</span>
        </template>
        <el-menu-item-group>
         
          <el-menu-item index="1-1">
              <router-link to="/post_list">文章列表</router-link>
            </el-menu-item>
          <el-menu-item index="1-2">
               <router-link to="/post_add">发布文章</router-link>
              </el-menu-item>
        </el-menu-item-group>
       
      </el-submenu>
     
    </el-menu>
  </el-aside>
  <!-- 右侧的内容部分 -->
  <el-container>
    <el-header>
        <img :src="$axios.defaults.baseURL + user.user.head_img" class="head_img">
        <span>{{user.user.nickname}}</span>
         <router-link to="/login">
        退出
        </router-link>
    </el-header>
    <!-- 子页面显示的内容 -->
    <el-main>
        <!-- 显示子路由匹配的页面 -->
        <router-view></router-view>
    </el-main>
  </el-container>
</el-container>
</template>

<script>
export default {
     data(){
        return {
            user: JSON.parse(localStorage.getItem("user") || `{}` )
        }
    },
    mounted(){
        // console.log(user)
    }
}
</script>

<style scoped lang="less">
    .el-header, .el-footer {
    background-color: #eee;
    color: #333;
    text-align: right;
    line-height: 60px;
  }
  
  .el-aside {
    background-color: #333;
    color: #333;
    
  }
  
  .el-main {
    background-color: #fff;
    color: #333;
   
  }
  
  .container {
      position: absolute;
      top: 0;
      bottom: 0;
      width: 100%;
  }
  *{
      vertical-align: middle
  }

  .head_img{
        width:38px;
        height:38px;
        border-radius: 50%;
  }

   span{
          margin-left:10px;
      }
  
  .el-container:nth-child(5) .el-aside,
  .el-container:nth-child(6) .el-aside {
    line-height: 260px;
  }
  
  .el-container:nth-child(7) .el-aside {
    line-height: 320px;
  }

  .logo{
      display: block;
      height: 60px;
      width:200px;
      object-fit: cover;
  }
</style>