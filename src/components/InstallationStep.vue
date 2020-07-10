<template>
  <div class="row align-center">
    <div class="col-5 offset-1">
      <h6 class="flex align-flex-start font-normal">
        <h5 class="underline-indigo mr-1 mt-0 mb-0">
          {{ step }}.
        </h5>
        {{ instruction }}
      </h6>
    </div>
    <div class="col-6">
      <CodePreview no-left-padding>
        <slot />
      </CodePreview>
    </div>
  </div>
</template>

<script>
import CodePreview from '@/components/CodePreview.vue';

export default {
  components: {
    CodePreview,
  },
  props: {
    instruction: {
      type: String,
      required: true,
    },
    step: {
      type: Number,
      required: true,
    },
  },
};
</script>
