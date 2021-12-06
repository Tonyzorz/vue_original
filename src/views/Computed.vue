<template>
  <h1>Hello, {{fullName}}!</h1>
</template>

<script>
export default {
  name: 'DataBinding',
  data () {
    return {
      title: 'World',
      firstName: 'Taewon',
      lastName: 'Yoon'
    }
  },
  // computed에 정의된 fullname은 함수이자 동시에 vue 인스터스의 데이터.
  // 만약 data에 변경이 일어나면 자동으로 fullname도 갱신이 된다.
  computed: {
    fullName () {
      return this.firstName + ' ' + this.lastName
    }
  }
}
</script>

<style scoped>

</style>
