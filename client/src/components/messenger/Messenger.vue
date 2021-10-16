<template>
    <div>
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
    name: 'Messenger',
    computed: {
        ...mapGetters('messages', ['getShowSidebar'])
    }, 
    methods: {
        ...mapActions('messages', ['selectMyConversations']),
        ...mapMutations('messages', ['setShowSidebar'])
    }
}
</script>
