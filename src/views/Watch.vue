<template>
  <h1>Full Name: {{fullName}}!</h1>
  <button type="button" @click="changeName">변경</button>
</template>

<script>
export default {
  name: 'DataBinding',
  data () {
    return {
      title: 'World',
      firstName: 'Taewon',
      lastName: 'Yoon',
      fullName: ''
    }
  },
  methods: {
    changeName () {
      this.firstName = 'Eunsol'
    }
  },
  watch: {
    firstName () {
      this.fullName = this.firstName + ' ' + this.lastName
    },
    lastName () {
      this.fullName = this.firstName + ' ' + this.lastName
    }
  }
}
</script>

<style scoped>

</style>
