<script>
import { wc_store } from '../store/store';
export default {
  props: ['jogo'],
  setup() {
    const store = wc_store();
    return {
      store
    }
  },
  data() {
    return {
      dados_jogo: this.jogo
    }
  },
  mounted() {
    // console.log(this.dados_jogo.time1);
    if (Object.keys(this.dados_jogo.time1).length === 0 && Object.keys(this.dados_jogo.time2).length === 0) {
      let time1 = this.dados_jogo.ref1;
      let elementos = time1.split('');
      let grupoID = elementos[0];
      let lugar = parseInt(elementos[1]);
      const grupo = JSON.parse(JSON.stringify(this.store.grupos.filter((g) => g.id === grupoID)[0]));
      this.dados_jogo.time1 = grupo.times[lugar];

      elementos = this.dados_jogo.ref2.split('');
      grupoID = elementos[0];
      lugar = parseInt(elementos[1]);
      const grupo2 = JSON.parse(JSON.stringify(this.store.grupos.filter((g) => g.id === grupoID)[0]));
      this.dados_jogo.time2 = grupo2.times[lugar];
    } else {
      //Cópias dos valores anteriores de time1 e time2
      const time1 = {...this.dados_jogo.time1};
      const time2 = {...this.dados_jogo.time2};

      //Checagem do time1 e time2 atuais, levando em consideração a posição no respectivo grupo de cada um
      for (let grupo of this.store.grupos) {
        for (let time of grupo.times) {
          if (time.sigla === this.dados_jogo.time1.sigla) {
            this.dados_jogo.time1 = JSON.parse(JSON.stringify(this.store.grupos.filter((g) => g.id === grupo.id)[0].times[0]));
          }
        }
      }

      for (let grupo of this.store.grupos) {
        for (let time of grupo.times) {
          if (time.sigla === this.dados_jogo.time2.sigla) {
            this.dados_jogo.time2 = JSON.parse(JSON.stringify(this.store.grupos.filter((g) => g.id === grupo.id)[0].times[1]));
          }
        }
      }

      //Resetar placar do jogo caso haja mudança no grupo
      if(time1.sigla !== this.dados_jogo.time1.sigla || time2.sigla !== this.dados_jogo.time2.sigla){
        this.store.cancelar_jogo_fases_finais(this.dados_jogo);
      }

    }
  },
  methods: {
    mudar_placar() {
      this.$emit('mudanca_placar', this.dados_jogo);
    },
    cancelar_placar() {
      this.$emit('cancelar_placar', this.dados_jogo);
    }
  },
  emits: ['mudanca_placar', 'cancelar_placar']
}
</script>
<template>
  <div class="text-center flex flex-row mt-3" :class="dados_jogo.concluido? 'text-primary':''">
    <p class="w-1/3">{{ dados_jogo.time1.nome }}</p>
    <div class="w-1/3 text-black font-bold">
      <input type="number" min="0" max="20" class="w-2/5 border-2 border-gray-200 rounded-lg text-center"
        v-model="dados_jogo.placar1" v-on:change="mudar_placar" />
      <span class="w-1/5"> X </span>
      <input type="number" min="0" max="20" class="w-2/5 border-2 border-gray-200 rounded-lg text-center"
        v-model="dados_jogo.placar2" v-on:change="mudar_placar"/>
    </div>
    <p class="w-1/3">{{ dados_jogo.time2.nome }}</p>
  </div>

  <div v-if="dados_jogo.concluido && dados_jogo.placar1 === dados_jogo.placar2">
    <div class="text-center text-xs flex flex-col mt-2">
      PÊNALTIS
    </div>
    <div class="text-center flex flex-row" :class="dados_jogo.concluido? 'text-primary':''" >
      <div class="w-1/3 text-gray-500 font-bold mx-auto">
        <input type="number" min="0" max="20" class="w-2/5 border-2 border-gray-200 rounded-lg text-center"
          v-model="dados_jogo.penalti1" v-on:change="mudar_placar" />
        <span class="w-1/5"> X </span>
        <input type="number" min="0" max="20" class="w-2/5 border-2 border-gray-200 rounded-lg text-center"
          v-model="dados_jogo.penalti2" v-on:change="mudar_placar"/>
      </div>
    </div>
  </div>

  <div class="text-center my-2 text-xs flex flex-col">
    <div class="font-bold">{{ dados_jogo.data }} às {{ dados_jogo.hora }}</div>
    <div>{{ dados_jogo.local.nome }}</div>
    <div v-if="dados_jogo.concluido">
      <button class="bg-red-700 rounded p-2 text-white text-xs hover:bg-red-600" @click="cancelar_placar">
        CANCELAR
      </button>
    </div>
  </div>
</template>
<style scoped></style>
