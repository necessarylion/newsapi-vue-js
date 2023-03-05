<script setup>
import { useStore } from 'vuex'
import { ref } from 'vue'
import HeadlineCard from './HeadlineCard.vue'

const store = useStore()
const showHeadlineHistory = ref(true)
</script>

<template>
  <v-row no-gutters v-if="store.state.headlineHistory.list.length > 0">
    <v-col cols="12">
      <v-sheet class="ma-2 pa-2 line">
        <div class="recent-title" @click="showHeadlineHistory = !showHeadlineHistory">
          <div>
            <v-icon icon="fas fa-clock" class="mr-2" color="primary"></v-icon>
            Recently Visited Headlines
          </div>
          <div>
            <v-icon
              :icon="showHeadlineHistory ? 'fas fa-angle-down' : 'fas fa-angle-up'"
              class="mr-2 pointer"
              color="primary"
            ></v-icon>
          </div>
        </div>
      </v-sheet>
    </v-col>

    <template v-if="showHeadlineHistory">
      <v-col
        v-for="(h, index) in store.state.headlineHistory.list"
        :key="index"
        cols="12"
        sm="6"
        md="4"
        lg="4"
      >
        <v-sheet class="ma-2 pa-2 sheet">
          <HeadlineCard :headline="h" @on-edit="editHeadline(index)" />
        </v-sheet>
      </v-col>
      <v-col cols="12">
        <v-sheet class="ma-2 line"> </v-sheet>
      </v-col>
    </template>
  </v-row>
</template>

<style scoped>
.sheet {
  height: 95%;
}
.recent-title {
  font-weight: 600;
  display: flex;
  justify-content: space-between;
  align-content: center;
  font-family: 'Newsreader', serif;
}

.line {
  border-bottom: 0.5px solid #c9c9c9;
  width: 100%;
}
</style>
