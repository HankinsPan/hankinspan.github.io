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
  justify-content: space-between;
  gap: 1em;
}

</style>