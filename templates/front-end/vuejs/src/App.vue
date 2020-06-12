<template>
  <div id="app">
    <img
      alt="Vue logo"
      width="250"
      src="./assets/logo.png"
    >
    <HelloWorld msg="Welcome to your Vue.js GraphQL App" />
    <UserList
      v-if="users"
      :users="users.data"
    />
  </div>
</template>

<script>
import gql from 'graphql-tag';
import HelloWorld from './components/HelloWorld.vue';
import UserList from './components/UserList.vue';

export default {
  name: 'App',
  components: {
    HelloWorld,
    UserList,
  },
  apollo: {
    users: gql`
      query {
        users {
          data {
            id
            name
            username
            email
            phone
            website
          }
        }
      }
    `,
  },
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
