<template>
  <ion-app>
    <ion-router-outlet />
    <ion-content>
      <HeaderCard title="SOS" subtitle="Megh Computing" content="This is megh computing" />
      <div style="display: flex; justify-content: center;">
        <ion-button fill="clear" @click="redirect">GO To Tabs</ion-button>
      </div>
    </ion-content>
  </ion-app>
</template>

<script lang="ts" setup>
import HeaderCard from "~/components/cards/headerCard.vue"

const router = useIonRouter();

const redirect = () => {

  router.push("/tabs/tab1")

}

</script>