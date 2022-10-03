<template>
    <Admin>
        <Head title="Projects"/>
        <v-card class="col-12 col-md-6 mx-auto">
            <v-card-title class="text-h5 justify-center secondary--text"
                          v-text="project?'Edit Project':'Create Project'"></v-card-title>
            <v-card-text>
                <v-form @submit.prevent="submit">
                    <v-text-field v-model="form.name"
                                  :error-messages="form.errors.name"
                                  autofocus
                                  label="Name"
                                  prepend-inner-icon="mdi-account">
                    </v-text-field>
                    <v-text-field v-model="form.starting_date"
                                  :error-messages="form.errors.starting_date"
                                  dense
                                  label="Starting Date"
                                  type="date"
                                  prepend-inner-icon="mdi-calendar">
                    </v-text-field>
                    <v-text-field v-model="form.deadline"
                                  :error-messages="form.errors.deadline"
                                  dense
                                  label="Deadline"
                                  type="date"
                                  prepend-inner-icon="mdi-calendar">
                    </v-text-field>

                    <div class="d-flex">
                        <v-spacer></v-spacer>
                        <Link :href="route('projects.index')"
                              as="v-btn"
                              color="secondary">Cancel
                        </Link>
                        <v-btn :disabled="form.processing"
                               class="ml-1"
                               color="primary"
                               type="submit">
                            submit
                        </v-btn>
                    </div>
                </v-form>
            </v-card-text>
        </v-card>
    </Admin>
</template>

<script>
import Admin from "@/Layouts/Admin";
import {Head, Link} from "@inertiajs/inertia-vue";

export default {
    components: {
        Admin,
        Link,
        Head
    },
    props: {
        project: Object
    },
    data() {
        return {
            form: this.$inertia.form({
                name: this.project ? this.project.name : '',
                starting_date: this.project ? this.project.starting_date : '',
                deadline: this.project ? this.project.deadline : '',
            })
        }
    },
    methods: {
        submit() {
            if (this.project)
                this.form.put(this.route('projects.update', this.project));
            else
                this.form.post(this.route('projects.store'));
        }
    }
}
</script>

<style scoped>

</style>
