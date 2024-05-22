<script setup>
import {ref} from 'vue'

const props = defineProps({
  href: {
    type: String,
    required: true
  },
  icon: {
    type: String,
    default: ''
  },
  title: {
    type: String,
    default: ''
  },
  description: {
    type: String,
    default: ''
  },
  image: {
    type: String,
    default: ''
  }
})

const handleClick = () => {
  window.open(props.href, '_blank')
}

const hover = ref(false)

</script>

<template>
  <div
      class="container"
      @click="handleClick"
      @mouseover="hover = true"
      @mouseleave="hover = false">
    <div :class="['link_icon', { 'hovered': hover }]">
      {{ icon }}
    </div>
    <h2 class="title">
      {{ title }}
    </h2>
    <p class="details">
      {{ description }}
    </p>
  </div>
</template>

<style scoped lang="less">
:root {
  --vp-c-bg-soft: #f6f6f7;
  --card-bg: #f5f5f5;
  --card-title-color: #333;
  --vp-c-text-2: rgba(60, 60, 67, 0.78);
  --card-bg-hover: #e0e0e0;
  --card-text-hover: #000;
}

.container {
  display: flex;
  flex-direction: column;
  padding: 24px;
  height: 100%;
  background-color: var(--vp-c-bg-soft);
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1);
  margin: 20px 0;
  border-radius: 10px;
  unicode-bidi: isolate;
  min-width: 480px;
  transition: box-shadow 0.3s, background-color 0.3s, color 0.3s;

  .link_icon {
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 6px;
    width: 48px;
    height: 48px;
    font-size: 24px;
    background-color: #ececec;
    transform: scale(1) rotate(0deg);
    transition: background-color 0.3s, transform 0.3s;
  }

  .link_icon.hovered {
    background-color: var(--card-bg);
    transform: scale(1.1) rotate(-10deg);
  }

  .title {
    line-height: 24px;
    font-size: 16px;
    color: var(--card-title-color);
    font-weight: 600;
    margin: 0;
    border-top: none;
    padding-top: 12px;
  }

  h2, p {
    margin: 0;
    overflow-wrap: break-word;
  }

  .details {
    flex-grow: 1;
    padding-top: 8px;
    line-height: 24px;
    font-size: 14px;
    font-weight: 500;
    color: var(--vp-c-text-2);
  }
}

.container:hover {
  background-color: var(--card-bg-hover);
  color: var(--card-text-hover);
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);
}
</style>