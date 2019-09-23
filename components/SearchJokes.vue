<template>
  <form @submit.prevent="onSubmit">
    <input type="text" name="search-jokes" v-model="text" placeholder="Search Jokes" />
    <input type="submit" name="submit" value="Search Jokes" />
  </form>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "SearchJokes",
  data() {
    return {
      text: ""
    };
  },
  methods: {
    ...mapActions(["getSearchedJokes"]),
    onSubmit() {
        console.log(this.text)
      this.getSearchedJokes(this.text);
      this.text = "";
    },
  }
};
</script>

<style>
</style>