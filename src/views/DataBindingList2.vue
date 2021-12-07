<template>
  <div>
    <table>
      <thead>
        <tr>
          <th>제품명</th>
          <th>가격</th>
          <th>카테고리</th>
          <th>배송료</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(product) in productList" v-bind:key="product">
          <td>{{product.product_name}}</td>
          <td>{{product.price}}</td>
          <td>{{product.category}}</td>
          <td>{{product.delivery_price}}</td>
        </tr>
      </tbody>
    </table>
    <br>
    <br>
    <br>
    <br>
    <table>
      <thead>
      <tr>
        <th>제품명</th>
        <th>가격</th>
        <th>카테고리</th>
        <th>배송료</th>
      </tr>
      </thead>
      <tbody>
      <tr :key="i" v-for="(product, i) in productList">
        <td>{{product.product_name}}</td>
        <td>{{product.price}}</td>
        <td>{{product.category}}</td>
        <td>{{product.delivery_price}}</td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: 'DataBinding',
  data () {
    return {
      title: 'World',
      productList: []
    }
  },
  created () {
    this.getList()
  },
  methods: {
    async getList () {
      this.productList = await this.$api('https://0f127b1d-26f4-49eb-b0e2-a5b2a7bcd8c3.mock.pstmn.io/list', 'get')
    }
  }
}
</script>

<style scoped>
 table {
   font-family: arial, sans-serif;
   border-collapse: collapse;
   width: 100%;
 }
 td, th {
   border: 1px solid #dddddd;
   text-align: left;
   padding: 8px;
 }
</style>
