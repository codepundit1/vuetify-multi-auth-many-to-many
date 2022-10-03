<template>
    <Admin>
        <Head title="Projects"/>
        <v-simple-table>
    <template v-slot:default>
      <thead>
        <tr>
          <th class="text-left">
            Client Information
          </th>
          <th class="text-left">
            Assigned Project Information
          </th>
        </tr>
      </thead>
      <tbody>
        <tr>
            <td class="px-5 py-5">
                Client Name: {{ client.name }}<br />
            </td>
          <td class="px-5 py-5">
            <p v-for="project in client.projects"
                :key="project.id">
                Project Name: {{ project.name }}<br />
                Start Date: {{ project.starting_date }}<br />
                Deadline: {{ project.deadline }}<br />
            </p>
          </td>
        </tr>
      </tbody>
    </template>
  </v-simple-table>
    </Admin>
</template>

<script>
import Admin from "@/Layouts/Admin";
import {Head, Link} from "@inertiajs/inertia-vue";

export default {
    components: {
        Head,
        Admin,
        Link,
    },
    props: {
        client: Object,
        filters: String,
        projects: Array,
    },
    data() {
        return {
          itemId: '',
        }
    },
    methods: {
    }
}
</script>
<style scoped>
    td.px-5.py-5 {
    pointer-events: none !important;;
}
</style>
