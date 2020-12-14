<template>
    <v-app>
        <v-navigation-drawer
                right
                fixed
                width="320"
                v-model="filterList"
                v-if="!loading"
        >
            <transition name="slide-down" appear>
                <v-list-item v-show="showClearBtn" class="clear-btn__wrapper">
                    <v-list-item-content>
                        <v-list-item-title>
                            <v-btn class="clear-btn" block @click.stop="clearFilter()" color="#fb5817" dark>
                                Сбросить фильтр
                                <v-icon right dark>mdi-close</v-icon>
                            </v-btn>
                        </v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
            </transition>
            <v-list expand :class="['pb-8 list-translate', showClearBtn && 'list-translate--active']">
                <v-list-group :value="true" v-model="filterView.rate" no-action class="filter-collapse-group"
                              color="#fb5817">
                    <template v-slot:activator>
                        <v-tooltip color="rgb(32, 54, 78)" left>
                            <template v-slot:activator="{on, attrs}">
                                <v-subheader v-bind="attrs" v-on="on">Потребление:</v-subheader>
                            </template>
                            <span v-if="filterList">Тысяч тонн в год</span>
                        </v-tooltip>
                    </template>
                    <v-list-item-group
                            v-model="filterState.rate"
                            multiple
                            active-class="active--text object-list-item--active"

                    >
                        <template v-for="(item, i) in filter.rate">
                            <v-list-item
                                    :key="`item-${i}`"
                                    :value="item.val"
                                    @click.stop="updateMarkerFilter(true)"
                            >
                                <template v-slot:default="{ active }">
                                    <v-list-item-content>
                                        <v-list-item-title
                                                v-text="item.title"></v-list-item-title>
                                    </v-list-item-content>
                                    <v-list-item-action>
                                        <v-checkbox
                                                :input-value="active"
                                                color="#fb5817"
                                        ></v-checkbox>
                                    </v-list-item-action>
                                </template>
                            </v-list-item>
                        </template>
                    </v-list-item-group>
                    <v-divider class="divider-filter mt-4 "/>
                </v-list-group>
                <v-list-group :value="true" v-if="coalTypesList" v-model="filterView.coal" no-action
                              class="filter-collapse-group"
                              color="#fb5817">
                    <template v-slot:activator>
                        <v-subheader>Тип потребляемого угля:</v-subheader>
                    </template>
                    <v-list-item-group
                            v-model="filterState.type"
                            multiple
                            active-class="active--text object-list-item--active"

                    >
                        <template v-for="(item, i) in coalTypesList">
                            <v-list-item
                                    :key="`item-${i}`"
                                    :value="item.val"
                                    @click.stop="updateMarkerFilter()"
                                    :disabled="!item.amount"

                            >
                                <template v-slot:default="{ active }">
                                    <v-list-item-content>
                                        <v-list-item-title>
                                            <span>{{ item.marks ? item.description : item.title }} </span> <span
                                                class="sub-amount">({{item.amount}})</span>
                                        </v-list-item-title>
                                        <v-list-item-subtitle style="font-size: 12px" v-text="item.marks ? item.marks.join(', ') : item.description"/>
                                    </v-list-item-content>
                                    <v-list-item-action>
                                        <v-checkbox
                                                :input-value="active"
                                                color="#fb5817"
                                        ></v-checkbox>
                                    </v-list-item-action>
                                </template>
                            </v-list-item>
                        </template>
                    </v-list-item-group>
                    <v-divider class="divider-filter mt-4 mb-4"/>
                </v-list-group>
                <v-list-group :value="true" v-model="filterView.corp" no-action class="filter-collapse-group"
                              color="#fb5817">
                    <template v-slot:activator>
                        <v-subheader>Группа компаний:</v-subheader>
                    </template>
                    <v-list-item-group
                            v-model="filterState.corp"
                            multiple
                            active-class="active--text object-list-item--active"
                    >
                        <template v-for="(item, i) in corporates">
                            <v-list-item
                                    :key="`item-${i}`"
                                    :value="item.id"
                                    @click.stop="updateMarkerFilter(true)"
                                    :disabled="!item.amount"
                            >
                                <template v-slot:default="{ active }">
                                    <v-list-item-content>
                                        <v-list-item-title>
                                            <span>{{ item.title }} </span>
                                            <span class="sub-amount">({{ item.amount }})</span>
                                        </v-list-item-title>
                                    </v-list-item-content>
                                    <v-list-item-action>
                                        <v-checkbox
                                                :input-value="active"
                                                color="#fb5817"
                                        ></v-checkbox>
                                    </v-list-item-action>
                                </template>
                            </v-list-item>
                        </template>
                    </v-list-item-group>
                    <v-divider class="divider-filter mt-4 mb-4"/>
                </v-list-group>
                <v-list-group :value="true" v-model="filterView.road" no-action class="filter-collapse-group"
                              color="#fb5817">
                    <template v-slot:activator>
                        <v-subheader>Ж/Д сообщение:</v-subheader>
                    </template>
                    <v-list-item-group
                            v-model="filterState.road"
                            multiple
                            active-class="active--text object-list-item--active"
                    >
                        <template v-for="(item, i) in filter.road">
                            <v-list-item
                                    :key="`item-${i}`"
                                    :value="item.val"
                                    @click.stop="updateMarkerFilter(true)"
                            >
                                <template v-slot:default="{ active }">
                                    <v-list-item-content>
                                        <v-list-item-title>
                                            {{ item.title }}
                                        </v-list-item-title>
                                    </v-list-item-content>
                                    <v-list-item-action>
                                        <v-checkbox
                                                :input-value="active"
                                                color="#fb5817"
                                        ></v-checkbox>
                                    </v-list-item-action>
                                </template>
                            </v-list-item>
                        </template>
                    </v-list-item-group>
                    <v-divider class="divider-filter mt-4 mb-4"/>
                </v-list-group>
                <v-list-group :value="true" v-model="filterView.info" no-action class="filter-collapse-group"
                              color="#fb5817">
                    <template v-slot:activator>
                        <v-subheader>Информация:</v-subheader>
                    </template>
                    <v-list-item-group
                            v-model="filterState.info"
                            multiple
                            active-class="active--text object-list-item--active"
                    >
                        <template v-for="(item, i) in filter.info">
                            <v-list-item
                                    :key="`item-${i}`"
                                    :value="item.val"
                                    @click.stop="updateMarkerFilter(true)"
                            >
                                <template v-slot:default="{ active }">
                                    <v-list-item-content>
                                        <v-list-item-title>
                                            {{ item.title }}
                                        </v-list-item-title>
                                    </v-list-item-content>
                                    <v-list-item-action>
                                        <v-checkbox
                                                :input-value="active"
                                                color="#fb5817"
                                        ></v-checkbox>
                                    </v-list-item-action>
                                </template>
                            </v-list-item>
                        </template>
                    </v-list-item-group>
                    <v-divider class="divider-filter mt-4 mb-4"/>
                </v-list-group>
                <v-list-group :value="true" v-model="filterView.mines" no-action class="filter-collapse-group"
                              color="#fb5817">
                    <template v-slot:activator>
                        <v-subheader>Отображение:</v-subheader>
                    </template>
                    <v-list-item-group
                            v-model="filterState.mines"
                            multiple
                            active-class="active--text object-list-item--active"
                    >

                        <v-list-item
                                :value="filterState.mines.mines"
                                @click.stop="toggleMinesCard()"
                        >
                            <template v-slot:default="{ active }">
                                <v-list-item-content>
                                    <v-list-item-title>
                                        Скрыть шахты
                                    </v-list-item-title>
                                </v-list-item-content>
                                <v-list-item-action>
                                    <v-checkbox
                                            :input-value="active"
                                            color="#fb5817"
                                    ></v-checkbox>
                                </v-list-item-action>
                            </template>
                        </v-list-item>
                        <v-list-item
                                :value="filterState.mines.lines"
                                :disabled="filterState.mines.includes(0)"
                        >
                            <template v-slot:default="{ active }">
                                <v-list-item-content>
                                    <v-list-item-title>
                                        Скрыть пути
                                    </v-list-item-title>
                                </v-list-item-content>
                                <v-list-item-action>
                                    <v-checkbox
                                            :input-value="active"
                                            color="#fb5817"
                                    ></v-checkbox>
                                </v-list-item-action>
                            </template>
                        </v-list-item>
                    </v-list-item-group>
                </v-list-group>
            </v-list>
        </v-navigation-drawer>
        <v-navigation-drawer
                right
                fixed
                width="320"
                v-model="searchList"
                v-if="!loading"
        >
            <div class="search-box">
                <v-text-field
                        label="Поиск"
                        append-icon="mdi-magnify"
                        solo
                        outlined
                        v-model="searchQuery"
                />
            </div>
            <v-list three-line class="search-list">
                <v-list-item-group
                        v-model="selectedItem"
                        active-class="active--text object-list-item--active"
                >
                    <div class="empty-state pl-3 pr-3" v-show="!searchedObjects.length">Ничего не найдено...</div>
                    <v-virtual-scroll
                            :bench="benched"
                            :items="searchedObjects"
                            height="calc(100vh - 104px)"
                            item-height="95px"
                    >
                        <template v-slot:default="{ item, index }">
                            <ListItem
                                    :key="item.title +'-'+ item.id"
                                    :id="item.id"
                                    :index="index"
                                    :title="item.title"
                                    :type="item.type.name"
                                    :address="item.address"
                                    :selected="!!selectedItem"
                                    @select="listToCurrent"
                                    @enter="toggleActiveMarker"
                                    @leave="clearActiveMarker"
                            />
                        </template>
                    </v-virtual-scroll>

                </v-list-item-group>
            </v-list>
        </v-navigation-drawer>
        <div @click="goHome()" :class="['logo-block', !loading && 'logo-block--active']">
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
            >COAL MAP
            </v-toolbar-title>
        </div>
        <v-main :class="{ 'isLoaded' : !loading }">
            <Loader :isLoaded="!loading"/>
            <transition-group name="slide-y" appear tag="div" class="left-bar" v-if="!loading">
                <Card
                        v-for="type in types.filter(t => t.id !== 6)"
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
                <Card
                    class="slide-y-item toggler toggler--active"
                    :type="'Шахты'"
                    :key="'card-mines'"
                    :id="'mines'"
                    :color="'rgb(43, 43, 43)'"
                    :value="mines.length"
                    @toggle="toggleMines()"
                />
            </transition-group>
            <v-container class="map flex-grow-1 fill-height container--fluid pa-0" ref="map"/>
            <div v-if="!loading">
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
                <v-tooltip color="rgb(32, 54, 78)" left>
                <template v-slot:activator="{on, attrs}">
                  <v-btn
                      style="bottom: 10rem; right: 1rem"
                      :class="['control-btns-block', isSidebar && 'slide-left', !loading && 'btn-appear']"
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
        <Dashboard :active="dashboard"
                   :objects="objectsLoad"
                   @closeDashboard="closeDashboard()"
                   @toggleItem="listToCurrent"/>
        <v-bottom-sheet
                inset
                width="80%"
                v-model="dialog"
                overlay-opacity="0"
                z-index="1200"
        >
            <v-sheet>
                <ModalContent v-show="openedObject" :object="openedObject"/>
                <v-tooltip color="red" top>
                    <template v-slot:activator="{ on, attrs }">
                        <v-btn icon
                               class="close-btn"
                               text
                               color="red"
                               @click="dialog = !dialog"
                               title="закрыть"
                               v-bind="attrs"
                               v-on="on"
                        >
                            <v-icon>mdi-close</v-icon>
                        </v-btn>
                    </template>
                    <span>Закрыть</span>
                </v-tooltip>
            </v-sheet>
        </v-bottom-sheet>
        <Footer v-once/>
        <svg xmlns="http://www.w3.org/2000/svg" class="icons-set" width="0" height="0" aria-hidden="true">
            <symbol id="type_icon_mines" enable-background="new 0 0 512 512" viewBox="0 0 512 512" fill="currentColor"
                    x="0px" y="0px" xml:space="preserve">
                    <circle cx="222.631" cy="95.01" r="16.696"/>
                <circle cx="389.588" cy="95.01" r="16.696"/>
                <path d="M349.391,40.984L310.039,1.63c-2.174-2.174-5.695-2.174-7.869,0l-39.354,39.353c-2.174,2.174-2.202,5.669-0.029,7.841    c8.885,8.887,30.524,30.527,39.409,39.412c2.174,2.174,5.669,2.144,7.843-0.029l39.353-39.353    C351.565,46.681,351.565,43.158,349.391,40.984z"/>
                <path d="M489.74,233.74h-26.482l-71.633-71.528c-9.462-9.538-22.054-14.793-35.456-14.793    c-13.408,0.006-25.994,5.256-35.375,14.718l-14.728,14.669l-14.614-14.592c-9.462-9.538-22.054-14.793-35.456-14.793    c-13.408,0.006-25.994,5.256-35.375,14.718l-14.688,14.668l-14.655-14.592c-9.462-9.538-22.054-14.793-35.456-14.793    c-13.408,0.006-25.994,5.256-35.391,14.733l-71.69,71.586H22.261c-9.22,0-16.696,7.475-16.696,16.696    c0,9.22,7.475,16.696,16.696,16.696h19.108c17.239,110.025,11.19,71.343,26.534,169.701c4.027,24.206,24.81,41.777,49.412,41.777    h8.195c6.915,19.391,25.275,33.391,47.01,33.391s40.095-14,47.01-33.391h72.934c6.915,19.391,25.275,33.391,47.01,33.391    s40.095-14,47.01-33.391h8.195c24.603,0,45.385-17.571,49.44-41.951c15.323-98.233,9.259-59.451,26.507-169.528h19.11    c9.22,0,16.696-7.475,16.696-16.696C506.435,241.215,498.96,233.74,489.74,233.74z M344.359,185.795    c3.282-3.31,7.326-4.984,11.826-4.984c4.478,0,8.544,1.701,11.75,4.924l48.076,48.006h-52.924l-33.369-33.369L344.359,185.795z     M244.218,185.762c3.25-3.277,7.294-4.951,11.794-4.951c4.478,0,8.544,1.701,11.75,4.924l48.065,48.004H196.174L244.218,185.762z     M144.033,185.783c3.261-3.293,7.305-4.973,11.804-4.973c4.478,0,8.544,1.701,11.75,4.924l14.695,14.635l-33.369,33.37H96    L144.033,185.783z M172.522,478.609c-9.206,0-16.696-7.49-16.696-16.696s7.49-16.696,16.696-16.696    c9.206,0,16.696,7.49,16.696,16.696S181.729,478.609,172.522,478.609z M339.479,478.609c-9.206,0-16.696-7.49-16.696-16.696    s7.49-16.696,16.696-16.696s16.696,7.49,16.696,16.696S348.686,478.609,339.479,478.609z M411.142,431.512    c-1.327,7.935-8.109,13.706-16.456,13.706h-7.978c-6.795-19.197-25.856-33.391-47.229-33.391    c-20.61,0-40.159,13.426-47.229,33.391h-72.5c-7.017-19.814-26.546-33.391-47.229-33.391c-20.61,0-40.159,13.426-47.229,33.391    h-7.977c-8.337,0-15.12-5.707-16.479-13.875l-9.977-64.038h330.293L411.142,431.512z"/>
            </symbol>
        </svg>
    </v-app>
