<template>
  <v-dialog
      v-model="active"
      fullscreen
      hide-overlay
      transition="dialog-bottom-transition"
      class="dashboard-window"
      scrollable
  >
    <v-card>
      <v-toolbar
          dark
          color="rgb(32, 54, 78)"
          class="dashboard-window__header"
      >
        <div @click="close()" class="logo-block logo-block--active logo-block--white">
          <!--          <v-icon size="2rem">mdi-monitor-dashboard</v-icon>-->
          <svg
              class="logo"
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
          >АНАЛИТИКА
          </v-toolbar-title>
        </div>
        <v-spacer></v-spacer>

          <v-btn
              class="dashboard-window__close-btn"
              dark
              text
              @click="close()"
          >
            <v-icon class="mr-2">mdi-close</v-icon>
            Закрыть
          </v-btn>

      </v-toolbar>
      <v-card-text class="dashboard-window__content">
        <span class="dashboard-window__title">Добыча и потребление угля:</span>
        <v-row>
          <v-col cols="6">
            <ChartStacked :data="gatherData"/>
          </v-col>
          <v-col cols="6">
            <v-data-table
                :headers="total.headers"
                :items="total.data"
                :items-per-page="15"
                class="elevation-1 mt-3"
                hide-default-footer
            ></v-data-table>
            <v-data-table
                :headers="coal.headers"
                :items="coal.data"
                :items-per-page="15"
                class="elevation-1 chart-table"
                hide-default-footer
                sort-by="use"
                sort-desc
            ></v-data-table>
          </v-col>
        </v-row>
        <span class="dashboard-window__title">Структура потребления:</span>
        <v-row class="mb-4">
          <v-col cols="6">
            <v-list three-line class="dashboard-window__list elevation-1">
              <v-list-item-group
                  active-class="active--text object-list-item--active"
                  v-model="selected"
              >
                <div class="empty-state pl-3 pr-3" v-show="!objectsShowed.length">Ничего не найдено...</div>
                <v-virtual-scroll
                    :bench="benched"
                    :items="objectsShowed"
                    height="31rem"
                    item-height="95px"
                >
                  <template v-slot:default="{ item, index }">
                    <ListItem
                        :key="item.title +'-'+ item.id + '-dashboard'"
                        :id="item.id"
                        :index="index"
                        :title="item.title"
                        :type="item.type.name"
                        :address="item.address"
                        :selected="false"
                        @select="toggleItem"
                    />
                  </template>
                </v-virtual-scroll>
              </v-list-item-group>
            </v-list>
          </v-col>
          <v-col cols="6" style="position: relative">
            <ChartPie :data="customers" :type="filterType" @filter="filterData"/>
            <div class="pieChart-control">
                <v-btn :class="['pieChart-control__item', filterType === 'energy' && 'pieChart-control__item--active']"
                       @click="filterType = 'energy'" > Энергетический</v-btn>
                <v-btn  :class="['pieChart-control__item', filterType === 'anthracite' && 'pieChart-control__item--active']"
                        @click="filterType = 'anthracite'">Антрацит</v-btn>
            </div>

          </v-col>
        </v-row>
      </v-card-text>
    </v-card>
  </v-dialog>
</template>

<script>
import ChartStacked from "./charts/ChartStacked";
import ChartPie from "./charts/ChartPie";
import ListItem from "./ListItem";

