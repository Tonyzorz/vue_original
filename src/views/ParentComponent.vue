<template>
  <child-component @send-message="sendMessage" ref="child_component"></child-component>
  <button type="button" @click="changeChildData">change child data</button>
  <button type="button" @click="checkChild">자식 컴포넌트 데이터 조회</button>

</template>

<script>
import ChildComponent from './ChildComponent'
export default {
  name: 'ParentComponent',
  components: { ChildComponent },
  computed: {
    msg () {
      return this.$refs.child_component.msg
    }
  },
  mounted () {
    /* this.$refs.child_component.$refs.btn.click() */
    this.$refs.child_component.callFromParent()
  },
  methods: {
    // 부모 -> 자식
    changeChildData () {
      this.$refs.child_component.msg = '부모 컴포넌트가 변경한 데이터라고 한다네'
    },
    // 자식 -> 부모
    sendMessage (data) {
      console.log(data)
    },
    checkChild () {
      alert(this.msg)
    }
  }
}
</script>

<style scoped>

</style>
