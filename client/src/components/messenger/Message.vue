<template>
    <div :class="self ? 'message self': 'message'">
        <div class="message-top">
            <img src="https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png" alt="" class="message-image">
            <p class="message-text" :class="self ? 'self': null">
                Hello world, this is a sample message.
            </p>
        </div>
        <div class="message-bottom">
            1 hour ago
        </div>
    </div>
</template>

<script>
export default {
    name: "Message",
    props: {
        self: Boolean
    }
}
</script>

<style>
    .message {
        display: flex;
        flex-direction: column;
        margin-top: 10px;
    }
    .message-top {
        display: flex;
    }
    .message-bottom {
        display: flex;
        font-size: 12px;
        margin-top: 10px;
    }
    .message-image {
        width: 32px;
        height: 32px;
        border-radius: 50%;
        object-fit: cover;
        margin-right: 10px;
    }
    .message-text {
        color: white;
        padding: 10px;
        background-color: green;
        border-radius: 20px;
        max-width: 100px;
    }
    .message.self {
        align-items: flex-end;
    }
    .message.self .message-text {
        background-color: blue;
    }
</style>