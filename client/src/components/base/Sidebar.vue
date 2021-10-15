<template>
    <div class="sidebar">
        <p>Conversations</p>
        <div v-for="convo in getMyConversations" 
            :key="convo.id"
        >
            <p>{{ convo.members }}</p>
        </div>
    </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
    name: 'Sidebar',
    computed: {
        ...mapGetters('messages', ['getMyConversations'])
    },
    methods: {

    }
}
</script>

<style>
.sidebar {
  margin: 0;
  left: 0;
  padding: 0;
  width: 25%;
  background-color: grey;
  position: fixed;
  height: 100%;
  overflow: auto;
}
</style>