<template>
    <div :class="[getShowSidebar ? expand : collapse]">
        <div v-show="getShowSidebar">
            <p>Conversations</p>
            <div v-for="convo in getMyConversations" 
                :key="convo.id"
            >
                <button 
                    @click="showPanelLoadMessages(convo.id)"
                >
                    {{ convo.members }}
                </button>
            </div>
            <div class="display-messages" :class="{ 'hide-messages' : !showMessagePanel }">
                <h1>Message Panel</h1>
                <button 
                    @click="showMessagePanel = !showMessagePanel"
                >Close</button>
                <br>
                <div v-for="message in getConversationMessages" :key="message.id">
                    <p>Sender: {{ message.sender_id }} - {{ message.message }}</p>
                </div>
                <div class="message-container">
                    <div class="message-input">
                        <input v-model="messageContent">
                        <button @click="createAndSendMessage">Send</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
    name: 'Sidebar',
    data() {
        return {
            expand: 'expanded-sidebar',
            collapse: 'collapsed-sidebar',
            showMessagePanel: false,
            messageContent: ''
        }
    },
    computed: {
        ...mapGetters('messages', [
            'getMyConversations', 
            'getShowSidebar', 
            'getConversationMessages'
        ])
    },
    methods: {
        ...mapActions('messages', [
            'loadConversationMessages', 
            'sendMessage'
        ]),
        showPanelLoadMessages(id) {
            this.showMessagePanel = true;
            this.loadConversationMessages(id);
        },
        createAndSendMessage() {
            this.sendMessage([1, 1, 'Hello third'])
        }
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
    .display-messages {
        transition: 1.5s all;
        background: black;
        color: white;
        width: 100%;
        height: 90%;
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        display: block;
        text-align: center;
    }
    .hide-messages {
        transform: translateY(-100%);
    }
    .message-input {
        position: absolute;
        bottom: 0;
    }
    .message-container {
        position: relative;
        bottom: 0;
        height: 75%;
    }
</style>
