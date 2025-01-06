import { createStore } from 'vuex'

//
export const store = createStore({
    state: {
        page: 'default',
    },
    mutations: {
        setPage(state, payload) {
            state.page = payload.page
        }
    }

})
