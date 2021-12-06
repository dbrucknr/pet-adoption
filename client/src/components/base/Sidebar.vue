<template>
    <div :class="[getShowSidebar ? expand : collapse]">
        <Messenger />
    </div>
</template>

<script>
import { mapGetters } from "vuex";
import Messenger from '../messenger/Messenger.vue';

export default {
    name: 'Sidebar',
    components: {
        Messenger
    },
    data() {
        return {
            expand: 'expanded-sidebar',
            collapse: 'collapsed-sidebar',
        }
    },
    computed: {
        ...mapGetters('messages', [
            'getShowSidebar', 
        ])
    }
}
</script>

<style>
    .collapsed-sidebar {
        margin: 0;
        left: 0;
        padding: 0;
        width: 1%;
        background-color: grey;
        transition: 1s ease;
        position: fixed;
        height: 100%;
        overflow: auto;
    }
    .expanded-sidebar {
        margin: 0;
        left: 0;
        padding: 0;
        width: 50%;
        background-color: grey;
        transition: 1s ease;
        position: fixed;
        height: 100%;
        overflow: auto;
    }
</style>
