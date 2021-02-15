<template>
    <header>
        <v-app-bar app color="#F4511E">
            <v-spacer></v-spacer>

            <v-app-bar-nav-icon
                color="white"
                @click.stop="drawer = !drawer"
            ></v-app-bar-nav-icon>
        </v-app-bar>
        <v-navigation-drawer
            v-model="drawer"
            color="white"
            right
            app
            bottom
            temporary
        >
            <v-list nav shaped >
                <v-list-item-group
                    active-class="red--text text--accent-4"
                    v-model="group"
                >
                    <v-list-group
                        no-action
                    >
                        <template v-slot:activator >
                            <v-list-item-icon>
                                <v-icon color="orange">mdi-tools</v-icon>
                            </v-list-item-icon>
                            <v-list-item-title >Administração</v-list-item-title>
                        </template>

                        <v-list-item>
                            <v-list-item-icon>
                                <v-icon color="red">mdi-silverware-fork-knife</v-icon>
                            </v-list-item-icon>
                            <v-list-item-title>Cardápio</v-list-item-title>
                        </v-list-item>
                        <v-list-item>
                            <v-list-item-icon>
                                <v-icon color="green">mdi-microsoft-excel</v-icon>
                            </v-list-item-icon>
                            <v-list-item-title>Relatórios</v-list-item-title>
                        </v-list-item>
                        <v-list-item>
                            <v-list-item-icon>
                                <v-icon color="#8D6E63">mdi-notebook-edit-outline</v-icon>
                            </v-list-item-icon>
                            <v-list-item-title>Pedidos</v-list-item-title>
                        </v-list-item>
                        <v-list-item>
                            <v-list-item-icon>
                                <v-icon color="primary">mdi-account-multiple</v-icon>
                            </v-list-item-icon>
                            <v-list-item-title>Usuários</v-list-item-title>
                        </v-list-item>
                    </v-list-group>

                    <v-list-item>
                        <v-list-item-icon>
                            <v-icon color="red">mdi-silverware-fork-knife</v-icon>
                        </v-list-item-icon>
                        <v-list-item-title>Cardápio</v-list-item-title>
                    </v-list-item>

                    <v-list-item>
                        <v-list-item-icon>
                            <v-icon color="#8D6E63">mdi-notebook-check</v-icon>
                        </v-list-item-icon>
                        <v-list-item-title>Pedidos</v-list-item-title>
                    </v-list-item>

                    <v-list-item>
                        <v-list-item-icon>
                            <v-icon color="primary">mdi-account-box</v-icon>
                        </v-list-item-icon>
                        <v-list-item-title>Perfil</v-list-item-title>
                    </v-list-item>

                    <v-list-item>
                        <v-list-item-icon>
                            <v-icon color="green">mdi-logout</v-icon>
                        </v-list-item-icon>
                        <v-list-item-title>Entrar</v-list-item-title>
                    </v-list-item>
                    <v-list-item>
                        <v-list-item-icon>
                            <v-icon color="red">mdi-login</v-icon>
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
    data: () => {
        return {
            drawer: false,
            group: null,
        };
    },
    watch: {
        group(value) {
            this.drawer = value ? false : true;
        },
    },
};
</script>
<style>
</style>