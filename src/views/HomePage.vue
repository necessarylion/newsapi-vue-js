<script setup>
import { ref, onMounted } from 'vue'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'
import HeadlineCard from '@/components/HeadlineCard.vue'
import HeadlineCardSkeleton from '@/components/HeadlineCardSkeleton.vue'
import HeadlineUpdateModal from '@/components/HeadlineUpdateModal.vue'
import NavBar from '@/components/NavBar.vue'
import FilterSourceModal from '@/components/FilterSourceModal.vue'
import RecentlyVisitedHeadline from '@/components/RecentlyVisitedHeadline.vue'
import {
  SEARCH_HEADLINE,
  GET_HEADLINE,
  FILTER_HEADLINE_BY_SOURCE,
  SET_SELECTED_HEADLINE,
  UPDATE_HEADLINE,
  SET_HEADLINE_LOADING
} from '@/store/headline/mutations'
import { GET_SOURCE } from '@/store/source/mutations'
import { ADD_HEADLINE_HISTORY } from '@/store/headlineHistory/mutations'
import { convertToSlug } from '@/utils/helper'

const {
  dispatch,
  state: { headline, source }
} = useStore()

const router = useRouter()

const showDialog = ref(false)
const showFilterDialog = ref(false)
const searchTimer = ref()

onMounted(() => {
  dispatch(GET_HEADLINE)
  dispatch(GET_SOURCE)
})

const editHeadline = (index) => {
  dispatch(SET_SELECTED_HEADLINE, index)
  showDialog.value = true
}

const updateHeadline = (title) => {
  dispatch(UPDATE_HEADLINE, title)
}

const onSearch = (event) => {
  dispatch(SET_HEADLINE_LOADING, true)
  clearTimeout(searchTimer.value)
  searchTimer.value = setTimeout(() => {
    dispatch(SEARCH_HEADLINE, event.target.value)
  }, 500)
}

const updateSource = (arr) => {
  if (arr && arr.length > 0) {
    dispatch(FILTER_HEADLINE_BY_SOURCE, arr)
  } else {
    dispatch(GET_HEADLINE)
  }
}

const viewDetail = (index) => {
  dispatch(SET_SELECTED_HEADLINE, index)
  const data = headline.headlines[index]
  router.push({ path: `/detail/${convertToSlug(data.title)}` })
}

const addToHistory = (val) => {
  dispatch(ADD_HEADLINE_HISTORY, val)
  window.open(val.url)
}
</script>

<template>
  <div>
    <NavBar />

    <div class="filters ma-2 pa-2">
      <v-text-field
        class="mr-2"
        density="compact"
        label="Search Headlines"
        append-inner-icon="fas fa-search"
        single-line
        clearable
        @keyup="onSearch"
        hide-details
        color="primary"
      ></v-text-field>

      <div>
        <v-btn
          variant="outlined"
          @click="showFilterDialog = true"
          class="filter-btn"
          color="primary"
          prepend-icon="fas fa-filter"
        >
          Filter
        </v-btn>
      </div>
    </div>

    <RecentlyVisitedHeadline />

    <v-row no-gutters>
      <template v-if="headline.loading">
        <v-col v-for="i in 12" :key="i" cols="12" sm="6" md="4" lg="4">
          <v-sheet class="ma-2 pa-2 loading">
            <HeadlineCardSkeleton />
          </v-sheet>
        </v-col>
      </template>
      <template v-else-if="headline.headlines.length > 0">
        <v-col v-for="(h, index) in headline.headlines" :key="index" cols="12" sm="6" md="4" lg="4">
          <v-sheet class="ma-2 pa-2 sheet">
            <HeadlineCard
              :headline="h"
              @on-edit="editHeadline(index)"
              @on-view="viewDetail(index)"
              @on-open-url="addToHistory(h)"
            />
          </v-sheet>
        </v-col>
      </template>
      <template v-else>
        <v-col cols="12">
          <v-sheet class="ma-2 pa-2 not-found">
            Not headlines found! Try different keyword.</v-sheet
          >
        </v-col>
      </template>
    </v-row>

    <FilterSourceModal
      :sources="source.sources"
      :show="showFilterDialog"
      @on-update="updateSource"
      @update:show="showFilterDialog = $event"
    />

    <HeadlineUpdateModal
      :show="showDialog"
      :title="headline.selectedHeadline?.title"
      @on-update="updateHeadline"
      @update:show="showDialog = $event"
    />
  </div>
</template>

<style scoped>
.sheet {
  height: 95%;
}
.loading {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 300px;
}

.filters {
  align-items: center;
  display: flex;
}

.filter-btn {
  height: 40px;
}
</style>
