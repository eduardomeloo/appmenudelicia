 <template>
    <v-card class="d-flex flex-column justify-center">
        <v-toolbar height = "48" 
                   color="#F4511E" 
                   dark 
                   class="text-h6 d-flex justify-center text-center">
            Adicionar Produto <v-icon class="ml-5">mdi-cart-plus</v-icon>
        </v-toolbar>
        <div class="d-flex flex-column justify-center">
            <v-card-title
                class="headline pb-5 text-h5 justify-center"
                v-text="product.title"
            >
            </v-card-title>
            <v-img
                height="250"
                contain
                :src="product.src"
            >
            </v-img>

            <v-card-subtitle
                class="mt-5"
                v-if="product.info"
                v-text="product.info"
            >
            </v-card-subtitle>

            <v-container fluid>
                <p>{{ selected }}</p>
                <v-checkbox :readonly="selected.length >= 2" onclick="return false" type="checkbox" v-model="selected" label="Arroz" value="Arroz"></v-checkbox>
                <v-checkbox :readonly="selected.length >= 1" type="checkbox" v-model="selected" label="Feijão Comum" value="Feijão Comum"></v-checkbox>
            </v-container>  

            <v-card class="d-flex flex-column justify-center">
                {{product}}
            </v-card>

            <v-divider class="mx-4"></v-divider>

        </div>

        <v-row>
            <v-col
                cols=""
                class="d-flex justify-center"
            >
                <div class="d-flex justify-center">
                    <div class="d-flex justify-center mt-4">
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
                        <v-btn block @click="closeDialog" color="#FF6F00" outlined height=55> 
                            Adicionar <br /><br />
                            
                            {{ real(product.price * qtdItems)}}
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
import Utils from '@/config/Utils'
export default {
    name: "AddProduct",
    mixins: [Utils],
    props: {
        product: Object
    },
    data() {
        return {
            qtdItems: 1,
            selected: [],
            nameRules: [
                selected => selected.length < 2 || 'Quantidade de ítens já está no limite',
            ],
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