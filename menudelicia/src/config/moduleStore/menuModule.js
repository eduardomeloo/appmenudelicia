export default {
    state: {
        drawer: 'adasdad',
        group: null
    },
    getters: {
        getDrawer(state) {
            return state.drawer
        },
        getGroup(state) {
            return state.group
        }
    },
    mutations: {
        setDrawer(state, newValue) {
            state.drawer = newValue
        },
    },
    actions: {
        changeDrawer(context, value) {
            context.commit('setDrawer', value)
        }
    }
}