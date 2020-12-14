<template>
  <div>
    <v-tooltip color="rgb(32, 54, 78)" left>
      <template v-slot:activator="{on, attrs}">
        <v-btn
            style="bottom: 32px; right: 16px"
            :class="['control-btns-block', isSidebar && 'slide-left', !loading && 'btn-appear']"
            color="rgb(32, 54, 78)"
            fab
            dark
            absolute
            bottom
            right
            @click.stop="showSidebar()"
            v-bind="attrs"
            v-on="on"
        >
          <v-icon v-if="searchList"> mdi-map-minus</v-icon>
          <v-icon v-else> mdi-map-search</v-icon>

        </v-btn>
      </template>
      <transition name="slide-fade">
        <span v-if="searchList">Скрыть список</span>
        <span v-else>Открыть список</span>
      </transition>
    </v-tooltip>
    <div class="bottom-btn__wrapper control-btns-block">
      <v-tooltip color="rgb(32, 54, 78)" left>
        <template v-slot:activator="{on, attrs}">
          <v-badge
              bordered
              color="error"
              icon="mdi-filter"
              overlap
              :content="showClearBtn"
              :value="showClearBtn"
          >
            <v-btn
                color="rgb(32, 54, 78)"
                fab
                dark
                @click.stop="showSidebar(true)"
                v-bind="attrs"
                v-on="on"
            >
              <transition name="slide-fade">
                <v-icon v-if="filterList">mdi-filter-remove</v-icon>
                <v-icon v-else>mdi-filter</v-icon>
              </transition>
            </v-btn>
          </v-badge>
        </template>
        <span v-if="filterList">Скрыть фильтр</span>
        <div v-else>
                          <span v-if="showClearBtn">
                              <strong>Отфильтровано по:</strong>
                              <ul>
                                  <li v-for="item in showActiveFilter" v-text="item"/>
                              </ul>
                          </span>
          <span v-else>Настроить фильтр</span>
        </div>
      </v-tooltip>
    </div>
    <v-tooltip color="rgb(32, 54, 78)" left>
      <template v-slot:activator="{on, attrs}">
        <v-btn
            style="bottom: 10rem; right: 1rem"
            :class="['control-btns-block', !loading && 'btn-appear']"
            color="rgb(32, 54, 78)"
            fab
            dark
            absolute
            bottom
            right
            @click.stop="dashboard = true"
            v-bind="attrs"
            v-on="on"
        >
          <v-icon>mdi-monitor-dashboard</v-icon>

        </v-btn>
      </template>
      <transition name="slide-fade">
        <span>Просмотреть аналитику</span>
      </transition>
    </v-tooltip>
  </div>
</template>

<script>

export default {
  name: "dialogsControl"
}
</script>

<style scoped>

</style>