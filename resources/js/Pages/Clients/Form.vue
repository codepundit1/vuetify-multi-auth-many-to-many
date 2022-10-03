<template>
    <Admin>
        <Head title="Clients"/>
        <v-card class="col-12 col-md-6 mx-auto">
            <v-card-title class="text-h5 justify-center secondary--text"
                          v-text="client?'Edit Client':'Create Client'"></v-card-title>
            <v-card-text>
                <v-form @submit.prevent="submit">
                    <v-text-field v-model="form.name"
                                  :error-messages="form.errors.name"
                                  autofocus
                                  label="Name"
                                  prepend-inner-icon="mdi-account">
                    </v-text-field>
                    <v-select v-show="projects"
                              v-model="form.projects"
                              :error-messages="form.errors.projects"
                              :items="projects"
                              chips
                              item-text="name"
                              item-value="id"
                              label="Projects"
                              multiple
                              prepend-inner-icon="mdi-shield-half-full">
                    </v-select>
                    <div class="d-flex">
                        <v-spacer></v-spacer>
                        <Link :href="route('clients.index')"
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
        client: Object,
        projects: Array
    },
    data() {
        return {
            form: this.$inertia.form({
                name: this.client ? this.client.name : '',
                projects: ''
            })
        }
    },
    methods: {
        submit() {
            if (this.client)
                this.form.put(this.route('clients.update', this.client));
            else
                this.form.post(this.route('clients.store'));
        }
    }
}
</script>

<style scoped>

</style>
