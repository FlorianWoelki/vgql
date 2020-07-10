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
            <CodePreview>
              <div class="absolute top-0-75 left-0-75 bg-red-600 w-0-75 h-0-75 circle" />
              <div class="yellow-dot absolute top-0-75 left-2 w-0-75 h-0-75 circle" />
              <div class="red-dot absolute top-0-75 bg-green-600 w-0-75 h-0-75 circle" />
              <CodeAnimation />
            </CodePreview>
          </div>
        </div>
      </div>
    </div>

    <div class="bg-gray-300">
      <div class="container pt-3 pb-3">
        <h5 class="text-center mt-0 mb-0 text-gray-500 font-normal">
          VGQL supports this tech
        </h5>

        <div class="row">
          <UsedTech image="vuejs" />
          <UsedTech image="graphql" />
          <UsedTech image="typescript" />
          <UsedTech image="javascript" />
        </div>
      </div>
    </div>

    <div class="relative container mt-6">
      <div class="absolute translate-r-full top-0 right-2">
        <TriangleSVG />
      </div>
      <h5 class="font-normal text-center mb-0">
        Installing is
        <span class="underline-indigo">as simple</span>
        as using it
      </h5>
      <h2 class="text-center mt-0-5">
        Install Instructions
      </h2>

      <div class="row mt-4 align-center">
        <div class="col-5 offset-1">
          <h6 class="flex align-flex-start font-normal">
            <h5 class="underline-indigo mr-1 mt-0 mb-0">
              1.
            </h5>
            Simply install the vgql CLI with yarn or npm.
          </h6>
        </div>
        <div class="col-6">
          <CodePreview no-left-padding>
            yarn global add vgql<br>
            OR<br>
            npm install -g vgql
          </CodePreview>
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
import CodePreview from '@/components/CodePreview.vue';

export default {
  components: {
    TriangleSVG,
    RectangleSVG,
    CodeAnimation,
    UsedTech,
    CodePreview,
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
