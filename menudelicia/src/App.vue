<template>
    <v-app>
        <Header />
        <v-main>
            <Main />
        </v-main>
        <Footer />
    </v-app>
</template>

<script>
import Header from "@/components/publicArea/templates/Header";
import Footer from "@/components/publicArea/templates/Footer";
import Main from "@/components/publicArea/Main";

export default {
    name: "App",

    components: {
        Main,
        Header,
        Footer
    },

    data: () => {
       return {

       } 
    },
};
</script>

<style scoped>

</style>
