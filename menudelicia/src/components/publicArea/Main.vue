<template>
    <div>
        <v-card
            class="d-flex flex-column justify-center pa-8"
            elevation="2"
            rounded
            shaped
            color="#385F73"
            dark
            img="https://www.midiamax.com.br/wp-content/uploads/2020/09/Carne-churrasco2.jpg"
        >
            <v-card-title class="headline d-flex flex-column justify-center">
                {{ title }}
            </v-card-title>

            <v-card-actions class="d-flex flex-column justify-center">
                <v-btn @click="dialog = !dialog"> Saiba Mais </v-btn>
                <v-row justify="space-around">
                    <v-dialog
                        v-model="dialog"
                        transition="dialog-top-transition"
                        max-width="600"
                        :fullscreen="false"
                    >
                    <Dialog :title="title" v-show="dialog" />
                    </v-dialog>
                </v-row>
            </v-card-actions>
            
        </v-card>

        <SubMenu />
    </div>
</template>
<script>
import SubMenu from "@/components/publicArea/SubMenu";
import Dialog from "@/components/publicArea/Dialog";
export default {
    name: "Main",
    components: { SubMenu, Dialog },
    data: () => {
        return {
            title: "Restaurante Bom Sabor"
        };
    },
    computed: {
        dialog: {
            get: function() {
                return this.$store.state.dialog
            },
            set: function(newValue) {
                this.$store.state.dialog = newValue
            },
        }
    },
};
</script>
<style>
</style>