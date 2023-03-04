<script setup>
import { ref, onMounted } from 'vue'
import HeadLineCard from '@/components/HeadLineCard.vue'
import HeadLineCardSkeleton from '@/components/HeadLineCardSkeleton.vue'
import HeadLineUpdateModal from '@/components/HeadLineUpdateModal.vue'
import NavBar from '@/components/NavBar.vue'
import NewsApiService from '@/services/NewsApiService'
import FilterSourceModal from '@/components/FilterSourceModal.vue'

const loading = ref(false)
const headlines = ref()
const sources = ref()
const selectedHeadline = ref()
const showDialog = ref(false)
const showFilterDialog = ref(false)
const searchTimer = ref()

const getHeadlines = async () => {
  loading.value = true
  const res = await NewsApiService.getHeadlines()
  if (res.status === 'ok') {
    headlines.value = res.articles
  }
  loading.value = false
}

const getSources = async () => {
  loading.value = true
  const res = await NewsApiService.getSources()
  if (res.status === 'ok') {
    sources.value = res.sources
  }
  loading.value = false
}

const getHeadlinesBySources = async (arr) => {
  loading.value = true
  const res = await NewsApiService.getHeadlinesBySources(arr)
  if (res.status === 'ok') {
    headlines.value = res.articles
  }
  loading.value = false
}

const searchHeadline = async (keyword) => {
  if (!keyword) {
    getHeadlines()
    return
  }
  if (keyword && !loading.value) {
    loading.value = true
    const res = await NewsApiService.searchHeadline(keyword)
    console.log(res)
    if (res.status === 'ok') {
      headlines.value = res.articles
    }
    loading.value = false
  }
}

onMounted(async () => {
  await getSources()
  await getHeadlines()
})

const editHeadline = (index) => {
  selectedHeadline.value = headlines.value[index]
  showDialog.value = true
}

const updateHeadline = (title) => {
  selectedHeadline.value.title = title
}

const onSearch = (event) => {
  clearTimeout(searchTimer.value)
  searchTimer.value = setTimeout(() => {
    searchHeadline(event.target.value)
  }, 500)
}

const updateSource = (arr) => {
  if (arr && arr.length > 0) {
    getHeadlinesBySources(arr)
  } else {
    getHeadlines()
  }
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

    <v-row no-gutters>
      <template v-if="loading">
        <v-col v-for="i in 12" :key="i" cols="12" sm="6" md="4" lg="4">
          <v-sheet class="ma-2 pa-2 loading">
            <HeadLineCardSkeleton />
          </v-sheet>
        </v-col>
      </template>
      <template v-else-if="headlines.length > 0">
        <v-col v-for="(headline, index) in headlines" :key="index" cols="12" sm="6" md="4" lg="4">
          <v-sheet class="ma-2 pa-2 sheet">
            <HeadLineCard :headline="headline" @on-edit="editHeadline(index)" />
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
      :sources="sources"
      :show="showFilterDialog"
      @on-update="updateSource"
      @update:show="showFilterDialog = $event"
    />

    <HeadLineUpdateModal
      :show="showDialog"
      :headline="selectedHeadline"
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
