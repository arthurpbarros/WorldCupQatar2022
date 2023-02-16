<script>
  import { estadios,times,grupos,jogos } from '../data/data.js';
  export default{
    data(){
      return {
        grupos: grupos,
        times: times,
        jogos: jogos
      }
    },
    created(){
      
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
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-4 bg-gray-200" :class="group.id == 'A'? 'pt-12': 'pt-0'" v-for="group in grupos" :key="group.id">
      <div class="mx-auto">
        <h2 class="text-white text-lg font-bold font-center text-center mt-5 rounded-lg"> GROUP {{group.id}}</h2>
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
            <th class="border px-4 py-4 text-primary"> GC </th>
          </tr>
          <tr class="" v-for="(time, index) in group.times">
            <td class="border px-4 py-4" :class="index < 2? 'text-green-700': ''"> {{ index+1 }} </td>
            <td class="border px-4 py-4"> {{ time.nome }} </td>
            <td class="border px-4 py-4"> 0 </td>
            <td class="border px-4 py-4"> 0 </td>
            <td class="border px-4 py-4"> 0 </td>
            <td class="border px-4 py-4"> 0 </td>
            <td class="border px-4 py-4"> 0 </td>
            <td class="border px-4 py-4"> 0 </td>
            <td class="border px-4 py-4"> 0 </td>
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
          <div class="grid grid-cols-1 gap-4 flex flex-col">
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

            <div class="bg-white rounded-lg shadow-sm" v-for="jogo in jogos.filter((jogo)=> jogo.time1.grupo === group.id)">
              <div class="text-center flex flex-row mt-3">
                <p class="w-1/3"> {{ jogo.time1.nome }} </p>
                <div class="w-1/3">
                  <input type="text" class="w-1/5 border-2 border-gray-200 rounded-lg text-center">
                  <span class="w-3/5"> X </span>
                  <input type="text" class="w-1/5 border-2 border-gray-200 rounded-lg text-center">
                </div>
                <p class="w-1/3"> {{ jogo.time2.nome }}</p>
              </div>

              <div class="text-center my-2 text-xs flex flex-col">
                <div class="font-bold"> {{ jogo.data }} às {{ jogo.hora}} </div>
                <div> {{ jogo.local.nome }} </div>
              </div>
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