export default {
  name: "Dashboard",
  components: {ChartStacked, ChartPie, ListItem},
  props: {
    active: {
      type: Boolean,
      required: true,
      default: false
    },
    objects: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      show: false,
      total: {
        headers: [
          {
            text: 'Группа',
            align: 'start',
            sortable: false,
            value: 'name',
          },
          {text: 'Добыча (тыс. т)', value: 'gather', align: 'center',},
          {text: 'Потребление (тыс. т)', value: 'use', align: 'center',},
        ],
        data: [
          {
            name: 'Энергетический',
            gather: 24901,
            use: 22271
          },
          {
            name: 'Антрацит',
            gather: 0,
            use: 3999
          },
          {
            name: 'Коксущийся',
            gather: 6323,
            use: 13853
          }
        ]
      },
      benched: 5,
      filterType: 'energy',
      coal: {
        headers: [
          {
            text: 'Название',
            align: 'start',
            sortable: false,
            value: 'name',
          },
          {text: 'Марки угля', value: 'marks',},
        ],
        data: [{
          name: 'Энергетический',
          marks: 'ДГ, ГЖП, ГЖ, Г(Г1), Г(Г2)'
        },
          {
            name: 'Антрацит',
            marks: 'А, Т'
          },
          {
            name: 'Коксующийся',
            marks: 'Ж, К(К1), Г(Г2)'
          },]
      },
      customers: [
        {
          title: 'ТЭС',
          energy: 19808,
          anthracite: 2500,
        },
        {
          title: 'ТЭЦ',
          energy: 740,
          anthracite: 1230,
        },
        {
          title: 'Металлургия',
          energy: 402,
          anthracite: 128,
        },
        {
          title: 'Цементный завод',
          energy: 675,
          anthracite: 0,
        },
        {
          title: 'Прочие',
          energy: 647,
          anthracite: 141,
        },
      ],
      gatherData: {
        data: [
          {
            title: 'Добыча (рядовой уголь)',
            energy: 24901,
            cox: 6323,
            anthracite: 0
          },
          {
            title: 'Потребление (товарный уголь)',
            energy: 22271,
            cox: 13853,
            anthracite: 3999
          },
        ],
        types: [
          {
            type: 'energy',
            name: 'Энергетический',
            stacked: false
          },
          {
            type: 'cox',
            name: 'Коксующийся',
            stacked: true
          },
          {
            type: 'anthracite',
            name: 'Антрацит',
            stacked: true
          },
        ],
      },
      chartFilter: [],
      selected: null
    }
  },
  methods: {
    close() {
      this.$emit('closeDashboard');
    },
    filterData(el) {
      const index = this.chartFilter.indexOf(el);
      if (index > -1) {
        this.chartFilter.splice(index, 1);
      } else {
        this.chartFilter.push(el);
      }
    },
    toggleItem(args) {
      let { selected, index, active } = args;
      this.$emit('closeDashboard');
      setTimeout(() => {
        this.$emit('toggleItem', {selected: selected, index: null, active: false});
        this.selected = null;
        }, 750);
    }
  },
  computed: {
    objectsShowed() {
      return this.objects.filter(el => !this.chartFilter.includes(el.type.name));
    }
  },
  watch: {
    active() {
      setTimeout(() => {
        this.show = this.active;
      }, this.active ? 0 : 500);
    }
  }
}
</script>

<style lang="scss">
.dashboard-window {
  z-index: 301;
  margin-bottom: 32px !important;

  &__content {
    height: calc(100vh - 5rem);
  }

  &__header {
    border-radius: 0 !important;
  }

  &__title {
    font-size: 1.2rem;
    font-weight: 600;
    margin: 1rem 0;
    display: flex;
  }
  &__close-btn {
    &:focus {
      &:before {
        opacity: 0!important;
      }
    }
  }
  &__list {
    border-radius: .25rem !important;

    .v-list-item-group:last-child {
      margin-bottom: 0;
    }
  }
}
.pieChart-control {
  position: absolute;
  bottom: 1rem;
  left: 40%;
  transform: translateX(-50%);
  display: flex;
  align-items: center;
  justify-content: center;
  &__item {
    font-size: .65rem!important;
    margin: 0 .25rem!important;
    width: 10rem!important;

    &--active {
      background-color: rgb(32, 54, 78)!important;
      color: #fff!important;
    }
  }

}
.chart-table {
  margin-top: .75rem;
}
</style>