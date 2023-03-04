<script setup>
import { ref } from 'vue'

// get props values
const props = defineProps(['show', 'sources'])

// define emits
const emit = defineEmits(['on-update', 'update:show'])

// define states
const selectedSource = ref()
const form = ref()

// emit hide modal
const hideModal = () => {
  emit('update:show', false)
}

// submit form
const submit = () => {
  if (!form.value) return
  emit('on-update', [...selectedSource.value])
  hideModal()
}
</script>

<template>
  <v-dialog persistent :model-value="show" width="700px">
    <v-form v-model="form" @submit.prevent="submit">
      <v-card>
        <v-card-text>
          <h3 class="mb-4">Filter headlines by source</h3>
          <v-autocomplete
            v-model="selectedSource"
            :items="props.sources"
            chips
            closable-chips
            color="primary"
            item-title="name"
            item-value="id"
            label="Select Source"
            multiple
          >
          </v-autocomplete>
        </v-card-text>
        <v-card-actions class="modal-footer">
          <v-btn variant="tonal" @click.prevent="hideModal">Cancel</v-btn>
          <v-btn :disabled="!form" variant="tonal" color="primary" type="submit">Submit</v-btn>
        </v-card-actions>
      </v-card>
    </v-form>
  </v-dialog>
</template>

<style scoped>
.modal-footer {
  justify-content: flex-end;
  padding: 20px;
}
</style>
