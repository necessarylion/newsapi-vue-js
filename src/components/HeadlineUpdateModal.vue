<script setup>
import { ref, watch } from 'vue'

// get props values
const props = defineProps(['title', 'show'])

// define emits
const emit = defineEmits(['on-update', 'update:show'])

// declare state for input and form
const form = ref()
const titleModal = ref()

// watch title to update on title modal
watch(
  () => props.title,
  (val) => {
    titleModal.value = val
  }
)

// handle input validation
const headlineInputValidation = (v) => {
  if (!v) {
    return 'Field is required'
  }
  if (v.length > 255) {
    return 'Headline is too long max 255 characters'
  }
  return true
}

// emit hide modal
const hideModal = () => {
  emit('update:show', false)
}

// submit form
const submit = () => {
  if (!form.value) return
  emit('on-update', titleModal.value)
  hideModal()
}
</script>

<template>
  <v-dialog persistent :model-value="show" width="700px">
    <v-form v-model="form" @submit.prevent="submit">
      <v-card>
        <v-card-text>
          <h3 class="mb-4">Update new headline</h3>
          <v-text-field
            :rules="[headlineInputValidation]"
            v-model="titleModal"
            label="New Headline"
            color="primary"
            clearable
          ></v-text-field>
        </v-card-text>
        <v-card-actions class="modal-footer">
          <v-btn variant="tonal" @click.prevent="hideModal">Cancel</v-btn>
          <v-btn :disabled="!form" variant="tonal" color="primary" type="submit">Update</v-btn>
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
