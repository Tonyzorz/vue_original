<template>
  <button type="button" @click="childFunc" ref="btn">click</button>
  <h1>{{msg}}</h1>
  <button type="button" @click="childFunc2">자식 컴포넌트 데이터 변경</button>
</template>

<script>
export default {
  name: 'ChildComponent',
  data () {
    return {
      msg: '자식 컴포넌트의 메시지라네',
      msg2: '데이터'
    }
  },
  mounted () {
    this.$emit('send-message', this.msg)
  },
  methods: {
    childFunc () {
      console.log('부모 컴포넌트에서 직접 발생시킨 이벤트라고 하다네 ')
    },
    callFromParent () {
      console.log('부모 컴포넌트에서 직접 호출함 함수')
    },
    childFunc2 () {
      this.msg2 = 'changed 데이터!'
    }
  }
}
</script>

<style scoped>

</style>
