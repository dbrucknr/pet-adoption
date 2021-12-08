<template>
    <div class="online-users">
        <div class="contact">
            <div class="online-img-container">
                <img class="online-img" src="https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png" alt="" />
                <div class="online-badge"></div>
                <span class="online-name">Derek Bruckner</span>
            </div>
        </div>
        <div class="contact">
            <div class="online-img-container">
                <img class="online-img" src="https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png" alt="" />
                <div class="online-badge"></div>
                <span class="online-name">Derek Bruckner</span>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'OnlineUsers'
}
</script>

<style>
    .online-users {

    }
    .contact {
        display: flex;
        align-items: center;
        font-weight: 500;
        cursor: pointer;
        margin-bottom: 10px;
    }
    .online-img-container {
        position: relative;
        margin-right: 20px;
    }
    .online-img {
        width: 40px;
        height: 40px;
        border-radius: 50%;
        object-fit: cover;
        border: 1px solid white;
        margin: 1px;
    }
    .online-badge {
        width: 10px;
        height: 10px;
        border-radius: 50%;
        background-color: limegreen;
        position: absolute;
        top: 1px;
        right: 60px;
    }
    .online-name {

    }
</style>