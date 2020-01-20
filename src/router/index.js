import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter)


import a from '../pages/move/children/moveDetail.vue';
import b from '../pages/mine/mine.vue';


const routes = [
    {
        path: '/home', component: () => import('../pages/home/home.vue'),
        children: [
            // {
            //     path: 'move', component: () => import('../pages/move/move.vue'),
            //     children: [
            //         {
            //             path: 'mine/:id', component: () => import('../pages/mine/mine.vue'),
            //             children: [
            //                 { path: '/Detail', component: () => import('../pages/move/children/moveDetail.vue') }
            //             ]
            //         }
            //     ],

            // },
            // {
            //     path: 'Detail', component: () => import('../pages/move/children/moveDetail.vue'),
            // },
            {
                path: 'move',
                components: {
                    left_router: a,
                    right_router: b
                }
            }
        ],
    },
    { path: '**', redirect: '/home' },
]

export default new VueRouter({
    routes
})