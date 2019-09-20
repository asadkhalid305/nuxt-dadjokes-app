import Vuex from 'vuex';
import Vue from 'vue';
import jokes from './modules/jokes';

// Load Vuex
Vue.use(Vuex);

// Create store
export default new Vuex.Store({
    modules: {
        jokes
    }
});
