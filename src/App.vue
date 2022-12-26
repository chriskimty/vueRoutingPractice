<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <div class="wrapper">
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <!-- benefit of passing through an object and data binding is that if you change the name of the link later you don't have to manually go through and change every single route/link on other components -->
        <RouterLink :to="{ name: 'about'}">About</RouterLink>
        <!-- <RouterLink to="/about">About</RouterLink> -->

        <RouterLink :to="{ name: 'jobs'}">Jobs</RouterLink>
      </nav>
      <div class="buttons">
        <button @click="redirect">Redirect</button>
        <button @click="back">Go back</button>
        <button @click="forward">Go forward</button>
      </div>
    </div>
  </header>

  <RouterView />
</template>

<script>
export default {
  methods: {
    redirect() {
      this.$router.push({name: 'home'})
    },
    back() {
      // don't confuse $route and $router (route is to get info and router is to do something)
      // go is a method (can pass in a minus or plus # - go back through the history)
      this.$router.go(-1)
    },
    forward() {
      this.$router.go(1)
    } 
  }
}
</script>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

.buttons {
  text-align: center;
  padding-top: 20px;
}

button {
  margin: 0 10px;
  padding: 10px;
  border: none;
  border-radius: 4px;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
