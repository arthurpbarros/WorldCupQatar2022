<script>
import { wc_store } from '../store/store.js';
import round from '../components/phases/round.vue';
import phase16 from '../components/phases/phase_of_16.vue';
import phase8 from '../components/phases/phase_of_8.vue';
import semifinals from '../components/phases/semifinals.vue';
import finals from '../components/phases/finals.vue';
import third_place from '../components/phases/third_place.vue';
export default {
  components: {
    round, phase16, phase8, semifinals, third_place, finals
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
      fases: ['FASE DE GRUPOS','OITAVAS DE FINAL','QUARTAS DE FINAL','SEMIFINAL','TERCEIRO LUGAR','FINAL'],
      store: this.store
    }
  },
  methods: {
    proxima_fase(){
      this.fase_atual = this.fase_atual < this.fase_max ? this.fase_atual+1 : this.fase_atual;
    },
    fase_anterior(){
      this.fase_atual = this.fase_atual > this.fase_min ? this.fase_atual-1 : this.fase_atual;
    },
  },
  computed: {
    jogos_fase(){
      return JSON.parse(JSON.stringify(this.store.jogos_finais.filter((jogo) => jogo.fase === this.fase_atual))) ;
    },
    oitavas_final(){
      return JSON.parse(JSON.stringify(this.store.jogos_finais.filter((jogo) => jogo.fase === 1)));
    },
    quartas_final(){
      return  JSON.parse(JSON.stringify(this.store.jogos_finais.filter((jogo) => jogo.fase === 2)));
    }
  },
}
</script>
<template>
  <div class="extern">
    <div class="grid grid-cols-3 text-center fixed overflow-hidden w-full z-10">
      <div class="bg-red-900 font-bold py-3 hover:text-gray-300 text-2xl" @click="fase_anterior" :class="fase_atual>fase_min? 'text-white': 'text-red-900'">
        <font-awesome-icon icon="fa-solid fa-arrow-left" v-show="fase_atual>fase_min"/>
      </div>
      <div class="bg-red-900 py-3">
        <h1 class="text-white font-bold"> {{ fases[fase_atual] }} </h1>
      </div>
      <div class="bg-red-900 font-bold py-3 hover:text-gray-300 text-2xl" @click="proxima_fase"  :class="fase_atual<fase_max? 'text-white': 'text-red-900'">
        <font-awesome-icon icon="fa-solid fa-arrow-right" v-show="fase_atual<fase_max"/>
      </div>
    </div>
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-4 overflow-x-auto bg-gray-200"
      :class="group.id == 'A' ? 'pt-12' : 'pt-0'" v-for="group in store.grupos" :key="group.id" v-if="fase_atual===0">
      <div class="mx-auto">
        <h2 class="text-white text-lg font-bold font-center text-center mt-5 rounded-t-lg"> GRUPO {{ group.id }}</h2>
        <table class="table-auto border mb-5 bg-white text-sm text-center rounded-b-lg w-full">
          <tr class="">
            <th class="border px-4 py-4 text-primary"> POS </th>
            <th class="border px-4 py-4 text-primary"> PAÍS </th>
            <th class="border px-4 py-4 text-primary"> P </th>
            <th class="border px-4 py-4 text-primary"> V </th>
            <th class="border px-4 py-4 text-primary"> E </th>
            <th class="border px-4 py-4 text-primary"> D </th>
            <th class="border px-4 py-4 text-primary"> GP </th>
            <th class="border px-4 py-4 text-primary"> GC </th>
            <th class="border px-4 py-4 text-primary"> SG </th>
          </tr>
          <tr :class="index < 2 ?'bg-green-100 text-green-900' : ''" v-for="(time, index) in group.times">
            <td class="border px-4 py-4" :class="index < 2 ? '' : 'text-gray-700'"> {{ index + 1
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
      <div class="mx-auto rounded-lg flex flex-col w-full sm:w-1/2 md:w-1/2 justify-center">
        <round :jogos_grupo="store.jogos.filter((jogo) => jogo.time1.grupo === group.id)" :id_grupo="group.id"/>
      </div>
    </div>
    <div class="grid grid-cols-1 gap-4 bg-gray-200 h-full" v-else-if="fase_atual===1">
      <div class="mx-auto rounded-lg flex flex-col w-7/8 sm:w-1/2 mt-10">
        <phase16 :fase="fase_atual" :key="fase_atual"/>
      </div>
    </div>
    <div class="grid grid-cols-1 gap-4 bg-gray-200 h-full" v-else-if="fase_atual===2">
      <div class="mx-auto rounded-lg flex flex-col w-7/8 sm:w-1/2 mt-10">
        <phase8 :fase="fase_atual" :key="fase_atual"/>
      </div>
    </div>
    <div class="grid grid-cols-1 gap-4 bg-gray-200 h-full" v-else-if="fase_atual===3">
      <div class="mx-auto rounded-lg flex flex-col w-7/8 sm:w-1/2 mt-10">
        <semifinals :fase="fase_atual" :key="fase_atual"/>
      </div>
    </div>
    <div class="grid grid-cols-1 gap-4 bg-gray-200 h-full" v-else-if="fase_atual===4">
      <div class="mx-auto rounded-lg flex flex-col w-7/8 sm:w-1/2 mt-10">
        <third_place :fase="fase_atual" :key="fase_atual"/>
      </div>
    </div>
    <div class="grid grid-cols-1 gap-4 bg-gray-200 h-full" v-else>
      <div class="mx-auto rounded-lg flex flex-col w-7/8 sm:w-1/2 mt-10">
        <finals :fase="fase_atual" :key="fase_atual"/>
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