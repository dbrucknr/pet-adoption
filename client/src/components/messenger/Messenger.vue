<template>
    <div>
        <button @click="selectMyConversations">Messenger</button>
    </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
    name: 'Messenger',
    computed: {

    }, 
    methods: {
        ...mapActions('messages', ['selectMyConversations'])
    }
}
</script>