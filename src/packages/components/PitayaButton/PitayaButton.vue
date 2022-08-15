<template>
  <button :class="getClass">
    <slot></slot>
  </button>
</template>
<script lang="ts">
export default {
  name: 'PitayaButton',
}
</script>
<script setup lang="ts">
import { computed } from 'vue'
import './index.less'

const props = withDefaults(
  defineProps<{
    type?: 'primary' | 'info' | 'success' | 'warning' | 'danger' | 'normal'
  }>(),
  {
    type: 'normal',
  },
)

const getClass = computed(() => {
  let className = ''
  if (props.type) {
    className += ' pitaya-' + props.type
  }
  return className
})
</script>

<!-- <style scoped>
.pitaya-primary {
  background: rgb(53, 99, 197);
}
</style> -->
