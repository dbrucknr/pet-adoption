<template>
    <div class="messenger">
        <div class="chat-menu">
            <div class="chat-menu-wrapper">
                <input placeholder="Search for Contact" class="chat-menu-input" />
                <Conversation />
            </div>
        </div>
        <div class="chat-box">
            <div class="chat-box-wrapper">
                <div class="chat-box-top">
                    <Message />
                </div>
                <div class="chat-box-bottom">
                    
                </div>
            </div>
        </div>
        <div class="chat-online">
            <div class="chat-online-wrapper">
                Online
            </div>
        </div>
    </div>
</template>

<script>
import { mapGetters, mapActions, mapMutations } from "vuex";
import { defineAsyncComponent } from 'vue'
import socket from "../../socket";

export default {
    name: 'Messenger',
    components: {
        Message: defineAsyncComponent(() => import('./Message.vue')),
        Conversation: defineAsyncComponent(() => import('../conversations/Conversation.vue'))
    },
    data() {
        return {
            
        }
    },
    created() {
        socket.auth = { username: 'currentUser' }
        socket.connect();
        socket.emit("setUserOnline", {
            userId: 1 // needs to be logged in user
        })
        socket.on("getOnlineUsers", (users) => {
            console.log('socket emitted getOnlineUsers')
            this.setOnlineUsers(users);
        });

        socket.on("connect_error", (err) => {
            if (err.message === "invalid username") {
                console.error('Username Error')
            }
        });
    },
    onUnmounted() {
        socket.off("connect_error");
    },
    computed: {
        ...mapGetters('messages', [
            'getMyConversations', 
            'getOnlineUsers', 
            'getConversationMessages'
        ])
    },
    methods: {
        ...mapActions('messages', [
            'loadConversationMessages', 
            'sendMessage'
        ]),
        ...mapMutations('messages', [
            'setOnlineUsers'
        ])
    }
}
</script>

<style>
    .messenger {
        height: calc(100vh - 70px);
        display: flex;
    }
    .chat-menu {
        flex: 4;
    }
    .chat-menu-input {
        width: 90%;
        padding: 10px 2px;
        border: none;
        border-bottom: 1px solid black;
        background: transparent;
        color: white;
    }
    .chat-box {
        flex: 4;
    }
    .chat-online {
        flex: 4;
    }
    .chat-menu-wrapper, .chat-box-wrapper, .chat-online-wrapper {
        padding: 10px;
    }
    ::placeholder { /* Chrome, Firefox, Opera, Safari 10.1+ */
        color: white;
        opacity: 1; /* Firefox */
        text-align: center;
    }
</style>