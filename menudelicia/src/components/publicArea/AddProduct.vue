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
                height="200"
                contain
                :src="product.src"
            >
            </v-img>

            <v-card-subtitle class="mt-5" v-if="product.info" v-text="product.info" >

            </v-card-subtitle>

            <div class="pretty p-icon p-curve p-jelly d-flex flex-column ma-4" v-for="(itens) in cardapioDodia" :key="itens.id">
                <input 
                    @click="validCheck(itens)"
                    v-model="selected"
                    type="checkbox" 
                    :value="itens" 
                    :id="itens.id" 
                    size="3"
                >
                <div class="state p-warning">
                    <i class="icon mdi mdi-check"></i>
                    <label><strong>{{ itens.name }}</strong></label>
                </div>
            </div>

            <!-- <v-alert
                v-if="qtdMaxItensError"
                dense
                outlined
                type="error"
            >
                Você já selecionou <strong>2</strong> ítens
            </v-alert> -->


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
            testee: false,
            qtdItems: 1,
            qtdMaxItensError: false,
            cardapioDodia: [{
                                id: 1,
                                name: 'Arroz',
                                checked: false
                            },{
                                id: 2,
                                name: 'Fejão Comum',
                                checked: false
                            },{
                                id: 3,
                                name: 'Fejão Tropeiro',
                                checked: false
                            }],
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
        },
        validCheck(item) {
            if (this.selected.length > 1 && this.selected.indexOf(item) === -1) {
                document.getElementById(item.id).checked=false;
                this.qtdMaxItensError = true
                //document.getElementById("div1").removeAttribute("align")
            } 
        },
    },
};
</script>

<style>

.input-check {
    color: black;
    background-color: coral;
}
</style>