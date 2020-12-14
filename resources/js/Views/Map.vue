<template>
    <v-main :class="{ 'isLoaded' : !loader }">
        <transition-group name="slide-y" appear tag="div" class="left-bar" v-if="!loader">
            <Card
                    v-for="type in types"
                    :key="'card-'+type.id"
                    class="slide-y-item toggler toggler--active"
                    :type="type.name"
                    :id="type.id"
                    :icon="type.icon"
                    :notice="type.notice"
                    :color="type.color"
                    :value="getObjectsAmount(type.id)"
                    @toggle="toggleMarkers( $event,  type.id)"
            />
        </transition-group>
        <v-container class="map flex-grow-1 fill-height container--fluid pa-0" ref="map"/>
        <div v-if="!loader">
            <div :class="['bottom-btn__wrapper control-btns-block', isSidebar && 'slide-left'] ">
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
                            style="bottom: 32px; right: 16px"
                            :class="['control-btns-block', isSidebar && 'slide-left', !loader && 'btn-appear']"
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
            <div :class="['map-control control-btns-block', isSidebar && 'slide-left']">
                <v-tooltip color="rgb(32, 54, 78)" left>
                    <template v-slot:activator="{on, attrs}">
                        <v-btn
                                class="map-control__btn"
                                id="home"
                                color="rgb(32, 54, 78)"
                                dark
                                fab
                                @click="goHome()"
                                v-bind="attrs"
                                v-on="on"
                        >
                            <v-icon> mdi-home</v-icon>
                        </v-btn>
                    </template>
                    <span>
                    Домой
                </span>
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
                    <span>
                    Увеличить
                </span>
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
                    <span>
                    Уменьшить
                </span>
                </v-tooltip>
            </div>
            <div :class="['map-control control-btns-block', isSidebar && 'slide-left']">
                <v-tooltip color="rgb(32, 54, 78)" left>
                    <template v-slot:activator="{on, attrs}">
                        <v-btn
                                class="map-control__btn"
                                color="rgb(32, 54, 78)"
                                dark
                                fab
                                @click="goHome()"
                                v-bind="attrs"
                                v-on="on"
                        >
                            <v-icon> mdi-home</v-icon>
                        </v-btn>
                    </template>
                    <span>
                    Домой
                </span>
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
                    <span>
                    Увеличить
                </span>
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
                    <span>
                    Уменьшить
                </span>
                </v-tooltip>
            </div>
        </div>
    </v-main>
</template>

<script>
    /* eslint-disable */
    import mapMixin from '../mixins/mapMixin.js';
    import mapMarkersMixin from '../mixins/mapMarkersMixin.js';
    import mapContentMixin from '../mixins/mapContentMixin.js';
    import mapActionsMixin from '../mixins/mapActionsMixin.js';
    import filterTypesMixin from "../mixins/filterTypesMixin";
    import mapMinesMixin from "../mixins/mapMinesMixin";

    import {coalMarks } from '../workers/coal-data.worker';

    import Card from '../components/Card';
    import ModalContent from '../components/ModalContent';
    import ListItem from "../components/ListItem";

    export default {
        name: "Map",
        props: {
            loader: {
                type: Boolean,
                default: true
            },
            types: {
                type: Array,
                required: true
            },
            objects: {
                type: Array,
                required: true
            },
            mines: {
                type: Array,
                required: true
            }
        },
        mixins: [mapMixin, mapActionsMixin, filterTypesMixin, mapContentMixin, mapMarkersMixin, mapMinesMixin],
        components: {
            Card, ModalContent, ListItem
        },
        data() {
            return {
                dialog: false,
                selectedItem: null,
                workersDone: false,
                searchList: false,
                filterList: false,
                searchQuery: '',
                typesLoad: null,
                objectsLoad: null,
                benched: 0
            }
        },
        mounted() {
            this.symbolCreate();
            this.setAmounts().then(this.assignData);
        },
        methods: {
            async setAmounts(filter = false) {
                return await coalMarks(this.objectsLoad, this.filteredObjects, filter);
            },
            assignData(result) {
                this.filter.coalTypes = Object.freeze(result.coalTypes);
                this.coalTypesList = Object.freeze(result.coalTypesList);
                let amounts = result.corporatesCount;
                Object.keys(this.corporates).forEach(el => {
                    this.corporates[el].amount = amounts[el].amount
                });
            },
            symbolCreate() {
                const wrp = document.createElement('div');
                const sprite = document.querySelector('.icons-set');
                wrp.style.display = 'none';
                this.types.forEach(icon => {
                    wrp.innerHTML = icon.icon;
                    let innerIcon = wrp.querySelector('svg').innerHTML;
                    let attributes = wrp.querySelector('svg').attributes;
                    let attrStr = ''
                    for (let key in attributes) {
                        if (
                            attributes[key].name !== 'id' &&
                            attributes[key].name !== 'height' &&
                            attributes[key].name !== 'width' &&
                            !!attributes[key].value
                        ) {
                            attrStr += attributes[key].name + '=' + '"' + attributes[key].value + '"';
                        }
                    }
                    let symbol = `<symbol id="type_icon_${icon.id}"  ${attrStr} > ${innerIcon} </symbol>`;
                    sprite.innerHTML += symbol;
                })
            },
            showSidebar(type) {
                requestAnimationFrame(() => {
                    if (type) {
                        this.searchList = this.searchList && !this.searchList;
                        this.filterList = !this.filterList;
                    } else {
                        this.filterList = this.filterList && !this.filterList;
                        this.searchList = !this.searchList;
                    }
                    if (Math.floor(this.chart.zoomLevel) === 1) {
                        this.chart.goHome();
                    }
                });
            },
            getObjectsAmount(id) {
                return this.filteredCounter.filter(el => el.type.id == id).length
            }
        },
        computed: {
            isSidebar() {
                return this.filterList || this.searchList;
            },
        },
        watch: {
            dialog() {
                this.dialog ? this.showLines() : this.clearActive();
            }
        },
    }
