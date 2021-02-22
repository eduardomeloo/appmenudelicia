<template v-cloak>
    <div>
        <v-card-actions class="d-flex flex-column justify-center">
            <v-row justify="space-around">
                <v-dialog
                    v-model="addProduct"
                    transition="dialog-top-transition"
                    max-width="600"
                    :fullscreen="true"
                    
                >
                    <AddProduct :title="title" v-if="addProduct" />
                </v-dialog>
            </v-row>
        </v-card-actions>
        <v-row>
            <template v-for="(item, i) in items" >
            <v-col :key="i" cols="12" v-if="categories === item.categoryProduct">
                <v-card
                    @click="addProduct = !addProduct"
                    shaped
                    hover>
                    <div class="d-flex flex-no-wrap justify-space-between">
                        <div>
                            <v-card-title
                                class="headline pb-5"
                                v-text="item.title"
                            ></v-card-title>

                            <v-card-subtitle
                                v-text="item.info"
                            ></v-card-subtitle>

                            <v-card-actions>
                                <v-btn class="ml-2 mt-5" color="#FF6F00" outlined small>
                                    A partir de: R$ 12,99
                                </v-btn>
                            </v-card-actions>
                        </div>

                        <v-avatar class="ma-3" size="130" height="auto" tile>
                            <v-img :src="item.src"></v-img>
                        </v-avatar>
                    </div>
                </v-card>
            </v-col>
            </template>
            </v-row>
            </div>
</template>
<script>
import AddProduct from "@/components/publicArea/AddProduct";
export default {
    components: {AddProduct},
    props: ['categories'],
    data: () => {
        return {
            title: 'Adicionar Produto',
            items: [
                {
                    src: "https://cdn.pixabay.com/photo/2017/04/28/16/41/the-pan-2268825_1280.png",
                    title: "Quentinhas",
                    info: "Temos várias opções de quentinhas",
                    categoryProduct: "Quentinha"
                },{
                    src: "https://japario.com/delivery/349-large_default/coca-cola-lata.jpg",
                    title: "Coca-Lata 350ML",
                    info: "",
                    categoryProduct: "Bebidas"
                },{
                    src: "https://static.clubeextra.com.br/img/uploads/1/901/677901.jpg",
                    title: "Fanta Laranja 2L",
                    info: "",
                    categoryProduct: "Bebidas"
                },{
                    src: "https://static.clubeextra.com.br/img/uploads/1/901/677901.jpg",
                    title: "Fanta Laranja 2L",
                    info: "",
                    categoryProduct: "Bebidas"
                },
            ],
        };
    },
    computed: {
        addProduct: {
            get: function() {
                return this.$store.state.addProduct
            },
            set: function(newValue) {
                this.$store.state.addProduct = newValue
            },
        }
    },
    methods: {

    }, 
    watch: {

    },
    mounted() {

    }
};
</script>
<style>
</style>