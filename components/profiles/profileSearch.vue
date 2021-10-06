<template>
  <b-input-group class="col-12 profile-search px-3 my-3">
    <template #prepend>
      <b-input-group-text>
        <b-icon icon="search" style="width: 20px; height: 20px" />
      </b-input-group-text>
    </template>
    <b-form-input :value="keyword" @input="changeKeyword"></b-form-input>
  </b-input-group>
</template>
<script>
import { mapGetters, mapActions } from 'vuex'
import _ from 'lodash'

export default {
  name: 'ProfileSearch',
  computed: {
    ...mapGetters({
      keyword: 'profiles/getKeyword',
    }),
  },
  methods: {
    ...mapActions('profiles', ['SET_KEYWORD']),
    changeKeyword: _.debounce(function (e) {
      this.SET_KEYWORD(e)
    }, 300),
  },
}
</script>
