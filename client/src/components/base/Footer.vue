<template>
    <div class="footer">
        <Messenger />
    </div>
</template>

<script>
import Messenger from '../messenger/Messenger.vue';

export default {
    name: 'Footer',
    components: {
        Messenger
    }
}
</script>

<style>
.footer {
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  background-color: grey;
  color: white;
  text-align: center;
}
</style>