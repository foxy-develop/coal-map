<template>
    <v-list three-line class="search-list">
        <v-list-item-group
                v-model="selectedItem"
                v-if="objects"
                active-class="active--text object-list-item--active"
        >
            <ListItem
                    v-for="(item, index) in objects"
                    :key="item.title +'-'+ item.id"
                    :id="item.id"
                    :index="index"
                    :title="item.title"
                    :type="item.type.name"
                    :address="item.address"
                    :selected="!!selectedItem"
                    @select="select"
                    @enter="enter"
                    @leave="leave"
            />
        </v-list-item-group>
    </v-list>
</template>

<script>
    import ListItem from "./ListItem";

    export default {
        name: "ListObjects",
        components: { ListItem },
        data() {
            return {
                selectedItem: '',
            }
        },
        props: {
            objects: {
                required: true,
                type: Array
            },
            selected: {
                required: true
            }
        },
        methods: {
            select(args) {
                this.$emit('select', args);
            },
            enter(id) {
                this.$emit('enter', id);
            },
            leave() {
                this.$emit('leave');
            }
        },
        watch: {
            selected(newVal) {
                this.selectedItem = newVal;
            }

        }
    }
</script>