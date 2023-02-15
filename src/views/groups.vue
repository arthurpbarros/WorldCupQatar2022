<script>

</script>
<template>
  <div class="extern">
    <div class="grid grid-cols-3 text-center fixed overflow-hidden w-full">
      <div class="bg-red-900 text-white font-bold py-3">
        <font-awesome-icon icon="fa-solid fa-arrow-left" />
      </div>
      <div class="bg-red-900 py-3">
        <h1 class="text-white font-bold"> PRIMEIRA FASE </h1>
      </div>
      <div class="bg-red-900 text-white font-bold py-3">
        <font-awesome-icon icon="fa-solid fa-arrow-right" />
      </div>
    </div>
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-4 py-12 bg-gray-200">
      <div class="mx-auto">
        <h2 class="text-white text-lg font-bold font-center text-center mt-5 rounded-lg"> GROUP A</h2>
        <table class="table-auto border mb-5 bg-white text-sm text-center rounded-lg">
          <tr class="">
            <th> </th>
            <th class="border px-4 py-4"> P</th>
            <th class="border px-4 py-4"> Wins </th>
            <th class="border px-4 py-4"> Draws </th>
            <th class="border px-4 py-4"> Loses </th>
            <th class="border px-4 py-4"> Goal Dif. </th>
            <th class="border px-4 py-4"> Goals S. </th>
            <th class="border px-4 py-4"> Goals C. </th>
          </tr>
          <tr class="">
            <td class="border px-4 py-4 text-green-600"> FRANÇA </td>
            <td class="border px-4 py-4"> 15 </td>
            <td class="border px-4 py-4"> 15 </td>
            <td class="border px-4 py-4"> 1 </td>
            <td class="border px-4 py-4"> 3</td>
            <td class="border px-4 py-4"> 15 </td>
            <td class="border px-4 py-4"> 1 </td>
            <td class="border px-4 py-4"> 3</td>
          </tr>
          <tr class="">
            <td class="border px-4 py-4 text-green-600"> FRANÇA </td>
            <td class="border px-4 py-4"> 15 </td>
            <td class="border px-4 py-4"> 1 </td>
            <td class="border px-4 py-4"> 3</td>
            <td class="border px-4 py-4"> 15 </td>
            <td class="border px-4 py-4"> 1 </td>
            <td class="border px-4 py-4"> 3</td>
          </tr>
          <tr class="">
            <td class="border px-4 py-4"> FRANÇA </td>
            <td class="border px-4 py-4"> 15 </td>
            <td class="border px-4 py-4"> 15 </td>
            <td class="border px-4 py-4"> 1 </td>
            <td class="border px-4 py-4"> 3</td>
            <td class="border px-4 py-4"> 15 </td>
            <td class="border px-4 py-4"> 1 </td>
            <td class="border px-4 py-4"> 3</td>
          </tr>
          <tr class="">
            <td class="border px-4 py-4"> FRANÇA </td>
            <td class="border px-4 py-4"> 15 </td>
            <td class="border px-4 py-4"> 15 </td>
            <td class="border px-4 py-4"> 1 </td>
            <td class="border px-4 py-4"> 3</td>
            <td class="border px-4 py-4"> 15 </td>
            <td class="border px-4 py-4"> 1 </td>
            <td class="border px-4 py-4"> 3</td>
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
            <div class="bg-white rounded-lg border-gray-300 border-2">
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
            </div>

            <div class="bg-white rounded-lg border-gray-300 border-2">
              <div class="text-center flex flex-row mt-5">
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