<template>
  <div>
    <span>
      {{ value }}
    </span>
    <button class="button is-primary" @click="increase">
      Increase
    </button>
    <button class="button is-primary" @click="reduce">
      Reduce
    </button>
  </div>

</template>

<script lang="ts">
    import {Component, Prop, Vue} from 'vue-property-decorator'

    @Component
    export default class IncrementingInput extends Vue {
        @Prop({default: 0, required: false}) readonly initial: number = 0
        public value: number = 0

        created() {
            this.value = this.initial
        }

        public increase() : void {
            this.value += 1
        }

        public reduce() : void {
            this.value -= 1
        }
    }

</script>

<style scoped>
  button {
    border: 1px solid #eee;
    border-radius: 3px;
    background-color: #ffffff;
    cursor: pointer;
    font-size: 15pt;
    padding: 3px 10px;
    margin: 10px;
  }
</style>
