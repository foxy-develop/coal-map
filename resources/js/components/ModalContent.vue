<template>
    <v-container
            fluid
            class="fill-height flex-grow-1 modal-content"
            id="printData"
    >
        <div class="modal-content__header">
            <div
                    class="modal-content__icon"
                    :style="{
                      backgroundColor: object.type.color,
                      borderColor: object.type.color
                    }"
                    v-html="object.type.icon"
            />
            <div class="ml-4 mr-12 modal-content__title">
                <div class="modal-content__headline" v-text="object.title.toUpperCase()"/>
                <div class="modal-content__warn" v-if="object.subtitle">
                    <v-icon>mdi-alert-circle mdi-spin</v-icon>
                    <span v-text="object.subtitle"/>
                </div>
                <div class="modal-content__success" v-if="object.is_verified">
                    <v-icon>mdi-check-circle</v-icon>
                    <span>Информация проверена</span>
                </div>
                <div class="modal-content__subtitle" v-text="object.type.name"/>
            </div>
            <div class="modal-content__logo">
                <svg
                        class="logo"
                        height="32px"
                        fill="currentColor"
                        viewBox="0 -30 512 512"
                        width="32px"
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
                <span>COAL MAP</span>
            </div>
        </div>
        <div class="modal-content__content pb-1 flex-grow-1">
            <v-row class="flex-grow-1 justify-space-between">
                <v-col class="pb-0 pt-0">
                    <div class="modal-content__group">
                        <div class="modal-content__name">
                            <span>Конечный бенефициар:</span>
                        </div>
                        <div v-if="object.owner">
                            <div
                                    class="modal-content__value modal-content__value--column"
                                    v-for="(owner, i) in object.owner.split(',')"
                                    :key="i"
                            >
                                <div>
                                    <v-icon
                                            :color="object.type.color"
                                            class="mr-1"
                                            v-text="'mdi-file-account'"
                                    />
                                    <span v-text="owner.trim()"/>
                                </div>
                            </div>
                        </div>
                        <div v-else class="modal-content__no-info">
                            <v-icon color="danger" size="14" class="mr-1"
                            >mdi-alert-circle
                            </v-icon
                            >
                            <span>Информация недоступна</span>
                        </div>
                    </div>
                    <div class="modal-content__group">
                        <div class="modal-content__name">Контактное лицо:</div>
                        <div class="modal-content__value" v-if="object.person">
                            <v-icon
                                    :color="object.type.color"
                                    :class="[
                  object.personSubtitle && 'modal-content__value--top',
                  'mr-1'
                ]"
                            >mdi-account
                            </v-icon
                            >
                            <span v-text="object.person"/>
                        </div>
                        <div class="modal-content__no-info" v-else>
                            <v-icon color="danger" size="14" class="mr-1"
                            >mdi-alert-circle
                            </v-icon
                            >
                            <span>Информация недоступна</span>
                        </div>
                        <div
                                class="modal-content__value modal-content__value--sub"
                                v-if="object.personSubtitle && object.person"
                                v-text="
                object.personSubtitle
                  ? object.personSubtitle
                  : 'генеральный директор'
              "
                        />

                    </div>
                    <div class="modal-content__group"  v-if="object.type.id !== 'mines'">
                      <div class="modal-content__name">
                        <span>Сайт:</span>
                      </div>
                      <v-tooltip top v-if="object.site" color="info">
                        <template v-slot:activator="{on, attrs}">
                          <a
                              class="modal-content__value modal-content__address"
                              :title="object.title"
                              :href="object.site"
                              target="_blank"
                              rel="nofollow"
                              v-bind="attrs"
                              v-on="on"
                          >
                            <v-icon
                                :color="object.type.color"
                                class="mr-1"
                                v-text="'mdi-web'"
                            />
                            <span v-text="formatUrl(object.site)"/>
                          </a>
                        </template>
                        <span>Перейти на {{ formatUrl(object.site) }}</span>
                      </v-tooltip>

                      <div class="modal-content__no-info" v-else>
                        <v-icon color="danger" size="14" class="mr-1"
                        >mdi-alert-circle
                        </v-icon
                        >
                        <span>Информация недоступна</span>
                      </div>
                      <div/>
                    </div>
                    <div class="modal-content__group">
                        <div class="modal-content__name">Телефоны:</div>
                        <div v-if="object.phones" class="modal-content__value modal-content__value--column">
                            <a
                                    :href="'tel:' + formatPhone(phone)"
                                    title="Позвонить"
                                    class="modal-content__phone"
                                    v-for="(phone, i) in object.phones.split(',')"
                                    :key="i"
                            >
                                <v-icon
                                        :color="object.type.color"
                                        v-text="'mdi-phone'"
                                        class="phone-icon"
                                        size="16"
                                />
                                <span v-text="formatPhone(phone)"/>
                            </a>
                        </div>
                        <div class="modal-content__no-info" v-else>
                            <v-icon color="danger" size="14" class="mr-1"
                            >mdi-alert-circle
                            </v-icon
                            >
                            <span>Информация недоступна</span>
                        </div>
                    </div>
                </v-col>
                <v-col class="pb-0 pt-0">
                    <div class="modal-content__group" v-if="object.type.id !== 'mines'">
                        <div class="modal-content__name">
                            <span>Адрес:</span>
                        </div>
                        <v-tooltip top v-if="object.address" color="info">
                            <template v-slot:activator="{ on, attrs }">
                                <a
                                        class="modal-content__value modal-content__address"
                                        title="Открыть в Google Maps"
                                        :href="'http://maps.google.com/maps?q=' + object.address"
                                        target="_blank"
                                        rel="nofollow"
                                        v-bind="attrs"
                                        v-on="on"
                                >
                                    <v-icon
                                            :color="object.type.color"
                                            class="mr-1"
                                            v-text="'mdi-map-marker'"
                                    />
                                    <span v-text="object.address"/>
                                </a>
                            </template>
                            <span>Посмотреть на картах Google</span>
                        </v-tooltip>
                        <div class="modal-content__no-info" v-else>
                            <v-icon color="danger" size="14" class="mr-1"
                            >mdi-alert-circle
                            </v-icon
                            >
                            <span>Информация недоступна</span>
                        </div>
                        <div/>
                    </div>
                    <div class="modal-content__group" v-if="object.type.id !== 'mines'">
                        <div class="modal-content__name">Расход угля:</div>
                        <div class="modal-content__value" v-if="object.rate">
                            <v-icon :color="object.type.color" class="mr-1">mdi-shovel</v-icon>
                            <v-tooltip top color="info">
                                <template v-slot:activator="{ on, attrs }">
                                    <span v-bind="attrs" v-on="on"
                                          v-text="parsedRate + (object.type.name !== 'Котельные' ? ' тыс. т' : '')"/>
                                </template>
                                <span v-if="object.type.name !== 'Котельные'">
                                    Тысяч тонн в год
                                </span>
                                <span v-else>Тонн в год</span>

                            </v-tooltip>
                            <v-tooltip top color="info">
                                <template v-slot:activator="{ on, attrs }">
                                    <a
                                            v-if="object.type.name !== 'Котельные'"
                                            href="http://mpe.kmu.gov.ua/minugol/control/uk/publish/officialcategory?cat_id=245183254"
                                            title="Информация взята с mpe.kmu.gov.ua"
                                            class="icon-link"
                                            target="_blank"
                                            rel="nofollow"
                                            v-bind="attrs"
                                            v-on="on"
                                    >
                                        <v-icon color="info" class="ml-2"> mdi-information-outline</v-icon>
                                    </a>
                                    <a
                                            v-else
                                            href="http://prozorro.gov.ua"
                                            title="Информация взята с prozorro.gov.ua"
                                            class="icon-link"
                                            target="_blank"
                                            rel="nofollow"
                                            v-bind="attrs"
                                            v-on="on"
                                    >
                                        <v-icon color="info" class="ml-2"> mdi-information-outline</v-icon>
                                    </a>
                                </template>
                                <span v-if="object.type.name !== 'Котельные'">
                                    Информация взята с mpe.kmu.gov.ua
                                </span>
                                <span v-else> Информация взята с prozorro.gov.ua</span>
                            </v-tooltip>
                        </div>
                        <div class="modal-content__no-info" v-else>
                            <v-icon color="danger" size="14" class="mr-1"
                            >mdi-alert-circle
                            </v-icon
                            >
                            <span>Информация недоступна</span>
                        </div>
                    </div>
                    <div class="modal-content__group" v-else>

                      <div class="modal-content__name">Добыча угля:</div>

                      <div class="modal-content__value" v-if="object.rate">
                        <v-icon :color="object.type.color" class="mr-1">mdi-shovel</v-icon>
                        <v-tooltip top color="info">
                            <template v-slot:activator="{ on, attrs }">
                                         <span
                                             v-bind="attrs"
                                             v-on="on"
                                             v-text="parsedRate + ' тыс. т'"
                                             @click.stop="openModal()"
                                         />
                            </template>
                            <span v-if="childrensData && childrensData.length">Подробнее →</span>
                            <span v-else>Тысяч тонн в год</span>
                        </v-tooltip>
                        <ModalData
                            :active="modalData"
                            @close="closeModal()"
                            v-if="childrensData && childrensData.length"
                            :color="object.type.color"
                            :title="object.title"
                            :rate="object.rate"
                            :childs="childrensData"
                        />
                        <v-tooltip top color="info">
                          <template v-slot:activator="{ on, attrs }">
                            <a
                                v-if="object.type.name !== 'Котельные'"
                                href="http://mpe.kmu.gov.ua/minugol/control/uk/publish/officialcategory?cat_id=245183254"
                                title="Информация взята с mpe.kmu.gov.ua"
                                class="icon-link"
                                target="_blank"
                                rel="nofollow"
                                v-bind="attrs"
                                v-on="on"
                            >
                              <v-icon color="info" class="ml-2"> mdi-information-outline</v-icon>
                            </a>
                            <a
                                v-else
                                href="http://prozorro.gov.ua"
                                title="Информация взята с prozorro.gov.ua"
                                class="icon-link"
                                target="_blank"
                                rel="nofollow"
                                v-bind="attrs"
                                v-on="on"
                            >
                              <v-icon color="info" class="ml-2"> mdi-information-outline</v-icon>
                            </a>
                          </template>
                          <span v-if="object.type.name !== 'Котельные'">
                                      Информация взята с mpe.kmu.gov.ua
                                  </span>
                          <span v-else> Информация взята с prozorro.gov.ua</span>
                        </v-tooltip>
                      </div>
                      <div class="modal-content__no-info" v-else>
                        <v-icon color="danger" size="14" class="mr-1"
                        >mdi-alert-circle
                        </v-icon
                        >
                        <span>Информация недоступна</span>
                      </div>
                    </div>
                    <div class="modal-content__group">
                      <div class="modal-content__name">
                        <span>Зольность угля:</span>
                      </div>
                      <div v-if="object.ash">
                        <div class="modal-content__value modal-content__value--column">
                          <div>
                            <v-icon :color="object.type.color" class="mr-1">mdi-shovel</v-icon>
                            <span>{{object.ash}}%</span>
                          </div>
                        </div>
                      </div>
                      <div v-else class="modal-content__no-info">
                        <v-icon color="danger" size="14" class="mr-1"
                        >mdi-alert-circle
                        </v-icon
                        >
                        <span>Информация недоступна</span>
                      </div>
                    </div>
                    <div class="modal-content__group">
                          <div class="modal-content__name">Марка угля:</div>
                          <div v-if="object.coalType" class="modal-content__value modal-content__value--column">
                              <div class="d-flex full-width" v-for="(type, i) in object.coalType.split(',')"
                                   :key="i">
                                  <v-icon size="14" :color="object.type.color" class="mr-1">mdi-tag
                                  </v-icon
                                  >
                                  <span v-text="type.trim()"/>
                              </div>
                          </div>
                          <div class="modal-content__no-info" v-else>
                              <v-icon color="danger" size="14" class="mr-1"
                              >mdi-alert-circle
                              </v-icon
                              >
                              <span>Информация недоступна</span>
                          </div>
                      </div>
                </v-col>
                <v-col class="pb-0 pt-0">
                    <div class="modal-content__group"  v-if="object.type.id === 'mines'">
                      <div class="modal-content__name">
                        <span>Сайт:</span>
                      </div>
                      <v-tooltip top v-if="object.site" color="info">
                        <template v-slot:activator="{on, attrs}">
                          <a
                              class="modal-content__value modal-content__address"
                              :title="object.title"
                              :href="object.site"
                              target="_blank"
                              rel="nofollow"
                              v-bind="attrs"
                              v-on="on"
                          >
                            <v-icon
                                :color="object.type.color"
                                class="mr-1"
                                v-text="'mdi-web'"
                            />
                            <span v-text="formatUrl(object.site)"/>
                          </a>
                        </template>
                        <span>Перейти на {{ formatUrl(object.site) }}</span>
                      </v-tooltip>

                      <div class="modal-content__no-info" v-else>
                        <v-icon color="danger" size="14" class="mr-1"
                        >mdi-alert-circle
                        </v-icon
                        >
                        <span>Информация недоступна</span>
                      </div>
                      <div/>
                    </div>
                    <div class="modal-content__group"  v-if="object.type.id === 'mines'">
                      <div class="modal-content__name">
                        <span>Адрес:</span>
                      </div>
                      <v-tooltip top v-if="object.address" color="info">
                        <template v-slot:activator="{ on, attrs }">
                          <a
                              class="modal-content__value modal-content__address"
                              title="Открыть в Google Maps"
                              :href="'http://maps.google.com/maps?q=' + object.address"
                              target="_blank"
                              rel="nofollow"
                              v-bind="attrs"
                              v-on="on"
                          >
                            <v-icon
                                :color="object.type.color"
                                class="mr-1"
                                v-text="'mdi-map-marker'"
                            />
                            <span v-text="object.address"/>
                          </a>
                        </template>
                        <span>Посмотреть на картах Google</span>
                      </v-tooltip>
                      <div class="modal-content__no-info" v-else>
                        <v-icon color="danger" size="14" class="mr-1"
                        >mdi-alert-circle
                        </v-icon
                        >
                        <span>Информация недоступна</span>
                      </div>
                      <div/>
                    </div>
                    <div class="modal-content__group" v-else>
                        <div class="modal-content__name">
                            <span>Ближайшая шахта:</span>
                        </div>
                        <div
                                class="modal-content__value row mr-0 ml-0"
                        >
                            <v-icon
                                    :color="object.type.color"
                                    v-text="'mdi-ray-start-end'"
                                    class="mr-1"
                            />
                            <div class="modal-content__distance">
                                <div class="modal-content__distance-name">
                                    {{ object.mine_title }}
                                </div>
                                <div class="modal-content__distance-spacer"></div>
                                <div class="modal-content__distance-value">
                                    {{ object.mine_distance }}
                                </div>
                            </div>
                        </div>
                        <div class="modal-content__no-info" v-if="!object.mine_title">
                            <v-icon color="danger" size="14" class="mr-1"
                            >mdi-alert-circle
                            </v-icon
                            >
                            <span>Информация недоступна</span>
                        </div>
                    </div>
                    <div class="modal-content__group mr-0 ml-0 align-baseline">
                        <div class="modal-content__name">
                            <span class="mr-1">Ж/Д сообщение:</span>
                        </div>
                        <div class="modal-content__value" v-if="object.type.id !== 'mines'">
                            <v-icon
                                    :color="object.type.color"
                                    class="mr-1"
                                    v-text="object.railways ? 'mdi-train' : 'mdi-truck'"
                            ></v-icon>
                            <span
                                    :class="[
                  object.railways
                    ? object.railways > 1
                      ? 'modal-content__value--info'
                      : 'modal-content__value--success'
                    : 'modal-content__value--warn',
                  'mr-1'
                ]"
                                    v-text="
                  object.railways
                    ? object.railways > 1
                      ? 'Ж/Д пути находятся поблизости'
                      : 'Собственные ж/д пути '
                    : 'Отсутствует'
                "
                            />
                            <v-icon
                                    size="16"
                                    :color="
                  object.railways
                    ? object.railways > 1
                      ? '#fb8c00'
                      : '#4caf50'
                    : '#ff5252'
                "
                                    v-text="
                  object.railways ? 'mdi-check-circle' : 'mdi-alert-circle'
                "
                            />
                        </div>
                        <div class="modal-content__value" v-else>
                            <v-icon
                                    :color="object.type.color"
                                    class="mr-1"
                                    v-text="'mdi-train'"
                            ></v-icon>
                            <span class="modal-content__value--success"
                                  v-text="'Собственные ж/д пути'"/>
                            <v-icon
                                    size="16"
                                    color="#4caf50"
                                    v-text="'mdi-check-circle'"
                            />
                        </div>
                    </div>
                    <div class="modal-content__group" v-if="object.type.id !== 'mines'">
                        <div class="modal-content__name">
                            <span>Расстояние до пунктов:</span>
                        </div>
                        <div
                                class="modal-content__value row mr-0 ml-0"
                                v-for="distance in object.destinations"
                                :key="distance.name"
                        >
                            <v-icon
                                    :color="object.type.color"
                                    v-text="'mdi-ray-start-end'"
                                    class="mr-1"
                            />
                            <div class="modal-content__distance">
                                <div class="modal-content__distance-name">
                                    {{ distance.name }}
                                </div>
                                <div class="modal-content__distance-spacer"></div>
                                <div class="modal-content__distance-value">
                                    {{ distance.distance }}
                                </div>
                            </div>
                        </div>
                        <div class="modal-content__no-info" v-if="!object.railways">
                            <v-icon color="danger" size="14" class="mr-1"
                            >mdi-alert-circle
                            </v-icon
                            >
                            <span>Информация недоступна</span>
                        </div>
                    </div>
                </v-col>
            </v-row>
            <div class="modal-content__copy"
                 :style="{
            backgroundColor: object.type.color,
            borderColor: object.type.color
          }">
        <span>
           Информация взята с coal-map.com.ua -  ArtDock © 2020
        </span>
            </div>
        </div>
        <CorporateBoard v-if="object.corporate" :corporate="object.corporate"/>
        <v-tooltip top color="rgb(32, 54, 78)">
            <template v-slot:activator="{ on, attrs }">
                <v-btn
                        icon
                        :class="['print-btn', ]"
                        text
                        color="rgb(32, 54, 78)"
                        @click="printData()"
                        title="Печатать"
                        v-bind="attrs"
                        v-on="on"
                >
                    <v-icon>mdi-printer</v-icon>
                </v-btn>
            </template>
            <span>Печатать</span>
        </v-tooltip>
    </v-container>
