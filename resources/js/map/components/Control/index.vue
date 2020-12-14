<template>
  <div :class="['control-bar', isSidebar && 'slide-left']">
    <mapControl/>
  </div>
</template>

<script>
import mapControl from './components/map-control';
import dialogsControl from './components/map-control';

export default {
  name: 'Control',
  components: {mapControl, dialogsControl},
  props: {
    isSidebar: {
      type: Boolean,
      required: false,
      default: false
    }
  },
}
</script>

<style scoped lang="scss">
  .control-bar {

  }
</style>