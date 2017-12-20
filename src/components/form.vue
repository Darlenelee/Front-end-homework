<template>
  <Input v-model="value7" type="textarea" :autosize="true" placeholder="Enter something..."></Input>
  <Input v-model="value8" type="textarea" :autosize="{minRows: 2,maxRows: 10}" placeholder="Enter something..."></Input>
</template>
<script>
  export default {
    data () {
      return {
        value7: '',
        value8: ''
      }
    }
  }
</script>
