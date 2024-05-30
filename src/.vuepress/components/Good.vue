<script setup>
import { usePageFrontmatter } from "vuepress/client"
import { defineProps } from "vue"

const frontmatter = usePageFrontmatter()
console.log(frontmatter)

const buyGood = () => {
  console.log("buyGood")
}
console.log("click")

const imageWidth = 256

const goodTitle = "小白30天绘画训练套装资料，30天从零开始到大触！！"
</script>

<template>
  <div class="rounded-xl shadow p-4 dark:bg-white:10 flex px-2">
    <div class="flex-none">
      <img
        class="rounded-xl"
        src="https://theme-hope-assets.vuejs.press/logo.svg"
        alt="logo"
        :width="imageWidth"
        :height="imageWidth"
      />
    </div>
    <div class="ml-4 flex-auto w-0">
      <p class="text-2xl font-bold">
        <Badge class="mr-2" text="推荐" color="red" />{{ goodTitle }}
      </p>
      <div class="bg-black:5 dark:bg-white:10 px-2 py-4 rounded flex items-center">
        <div class="ml-4 shrink-0">
          <span>价格：</span><span class="text-2xl font-bold text-red font-semibold">199</span>
        </div>
        <div class="grow"></div>
        <div class="mt-3 text-gray text-right text-xs shrink-0">
          <span>赠送积分：</span><span class="">199</span>
        </div>
      </div>

      <div class="mt-4 flex items-baseline">
        <a
          @click="buyGood"
          class="cursor-pointer rounded-lg bg-orange px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-orange-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600 active:translate-y-px"
          >立即购买</a
        >
        <div class="grow"></div>
        <div class="text-xs mr-4"><span>已售:</span><span>100+</span></div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
