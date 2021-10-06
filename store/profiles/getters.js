export default {
  getFilteredProfileList(state) {
    const res = []
    if (state.keyword.length === 0) {
      res.push(...state.profileList)
    } else {
      state.profileList.forEach((p) => {
        if (
          p.name.toLowerCase().includes(state.keyword.toLowerCase()) ||
          p.email.toLowerCase().includes(state.keyword.toLowerCase()) ||
          p.title.toLowerCase().includes(state.keyword.toLowerCase()) ||
          p.city.toLowerCase().includes(state.keyword.toLowerCase()) ||
          p.address.toLowerCase().includes(state.keyword.toLowerCase())
        ) {
          res.push(p)
        }
      })
    }
    return res
  },
  getKeyword(state) {
    return state.keyword
  },
}
