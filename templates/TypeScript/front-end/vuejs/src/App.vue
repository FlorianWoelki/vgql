<template>
  <div id="app">
    <img
      alt="Vue logo"
      width="250"
      src="./assets/logo.png"
    >
    <HelloWorld msg="Welcome to your Vue.js GraphQL App" />
    user {{ users }}
    <UserList
      v-if="users"
      :users="users"
    />
  </div>
</template>

<script lang="ts">
import gql from 'graphql-tag';
import { Component, Vue } from 'vue-property-decorator';
import HelloWorld from './components/HelloWorld.vue';
import UserList from './components/UserList.vue';

@Component({
  components: {
    HelloWorld,
    UserList,
  },
  apollo: {
    users: gql`
      query {
        users {
          id
          name
          username
          email
          phone
          website
        }
      }
    `,
  },
})
export default class App extends Vue {}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
