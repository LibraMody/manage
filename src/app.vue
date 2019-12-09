<template>
    <div id="app">
        <log-in v-if="!is_login"></log-in>

        <router-view v-else></router-view>
    </div>
</template>


<script>
import LogIn from '@/pages/login';
import { mapGetters } from 'vuex';

export default {
    components: {
        'log-in': LogIn
    },

    computed: {
        ...mapGetters('configs', [
            'is_login'
        ])    
    },

    data() {
        return {
        }
    },
}
</script>

<style>
html, body, #app {
    width: 100%;
    height: 100%;
    margin: 0;
    background: #FAEBD7;
}
</style>