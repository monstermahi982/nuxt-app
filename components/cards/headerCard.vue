<template>
    <ion-card>
      <ion-card-header>
        <ion-card-title>{{ props.title }}</ion-card-title>
        <ion-card-subtitle>{{ props.subtitle }}</ion-card-subtitle>
      </ion-card-header>
  
      <ion-card-content>
        {{ props.content }}
      </ion-card-content>
    </ion-card>
  </template>

<script lang="ts" setup>
const props = defineProps({
    title: {
        type: String,
        required: true 
    },
    subtitle: {
        type: String,
        required: true 
    },
    content: {
        type: String,
        required: true
    }
})
</script>

<style>

</style>script