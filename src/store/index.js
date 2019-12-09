import Vue from 'vue';
import Vuex from 'vuex';
import configs from './modules/configs';

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        configs
    }
});