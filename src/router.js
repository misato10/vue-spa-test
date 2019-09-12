import Vue from 'vue'
import VueRouter from 'vue-router'

//ルート用のコンポーネントを読み込む
import Home from '@/views/Home.vue'
import Product from '@/views/Product.vue'
import ProductList from '@/views/ProductList.vue'

//Productの子コンポーネントたち
import ProductHome from '@/views/Product/Home.vue'
import ProductReview from '@/views/Product/Review.vue'
import ProductReviewDetail from '@/views/Product/ReviewDetail.vue'

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
        props: route =>({ id: Number(route.params.id) }),
        children: [
          //商品詳細（デフォルトルート）
          {
            name: 'product-home',
            path: '',
            component: ProductHome
          },
          //商品のレビュー一覧
          {
            name: 'product-review',
            path: 'review',
            component: ProductReview
          },
          //商品のレビュー詳細
          {
            name: 'review-detail',
            path: 'review/:rid', //親ルートとかぶらないパラメータを指定
            component: ProductReviewDetail
          }


        ]
      }
    ]
})

//生成したVueRouterインスタンスをエクスポート
export default router