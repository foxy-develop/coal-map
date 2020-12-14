<template>
        <v-list-item class="search-list-item">
            <template v-slot:default="{ active, toggle }">
                <v-list-item-content
                        :value="id"
                        @click="select(id, index, active)"
                        @mouseenter="!selected && enter(id)"
                        @mouseleave="!selected && leave()"
                >
                <v-list-item-title v-text="title"/>
                <v-list-item-subtitle class="text--primary" v-text="type"/>
                <v-list-item-subtitle v-text="address"/>
                </v-list-item-content>
                <v-list-item-action class="align-center">
                    <v-icon v-if="!active" color="grey lighten-1">
                        mdi-map-marker-radius
                    </v-icon>
                    <v-icon v-else color="#fb5817">
                        mdi-map-marker-radius
                    </v-icon>
                </v-list-item-action>
            </template>
        </v-list-item>
</template>

<script>
    export default {
        name: "ListItem",
        props: {
            id: {
                required: true,
                type: Number
            },
            index: {
                required: true,
                type: Number
            },
            title: {
                required: true,
                type: String
            },
            type: {
                required: true,
                type: String
            },
            address: {
                required: true,
                type: String
            },
            selected: {
                required: true,
                type: Boolean
            }
        },
        methods: {
            select(id, index, active) {
                this.$emit('select', { selected: id, index: index, active: active });
            },
            enter(id) {
                this.$emit('enter', id);
            },
            leave() {
                this.$emit('leave');
            }
        }
    }
</script>
<style lang="scss">
    .search-list-item, .v-virtual-scroll__item {
        border-bottom: 1px solid rgba(0, 0, 0, 0.12);
        &:last-of-type {
            border-bottom: none;
        }
    }
</style>