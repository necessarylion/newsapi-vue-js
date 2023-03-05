<script setup>
import { formatDate } from '@/utils/helper'

defineProps(['headline'])
</script>

<template>
  <div class="card">
    <div class="news-title">
      {{ headline.title }}
    </div>
    <div v-if="headline.urlToImage" class="news-image">
      <img :src="headline.urlToImage" :alt="headline.title" />
    </div>
    <div class="news-description">
      {{ headline.description }}
    </div>
    <div class="news-content" v-html="headline.content"></div>
    <div class="source-date-container">
      <span class="source-name">
        {{ headline.source.name }}
      </span>
      <span class="publish-date">
        {{ formatDate(headline.publishedAt) }}
      </span>
    </div>
    <div class="news-author">By {{ headline.author }}</div>
    <div class="card-footer">
      <div></div>
      <div class="news-detail-btn" @click="$emit('on-open-url')">
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

.news-image {
  text-align: center;
}

.news-image img {
  border-style: none;
  width: 100%;
  border-radius: 5px;
  margin: 14px 0px;
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
  margin-bottom: 15px;
  margin-top: 10px;
  font-size: 14px;
  font-family: 'Newsreader';
  color: #604d31;
}

.news-content {
  overflow: hidden;
  margin-bottom: 15px;
  margin-top: 10px;
  font-size: 14px;
  font-family: 'Newsreader';
  color: #604d31;
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
</style>
