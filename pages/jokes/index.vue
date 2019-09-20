<template>
  <div>
    <ul v-for="joke in allJokes" :key="joke.key">
      <li>{joke.joke}</li>
    </ul>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

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