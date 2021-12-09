<template>
    <div class="top-bar-container">
        <div class="top-bar-left">
            <router-link to="/">Home</router-link> |
            <router-link to="/about">About</router-link> |
            <router-link to="/conversations">Conversations</router-link>
        </div>
        <div class="top-bar-center">
            <div class="search">
                <input class="search-input" placeholder="Search for a pet" name="" value="">
            </div>
        </div>
        <div class="top-bar-right">
            
        </div>
    </div>
</template>

<script>
export default {
    name: "Topbar"
}
</script>

<style scoped>
    .top-bar-container {
        width: 100%;
        height: 50px;
        background-color: rgba(27,139,185,255);
        display: flex;
        align-items: center;
        position: sticky;
        top: 0;
        left: 0;
        position: fixed;
    }
    .top-bar-left {
        flex: 4;
    }
    .top-bar-center {
        flex: 4;
    }
    .top-bar-right {
        flex: 4;
    }
    .search {
        width: 100%;
        height: 30px;
        border-radius: 20%;
        display: flex;
        align-items: center;
        background-color: white;
    }
    .search-input {
        border: none;
        width: 100%;
        align-items: center;
    }
    .search-input:focus {
        outline: none;
    }
    input::placeholder {
        opacity: 1;
        text-align: center;
    }
    a.router-link-exact-active {
        color: #42b983;
    }
</style>