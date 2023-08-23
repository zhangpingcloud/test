import { Store } from 'vuex';
import user_module from './user';
export const CHANGECOLLAPSE = 'CHANGECOLLAPSE';

export default new Store({
    state: {
        // count: 0,
        // color: '#ff00ff',
        // token: '5345645454651',
        // price: 800,
        // discount: 0.8
        collapse: true
    },
    mutations: {
        // increment(state){
        //     state.count += 1;
        // }
        [CHANGECOLLAPSE](state, payload){
            state.collapse = !state.collapse
        }
    },
    actions: {
        [CHANGECOLLAPSE]({ commit, state }, data){
            commit(CHANGECOLLAPSE, {
                ...data
            })
        }
    },
    getters: {
        // real_price(state){
        //     return state.price * state.discount
        // }
    },
    modules: {
        user: user_module
    }
})