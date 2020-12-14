import {coalMarks} from "../workers/coal-data.worker";

const filterTypesMixin = {
    extends: parent,
    data() {
        return {
            coalTypesList: [],
            filterNames: {
                info: 'достоверности информации',
                road: 'наличию Ж/Д сообщения',
                type: 'маркам потребляемого угля',
                rate: 'потреблению угля',
                corp: 'по группе компаний',
                mines: 'отображению шахт'
            },
            filter: {
                rate: [
                    {
                        title: 'До 100 тыс. т',
                        val: '0-100'
                    },
                    {
                        title: '100-1000 тыс. т',
                        val: '100-1000'
                    },
                    {
                        title: 'от 1000 тыс. т',
                        val: '1000-100000000'
                    }
                ],
                road: [
                    {
                        title: 'Отсутствует',
                        val: 0
                    },
                    {
                        title: 'Собственное',
                        val: 1
                    },
                    {
                        title: 'Поблизости',
                        val: 2
                    }
                ],
                info: [
                    {
                        val: 1,
                        title: 'Проверена'
                    },
                    {
                        val: 0,
                        title: 'Не проверена'
                    }
                ],
                coalTypes: {},
                mines: 1
            },
            filterState: {
                rate: [],
                type: [],
                road: [],
                info: [],
                mines: [],
                corp: []
            },
            filterView: {
                coal: true,
                road: true,
                rate: true,
                info: true,
                mines: true,
                lines: true,
                corp: true
            }
        }
    },
    methods: {
        filterByRate(marker) {
            let rate = 0;
            if ( !!marker.rate ) {
                if (marker.type.name === 'Котельные' && marker.rate) {
                    marker.rate.split(',').forEach(el => {
                        rate += parseFloat(el) / 365 / 1000
                    })
                } else {
                    rate = Number(marker.rate);
                }
            }
            let arr = [];

            this.filterState.rate.forEach(el => el.split('-').forEach(el => arr.push(Number(el))));
            arr = [...new Set(arr)];

            return arr.length > 1 ? rate < Math.max(...arr) && rate >= Math.min(...arr) : rate >= Math.max(...arr);
        },
        filterByCorp(marker) {
            if (marker.corporate) {
                return !this.filterState.corp.includes(marker.corporate.id)
            } else {
                return !this.filterState.corp.includes(4);
            }
        },
        defineMarkerState(marker, counter = false) {
            if (!counter) { if (!this.typesLoad.includes(marker.type.id)) { return true; } }
            if (this.filterState.corp.length > 0 && this.filterByCorp(marker)) {return true}
            if (this.filterState.road.length > 0 && !this.filterState.road.includes(marker.railways)) { return true}
            if (this.filteredTypes.length > 0 && !this.filteredTypes.includes(marker.coalType)) { return true; }
            if (this.filterState.rate.length > 0 && !this.filterByRate(marker)) { return true }
            if (this.filterState.info.length > 0 && !this.filterState.info.includes(marker.is_verified)) { return true }

            return false;
        },
        updateMarkerFilter(filter = false) {
            setTimeout(() => requestAnimationFrame( () =>
                this.setAmounts(filter).then(result => {
                    this.assignData(result);
                    this.chart.validateData();
                    this.updateCustomMarkers(true);
                })), 300);
        },
        clearFilter() {
            Object.keys(this.filterState).forEach(el => {this.filterState[el] = []})
            this.updateMarkerFilter();
            this.updateMines();
        },
    },
    computed: {
        filteredObjects() {
            let items = this.objectsLoad.slice();
            return items.filter(el => !this.defineMarkerState(el))
        },
        filteredCounter() {
            return this.objectsLoad.filter(el => !this.defineMarkerState(el, true))
        },
        searchedObjects() {
            let items = this.filteredObjects.slice();
            return items.filter(item =>
                item.title.toLowerCase().includes(this.searchQuery.toLowerCase()));
        },
        filteredTypes() {
            let arr = [];
            this.filterState.type.forEach(el => {
                this.filter.coalTypes[this.coalTypesList[el].title].objects.forEach(el => arr.push(el));
            })
            return [...new Set(arr)];
        },
        showClearBtn() {
            return Object.keys(this.filterState).filter(el => this.filterState[el].length).length
        },
        showActiveFilter() {
            return Object.keys(this.filterState).filter(el =>
                this.filterState[el].length).map(el => this.filterNames[el]);
        }

    },
};

export default filterTypesMixin;