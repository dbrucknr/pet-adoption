<template>
    <div class="conversation">
        <img src="" alt="" class="conversation-img">
        <span class="conversation-name">
            Derek
        </span>
    </div>
</template>

<script>
export default {
    name: "Conversation"
}
</script>

<style>
    .conversation {
        display: flex;
        align-items: center;
        padding: 10px;
        cursor: pointer;
        margin-top: 20px;
    }

    .conversation:hover {
        background-color: white;
    }

    .conversation-img {
        width: 40px;
        height: 40px;
        border-radius: 50%;
        margin-right: 20px;
    }
</style>