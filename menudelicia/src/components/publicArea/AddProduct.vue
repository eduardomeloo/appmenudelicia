 <template>
    <v-card class="d-flex flex-column justify-center">
        <v-toolbar height = "48" 
                   color="#F4511E" 
                   dark 
                   class="text-h6 d-flex justify-center text-center">
            {{ title }} <v-icon class="ml-5">mdi-cart-plus</v-icon>
        </v-toolbar>
        <div class="d-flex flex-column justify-center">

            <v-divider class="mx-4"></v-divider>

        </div>

        <v-row>
            <v-col
                cols=""
                class="d-flex justify-center"
            >
                <div class="d-flex justify-center">
                    <div class="d-flex justify-center mt-2 ">
                        <v-btn 
                            class="d-flex justify-center" 
                            outlined 
                            color="#FF6F00"
                            width=55
                            min-width=55
                            @click="qtdItems == 1 ? qtdItems : qtdItems --"
                        >
                            <v-icon class="">mdi-minus</v-icon>
                        </v-btn>
                        <v-btn
                            class="d-flex justify-center mr-1 ml-1"
                            outlined
                            width=40
                            min-width=40
                        >
                            <span><strong>{{  qtdItems }}</strong></span>
                        </v-btn>
                        

                        <v-btn 
                            class="d-flex justify-center" 
                            outlined 
                            color="#FF6F00"
                            width=55
                            min-width=55
                            @click="qtdItems ++"
                        >
                            <v-icon class="">mdi-plus</v-icon>
                        </v-btn>
                    </div>
                    
                    <v-card-actions class="d-flex justify-center">
                        <v-btn block @click="closeDialog" color="#FF6F00" outlined>
                            Adicionar
                        </v-btn>
                    </v-card-actions>
                </div>
            </v-col>
        </v-row>
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
    data() {
        return {
            qtdItems: 1
        }
    },
    methods: {
        closeDialog() {
            // this.$store.commit('setAddProduct', false)
            this.$emit('closeDialog', false)
        }
    },
};
</script>

<style>
</style>