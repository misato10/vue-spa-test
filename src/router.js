import Vue from 'vue'
import VueRouter from 'vue-router'

//ルート用のコンポーネントを読み込む
import Home from '@/views/Home.vue'
import Product from '@/views/Product.vue'

Vue.use(VueRouter)

const router = new VueRouter({
    //URLのパスと紐づくコンポーネントをマッピング
    routes: [
      { path: '/', component: Home },
      { path: '/product', component: Product }
    ]
})

//生成したVueRouterインスタンスをエクスポート
export default router