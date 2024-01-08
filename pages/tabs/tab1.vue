<template>
    <ion-page>
        <ion-header>
            <ion-toolbar>
                <ion-title>Tab 1</ion-title>
            </ion-toolbar>
        </ion-header>
        <ion-content>
            Tab 1 content

            <br><br>

            <h2>Current Count :- {{ countData }}</h2>
            <ion-button @click="btnClicked">Increase</ion-button>

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

const btnClicked = async () => {
    counter.increment();
    await useToast("Count Increased", 1500, "success");
}



</script>

<style>
</style>