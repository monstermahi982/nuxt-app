<template>
    <ion-page>
        <ion-header>
            <ion-toolbar>
                <ion-title>Tab 2</ion-title>
            </ion-toolbar>
        </ion-header>
        <ion-content>
            Tab 2 content
            <h2>
                Current Count :- {{ countData }}
            </h2>xx
        </ion-content>
    </ion-page>
</template>

<script lang="ts" setup>
import { useCounterStore } from '~/store/counter';
import { storeToRefs } from "pinia";
import { ref } from 'vue';

const counter = useCounterStore();

const { count } = storeToRefs(counter);

const countData = ref(count);

</script>
  