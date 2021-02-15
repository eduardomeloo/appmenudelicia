<template>
    <div>
        <v-card class="mx-auto d-flex flex-column">
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
                    <v-col cols="auto">
                        <v-dialog
                            transition="dialog-top-transition"
                            max-width="600"
                            :fullscreen="fullscreen"
                        >
                            <template v-slot:activator="{ on, attrs }">
                                <v-btn v-bind="attrs" v-on="on"> Saiba Mais </v-btn>
                            </template>
                            <template v-slot:default="dialog">
                                <v-card>
                                    <v-toolbar 
                                        color="#F4511E" 
                                        dark
                                        class="text-h6 d-flex justify-center"
                                    >
                                        {{ title }}
                                    </v-toolbar>

                                    <v-card-text>
                                        <div class="text-h2">
                                            <Info />
                                        </div>
                                    </v-card-text>
                                    <v-card-actions class="justify-end">
                                        <v-btn 
                                            block 
                                            @click="dialog.value = false"
                                            color="#FF6F00"
                                            outlined
                                        >
                                            Fechar
                                        </v-btn>
                                    </v-card-actions>
                                </v-card>
                            </template>
                        </v-dialog>
                    </v-col>
                </v-card-actions>
            </v-card>
        </v-card>
        <SubMenu />
    </div>
</template>
<script>
import Info from '@/components/publicArea/Info'
import SubMenu from '@/components/publicArea/SubMenu'
export default {
    name: "Main",
    components: {Info, SubMenu},
    data: () => {
        return {
            title: 'Restaurante Bom Sabor',
            fullscreen: true
        }
    }
};
</script>
<style>
</style>