<template>
  <div class="row profile-card m-3">
    <div
      class="col-md-3 col-12 profile-card__avatar d-flex align-items-end justify-content-center p-0"
    >
      <img :src="source.avatar" :alt="`avatar-${source.name}`" />
    </div>
    <div class="col-md-9 col-12 profile-card__info py-3 px-0">
      <div class="d-flex align-items-start justify-content-between">
        <h2 v-dompurify-html="highLight(source.name)" class="name pl-3"></h2>
        <span
          v-dompurify-html="highLight(source.email)"
          class="email pr-1"
        ></span>
      </div>
      <h4 v-dompurify-html="highLight(source.title)" class="title pl-3"></h4>
      <h4
        v-dompurify-html="highLight(`${source.address} ${source.city}`)"
        class="address pl-3"
      ></h4>
      <hr />
      <span class="status pl-3">MAKE AS SUITABLE</span>
    </div>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
export default {
  name: 'ProfileCard',
  props: {
    source: {
      type: Object,
      required: true,
      default: () => ({}),
    },
  },
  computed: {
    ...mapGetters({
      keyword: 'profiles/getKeyword',
    }),
  },
  methods: {
    highLight(str) {
      const generate = (res, s, keyword) => {
        const pos = s.toLowerCase().indexOf(keyword.toLowerCase())
        if (pos < 0 || keyword.length === 0) return res + s
        const temp =
          res +
          s.slice(0, pos) +
          "<span class='highlight'>" +
          s.slice(pos, pos + keyword.length) +
          '</span>'
        const tail = s.slice(pos + keyword.length)
        return generate(temp, tail, keyword)
      }

      return generate('', str, this.keyword)
    },
  },
}
</script>
