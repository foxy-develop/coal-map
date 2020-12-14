<template>
  <v-dialog
      v-model="modalDialog"
      width="700"
      scrollable
  >
    <v-card>
      <v-card-title class="modalData__header" :style="{
                                  backgroundColor: color,
                                  borderColor: color
                                }">
        <span class="modalData__subtitle">Детализация добычи:</span><br/>
        <span class="modalData__title">{{ title.toUpperCase() }}</span>
        <v-icon :color="'#fff'" class="modalData__icon">mdi-chart-bar</v-icon>
      </v-card-title>
      <v-card-text class="modalData__content">
        <div class="modalData__content-title">Добыча угля (тыс. тонн в год):</div>
        <ChartDonut :data="chartData"/>
        <div class="modalData__content-title">Детальная информация:</div>
        <div class="modalData__table">
          <DataTable :data="chartData"/>
        </div>

      </v-card-text>

      <v-divider></v-divider>

      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn
            color="primary"
            text
            @click="modalDialog = false"
        >
          Закрыть
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
import ChartDonut from "./charts/ChartDonut";
import DataTable from "./DataTable";
export default {
  components: {ChartDonut, DataTable},
  name: "ModalData",
  data() {
    return {
      modalDialog: false
    }
  },
  computed: {
    chartData() {
      return this.childs.map(mine => {
        return {
          rate: mine.rete.replace(' ', '').replace(',', '.'),
          name: mine.name,
          ash: mine.ash
        }
      })
    }
  },
  props: {
    title: {
      type: String,
      required: true,
    },
    childs: {
      required: true,
      type: Array,
    },
    color: {
      type: String,
      required: true
    },
    active: {
      type: Boolean,
      required: true,
      default: false,
    }
  },
  watch: {
    active() {
      this.modalDialog = this.active;
    },
    modalDialog() {
      if (this.modalDialog !== this.active) {
        this.$emit('close');
      }
    }
  },
}
</script>

<style lang="scss">
.modalData {
  &__content {
    height: 36rem;
    padding: 0 0 1.25rem !important;
  }
  &__header {
    position: relative;
  }
  &__content-title {
    font-size: 1.2rem;
    font-weight: 600;
    margin: 1rem 0;
    display: flex;
    padding: 0 1.5rem;
  }
  &__icon {
    font-size: 3rem !important;
    position: absolute !important;
    right: 1rem;
    transform: translateY(-50%);
    top: 50%;
  }
  &__table {
    padding: 0 1.5rem;
  }
  &__title, &__subtitle {
    color: #fff;
    display: flex;
    width: 100%;
  }

  &__title {
    font-size: 1rem;
    font-weight: 600;

  }

  &__subtitle {
    font-size: .8rem;
  }
}
</style>