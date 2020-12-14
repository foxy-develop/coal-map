<template>
  <v-data-table
      :headers="headers"
      :items="data"
      :items-per-page="15"
      class="elevation-1 modalData-table"
      hide-default-footer
      sort-by="rate"
      sort-desc
  ></v-data-table>
</template>

<script>
export default {
  props: {
    data: {
      type: Array,
      required: true
    }
  },
  name: "DataTable",
  data () {
    return {
      headers: [
        {
          text: 'Название',
          align: 'start',
          sortable: false,
          value: 'name',
        },
        { text: 'Добыча (тыс. т)', value: 'rate',  },
        { text: 'Зольность (%)', value: 'ash', },
      ],
    }
  },
}
</script>
<style lang="scss">
  .modalData-table td:not(:first-of-type) {
    padding-left: 2.5rem !important;
  }
</style>
