<template>
  <section class="coming-soon hero bg-image is-large">
    <div class="hero-body">
      <h1 v-if="theGameIsReleased()" class="title has-text-centered">
        Available Now!
      </h1>
      <h1 v-else class="title has-text-centered">October 22, 2021</h1>
      <div class="columns">
        <div class="column is-4 is-offset-4 columns">
          <div class="column is-5">
            <b-image
              class="image"
              @click.native="openGooglePlayStore()"
              :src="require('@/assets/android.png')"
              alt="Android Logo Image"
            ></b-image>
          </div>
          <div class="column is-5 is-offset-2">
            <b-image
              class="image"
              @click.native="openAppleAppStore()"
              :src="require('@/assets/apple.png')"
              alt="Apple Logo Image"
            ></b-image>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import moment from "moment";

@Component
export default class ComingSoon extends Vue {
  googlePlayLink =
    "https://play.google.com/store/apps/details?id=com.IntrigueGames.XalsPath";
  appleAppStoreLink = "https://apps.apple.com/us/app/xals-path/id1566474908";

  theGameIsReleased(): boolean {
    const releaseDate = moment("2021-11-22");
    const currentDate = moment();
    return (
      releaseDate.isSame(currentDate, "day") ||
      currentDate.isAfter(releaseDate, "day")
    );
  }
  openGooglePlayStore() {
    window.open(this.googlePlayLink, "blank");
  }
  openAppleAppStore() {
    window.open(this.appleAppStoreLink, "blank");
  }
}
</script>

<style scoped>
.bg-image {
  background-image: url("../assets/bg-coming-soon.png");
  background-size: auto 100%;
}
.image {
  cursor: pointer;
}
</style>
