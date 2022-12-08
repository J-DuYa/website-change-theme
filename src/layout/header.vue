<script lang="ts">
export default {
  name: 'Basic',
  props: {
    changeTheme: {
      type: Function,
      requred: true,
      default: () => {}
    },
    theme: {
      type: String,
      required: true
    }
  },
}
</script>

<template>
  <div class='duya-header' :data-theme="theme">
    <span class='dark theme-box' @click="() => changeTheme('dark')">暗黑主题</span>
    <span class='white theme-box' @click="() => changeTheme('white')">亮色主题</span>
  </div>
</template>