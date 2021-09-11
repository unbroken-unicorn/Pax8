<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/companylist">Company List</router-link>
    </div>
    <router-view />
  </div>
</template>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  @import '~bulma/bulma';
  margin-left: 3%;
}

#nav {
  padding: 30px;
}

h1 {
    font-size: large;
    font-weight: bold;
    margin-bottom: .5%;
}
</style>