</template>
<script>
    import CorporateBoard from "./CorporateBoard";
    import ModalData from "./ModalData";
    export default {
        name: "ModalContent",
        components: {CorporateBoard, ModalData},
        props: {
            object: {
                required: true,
                type: Object,
            }
        },
        data() {
            return {
                activeState: false,
                modalData: false,
            };
        },
        methods: {
            numberWithSpaces(x) {
              return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
            },
            printData() {
                this.$htmlToPaper("printData");
            },
            formatPhone(phone) {
                const cleaned = ("" + phone).replace(/\D/g, "").trim();
                if (cleaned.length <= 12) {
                    const prepared = "380".slice(0, 12 - cleaned.length) + cleaned;
                    if (prepared.length === 12) {
                        const match = prepared.match(/(380|)?(\d{2})(\d{3})(\d{2})(\d{2})$/);
                        if (match) {
                            return `+${match[1]} (${match[2]}) ${match[3]} ${match[4]} ${match[5]}`;
                        }
                    }
                }
                return phone;
            },
            formatUrl(site) {
                return new URL(site).hostname;
            },
            openModal() {
              if (this.childrensData && this.childrensData.length) {
                this.modalData = true;
              }
            },
            closeModal() {
                this.modalData = false;
            }
        },
        computed: {
            parsedRate() {
              let rate = Math.round(
                  Number(this.object.rate
                    .replace(/\s/g,'')
                    .replace(',', '.')
                  ));

              return this.numberWithSpaces(rate);
            },
          childrensData() {
            if (typeof this.object.childrens === 'string') {
              return JSON.parse((this.object.childrens));
            } else {
              return this.object.childrens;
            }
          }
        }
    };