</template>

<script>
    /* eslint-disable */
    import mapMixin from '../mixins/mapMixin.js';
    import mapMarkersMixin from '../mixins/mapMarkersMixin.js';
    import mapContentMixin from '../mixins/mapContentMixin.js';
    import mapActionsMixin from '../mixins/mapActionsMixin.js';
    import filterTypesMixin from "../mixins/filterTypesMixin";
    import mapMinesMixin from "../mixins/mapMinesMixin";
    import ListItem from "./ListItem";
    import { coalMarks } from '../workers/coal-data.worker';

    import Loader from './Loader';
    import Footer from './Footer';
    import Card from './Card';
    import ModalContent from './ModalContent';
    import Dashboard from "./Dashboard";

    export default {
        mixins: [mapMixin, mapActionsMixin, filterTypesMixin, mapContentMixin, mapMarkersMixin, mapMinesMixin],
        props: ['types', 'objects', 'mines'],
        name: "App",
        components: {
            Loader, Card, ModalContent, Footer, ListItem, Dashboard
        },
        data() {
            return {
                section: '#tab-map',
                dialog: false,
                selectedItem: null,
                loading: true,
                workersDone: false,
                searchList: false,
                filterList: false,
                searchQuery: '',
                typesLoad: null,
                objectsLoad: null,
                benched: 0,
                dashboard: false,
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
            },
            toggleMines() {
              this.updateMines();
              this.filterState.mines.length ? this.filterState.mines.pop() :  this.filterState.mines.push(0);
            },
            toggleMinesCard() {
              document.getElementById('mines-card-toggler').click();
              this.filterState.mines.length ? this.filterState.mines.pop() :  this.filterState.mines.push(0);
            },
            closeDashboard() {
              this.dashboard = false;
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
    };
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
        transition: color .3s ease-in-out;
    }

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

    .invanders-polygon {
      pointer-events: none;
    }
    .dashboard-window {
      z-index: 301;
      margin-bottom: 32px !important;


      &__header {
        border-radius: 0!important;
      }
    }

</style>
