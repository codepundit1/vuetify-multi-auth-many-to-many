<template>
    <Admin>
        <Head title="Clients"/>
        <v-card class="col-12 col-md-6 mx-auto">
            <v-card-title class="text-h5 secondary--text justify-center">Under {{ client.name }} - Assign Project</v-card-title>
            <v-card-text>
                <h4 class="text-h6 mb-4">Project List</h4>
                <v-form id="projectsForm"
                        @submit.prevent="submit">
                    <div v-for="client in projects"
                         :key="client.id">
                        <label class="text-subtitle-1">
                            <input :checked="assigned.some(current=>current.id===client.id)"
                                   :value="client.id"
                                   class="primary--text"
                                   name="projects[]"
                                   type="checkbox"/>
                            {{ client.name }}
                        </label>
                    </div>

                    <v-divider class="my-4"></v-divider>
                    <div class="d-flex">
                        <v-spacer></v-spacer>
                        <Link :href="route('clients.index')"
                              as="v-btn"
                              color="secondary">Cancel
                        </Link>
                        <v-btn class="primary ml-1"
                               type="submit">
                            Assign
                        </v-btn>
                    </div>
                </v-form>
            </v-card-text>
        </v-card>
    </Admin>
</template>

<script>
import {Head, Link} from '@inertiajs/inertia-vue';
import {Inertia} from "@inertiajs/inertia";
import Admin from "@/Layouts/Admin";

export default {
    props: {
        client: Object,
        projects: Array,
        assigned: Array
    },
    components: {
        Admin,
        Head,
        Link
    },
    methods: {
        submit() {
            var formData = new FormData(document.getElementById('projectsForm'));
            Inertia.post(this.route('clients.assign.projects', this.client), formData);
        }
    }
}
</script>
