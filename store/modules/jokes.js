import axios from "axios";


const baseUrl = "https://icanhazdadjoke.com/search";
const jokeLimit = `limit=10`;


const config = {
    headers: {
        Accept: "application/json"
    }
};

const state = {
    jokes: []
}
const getters = {
    allJokes: state => state.jokes
}
const actions = {
    //retrieve
    async getjokes({ commit }) {
        await axios.get(`${baseUrl}`, config)
            .then(res => commit('setjokes', res.data))
            .catch(err => err);
    },
}

const mutations = {
    setjokes: (state, jokes) => {
        console.log(jokes)
            (state.jokes = jokes)
    }
}

export default {
    state,
    getters,
    actions,
    mutations
}