<template>
  <footer class="footer">
    <div class="content has-text-centered">
      <p>
        <b>&copy; {{ year() }} Intrigue Games, LLC.</b>
        Trademarks belong to their respective owners. All Rights Reserved.
      </p>
    </div>
  </footer>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";

@Component
export default class Footer extends Vue {
  year(): string {
    return new Date().getFullYear().toString();
  }
}
</script>

<style scoped></style>
