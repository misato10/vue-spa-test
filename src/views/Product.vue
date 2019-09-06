<template>
  <div class="product" v-if="item" key="product">
    <h1>商品情報</h1>
    <dl>
      <dt>商品名</dt><dd>{{ item.name }}</dd>
      <dt>価格</dt><dd>{{ item.price }}円</dd>
      <dt>商品説明</dt><dd>{{ item.content }}</dd>
    </dl>
    <p>このページはID.{{ id }}の詳細を表示する</p>
  </div>
</template>

<script>
import products from '@/api/products.js'

export default {
  props: {
    id: Number
  },
  data() {
    return {
      item: null
    }
  },
  watch: {
    id: {
      handler() {
        products.asyncFind(this.id, item => {
          this.item = item
        })
      }, immediate: true
    }
  }

}
</script>