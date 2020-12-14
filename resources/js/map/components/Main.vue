<template>
  <v-app>
    <Logo/>
    <v-main :class="{ 'isLoaded' : !loading }">

    </v-main>
    <Footer v-once/>
  </v-app>
</template>

<script>
import Footer from './layout/l-footer';
import Logo from './layout/l-logo';

export default {
  name: 'Main',
  components: { Footer, Logo },
  data() {
    return {
      loading: false
    }
  },
}
</script>

<style scoped>

</style>