<template>
  <div class="relative bg-gray-900 b-radius-md p-2 pt-2 pb-2">
    <code class="bl-0 bg-none bg-gray-900 text-gray-200">
      <slot />
    </code>
  </div>
</template>

<script>
export default {
  name: 'CodePreview',
};
</script>
