<template>
    <div class="messenger">
        <div class="message-menu">
            <div class="message-menu-wrapper">
                <input placeholder="Search Conversations" class="message-menu-input" />
                <Conversation />
            </div>
        </div>
        <div class="message-box">
            <div class="message-box-wrapper">
                <div class="message-box-top">
                    <Message />
                    <Message self="false" />
                    <Message />
                    <Message self="false" />
                    <Message />
                    <Message  self="false" />
                    <Message />
                    <Message />
                    <Message self="false" />
                </div>
                <div class="message-box-bottom">
                    <textarea class="message-input" placeholder="Send Message"></textarea>
                    <button class="message-submit-button" type="submit">Send</button>
                </div>
            </div>
        </div>
        <div class="message-online">
            <div class="message-online-wrapper">
                <OnlineUsers />
            </div>
        </div>
    </div>
</template>

<script>
import { defineAsyncComponent } from 'vue';

export default {
  name: 'Conversations',
  components: {
    Message: defineAsyncComponent(() => import('../components/messenger/Message.vue')),
    Conversation: defineAsyncComponent(() => import('../components/conversations/Conversation.vue')),
    OnlineUsers: defineAsyncComponent(() => import('../components/online/OnlineUsers.vue'))
  }
}
</script>


<style scoped>
    .messenger {
        height: calc(100vh - 100px);
        display: flex;
    }
    .message-menu {
        flex: 3;
    }
    .message-menu-input {
        width: 90%;
        padding: 10px 2px;
        border: none;
        border-bottom: 1px solid black;
        background: transparent;
        color: white;
    }
    .message-box {
        flex: 6;
    }
    .message-online {
        flex: 3;
    }
    .message-box-wrapper {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }
    .message-menu-wrapper, .message-box-wrapper, .message-online-wrapper {
        padding: 10px;
        height: 100%;
    }
    .message-input {
        width: 80%;
        height: 90px;
        padding: 10px;
    }
    .message-submit-button {
        width: 50px;
        height: 40px;
        border: none;
        border-radius: 5px;
        cursor: pointer;
    }
    .message-box-top {
        height: 90%;
        overflow-y: scroll;
        padding-right: 10px;
    }
    .message-box-bottom {
        margin-top: 5px;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
    input::placeholder {
        color: white;
        opacity: 1;
        text-align: center;
    }
</style>