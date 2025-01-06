import {useStore} from "vuex";
import {useRoute} from "vue-router";


//store.state.pageの値をroute.meta.titleの値にする
/*export function commitTitle() {
    let store = useStore()
    const route = useRoute()
    const currentRoute = route.meta.title
    store.commit('setPage', {page: currentRoute})
}*/

//store.pageの値をroute.meta.titleの値にする
import {pageCommitStore} from "@/pinia.js";
export function commitTitle() {
    const route = useRoute()
    const currentRoute = route.meta.title
    const store = pageCommitStore()
    store.page = currentRoute
}
