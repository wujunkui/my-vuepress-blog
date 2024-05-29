<script setup>
import { usePageFrontmatter } from "vuepress/client"

const frontmatter = usePageFrontmatter()
console.log(frontmatter)

const buyGood = () => {
  console.log("buyGood")
}
console.log("click")
</script>

<template>
  <div class="rounded-xl shadow p-4 @dark:bg-white:10 flex px-2">
    <div class="flex-none">
      <img
        class="rounded-xl"
        src="https://theme-hope-assets.vuejs.press/logo.svg"
        alt="logo"
        width="128"
        height="128"
      />
    </div>
    <div class="ml-4 flex-auto w-0">
      <p class="text-2xl">title</p>
      <div class="bg-black:10 dark:bg-white:10 p-2 rounded">
        <div class=""><span>价格：</span><span>199</span></div>
      </div>
      <div class="mt-4">
        <button class="shadow" @click="buyGood">立即购买</button>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
