<template>
    <div class="nofocus d-flex justify-center">
        <v-row class="pb-10 pt-3 d-flex justify-center">
            <template v-for="item in items">
                <v-col 
                    cols="auto" 
                    :key="item.id"
                    v-if="categories == item.categoryProduct"
                >
                    <v-card
                        min-width="360"
                        max-width="360"
                        elevation="3"                        
                        hover
                        @click="loadItem(item)"
                        class="nofocus d-flex justify-space-between"
                    >
                        <div class="d-flex flex-no-wrap justify-space-between">
                            <div>
                                <v-card-title
                                    class="headline pb-5 text-h6"
                                    v-text="item.title"
                                ></v-card-title>

                                <v-card-subtitle
                                    v-if="item.info"
                                    v-text="truncateString(item.info, 28)"
                                ></v-card-subtitle>
                                
                                <v-card-subtitle 
                                    v-else
                                    class="pt-5"
                                    >

                                </v-card-subtitle>

                                <v-card-actions>
                                    <v-btn class="ml-2 mb-5" color="#FF6F00" outlined small>
                                        A partir de: R$ {{ item.price }},00
                                    </v-btn>
                                </v-card-actions>
                            </div>

                            <v-avatar class="ml-8 pl-6" size="130" height="auto" tile>
                                <v-img :src="item.src"></v-img>
                            </v-avatar>
                        </div>
                    </v-card>
                </v-col>
            </template>
        </v-row>
        <v-card-actions class="d-flex flex-column justify-center pa-0">
            <v-row justify="space-around">
                <v-dialog
                    :retain-focus="false"
                    v-model="addProduct"
                    transition="dialog-top-transition"
                    max-width="600"
                    :fullscreen="false"
                >
                    <AddProduct v-if="addProduct" @closeDialog="addProduct = $event" :product="loadProduct" />
                </v-dialog>
            </v-row>
        </v-card-actions>
    </div>
</template>
<script>
import AddProduct from "@/components/publicArea/AddProduct";
import Utils from "@/config/Utils"
export default {
    name: 'CategoryProduct',
    components: {AddProduct},
    mixins: [Utils],
    props: ['categories'],
    data: () => {
        return {
            loadProduct: [],
            addProduct: false,
            items: [
                {
                    id: "1",
                    src: "https://cdn.pixabay.com/photo/2017/04/28/16/41/the-pan-2268825_1280.png",
                    title: "Quentinha Meia",
                    info: "Escolha Sua Guarnição",
                    categoryProduct: "Quentinha",
                    price: 10.00
                },{
                    id: "2",
                    src: "https://www.kerokery.com.br/media/catalog/product/cache/1/image/800x/9df78eab33525d08d6e5fb8d27136e95/k/k/kkr-_157-sku-801___bebidas__coca-cola-lata-350ml.jpg",
                    title: "Coca-Lata 350ML",
                    info: "",
                    categoryProduct: "Bebidas",
                    price: 5.00
                },{
                    id: "3",
                    src: "https://static.clubeextra.com.br/img/uploads/1/901/677901.jpg",
                    title: "Fanta Laranja 2L",
                    info: "",
                    categoryProduct: "Bebidas",
                    price: 9.00
                },{
                    id: "4",
                    src: "https://static.clubeextra.com.br/img/uploads/1/901/677901.jpg",
                    title: "Fanta Laranja 1L",
                    info: "",
                    categoryProduct: "Bebidas",
                    price: 6.00
                },{
                    id: "5",
                    src: "https://cdn.pixabay.com/photo/2017/04/28/16/41/the-pan-2268825_1280.png",
                    title: "Quentinha Inteira",
                    info: "Escolha Sua Guarnição",
                    categoryProduct: "Quentinha",
                    price: 12.00
                },
            ],
        };
    },
    computed: {

    },
    methods: {
        loadItem(item) {
            this.loadProduct = item
            this.addProduct = true
        }
    }, 
    watch: {

    },
    mounted() {

    }
};
</script>
<style>

.nofocus:focus:before { outline: none; background-color: white; opacity: 0.00;}

</style>