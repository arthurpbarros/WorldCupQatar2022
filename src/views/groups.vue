<script>
import { wc_store } from '../store/store.js';
import match from '../components/match.vue';
export default {
  setup() {
    const store = wc_store();
    return {
      store
    }
  },
  components: {
    match
  },
  methods: {
    alterarplacar(jogo_dado) {
      if (!isNaN(parseInt(jogo_dado.placar1)) && !isNaN(parseInt(jogo_dado.placar2))) {
        this.store.alterar_jogo(jogo_dado);
      }
    }
  }
}
</script>
<template>
  <div class="extern">
    <div class="grid grid-cols-3 text-center fixed overflow-hidden w-full">
      <div class="bg-red-900 text-white font-bold py-3 hover:text-gray-300 text-2xl">
        <font-awesome-icon icon="fa-solid fa-arrow-left" />
      </div>
      <div class="bg-red-900 py-3">
        <h1 class="text-white font-bold"> PRIMEIRA FASE </h1>
      </div>
      <div class="bg-red-900 text-white font-bold py-3 hover:text-gray-300 text-2xl">
        <font-awesome-icon icon="fa-solid fa-arrow-right" />
      </div>
    </div>
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-4 bg-gray-200" :class="group.id == 'A' ? 'pt-12' : 'pt-0'"
      v-for="group in store.grupos" :key="group.id">
      <div class="mx-auto">
        <h2 class="text-white text-lg font-bold font-center text-center mt-5 rounded-lg"> GROUP {{ group.id }}</h2>
        <table class="table-auto border mb-5 bg-white text-sm text-center rounded-lg">
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
          <tr :class="index < 2 ? 'bg-green-50': ''" v-for="(time, index) in store.times.filter((time) => time.grupo === group.id)">
            <td class="border px-4 py-4 font-bold" :class="index < 2 ? 'text-green-700' : 'text-gray-700'"> {{ index + 1 }} </td>
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
      <div class="w-full">
        <div class="grid grid-cols-3 gap-4 w-full mt-5">
          <div class="text-black font-bold mx-auto">
            <font-awesome-icon icon="fa-solid fa-arrow-left" />
          </div>
            <div class="mx-auto">
              RODADA 1
            </div>
            <div class="text-black font-bold mx-auto">
              <font-awesome-icon icon="fa-solid fa-arrow-right" />
            </div>
          </div>
          <div class="gap-4 flex flex-col">
            <!-- <div class="bg-white rounded-lg shadow-sm">
                  <div class=" text-center flex flex-row mt-5">
                    <p class="w-1/3"> Argentina </p>
                    <div class="w-1/3">
                      <input type="text" class="w-1/5 border-2 border-gray-200 rounded-lg text-center">
                      <span class="w-3/5"> X </span>
                      <input type="text" class="w-1/5 border-2 border-gray-200 rounded-lg text-center">
                    </div>
                    <p class="w-1/3"> Argentina </p>
                  </div>
                  <div class="text-center mb-2">
                    Estádio do Maracanã - 16:00h
                  </div>
                </div> -->

            <div class="bg-white rounded-lg shadow-sm"
              v-for="match in store.jogos.filter((jogo) => jogo.time1.grupo === group.id)">
              <match :jogo="match" @mudanca_placar="alterarplacar"/>
            </div>
          </div>
        </div>
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