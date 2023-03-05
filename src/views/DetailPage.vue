<script setup>
import { useStore } from 'vuex'
import { onMounted } from 'vue'
import NavBar from '@/components/NavBar.vue'
import HeadlineDetailCard from '@/components/HeadlineDetailCard.vue'
import { SET_SELECTED_HEADLINE_WITH_DATA } from '@/store/headline/mutations'

const {
  dispatch,
  state: { headline }
} = useStore()

onMounted(() => {
  if (!headline.selectedHeadline) {
    const data = window.localStorage.getItem('selectedHeadline')
    if (data) {
      dispatch(SET_SELECTED_HEADLINE_WITH_DATA, JSON.parse(data))
    }
  }
})
</script>

<template>
  <div>
    <NavBar />
    <div v-if="headline.selectedHeadline" class="detail-view">
      <v-row no-gutters>
        <v-col cols="12">
          <v-sheet class="ma-2 pa-2 line">
            <HeadlineDetailCard :headline="headline.selectedHeadline" />
          </v-sheet>
        </v-col>
      </v-row>
    </div>
  </div>
</template>

<style scoped>
.detail-view {
  max-width: 600px;
  margin: 0 auto;
}
</style>
