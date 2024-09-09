<script>
window.addEventListener('DOMContentLoaded', () => {
  composeScript();
})

function composeScript() {
  return new Promise((resolve, reject) => {
    window.compose = window.compose || {}
    window.compose.customRedirect = url => {
      history.pushState({}, '', url)
    }

    const script = document.createElement('script')
    script.src = 'https://compose-scripts.s3.amazonaws.com/663e896f1cc2c77e55b0695a/6696b7dbcb827cbeb0145fbf.js'

    script.onload = () => {
      console.log('%cCompose script loaded', 'color: #1e90ff; font-weight: bold;')
      resolve()
    }

    script.onerror = (err) => {
      console.log(err);
      console.log('%cCompose script failed to load', 'color: #ff0000; font-weight: bold;')
    }

    document.head.appendChild(script)
  })
}
</script>

<template>
  <router-view></router-view>
</template>
