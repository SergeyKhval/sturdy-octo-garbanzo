<template>
  <div class="profile-list col-12">
    <div class="row">
      <profile-search />
    </div>
    <div
      class="row profile-list__lists d-flex align-items-center justify-content-center"
    >
      <virtual-list
        v-if="profileList.length > 0"
        style="height: 100%; overflow-y: auto"
        :data-key="'email'"
        :data-sources="profileList"
        :data-component="profileCard"
      />
      <div v-else class="col-12 not-found">Not found</div>
    </div>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
import ProfileSearch from './profileSearch'
import ProfileCard from './profileCard'
export default {
  name: 'ProfileList',
  components: {
    ProfileSearch,
  },
  data() {
    return {
      profileCard: ProfileCard,
    }
  },
  computed: {
    ...mapGetters({
      profileList: 'profiles/getFilteredProfileList',
    }),
  },
}
</script>
