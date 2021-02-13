<template>
    <header>
        <v-app-bar app color="#F4511E">

            <v-spacer></v-spacer>

            <v-app-bar-nav-icon color="white"
                @click.stop="drawer = !drawer"
            ></v-app-bar-nav-icon>

        </v-app-bar>

        <v-navigation-drawer v-model="drawer" color="white" right app bottom temporary>
            <v-list nav shaped>
                <v-list-item-group
                    v-model="group"
                    active-class="red--text text--accent-4"
                    mandatory
                >
                    <v-list-item>
                        <v-list-item-icon>
                            <v-icon>mdi-silverware-fork-knife</v-icon>
                        </v-list-item-icon>
                        <v-list-item-title>Cardápio</v-list-item-title>
                    </v-list-item>

                    <v-list-item>
                        <v-list-item-icon>
                            <v-icon>mdi-notebook-check</v-icon>
                        </v-list-item-icon>
                        <v-list-item-title>Pedidos</v-list-item-title>
                    </v-list-item>

                    <v-list-item>
                        <v-list-item-icon>
                            <v-icon>mdi-account-box</v-icon>
                        </v-list-item-icon>
                        <v-list-item-title>Perfil</v-list-item-title>
                    </v-list-item>

                    <v-list-item>
                        <v-list-item-icon>
                            <v-icon>mdi-logout</v-icon>
                        </v-list-item-icon>
                        <v-list-item-title>Sair</v-list-item-title>
                    </v-list-item>
                </v-list-item-group>
            </v-list>
        </v-navigation-drawer>
    </header>
</template>
<script>
export default {
    name: "Header",
    data: () => ({
        drawer: false,
        group: null,
    }),

    watch: {
        group() {
            this.drawer = false;
        },
    },
};
</script>
<style>

</style>