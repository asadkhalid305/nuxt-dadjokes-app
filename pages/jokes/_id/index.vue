<template>
  <div>
    <nuxt-link to="/jokes">Back To Jokes</nuxt-link>
    <h2>{{ singleJoke }}</h2>
    <hr />
    <small>Joke ID: {{ $route.params.id }}</small>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  head() {
    return {
      title: "Dad Joke",
      meta: [
        {
          hid: "description",
          name: "description",
          content: "best place to find jokes"
        }
      ]
    };
  },
  methods: mapActions(["getJokeById"]),
  computed: mapGetters(["singleJoke"]),
  created() {
    this.getJokeById(this.$route.params.id);
  }
};
</script>

<style>
</style>