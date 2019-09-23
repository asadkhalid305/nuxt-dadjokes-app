<template>
  <div v-if="allJokes">
    <SearchJokes />
    <Joke v-for="joke in allJokes" :key="joke.id" :joke="joke.joke" :id="joke.id" />
  </div>
  <h2 v-else>No joke available</h2>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import Joke from "../../components/Joke";
import SearchJokes from "../../components/SearchJokes";

export default {
  head() {
    return {
      title: "Dad Jokes",
      meta: [
        {
          hid: "description",
          name: "description",
          content: "best place to find jokes"
        }
      ]
    };
  },
  components: {
    Joke,
    SearchJokes
  },
  methods: {
    ...mapActions(["getJokes"])
  },
  computed: mapGetters(["allJokes"]),
  created() {
    this.getJokes();
  }
};
</script>

<style>
</style>