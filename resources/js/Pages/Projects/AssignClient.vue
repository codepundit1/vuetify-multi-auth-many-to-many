<template>
    <Admin>
        <Head title="Projects"/>
        <v-card class="col-12 col-md-6 mx-auto">
            <v-card-title class="text-h5 secondary--text justify-center">{{ project.name }} - Assign Client</v-card-title>
            <v-card-text>
                <h4 class="text-h6 mb-4">Client List</h4>
                <v-form id="clientsForm"
                        @submit.prevent="submit">
                    <div v-for="project in clients"
                         :key="project.id">
                        <label class="text-subtitle-1">
                            <input :checked="assigned.some(current=>current.id===project.id)"
                                   :value="project.id"
                                   class="primary--text"
                                   name="clients[]"
                                   type="checkbox"/>
                            {{ project.name }}
                        </label>
                    </div>

                    <v-divider class="my-4"></v-divider>
                    <div class="d-flex">
                        <v-spacer></v-spacer>
                        <Link :href="route('projects.index')"
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
        project: Object,
        clients: Array,
        assigned: Array
    },
    components: {
        Admin,
        Head,
        Link
    },
    methods: {
        submit() {
            var formData = new FormData(document.getElementById('clientsForm'));
            Inertia.post(this.route('projects.assign.clients', this.project), formData);
        }
    }
}
</script>
