<template>
    <div :class="['card', !value && 'card--no-hover']" @click.stop="toggle()" :style="!activeState && 'background-color: #f2f2f2'" :id="`${id}-card-toggler`">
        <div class="card__header">
            <div
                class="card__icon"
                ref='icon'
                :style="{
          backgroundColor: activeState ? this.color : 'rgb(202, 202, 202)',
          borderColor: activeState ? this.color : 'rgb(202, 202, 202)'
        }"
                v-html="symbol"/>
            <div class="card__counter">
                <div class="card__name" v-text="type" />
                <h3 class="card__value" v-text="currentAmount" />
            </div>
        </div>
        <div class="card__divider">
            <hr
                role="separator"
                aria-orientation="horizontal"
                class="v-divider theme--light"
            />
        </div>
        <div class="card__footer">
            <i class="mdi mdi-map-marker-multiple" v-if="activeState" />
            <i class="mdi mdi-map-marker-off " style="color: orangered" v-else />
            <span
                class="card__notice"
                :style= '!activeState && "color: orangered"'
                v-text="activeState ? 'Отображены на карте' : value ? 'Скрыты с карты' : 'Скрыты с карты фильтром'"
            />
        </div>
    </div>
</template>

<script>
    import { gsap } from "gsap";
    /* eslint-disable */
    export default {
        name: "Card",
        props: {
            type: {
                type: String,
                required: true
            },
            icon: {
                type: String,
                required: false
            },
            id: {
                required: true
            },
            color: {
                type: String,
                default: "#00cae3"
            },
            value: {
                type: Number,
                required: true,
                default: 0
            },
            notice: {
                type: String,
                default: "Данные за последние 24 часа"
            }
        },
        data() {
            return {
                active: true,
                amount: 0
            };
        },
        methods: {
            toggle() {
                if (this.value) {
                    this.active = !this.active;
                    this.$emit('toggle', this.active);
                }
            },
            tween(newValue) {
                setTimeout(() => gsap.to(this.$data, { duration: 0.75, amount: newValue }), 300)
            },
        },

        computed: {
            activeState() {
                return !!this.value && this.active
            },
            symbol() {
                return `
                <svg xmlns="http://www.w3.org/2000/svg" class="type_icon_${this.id} card__icon-svg">
                    <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#type_icon_${this.id}"></use>
                </svg>`
            },
            currentAmount() {
                return this.amount.toFixed(0)
            }
        },
        mounted() {
            this.tween(this.value);
        },
        watch: {
            value(newValue) { this.tween(newValue) }
        }
    };
</script>

<style lang="scss">

    .card {
        display: flex;
        flex-wrap: wrap;
        flex-direction: column;
        position: relative;
        max-width: 100%;
        outline: none;
        text-decoration: none;
        border-radius: 4px;
        margin: 16px 8px 8px;
        width: 68px;
        height: 68px;
        overflow: hidden;
        transition: background-color .3s ease-in-out;
        &--no-hover {
            cursor: not-allowed;

        }
        @media (min-width: 768px) and (min-height: 640px)  {
            overflow: visible;
            height: unset;
            width: 100%;
            background-color: #fff;
            padding: 8px 12px;
            transition-property: box-shadow, opacity, -webkit-box-shadow;
            overflow-wrap: break-word;
            white-space: normal;
            transition: all 0.28s cubic-bezier(0.4, 0, 0.2, 1);
            will-change: box-shadow;
            box-shadow: 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14),
            0 1px 5px 0 rgba(0, 0, 0, 0.12);

        }

        &:hover:not(.card--no-hover) {
            @media (min-width: 768px) and (min-height: 640px)  {
                cursor: pointer;
                box-shadow: 0 4px 2px 0 rgba(0, 0, 0, 0.2), 0 2px 24px 0 rgba(0, 0, 0, 0.14),
                0 3px 5px 0 rgba(0, 0, 0, 0.12);
            }
        }

        &__header {
            display: flex;
            justify-content: space-between;
        }

        &__icon {
            max-height: 68px;
            width: auto;
            padding: 18px;
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
            justify-content: center;
            letter-spacing: normal;
            line-height: 1;

            &-svg {
                width: 44px;
                height: 44px;
            }
            @media (min-width: 768px) and (min-height: 640px) {
                margin-bottom: -24px;
                top: -24px;

            }
        }

        &__img,
        svg,
        img {
            width: 2rem;
            height: 2rem;
            fill: currentColor;
        }

        &__name {
            color: #5f5f5f;
            font-weight: 300;
            caret-color: #5f5f5f;
            text-align: right;
            font-family: Roboto, sans-serif;
            line-height: 1.5;
            font-size: 14px;
            margin-left: 0.5rem;
        }

        &__counter {
            font-size: 1.25rem;
            font-weight: 300;
            color: #000;
            text-align: right;
        }

        &__divider {
            display: flex;
            flex: 0 0 100%;
            max-width: 100%;
            padding: 8px 0;
        }

        &__notice {
            font-size: 12px;
            color: #9e9e9e;
            font-weight: 300;
            caret-color: #9e9e9e;
        }

        &__footer {
            display: flex;
            align-items: center;
            .mdi {
                margin-right: 4px;
                font-size: 16px;
                line-height: 1;
            }
        }
    }
</style>
