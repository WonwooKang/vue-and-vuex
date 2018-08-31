import Vue from 'vue'
import Vuex from 'vuex'

// modules
import * as modules from './modules'

Vue.use(Vuex)

export default new Vuex.Store({
    state : {
        testData: '임시 데이터'
    },
    mutations : {
        setData: function(state, data){
            state.testData = data
        }
    },
    actions : {
    },
    modules : modules.default
})