</script>

<style lang="scss">
    html {
        overflow: hidden!important;
    }
    .v-main {
        background-color: rgba(146, 146, 146, 1);
        transition: .3s ease-in-out;

        &.isLoaded {
            background-color: rgba(146, 146, 146, 0);
        }
    }

    .left-bar {
        max-width: 264px;
        position: absolute;
        z-index: 10;
        display: flex;
        flex-direction: column;
        flex-wrap: wrap;
        max-height: calc(100vh - 128px);
        transform: translateY(-50%);
        top: 50%;
        margin-top: 1rem;
        @media (min-height: 800px) {
            margin-top: 0;
        }
    }

    .clear-btn {
        &__wrapper {
            position: fixed !important;
            top: 0;
            left: 0;
            right: 0;
            z-index: 10;
        }
    }

    body {
        font-family: Roboto, sans-serif;
    }


    .active--text {
        color: #fb5817 !important;
        caret-color: #fb5817 !important;
    }

    .v-navigation-drawer {
        z-index: 210 !important;
        transition-duration: 0.25s;
        transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    }

    .bottom-btn__wrapper {
        position: absolute;
        bottom: 96px;
        right: 16px;
    }

    .copy-link {
        text-decoration: none;
        color: #fff !important;
        font-weight: 600;
        cursor: pointer;
        transition: .3s ease-in-out;

        &:hover {
            color: #fb5817 !important;
            text-decoration: none;

        }
    }

    .v-list-item-group:last-child {
        margin-bottom: 2rem;
    }

    .filter-collapse-group {
        .v-subheader {
            padding: 0 !important;
            display: flex !important;;
            flex-grow: 1 !important;;
        }
    }

    .v-list-item-group:empty {
        &:after {
            content: 'Ничего не найдено...';
            color: rgba(34, 34, 34, 0.49);
            position: absolute;
            left: 50%;
            transform: translateX(-50%);
            top: 16px;
            font-size: 14px;
        }
    }

    .v-list-item__title {
        font-size: 15px;
    }

    .v-btn.close-btn {
        position: absolute !important;
        top: 0 !important;
        right: .75rem !important;
        margin-top: 1rem !important;
    }

    .search-box {
        margin-bottom: -1rem;
        position: fixed;
        width: 100%;
        top: 0;
        right: 0;
        z-index: 10;
        padding: .5rem;

    }

    .v-text-field {
        padding: 0 1rem;
    }

    .search-list {
        margin-top: 64px;
    }

    .v-text-field__details {
        display: none !important;
    }

    .v-dialog.v-bottom-sheet {
        position: relative;
        margin-bottom: 32px !important;
        width: 100% !important;
        max-width: 100% !important;
        @media (min-width: 768px) {
            max-width: 90% !important;
        }
        @media (min-width: 1024px) {
            max-width: 80% !important;
        }
        @media (min-width: 1280px) {
            max-width: 1100px !important;
        }
    }

    .filter-container {
        display: flex;
        flex-direction: column;
        padding: 16px 16px 40px;
    }

    .divider-filter {
        margin-left: 16px;
        margin-right: 16px;
        width: calc(100% - 32px);
    }

    .sub-amount {
        opacity: .4;
        font-size: .8em;
    }

    .list-translate {
        transition: all .25s ease-out .2s !important;
        transform: translateY(0) !important;;

        &--active {
            transition: all .25s ease-in !important;;
            transform: translateY(48px) !important;;
        }
    }

    .slide-left {
        @media(min-width: 768px) {
            -webkit-transform: translateX(-20rem) !important;
            -ms-transform: translateX(-20rem) !important;
            -webkit-transform: translateX(-20rem) !important;
            -moz-transform: translateX(-20rem) !important;
            -o-transform: translateX(-20rem) !important;
            transform: translateX(-20rem) !important;
            transition-duration: 0.28s;
            transition-property: box-shadow, transform, opacity;
            transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);

        }
    }

    .clear-btn {
        &__wrapper {
            position: fixed !important;
            top: 0;
            left: 0;
            right: 0;
            z-index: 10;
        }
    }

    @keyframes logo-appear {
        from {
            transform: translateY(-10rem);
        }
        to {
            transform: translateY(0);
        }
    }

    .logo {
        height: 2rem;
        width: 2rem;
    }

    .logo-block {
        position: absolute;
        display: flex;
        flex-direction: row;
        padding: 1rem;
        color: #fff;
        z-index: 5100;
        transition: color .3s ease-in-out;
        animation: logo-appear;
        animation-duration: .5s;
        animation-fill-mode: forwards;
        animation-iteration-count: 1;
        will-change: color, transform;

        &:hover {
            cursor: pointer;
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
    }

    .arrow-line {
        path {
            stroke: rgba(255, 255, 255, .6);
            stroke-dasharray: 0.0625rem;
            stroke-dashoffset: 0.0625rem;
            opacity: 0;
            animation: dash 300ms ease-in-out forwards;
        }
    }

    @keyframes dash {
        to {
            opacity: 1;
        }
    }

</style>