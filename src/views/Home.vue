<template>
  <div class="relative bg-gray-200 pt-16 pb-16">
    <div class="absolute bottom-6 left-16">
      <TriangleSVG />
    </div>
    <div class="container">
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
        <button class="mt-1-5">Create your project</button>
        </div>
        <div class="col-6 offset-1 p-0">
          <div class="relative bg-gray-900 b-radius-md p-2 pt-4 pb-4">
            <div class="absolute t-0 l-0 bg-red-600 w-2"></div>
            <code class="bl-0 bg-none bg-gray-900 text-gray-200">
  test
            </code>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import TriangleSVG from '@/components/TriangleSVG.vue';

export default {
  components: {
    TriangleSVG,
  },
};
</script>
