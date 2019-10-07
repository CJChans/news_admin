import Vue from 'vue'
import Router from 'vue-router'

import Login from "@/views/Login.vue"
import Index from "@/views/Index.vue"
import PostList from "@/views/PostList.vue"
import PostAdd from "@/views/PostAdd.vue"

Vue.use(Router)

//创建路由对象
export default new Router({
    //默认的声明
    // mode: 'history',
    //可忽略
    base: process.env.BASE_URL,
    //路由的配置
    routes: [
        //登录页
        { path: "/login", component: Login },
        {
            path: "/",
            component: Index,
            children: [
                { path: "post_list", component: PostList },
                { path: "post_add", component: PostAdd },
            ]
        },

    ]
})