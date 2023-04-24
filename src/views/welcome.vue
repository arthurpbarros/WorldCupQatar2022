<script>
import logo from "../assets/worldcup2022.svg";
import { wc_store, existe_localstorage } from "../store/store.js";

export default {
  setup() {
    const store = wc_store();
    return { store };
  },
  data() {
    return {
      logo: logo,
      existe_dados_localstorage: existe_localstorage(),
    };
  },
  methods: {
    iniciar() {
      if(existe_localstorage()){
        this.store.limpar_dados();
      }
      this.$router.push({ name: "groups" });
    },
    resgatar_dados() {
      this.$router.push({ name: "groups" });
    },
  }
};
</script>
<template>
  <div id="main">
    <div class="options_user font-sans">
      <img :src="logo" alt="" />
      <button
        @click="iniciar"
        class="outline outline-red-900 rounded px-2 py-2 mb-2 text-red-900 hover:bg-red-700 hover:outline-red-700 hover:text-white"
        :class="!existe_dados_localstorage ? 'bg-red-900 text-white' : ''"
      >
        INICIAR PROGRESSO
      </button>
      <button
        v-show="existe_dados_localstorage"
        @click="resgatar_dados"
        :class="existe_dados_localstorage ? 'bg-red-900' : ''"
        class="outline outline-red-900 rounded px-2 py-2 text-white hover:bg-red-700 hover:outline-red-700 hover:text-white"
      >
        CARREGAR PROGRESSO
      </button>
    </div>
  </div>
</template>

<style scoped>
#main {
  background: rgb(207, 206, 206);
  background: radial-gradient(
    circle,
    rgba(207, 206, 206, 1) 27%,
    rgba(133, 133, 133, 1) 68%
  );

  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
}

.options_user {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
