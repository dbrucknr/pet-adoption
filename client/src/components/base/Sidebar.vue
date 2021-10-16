<template>
    <div :class="[getShowSidebar ? expand : collapse]">
        <div v-show="getShowSidebar">
            <p>Conversations</p>
            <div v-for="convo in getMyConversations" 
                :key="convo.id"
            >
                <p>{{ convo.members }}</p>
            </div>
        </div>
    </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
    name: 'Sidebar',
    data() {
        return {
            expand: 'expanded-sidebar',
            collapse: 'collapsed-sidebar'

        }
    },
    computed: {
        ...mapGetters('messages', ['getMyConversations', 'getShowSidebar'])
    },
    methods: {

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
