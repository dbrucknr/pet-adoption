<template>
    <div :class="[getShowSidebar ? expand : collapse]">
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
    </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import socket from "../../socket";
import Conversation from "../conversations/Conversation.vue";
import Message from "../messenger/Message.vue";

export default {
    name: 'Sidebar',
    components: {
        Conversation,
        Message
    },
    data() {
        return {
            expand: 'expanded-sidebar',
            collapse: 'collapsed-sidebar',
            showMessagePanel: false,
            messageContent: '',
            onlineUsers: []
        }
    },
    created() {
        socket.on("getOnlineUsers", (users) => {
            console.log('socket emitted getOnlineUsers')
            this.onlineUsers = users;
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
            socket.auth = { username: 'currentUser' }
            socket.connect();
            socket.emit("setUserOnline", {
                userId: 1 // needs to be logged in user
            })
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
