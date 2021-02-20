<template>
    <header>
        <v-app-bar app dense color="#F4511E">
            <v-spacer></v-spacer>

            <v-app-bar-nav-icon
                color="white"
                @click.stop="changeDrawer"
            ></v-app-bar-nav-icon>
        </v-app-bar>
        <MenuPublic />
    </header>
</template>
<script>
import { mapState } from 'vuex'
import MenuPublic from '@/components/publicArea/templates/MenuPublic'
export default {
    name: "Header",
    components: {MenuPublic},
    data: () => {
        return {
            
        };
    },
    computed: {
        ...mapState(['drawer', 'group']),
    },
    methods: {
        changeDrawer() {
            this.$store.commit('setDrawer', !this.drawer)
            console.log(this.$store.state.drawer)
        }
    }
};
</script>
<style>
</style>