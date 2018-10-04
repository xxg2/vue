<template>
  <div>
    <tabs></tabs>
    <router-view></router-view>
  </div>
</template>
<script type="text/javascript">
import Tabs from '@/components/Tabs.vue'

export default {
  components: {
    Tabs
  }
}
</script>
