import Vuex from 'vuex';
import Vue from 'vue';
import jokes from './modules/jokes';

// Load Vuex
Vue.use(Vuex);

// Create store
const store = () => {
    return new Vuex.Store({
        modules: {
            jokes
        }
    });
}

export default store
