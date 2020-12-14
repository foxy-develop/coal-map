<template>
    <div :class="['corporate-board', setClass ]">
        <div class="corporate-board__logo" v-html="corporate.logo"/>
    </div>
</template>

<script>
    export default {
        props: {
            corporate: {
                required: true,
                type: Object
            }
        },
        name: "CorporateBoard",
        computed: {
            setScheme() {
                return this.corporate.title !== 'ДТЭК Энерго'
            },
            setClass() {
                if ( this.corporate.title === 'ДТЭК Энерго') {
                    return 'corporate-board--dtek'
                }
                if ( this.corporate.title === 'МЕТIНВЕСТ') {
                    return 'corporate-board--metinvest'
                }
                if ( this.corporate.title === 'Группа АрселорМиттал') {
                    return 'corporate-board--arcelor'
                }
                if ( this.corporate.title === 'Приват') {
                    return 'corporate-board--privat'
                }

            }
        }
    }
</script>

<style lang="scss">
    .corporate-board {
        display: flex;
        width: 100%;
        margin-left: -12px;
        margin-right: -12px;
        margin-bottom: -16px;
        padding: 0 12px;
        box-sizing: content-box;
        align-items: center;
        &__logo {
            display: flex;
            align-items: center;
            padding: .25rem 1rem;
        }
        &__logo, svg {
            width: auto;
            height: 3.5rem;
            max-width: 12rem;
        }
        & + .v-tooltip + .print-btn {
            bottom: .5rem;
            color: #fff!important;
        }
        &--privat {
            background-color: rgba(117, 175, 38);
            box-shadow: 0px -1px 10px 2px rgba(0, 0, 0, .1), 0px -3px 8px 2px rgba(117, 175, 38, .25);
        }
        &--dtek {
            background-color: rgba(253, 220, 47);
            box-shadow: 0px -1px 10px 2px rgba(0, 0, 0, .1), 0px -3px 8px 2px rgba(253, 220, 47, .25);
            & + .v-tooltip + .print-btn {
                bottom: .75rem;
                color:rgb(32, 54, 78)!important;
            }
        }
        &--arcelor {
            background-color: rgba(226, 86, 22);
            box-shadow: 0px -1px 10px 2px rgba(0, 0, 0, .1), 0px -3px 8px 2px rgba(226, 86, 22, .25);
        }
        &--metinvest {
            background-color: rgba(223, 33, 50);
            box-shadow: 0px -1px 10px 2px rgba(0, 0, 0, .1), 0px -3px 8px 2px rgba(223, 33, 50, .25);
        }
    }
</style>