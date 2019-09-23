import axios from "axios";

const baseUrl = "https://icanhazdadjoke.com/";
const jokeLimit = `limit=10`;

const config = {
    headers: {
        Accept: "application/json"
    }
};

const state = {
    jokes: [],
    joke: {},
    // searchText: ''
}

const getters = {
    allJokes: state => state.jokes,
    singleJoke: state => state.joke,
    // searchText: state => state.searchText
}

const actions = {
    async getJokes({ commit }) {
        try {
            await axios.get(`${baseUrl}search?_${jokeLimit}`, config)
                .then(res => {
                    commit('setJokes', res.data.results)
                })
                .catch(err => err);
        } catch (err) {
            console.log(err)
        }
    },

    async getJokeById({ commit }, id) {
        try {
            await axios.get(`${baseUrl}j/${id}`, config)
                .then(res => {
                    commit('setJoke', res.data.joke)
                })
                .catch(err => err);
        } catch (err) {
            console.log(err)
        }
    },

    // searchText({ commit }, text) {
    //     commit('setSearchText', text)
    // },

    async getSearchedJokes({ commit }, text) {
        try {
            await axios.get(`${baseUrl}search?term=${text}`, config)
                .then(res => {
                    commit('setSearchedJokes', res.data.results)
                })
                .catch(err => err);
        } catch (err) {
            console.log(err)
        }
    },
}

const mutations = {
    setJokes: (state, jokes) => {
        (state.jokes = jokes)
    },
    setJoke: (state, joke) => {
        (state.joke = joke)
    },
    // setSearchText: (state, text) => {
    //     console.log(text)
    //     state.searchText = text
    // },
    setSearchedJokes: (state, jokes) => {
        (state.jokes = jokes)
    },
}

export default {
    state,
    getters,
    actions,
    mutations
}