<script setup>
import { ref, watch } from 'vue'
// get props values
const props = defineProps(['show', 'errorMessage'])

// define emits
const emit = defineEmits(['update:show'])

// emit hide modal
const hideModal = () => {
  emit('update:show', false)
}

const error = ref()

// watch error Message to update on state
watch(
  () => props.errorMessage,
  (val) => {
    error.value = val
  }
)
</script>

<template>
  <v-dialog persistent :model-value="show" width="700px">
    <v-card>
      <v-card-text>
        <h3 class="mb-4">Error</h3>
        <p>{{ error }}</p>
      </v-card-text>
      <v-card-actions class="modal-footer">
        <v-btn variant="tonal" @click.prevent="hideModal">Close</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<style scoped>
.modal-footer {
  justify-content: flex-end;
  padding: 20px;
}
</style>
