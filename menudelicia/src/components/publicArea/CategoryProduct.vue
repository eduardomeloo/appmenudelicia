<template>
    <div>
        <v-card-actions class="d-flex flex-column justify-center">
            <v-row justify="space-around">
                <v-dialog
                    v-model="addProduct"
                    transition="dialog-top-transition"
                    max-width="600"
                    :fullscreen="false"
                >
                    <AddProduct :title="title" v-if="addProduct" @closeDialog="addProduct = $event" />
                </v-dialog>
            </v-row>
        </v-card-actions>
        <v-row class="pb-10">
            <template v-for="(item, i) in items" >
                <v-col :key="i" cols="auto" v-if="categories === item.categoryProduct">
                    <v-card
                        min-width="380"
                        max-width="380"
                        elevation="3"                        
                        @click="addProduct = !addProduct"
                        hover>
                        <div class="d-flex flex-no-wrap justify-space-between">
                            <div>
                                <v-card-title
                                    class="headline pb-5 text-h6"
                                    v-text="item.title"
                                ></v-card-title>

                                <v-card-subtitle
                                    v-if="item.info"
                                    v-text="item.info"
                                    
                                ></v-card-subtitle>
                                
                                <v-card-subtitle 
                                    v-else
                                    class="pt-5"
                                    >

                                </v-card-subtitle>

                                <v-card-actions>
                                    <v-btn class="ml-2 mb-5" color="#FF6F00" outlined small>
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
                    info: "Várias opções...",
                    categoryProduct: "Quentinha"
                },{
                    src: "https://www.kerokery.com.br/media/catalog/product/cache/1/image/800x/9df78eab33525d08d6e5fb8d27136e95/k/k/kkr-_157-sku-801___bebidas__coca-cola-lata-350ml.jpg",
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