 <template>
    <v-card class="d-flex flex-column justify-center">
        <v-toolbar max-height = "48" 
                   color="#F4511E" 
                   dark 
                   class="text-h6 d-flex justify-center">
            {{ title }}
        </v-toolbar>
        <div class="d-flex flex-column justify-center">
            <v-row class="pl-2 pt-5 text-h6 d-flex justify-center ma-0">
                <v-icon class="mr-2" color="red">
                    mdi-clock-time-four-outline
                </v-icon>
                <div class="text-h6 text-center"
                    >Horário - 11h às 15h
                </div>
            </v-row>
            <v-card-text class="d-flex flex-row justify-center">
                <v-chip-group
                    active-class="deep-purple accent-4 white--text"
                    column
                    class="d-flex flex-row justify-center"
                >
                    <v-row class="d-flex flex-row justify-center">
                        <v-col
                            cols="12"
                            class="d-flex flex-wrap justify-center"
                        >
                            <v-chip color="orange" label outlined>DOM</v-chip>
                            <v-chip color="orange" label outlined>SEG</v-chip>
                            <v-chip color="orange" label outlined>TER</v-chip>
                            <v-chip color="orange" label outlined>QUA</v-chip>
                            <v-chip color="orange" label outlined>QUI</v-chip>
                            <v-chip color="orange" label outlined>SEX</v-chip>
                            <v-chip color="orange" label outlined>SÁB</v-chip>
                        </v-col>
                    </v-row>
                </v-chip-group>
            </v-card-text>
            <v-divider class="mx-4"></v-divider>
            <v-card-text class="d-flex flex-row justify-center">
                <v-row class="pl-2 d-flex flex-row justify-center">
                    <v-rating
                        :value="4.5"
                        color="amber"
                        dense
                        half-increments
                        readonly
                        size="20"
                    ></v-rating>

                    <div class="grey--text ml-4">4.5 (413)</div>
                </v-row>
            </v-card-text>

            <v-divider class="mx-4"></v-divider>

            <v-card-text class="d-flex flex-column justify-center">
                <v-row class="pl-2 pt-2 text-h6 d-flex justify-center">
                    <v-icon class="mr-2" color="red"> mdi-map-marker </v-icon>
                    <div class="text-h6 text-center">Endereço</div>
                </v-row>
                <v-row class="pl-2 d-flex flex-row justify-center">
                    <div class="subtitle-1 ml-1 text-center">
                        Rua Martinho Guiamaraes, 38
                    </div>
                    <div class="subtitle-1 ml-1 text-center">
                        Centro, Campos dos Goytacazes
                    </div>
                </v-row>
            </v-card-text>

            <v-divider class="mx-4"></v-divider>

            <v-card-text class="d-flex flex-column justify-center">
                <v-row class="pl-2 pt-2 text-h6 d-flex justify-center">
                    <v-icon class="mr-2" color="red">
                        mdi-cash-usd-outline
                    </v-icon>
                    <div class="text-h6 text-center">Pagamento</div>
                </v-row>
                <v-row class="pl-2 d-flex flex-row justify-center">
                    <div class="subtitle-1 ml-1 text-center">
                        Crédito, Débito, Ticket Refeição, Dinheiro
                    </div>
                </v-row>
            </v-card-text>

            <v-divider class="mx-4"></v-divider>

            <v-card-text class="d-flex flex-column justify-center">
                <v-row class="pl-2 pt-2 text-h6 d-flex justify-center">
                    <v-icon class="mr-2" color="green"> mdi-whatsapp </v-icon>
                    <v-icon class="mr-2" color="red">
                        mdi-cellphone-android
                    </v-icon>
                    <div class="text-h6 text-center">Telefone</div>
                </v-row>
                <v-row class="pl-2 d-flex flex-row justify-center">
                    <div class="subtitle-1 ml-1 text-center">
                        (22) 99878-8444 / (22) 99878-8444
                    </div>
                </v-row>
            </v-card-text>
        </div>
        <v-card-actions class="justify-end">
            <v-btn block @click="closeDialog" color="#FF6F00" outlined>
                Fechar
            </v-btn>
        </v-card-actions>
    </v-card>
</template>
<script>
export default {
    name: "AddProduct",
    props: ["title"],
    methods: {
        closeDialog() {
            this.$store.commit('setAddProduct', false)
        }
    },
};
</script>

<style>
</style>