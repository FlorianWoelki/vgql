<template>
  <table>
    <tr>
      <th>ID</th>
      <th>Name</th>
      <th>Username</th>
      <th>Email</th>
      <th>Phone</th>
      <th>Website</th>
    </tr>
    <tr v-for="user in users.data" :key="user.id">
      <td>{{ user.id }}</td>
      <td>{{ user.name }}</td>
      <td>{{ user.username }}</td>
      <td>{{ user.email }}</td>
      <td>{{ user.phone }}</td>
      <td>{{ user.website }}</td>
    </tr>
  </table>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';

type User = {
  id: number;
  name: string;
  username: string;
  email: string;
  phone: string;
  website: string;
};

@Component
export default class UserList extends Vue {
  @Prop({ required: true })
  private users!: Array<User>;
}
</script>

<style scoped>
table {
  margin-top: 3em;
  width: 75%;
  margin-left: auto;
  margin-right: auto;
}
</style>
