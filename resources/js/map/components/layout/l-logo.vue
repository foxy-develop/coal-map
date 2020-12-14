<template>
  <div @click="toggle()" :class="['logo-block', !loading && 'logo-block--active']">
    <svg
        class="logo-block__icon"
        height="512pt"
        fill="currentColor"
        viewBox="0 -30 512 512"
        width="512pt"
        xmlns="http://www.w3.org/2000/svg"
    >
      <path
          d="m134 391.058594c-16.542969 0-30 13.457031-30 30 0 16.542968 13.457031 30 30 30s30-13.457032 30-30c0-16.542969-13.457031-30-30-30zm0 0"
      />
      <path
          d="m378 391.058594c-16.542969 0-30 13.457031-30 30 0 16.542968 13.457031 30 30 30s30-13.457032 30-30c0-16.542969-13.457031-30-30-30zm0 0"
      />
      <path
          d="m497 138.058594h-482c-8.285156 0-15 6.714844-15 15s6.714844 15 15 15h16v166c0 32.816406 17.566406 61.523437 43.804688 77.25 4.671874-28.460938 29.429687-50.25 59.195312-50.25 33.085938 0 60 26.914062 60 60 0 1.003906-.027344 2.003906-.074219 3h124.148438c-.046875-.996094-.074219-1.996094-.074219-3 0-33.085938 26.914062-60 60-60 29.765625 0 54.523438 21.789062 59.195312 50.25 26.238282-15.726563 43.804688-44.433594 43.804688-77.25v-166h16c8.285156 0 15-6.714844 15-15s-6.714844-15-15-15zm-376 177.597656c0 8.285156-6.714844 15-15 15s-15-6.714844-15-15v-92.058594c0-8.28125 6.714844-15 15-15s15 6.71875 15 15zm60 0c0 8.285156-6.714844 15-15 15s-15-6.714844-15-15v-92.058594c0-8.28125 6.714844-15 15-15s15 6.71875 15 15zm60 0c0 8.285156-6.714844 15-15 15s-15-6.714844-15-15v-92.058594c0-8.28125 6.714844-15 15-15s15 6.71875 15 15zm60 0c0 8.285156-6.714844 15-15 15s-15-6.714844-15-15v-92.058594c0-8.28125 6.714844-15 15-15s15 6.71875 15 15zm60 0c0 8.285156-6.714844 15-15 15s-15-6.714844-15-15v-92.058594c0-8.28125 6.714844-15 15-15s15 6.71875 15 15zm60 0c0 8.285156-6.714844 15-15 15s-15-6.714844-15-15v-92.058594c0-8.28125 6.714844-15 15-15s15 6.71875 15 15zm0 0"
      />
      <path
          d="m284.183594 108.058594h125.152344l-33.027344-38.371094c-8.808594-10.234375-20.601563-15.640625-34.105469-15.640625-13.5 0-25.296875 5.40625-34.105469 15.640625l-27.957031 32.484375-56.859375-82.671875c-8.519531-12.394531-22.035156-19.5-37.078125-19.5-15.039063 0-28.554687 7.105469-37.074219 19.5l-60.90625 88.558594zm0 0"
      />
    </svg>
    <v-toolbar-title class="font-weight-black align-center logo-block__text"
    >COAL MAP
    </v-toolbar-title>
  </div>
</template>

<script>
export default {
  name: "Logo",
  props: {
    loading: {
      type: Boolean,
      required: false,
      default: false
    }
  },
  methods: {
    toggle() {
      this.$emit('toggle');
    }
  }
}
</script>

<style scoped lang="scss">

.logo-block {
  position: absolute;
  display: flex;
  flex-direction: row;
  padding: 1rem;
  color: #fff;
  z-index: 300;
  transition: color .3s ease-in-out;
  animation: logo-appear;
  animation-duration: .5s;
  animation-fill-mode: forwards;
  animation-iteration-count: 1;
  will-change: color, transform;

  &:hover {
    cursor: pointer;
  }
  &__icon {
    height: 2rem;
    width: 2rem;
    transition: color .3s ease-in-out;
  }

  &__text {
    position: relative;
    font-weight: 900;
    top: 3px;
    text-shadow: 2px 2px 3px rgba(32, 54, 78, 0.1);
    margin-left: .5rem;
    line-height: 2rem;
    font-size: 1.5rem;
    color: currentColor;
    will-change: color, transform;
    transition: color .3s ease-in-out;
  }

  &--active {
    animation: unset;
    transform: translateY(0);
    color: rgb(32, 54, 78);
  }
  &--white {
    color: #fff;
  }
}

</style>