<template>
  <el-container class="container">
    <!-- 侧边栏 -->
    <el-aside width="200px">
      <img src="../../static/timg.jpg" class="logo" />

      <!-- default-active：当前高亮选中的菜单 -->
      <el-menu
        default-active="1"
        class="el-menu-vertical-demo"
        background-color="#545c64"
        text-color="#fff"
        active-text-color="#ffd04b"
      >
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

            <el-menu-item index="1-3">
              <router-link to="/post_edit/:id">编辑文章</router-link>
            </el-menu-item>
          </el-menu-item-group>
        </el-submenu>
      </el-menu>
    </el-aside>
    <!-- 右侧的内容部分 -->
    <el-container>
      <el-header>
        <img :src="$axios.defaults.baseURL + user.user.head_img" class="head_img" />
        <span>{{user.user.nickname}}</span>
        <!-- <router-link to="/login">
        退出
        </router-link>-->
        <span @click="handleLogout" style="cursor:pointer">退出</span>
      </el-header>
      <!-- 子页面显示的内容 -->
      <el-main>
        <div>{{ breaks }}</div>
        <!-- 显示子路由匹配的页面 -->
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
export default {
  data() {
    return {
      user: JSON.parse(localStorage.getItem("user") || `{}`)
      // breaks:""
    };
  },

  // 监听url地址栏的变化,watch页面一加载时候不会执行，只有等到url变化时候才会执行
  // watch: {
  //     $route(){
  //         const {matched} = this.$route;
  //         const arr = [];
  //         matched.forEach(v => {
  //             arr.push(v.meta)
  //         })
  //         this.breaks = arr.join(" / ")
  //     }
  // },

  // computed里面的函数监听到函数中引用的所有实例下的属性的变化
  computed: {
    breaks() {
      const { matched } = this.$route;
      const arr = [];
      matched.forEach(v => {
        arr.push(v.meta);
      });
      return arr.join(" / ");
    }
  },

  methods: {
    handleLogout() {
      this.$confirm("确定退出?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      }).then(() => {
        localStorage.removeItem(`user`);
        this.$router.push("/login");
      }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消'
          });          
        });
    }
  }
};
</script>

<style scoped lang="less">
.el-header,
.el-footer {
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
* {
  vertical-align: middle;
}

.head_img {
  width: 38px;
  height: 38px;
  border-radius: 50%;
}

span {
  margin-left: 10px;
}

.el-container:nth-child(5) .el-aside,
.el-container:nth-child(6) .el-aside {
  line-height: 260px;
}

.el-container:nth-child(7) .el-aside {
  line-height: 320px;
}

.logo {
  display: block;
  height: 60px;
  width: 200px;
  object-fit: cover;
}

.el-menu {
  border-right: none;
}
</style>