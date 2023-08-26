<template>
  <div class="me-loading">
    <div class="loader">
      <div class="loader-inner">
        <div class="loader-line-wrap">
          <div class="loader-line"></div>
        </div>
        <div class="loader-line-wrap">
          <div class="loader-line"></div>
        </div>
        <div class="loader-line-wrap">
          <div class="loader-line"></div>
        </div>
        <div class="loader-line-wrap">
          <div class="loader-line"></div>
        </div>
        <div class="loader-line-wrap">
          <div class="loader-line"></div>
        </div>
      </div>
    </div>
    <div class="loading-text">{{ loadingText }}</div>
  </div>
</template>

<script>
export default {
  name: 'MeLoading',
  props: {
    loadingText: {
      type: String,
      default: '',
    },
  },
}
</script>

<style>
.loader {
  background: rgba(0, 0, 0, 0);
}

.loading-text {
  text-align: center;
  color: #409eff;
  margin-top: 50px;
  font-size: 18px;
}

.loader-inner {
  width: 100px;
  height: 60px;
  margin: auto;
  position: relative;
}

.loader-line-wrap {
  animation: spin 2000ms cubic-bezier(0.175, 0.885, 0.32, 1.275) infinite;
  box-sizing: border-box;
  width: 100px;
  height: 50px;
  overflow: hidden;
  position: absolute;
  left: 0;
  top: 0;
  transform-origin: 50% 100%;
}

.loader-line {
  border: 4px solid transparent;
  border-radius: 100%;
  width: 100px;
  height: 100px;
  margin: 0 auto;
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
}
.loader-line-wrap:nth-child(1) {
  animation-delay: -50ms;
}
.loader-line-wrap:nth-child(2) {
  animation-delay: -100ms;
}
.loader-line-wrap:nth-child(3) {
  animation-delay: -150ms;
}
.loader-line-wrap:nth-child(4) {
  animation-delay: -200ms;
}
.loader-line-wrap:nth-child(5) {
  animation-delay: -250ms;
}

.loader-line-wrap:nth-child(1) .loader-line {
  width: 90px;
  height: 90px;
  border-color: hsl(0, 80%, 60%);
  top: 7px;
}

.loader-line-wrap:nth-child(2) .loader-line {
  width: 76px;
  height: 76px;
  border-color: hsl(60, 80%, 60%);
  top: 14px;
}

.loader-line-wrap:nth-child(3) .loader-line {
  width: 62px;
  height: 62px;
  border-color: hsl(120, 80%, 60%);
  top: 21px;
}

.loader-line-wrap:nth-child(4) .loader-line {
  width: 48px;
  height: 48px;
  border-color: hsl(180, 80%, 60%);
  top: 28px;
}

.loader-line-wrap:nth-child(5) .loader-line {
  width: 34px;
  height: 34px;
  border-color: hsl(240, 80%, 60%);
  top: 35px;
}

@keyframes spin {
  0%,
  15% {
    transform: rotate(0);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
