<script lang="ts">
import Header from './header.vue'
import './index.less'

export default {
  components: { Header },
  data () {
    return {
      theme: 'white'
    }
  },
  methods: {
    changeTheme (theme: 'dark' | 'white') {
      this.theme = theme
    }
  }
}

</script>

<template>
  <Header :theme="theme" :changeTheme="changeTheme" />
  <div :data-theme="theme" class='duya-container'>
    <RouterView />
  </div>
</template>