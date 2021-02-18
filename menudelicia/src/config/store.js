import Vue from 'vue'
import Vuex from 'vuex'

//import menuModule from './moduleStore/menuModule'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        drawer: false,
        group: null,
        dialog: false
    },
    mutations: {
        setDrawer(state, newValue) {
            state.drawer = newValue
        },
        setDialog(state, newValue) {
            state.dialog = newValue
        },
    }
})