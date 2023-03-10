<script>
import { wc_store } from '../store/store.js';
import round from '../components/round.vue';
import phase from '../components/phase.vue';
export default {
  components: {
    round, phase
  },
  setup() {
    const store = wc_store();
    return {
      store
    }
  },
  data(){
    return {
      fase_max: 5,
      fase_min: 0,
      fase_atual: 0,
      fases: ['FASE DE GRUPOS','OITAVAS DE FINAL','QUARTAS DE FINAL','SEMIFINAL','TERCEIRO LUGAR','FINAL']
    }
  },
  methods: {
    proxima_fase(){
      this.fase_atual = this.fase_atual < this.fase_max ? this.fase_atual+1 : this.fase_atual;
      console.log("mudou "+this.fase_atual);
    },
    fase_anterior(){
      this.fase_atual = this.fase_atual > this.fase_min ? this.fase_atual-1 : this.fase_atual;
      console.log("mudou "+this.fase_atual);
    },
  },
  computed: {
    jogos_fase(){
      return this.store.jogos_finais.filter((jogo) => jogo.fase === this.fase_atual);
    }
  }
}
</script>
<template>
  <div class="extern">
    <div class="grid grid-cols-3 text-center fixed overflow-hidden w-full">
      <div class="bg-red-900 font-bold py-3 hover:text-gray-300 text-2xl" @click="fase_anterior" :class="fase_atual>fase_min? 'text-white': 'text-red-900'">
        <font-awesome-icon icon="fa-solid fa-arrow-left" />
      </div>
      <div class="bg-red-900 py-3">
        <h1 class="text-white font-bold"> {{ fases[fase_atual] }} </h1>
      </div>
      <div class="bg-red-900 font-bold py-3 hover:text-gray-300 text-2xl" @click="proxima_fase"  :class="fase_atual<fase_max? 'text-white': 'text-red-900'">
        <font-awesome-icon icon="fa-solid fa-arrow-right" />
      </div>
    </div>
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-4 overflow-x-auto bg-gray-200"
      :class="group.id == 'A' ? 'pt-12' : 'pt-0'" v-for="group in store.grupos" :key="group.id" v-if="fase_atual===0">
      <div class="mx-auto">
        <h2 class="text-white text-lg font-bold font-center text-center mt-5 rounded-lg"> GROUP {{ group.id }}</h2>
        <table class="table-auto border mb-5 bg-white text-sm text-center rounded-lg w-full">
          <tr class="">
            <th class="border px-4 py-4 text-primary"> POS </th>
            <th class="border px-4 py-4 text-primary"> Country </th>
            <th class="border px-4 py-4 text-primary"> P </th>
            <th class="border px-4 py-4 text-primary"> W </th>
            <th class="border px-4 py-4 text-primary"> D </th>
            <th class="border px-4 py-4 text-primary"> L </th>
            <th class="border px-4 py-4 text-primary"> GD </th>
            <th class="border px-4 py-4 text-primary"> GS </th>
            <th class="border px-4 py-4 text-primary"> GA </th>
          </tr>
          <tr :class="index < 2 ? 'bg-green-50' : ''" v-for="(time, index) in group.times">
            <td class="border px-4 py-4 font-bold" :class="index < 2 ? 'text-green-700' : 'text-gray-700'"> {{ index + 1
            }} </td>
            <td class="border px-4 py-4"> {{ time.nome }} </td>
            <td class="border px-4 py-4"> {{ time.pontos }} </td>
            <td class="border px-4 py-4"> {{ time.wins }} </td>
            <td class="border px-4 py-4"> {{ time.draw }} </td>
            <td class="border px-4 py-4"> {{ time.defeat }} </td>
            <td class="border px-4 py-4"> {{ time.goals_scored - time.goals_against }} </td>
            <td class="border px-4 py-4"> {{ time.goals_scored }} </td>
            <td class="border px-4 py-4"> {{ time.goals_against }} </td>
          </tr>
        </table>
      </div>
      <div class="mx-auto rounded-lg flex flex-col justify-center">
        <round :jogos_grupo="store.jogos.filter((jogo) => jogo.time1.grupo === group.id)" :id_grupo="group.id"/>
      </div>
    </div>
    <div class="grid grid-cols-1 gap-4 bg-gray-200 h-full" v-else>
      <div class="mx-auto rounded-lg flex flex-col justify-center mt-10">
        <phase :fase="fase_atual" :jogos_fase="jogos_fase"  />
      </div>
    </div>
  </div>
</template>
<style scoped>
.extern {
  min-height: 100vh;
  background: white;
}

h2 {
  background-color: rgb(72, 70, 70)
}
</style>