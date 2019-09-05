import Vue from 'vue'
import VueRouter from 'vue-router'

//ルート用のコンポーネントを読み込む
import Home from '@/views/Home.vue'
import Product from '@/views/Product.vue'
import ProductList from '@/views/ProductList.vue'

Vue.use(VueRouter)

const router = new VueRouter({
  　mode: 'history',
    //URLのパスと紐づくコンポーネントをマッピング
    routes: [
      { 
        path: '/', 
        component: Home 
      },
      { 
        path: '/product', // IDがついていないときはリストを表示
        component: ProductList 
      },
      { 
        path: '/product/:id', //:idがパラメータ　何が入ってもOK
        component: Product,
        // props: true // パラメータをpropsとしてコンポーネントにわたす
        props: route =>({ id: Number(route.params.id) })
      }
    ]
})

//生成したVueRouterインスタンスをエクスポート
export default router