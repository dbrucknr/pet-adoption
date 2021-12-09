<template>
  <div class="messenger">
    <div class="chat-menu">
      <div class="chat-menu-wrapper">
        Menu
      </div>
    </div>
    <div class="chat-box">
      <div class="chat-box-wrapper">
        Box
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
export default {
  name: 'Conversations'
}
</script>


<style scoped>
  .messenger {
    height: calc(100vh - 70px);
    display: flex;
  }
  .chat-menu {
    flex: 4;
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
</style>