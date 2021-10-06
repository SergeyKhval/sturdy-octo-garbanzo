<template>
  <div id="homePage" class="container d-flex justify-content-center">
    <section>
      <profile-list />
    </section>
  </div>
</template>

<script>
import ProfileList from '@/components/profiles/profileList'
export default {
  name: 'ProfileSearchPage',
  components: {
    ProfileList,
  },
}
</script>
