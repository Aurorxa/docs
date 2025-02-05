<template>
  <DefaultTheme.Layout>
    <template #doc-footer-before>
      <BackTop />
    </template>
    <template #doc-before>
      <ArticleMetadata />
      <NolebaseGitContributors/>
      <NolebaseGitChangelog/>
    </template>
    <template #nav-bar-content-before>
      <Meilisearch />
    </template>
    <template #doc-top>
      <NolebaseHighlightTargetedHeading />
    </template>
  </DefaultTheme.Layout>
</template>

<script setup lang="ts">
import BackTop from "./BackTop.vue";
import ArticleMetadata from "./ArticleMetadata.vue";
import { useData } from "vitepress";
import DefaultTheme from "vitepress/theme";
import { nextTick, provide } from "vue";
import "@nolebase/vitepress-plugin-highlight-targeted-heading/client/style.css";
import { NolebaseHighlightTargetedHeading } from "@nolebase/vitepress-plugin-highlight-targeted-heading/client";
import {
  NolebaseGitChangelog,  
  NolebaseGitContributors
} from '@nolebase/vitepress-plugin-git-changelog/client'
const { isDark } = useData();


import Meilisearch from "./Meilisearch.vue";

const enableTransitions = () =>
  "startViewTransition" in document &&
  window.matchMedia("(prefers-reduced-motion: no-preference)").matches;

provide("toggle-appearance", async ({ clientX: x, clientY: y }: MouseEvent) => {
  if (!enableTransitions()) {
    isDark.value = !isDark.value;
    return;
  }

  const clipPath = [
    `circle(0px at ${x}px ${y}px)`,
    `circle(${Math.hypot(
      Math.max(x, innerWidth - x),
      Math.max(y, innerHeight - y)
    )}px at ${x}px ${y}px)`,
  ];

  await document.startViewTransition(async () => {
    isDark.value = !isDark.value;
    await nextTick();
  }).ready;

  document.documentElement.animate(
    { clipPath: isDark.value ? clipPath.reverse() : clipPath },
    {
      duration: 300,
      easing: "ease-in",
      pseudoElement: `::view-transition-${isDark.value ? "old" : "new"}(root)`,
    }
  );
});
</script>

<style>
::view-transition-old(root),
::view-transition-new(root) {
  animation: none;
  mix-blend-mode: normal;
}

::view-transition-old(root),
.dark::view-transition-new(root) {
  z-index: 1;
}

::view-transition-new(root),
.dark::view-transition-old(root) {
  z-index: 9999;
}

.VPSwitchAppearance .check {
  transform: none !important;
}
</style>
