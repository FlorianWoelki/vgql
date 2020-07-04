<template>
  <div class="code-animation">
    <i class="fas fa-arrow-right text-blue-300" /> vgql<br>
    <span class="text-green-400">?</span> {{ output[currentOutputIndex].question }}<br>
    <div
      v-for="answer in output[currentOutputIndex].answers"
      :key="answer"
    >
      <i
        v-if="answer !== ''"
        class="fas fa-chevron-right text-green-400"
      />
      {{ answer }}
      <br>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentOutputIndex: 0,
      output: [
        {
          question: 'What language would you prefer',
          answers: ['JavaScript', 'TypeScript'],
        },
        {
          question: 'What frontend would you like?',
          answers: ['vuejs', ''],
        },
        {
          question: 'What backend would you like?',
          answers: ['graphql', ''],
        },
        {
          question: 'You want some sweet extras?',
          answers: ['typeorm-postgres', ''],
        },
      ],
    };
  },

  mounted() {
    setInterval(() => {
      if (this.currentOutputIndex >= this.output.length - 1) {
        this.currentOutputIndex = 0;
      } else {
        this.currentOutputIndex += 1;
      }
    }, 3000);
  },
};
</script>

<style lang="scss">
code div {
  i {
    font-size: 10px;
  }
}
</style>
