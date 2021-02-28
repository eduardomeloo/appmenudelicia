<template>
    <header>
        <v-app-bar app dense color="#F4511E">
            
            <v-spacer></v-spacer>
            <div>
                <span class="item-carrinho"><strong>{{ itemCart }}</strong></span>
                <v-icon class="ml-1 mr-3" color="white">mdi-cart-outline</v-icon>
            </div>
            
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
            itemCart: 0
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
    .item-carrinho {
        color: white;
        font-size: 1rem;
    }
</style>