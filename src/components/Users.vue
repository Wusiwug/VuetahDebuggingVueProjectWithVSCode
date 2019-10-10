<template>
  <table>
    <tr>
      <td>Name</td>
      <td>Title</td>
      <td>Login</td>
      <td>Email</td>
      <td>Cell</td>
    </tr>
    <tr v-for="u in users" :key="u.id">
      <td>
        {{ u.name }}
      </td>
      <td>
        {{ u.jobtitle }}
      </td>
      <td>
        {{ u.username }}
      </td>
      <td>
        {{ u.email }}
      </td>
      <td>
        {{ u.cell }}
      </td>
    </tr>
  </table>
</template>
<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "Users",
  computed: {
    ...mapGetters(["users"])
  },
  methods: {
    ...mapActions(["getUsers"])
  },
  created() {
    this.getUsers();
  }
};
</script>