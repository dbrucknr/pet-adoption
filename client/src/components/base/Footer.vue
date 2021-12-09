<template>
    <div class="footer">
        <button 
            @click="(
                selectMyConversations() 
                    && 
                setShowSidebar(!getShowSidebar)
            )"
        >
            Messenger
        </button>
    </div>
</template>

<script>
import { mapActions, mapGetters, mapMutations } from 'vuex';

export default {
    name: 'Footer',
    computed: {
        ...mapGetters('messages', ['getShowSidebar'])
    }, 
    methods: {
        ...mapActions('messages', ['selectMyConversations']),
        ...mapMutations('messages', ['setShowSidebar'])
    }
}
</script>

<style>
    .footer {
        position: fixed;
        left: 0;
        bottom: 0;
        width: 100%;
        background-color: rgba(226,124,58,255);
        color: white;
        text-align: center;
    }
</style>