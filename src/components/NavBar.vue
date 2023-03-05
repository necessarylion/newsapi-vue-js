<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()
const goToHome = () => {
  router.push('/')
}
</script>

<template>
  <nav>
    <div class="v-container justify-between">
      <v-sheet class="ma-2 pa-2 nav-bar pointer" @click="goToHome()">
        <span class="logo-text">Today News</span>
      </v-sheet>
    </div>
  </nav>
</template>

<style scoped>
.justify-between {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
nav {
  height: 55px;
  background: #f6a022;
  display: flex;
  justify-content: center;
  align-items: center;
  align-items: center;
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  z-index: 10;
}

.nav-bar {
  background: transparent;
  color: white;
}

.nav-bar .logo-text {
  background: transparent;
  color: white;
  font-family: 'Newsreader', serif;
  font-weight: bold;
  font-size: 18px;
}
</style>