</script>

<style lang="scss">

    .full-width {
        width: 100% !important;
    }

    .icon-link {
        text-decoration: none;
        position: relative;
        bottom: 2px;

        i.v-icon {
            font-size: 16px;
        }
    }

    .phone-icon {
        margin-right: 0 !important;

        & + span {
            margin-right: 10px !important;
        }
    }

    .v-btn.print-btn {
        position: absolute !important;
        bottom: 2rem;
        right: 0.75rem !important;
        margin-top: 1rem !important;
    }

    .modal-content {
        display: flex !important;
        position: relative;
        padding-bottom: .75rem;

        &__logo {
            display: none;
        }

        &__no-info {
            color: #9e9e9e;
            font-size: 14px;
        }

        &__distance {
            display: flex !important;
            flex-direction: row;
            width: 250px;
            align-items: baseline;

            &-spacer {
                border-bottom: 1px dotted #9e9e9e;
                height: 1px;
                flex-grow: 1;
                margin: 0 0.375rem;
                opacity: 0.9;
            }
        }

        &__content {
            display: flex;
            flex-direction: column;
            width: 100%;
            padding: 0 1rem;
            height: 100%;

        }

        &__group {
            margin-bottom: 0.625rem;
        }

        &__name {
            font-weight: 600;
            font-size: 14px;
            margin-bottom: 0.25rem;
        }

        &__phone,
        &__address {
            width: 100%;
            display: block;
            text-decoration: none;
            cursor: pointer;
            color: rgb(32, 54, 78) !important;
            transition: 0.3s ease-in-out;
            font-weight: 400;

            &:hover {
                color: #fb5817 !important;
            }
        }

        &__phone {
            max-width: 170px;
        }

        &__value {
            font-size: 14px;
            flex-direction: row;
            display: flex;

            .v-icon {
                font-size: 20px!important;
            }
            & > div {
                display: flex;
                flex-direction: row;
            }

            &--column {
                flex-direction: row;
                flex-wrap: wrap;
            }

            .mdi {
                font-size: 20px;
            }

            &--top {
                position: relative;
                top: 8px;
            }

            &--warn,
            &--success,
            &--info {
                font-weight: 500 !important;
            }

            &--warn {
                color: #ff5252;

            }

            &--success {
                color: #4caf50;
            }

            &--info {
                color: #fb8c00;
            }

            &--sub {
                color: #9e9e9e;
                font-size: 12px;
                margin-top: -4px;
                margin-left: 25px;
            }
        }

        &__header {
            display: flex;
            width: 100%;
            margin-bottom: 1rem;
        }

        &__headline {
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 2;
            font-size: 1.125rem;
            max-height: 3.75rem;
            line-height: 1.5;
            padding-top: 0.25rem;
            overflow: hidden;
            font-weight: 400;
            text-overflow: ellipsis;
        }

        &__title {
            display: flex;
            flex-direction: column;
        }

        &__subtitle {
            font-size: 15px;
            color: #9e9e9e;
            font-weight: 300;
            caret-color: #9e9e9e;
            line-height: 1.75;
        }

        &__warn, &__success {
            font-size: 11px;
            display: flex;
            flex-direction: row;
            align-items: center;
            font-style: italic;
            padding: 0.25rem 0.5rem;
            background: #ff5252 !important;
            border-radius: 8px;
            color: #fff;
            margin-bottom: -4px;
            max-width: 310px;
            margin-right: auto;

            .v-icon {
                color: #fff !important;
                font-size: 14px !important;
            }

            span {
                margin-left: 0.25rem;
            }
        }

        &__success {
            background: #4caf50 !important;
        }

        &__icon {
            max-height: 96px;
            max-width: 96px;
            width: 96px;
            height: 96px;
            min-width: 96px;
            padding: 27px;
            color: #fff;
            z-index: 1;
            border-radius: 4px;
            transition: all 0.3s ease-in-out;
            position: relative;
            font-size: 32px;
            text-align: start;
            box-shadow: 0 3px 5px -1px rgba(0, 0, 0, 0.2),
            0 6px 10px 0 rgba(0, 0, 0, 0.14), 0 1px 18px 0 rgba(0, 0, 0, 0.12);
            display: flex;
            align-items: center;
            justify-content: center;
            letter-spacing: normal;
            line-height: 1;
            top: -27px;
            margin-bottom: -27px !important;

            svg {
                max-width: 44px !important;
                height: auto !important;
                width: 100% !important;
            }
        }

        &__copy {
            display: none;
        }
    }

    .modal-content__logo {
        display: none;
    }
</style>
