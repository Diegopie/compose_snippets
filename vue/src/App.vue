<script>
      window.addEventListener('DOMContentLoaded', () => {
        composeScript();
      })
    
      function composeScript () {
        return new Promise((resolve, reject) => {
          window.compose = window.compose || {}
          window.compose.customRedirect = url => {
            history.pushState({}, '', url)
          }
    
          const script = document.createElement('script')
          script.src = 'https://compose-scripts.s3.amazonaws.com/660d915c8917f7fc54a4d0f9/660d9ab08917f7fc54a4d225.js'
    
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
  <main>
    <header>
      <section className="flex p-8 gap-6 items-center">
        <aside>
          <h1 className="text-7xl text-center">Earth Echoes</h1>
          <p className="text-lg mt-6">Where nature enthusiasts embark on a digital journey into the wonders of the
            natural world! Our platform is a sanctuary for those who find solace, inspiration, and excitement in the
            beauty of our planet. </p>
        </aside>
        <img src='/hero-img.jpg' className="w-7/12 max-w-4xl object-cover" />
      </section>
      <section className="text-2xl text-center mt-44 p-4 bg-lime-600 ">
        <p>Discover, Explore, Connect: Unveiling Nature&apos;s Mysteries; Inspiration in Every Sunrise: Embrace the
          Beauty of the Wild</p>
      </section>
    </header>
  </main>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}

.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}

.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
