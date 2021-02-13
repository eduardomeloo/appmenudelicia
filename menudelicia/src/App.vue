<template>
    <v-app>
        <Header />
        <v-main>
            <HelloWorld />
        </v-main>
        <Footer />
    </v-app>
</template>

<script>
import Header from "@/components/templates/Header";
import Footer from "@/components/templates/Footer";
import HelloWorld from "./components/HelloWorld";

export default {
    name: "App",

    components: {
        HelloWorld,
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
