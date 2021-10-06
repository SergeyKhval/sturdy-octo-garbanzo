import * as types from './types'

export default {
  [types.SET_PROFILE_LIST](context, payload) {
    context.commit(types.SET_PROFILE_LIST, payload)
  },
  [types.SET_KEYWORD](context, payload) {
    context.commit(types.SET_KEYWORD, payload)
  },
}
