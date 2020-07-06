<template>
  <section>
    <div class="bg-gray-200">
      <div class="relative container pb-12 pt-12 mb-0">
        <div class="translate-l-full absolute bottom-4 left-4">
          <TriangleSVG />
        </div>
        <div class="xs-hide md-hide translate-r-full absolute top-8 right-24">
          <RectangleSVG />
        </div>
        <div class="row align-center p-0">
          <div class="col-5 p-0">
            <h1>VGQL</h1>
            <p class="font-20">
              The
              <span class="underline-indigo">easy way</span>
              to
              <span class="underline-indigo">create</span>
              your next Vue.js GraphQL project.
            </p>
            <button class="mt-1-5 mb-1-5">
              Create your project
            </button>
          </div>
          <div class="col-6 offset-1 p-0">
            <div class="relative bg-gray-900 b-radius-md p-2 pt-4 pb-4">
              <div class="absolute top-0-75 left-0-75 bg-red-600 w-0-75 h-0-75 circle" />
              <div class="yellow-dot absolute top-0-75 left-2 w-0-75 h-0-75 circle" />
              <div class="red-dot absolute top-0-75 bg-green-600 w-0-75 h-0-75 circle" />
              <code class="bl-0 bg-none bg-gray-900 text-gray-200">
                <CodeAnimation />
              </code>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="bg-gray-300">
      <div class="container pt-3 pb-3">
        <h4 class="text-center mt-0 mb-0 text-gray-500 font-normal">
          VGQL supports this tech
        </h4>

        <div class="row">
          <UsedTech image="vuejs" />
          <UsedTech image="graphql" />
          <UsedTech image="typescript" />
          <UsedTech image="javascript" />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import TriangleSVG from '@/components/TriangleSVG.vue';
import RectangleSVG from '@/components/RectangleSVG.vue';
import CodeAnimation from '@/components/CodeAnimation.vue';
import UsedTech from '@/components/UsedTech.vue';

export default {
  components: {
    TriangleSVG,
    RectangleSVG,
    CodeAnimation,
    UsedTech,
  },
};
</script>

<style lang="scss" scoped>
.yellow-dot {
  background-color: #f6e05e;
}
.red-dot {
  left: 52px;
}

.translate-r-full {
  -webkit-transform: translateX(100%);
  transform: translateX(100%);
}
.translate-l-full {
  -webkit-transform: translateX(-100%);
  transform: translateX(-100%);
}
</style>
