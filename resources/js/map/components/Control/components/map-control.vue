<template>
  <div class="map-control control-btns-block">
    <v-tooltip color="rgb(32, 54, 78)" left>
      <template v-slot:activator="{on, attrs}">
        <v-btn
            class="map-control__btn"
            color="rgb(32, 54, 78)"
            dark
            fab
            @click="home()"
            v-bind="attrs"
            v-on="on"
        >
          <v-icon> mdi-home</v-icon>
        </v-btn>
      </template>
      <span>Домой</span>
    </v-tooltip>
    <v-tooltip color="rgb(32, 54, 78)" left>
      <template v-slot:activator="{on, attrs}">
        <v-btn
            class="map-control__btn"
            color="rgb(32, 54, 78)"
            dark
            fab
            @click="zoomIn()"
            v-bind="attrs"
            v-on="on"
        >
          <v-icon> mdi-magnify-plus-outline</v-icon>
        </v-btn>
      </template>
      <span>Увеличить</span>
    </v-tooltip>
    <v-tooltip color="rgb(32, 54, 78)" left>
      <template v-slot:activator="{on, attrs}">
        <v-btn
            class="map-control__btn"
            color="rgb(32, 54, 78)"
            dark
            fab
            @click="zoomOut()"
            v-bind="attrs"
            v-on="on"
        >
          <v-icon> mdi-magnify-minus-outline</v-icon>
        </v-btn>
      </template>
      <span>Уменьшить</span>
    </v-tooltip>
  </div>
</template>

<script>
export default {
  name: "mapControl",
  methods: {
    home() {
      this.$emit('home');
    },
    zoomIn() {
      this.$emit('zoomIn');
    },
    zoomOut() {
      this.$emit('zoomOut');
    },
  }
}
</script>

<style scoped>

</style>