

import { createStore } from 'vuex'
import menu from "./menu";
import getters from "./getters";
const store = createStore({
    state:{},
    mutations:{},
    modules:{
        menu
    },
    getters,
})

export default store