<template>
  <div>
    <NavBar />
    <main>
      <Banner />
      <img alt="Vue logo" src="./assets/logo.png" />
      <HelloWorld msg="Welcome to Your Vue.js App" />
      <ContactUs />
    </main>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import HelloWorld from "./components/HelloWorld.vue";
import Component from "vue-class-component";
import NavBar from "@/components/NavBar.vue";
import ContactUs from "@/components/ContactUs.vue";
import Banner from "@/components/Banner.vue";

@Component({
  components: {
    HelloWorld,
    NavBar,
    ContactUs,
    Banner,
  },
})
export default class App extends Vue {}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
