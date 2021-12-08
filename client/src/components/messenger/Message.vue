<template>
    <div class="message" :class="self ? 'self': null">
        <div class="message-top">
            <img src="" alt="" class="message-image">
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
    name: "Message"
}
</script>

<style>
    .message {
        display: flex;
        flex-direction: column;
    }
    .message-top {
        display: flex;
    }
    .message-bottom {

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
    .message-text.self {
        color: white;
        padding: 10px;
        background-color: blue;
        border-radius: 20px;
        max-width: 100px;
    }
</style>