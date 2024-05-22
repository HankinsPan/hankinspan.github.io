<script setup>

</script>

<template>
  <div class="flow">
    <slot></slot>
  </div>
</template>

<style scoped>
.flow {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-evenly;
  gap: 1em;
  margin: 0 -1em;
}

@media (max-width: 399px) {
  .flow {
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
}

@media (max-width: 768px) {
  .flow {
    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;
  }
}

@media (min-width: 1280px) {
  .flow {
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
  }
}

</style>