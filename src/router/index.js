import VueRouter from 'vue-router'
import index from '../pages/index'
import about from '../pages/about'
import home from '../pages/home'
import msg from '../pages/msg'
import befo from '../pages/befo'
import nonExistent from '../pages/nonExistent'
const routes = [
    {
        path: '/',
        redirect: '/fp',
    },
    {
        path: '/fp',
        component: index,
        children: [
            {
                path: 'about',
                name: 'About',
                component: about,
                props($route) {
                    return {
                        sex: $route.query.sex
                    }
                },
                children: [{
                    name: 'msg',
                    path: 'msg',
                    component: msg,
                }, {
                    name: 'befo',
                    path: 'befo',
                    component: befo,
                },]
            },
            {
                path: 'home/:name',
                component: home
            },
        ]
    },
    {
        path: '/nonExistent',
        component: nonExistent
    },
    {
        path: '*',
        component: nonExistent
    }
]
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
    return originalPush.call(this, location).catch(err => err)
}

const originalReplace = VueRouter.prototype.replace
VueRouter.prototype.replace = function replace(location) {
    return originalReplace.call(this, location).catch(err => err)
}
const router = new VueRouter({
    mode: 'history',
    routes
})

// router.beforeEach((to, from, next) => {
//     console.log(to,22)
//     console.log(from)
//     if (to.matched.length === 0) { //未匹配到的时候跳转到404页面
//         next({ path: "/nonExistent" })
//     } else {
//         next() //匹配到的时候跳转相应的路由
//     }
// })
export default router