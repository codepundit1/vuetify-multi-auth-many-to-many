<template>
    <Admin>
        <Head title="Projects"/>
        <v-simple-table>
    <template v-slot:default>
      <thead>
        <tr>
          <th class="text-left">
            Project Information
          </th>
          <th class="text-left">
            Assigned Client Information
          </th>
        </tr>
      </thead>
      <tbody>
        <tr>
            <td class="px-5 py-5">
                Project Name: {{ project.name }}<br />
                Project Start Date: {{ project.starting_date }}<br />
                Project Start Date: {{ project.deadline }}<br />
            </td>
          <td class="px-5 py-5">
            <p v-for="client in project.clients"
                :key="client.id">
                {{ client.name }}<br />
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
        project: Object,
        filter: String,
        clients: Array,
    },
    // props: ['projects', 'filters'],
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
