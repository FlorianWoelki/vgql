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
    <tr
      v-for="user in users"
      :key="user.id"
    >
      <td>{{ user.id }}</td>
      <td>{{ user.name }}</td>
      <td>{{ user.username }}</td>
      <td>{{ user.email }}</td>
      <td>{{ user.phone }}</td>
      <td>{{ user.website }}</td>
    </tr>
  </table>
</template>

<script>
export default {
  props: {
    users: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style scoped lang="scss">
table {
  margin-top: 3em;
  width: 75%;
  margin-left: auto;
  margin-right: auto;
}
</style>
