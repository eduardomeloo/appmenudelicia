 <template>
    <v-card class="d-flex flex-column justify-center">
        <v-toolbar height = "48" 
                   color="#F4511E" 
                   dark 
                   class="text-h6 d-flex justify-center text-center">
            {{ title }} <v-icon class="ml-5">mdi-cart-outline</v-icon>
        </v-toolbar>
        <div class="d-flex flex-column justify-center">

            <v-divider class="mx-4"></v-divider>

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
            // this.$store.commit('setAddProduct', false)
            this.$emit('closeDialog', false)
        }
    },
};
</script>

<style>
</style>