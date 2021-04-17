<template>
  <div>
    <NavBar />
    <main>
      <Banner />
      <Story />
      <Gameplay />
      <Music />
      <ComingSoon />
    </main>
    <Footer />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import HelloWorld from "./components/HelloWorld.vue";
import Component from "vue-class-component";
import NavBar from "@/components/NavBar.vue";
import Music from "@/components/Music.vue";
import Banner from "@/components/Banner.vue";
import Footer from "@/components/Footer.vue";
import Gameplay from "@/components/Gameplay.vue";
import ComingSoon from "@/components/ComingSoon.vue";
import Story from "@/components/Story.vue";

@Component({
  components: {
    HelloWorld,
    NavBar,
    Music,
    Banner,
    Footer,
    Gameplay,
    ComingSoon,
    Story,
  },
})
export default class App extends Vue {}
</script>

<style lang="scss">
.has-background-green {
  background-color: #84b342;
}
.anchor {
  display: block;
  position: relative;
  top: -52px;
  visibility: hidden;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
