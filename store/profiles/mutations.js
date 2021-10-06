import * as types from './types'

const mutations = {
  [types.SET_PROFILE_LIST](state, payload) {
    state.profileList = [...payload]
  },
  [types.SET_KEYWORD](state, payload) {
    state.keyword = payload
  },
}
export default mutations
