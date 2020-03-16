import VueRouter from 'vue-router'
import HomeContainer from '../components/HomeContainer.vue'
import MemberContainer from '../components/MemberContainer.vue'
import ShopcarContainer from '../components/ShopcarContainer.vue'
import SearchContainer from '../components/SearchContainer.vue'

var router = new VueRouter({
  routes: [
    { path: '/home', component: HomeContainer },
    { path: '/member', component: MemberContainer },
    { path: '/shopcar', component: ShopcarContainer },
    { path: '/search', component: SearchContainer }
  ],
  // linkActiveClass覆盖默认的路由高亮显示 router-link-active
  linkActiveClass: 'mui-active'
})

export default router
