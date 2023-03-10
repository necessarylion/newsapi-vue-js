<script setup>
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'
import { convertToSlug, formatDate } from '@/utils/helper'
import { ADD_TO_VISITED_HEADLINE, SET_SELECTED_HEADLINE_WITH_DATA } from '@/store/mutations'

defineProps(['headline', 'show-edit'])
const { dispatch } = useStore()
const router = useRouter()

const viewDetail = (data) => {
  dispatch(SET_SELECTED_HEADLINE_WITH_DATA, data)
  router.push({ path: `/detail/${convertToSlug(data.title)}` })
}

const openUrl = (data) => {
  dispatch(ADD_TO_VISITED_HEADLINE, data)
  window.open(data.url)
}
</script>

<template>
  <div class="card">
    <div class="clickable-area" @click="viewDetail(headline)">
      <div class="source-date-container">
        <span class="source-name">
          {{ headline.source.name }}
        </span>
        <span class="publish-date">
          {{ formatDate(headline.publishedAt) }}
        </span>
      </div>
      <div class="news-title">
        {{ headline.title }}
      </div>
      <div class="news-description">
        {{ headline.description }}
      </div>
      <div class="news-author">By <span v-html="headline.author"></span></div>
    </div>

    <div class="card-footer">
      <div v-if="showEdit" class="news-edit-btn" @click="$emit('on-edit')">
        <v-icon color="primary" icon="fas fa-pen-square" />
      </div>
      <div v-else></div>
      <div class="news-detail-btn" @click="openUrl(headline)">
        Read More
        <v-icon class="view-detail-icon" icon="fas fa-arrow-right" size="x-small" />
      </div>
    </div>
  </div>
</template>

<style scoped>
.card {
  background: #f6f6f6;
  border-radius: 6px;
  padding: 15px;
  height: 100%;
  display: flex;
  flex-direction: column;
  width: 100%;
}

.card:hover {
  background: #fff6db;
  cursor: pointer;
}

.clickable-area {
  display: flex;
  flex-direction: column;
  height: 100%;
}

.source-date-container {
  margin-bottom: 10px;
}

.source-name {
  font-family: 'Open Sans', sans-serif;
  padding-right: 10px;
  border-right: 1px solid #c9c9c9;
  margin-right: 10px;
  font-size: 11px;
  color: #43558d;
  font-weight: 600;
}

.publish-date {
  font-family: 'Open Sans', sans-serif;
  font-size: 11px;
  color: #504f4f;
}

.news-title {
  font-family: 'Newsreader', serif;
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 5px;
  flex: 1;
  color: #373030;
}

.news-description {
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  margin-bottom: 8px;
  font-size: 12px;
  font-family: 'Newsreader';
  color: #604d31;
  flex: 1;
}

.news-author {
  font-family: 'Open Sans', sans-serif;
  font-size: 9px;
  color: #000000;
  text-transform: uppercase;
  font-weight: 600;
}

.card-footer {
  border-top: 0.5px solid #c9c9c9;
  margin-top: 10px;
  padding: 10px 0px 0px 0px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.news-detail-btn {
  cursor: pointer;
  color: #504f4f;
  font-size: 11px;
}

.view-detail-icon {
  color: #504f4f;
}

.news-edit-btn {
  cursor: pointer;
  color: #504f4f;
  font-size: 11px;
}
</style>
