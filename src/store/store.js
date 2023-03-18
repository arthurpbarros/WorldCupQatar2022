import { estadios, grupos, jogos, jogos_finais } from './data';
import { defineStore } from 'pinia';
export const wc_store = defineStore('worldcup', {
  state() {
    if (localStorage.getItem("piniaState") !== null) {
      return JSON.parse(localStorage.getItem("piniaState")).worldcup;
    }
    return {
      estadios: estadios,
      grupos: grupos,
      jogos: jogos,
      jogos_finais: jogos_finais,
    }
  },
  getters: {

  },
  actions: {
    existe_localstorage() {
      return localStorage.getItem("piniaState") === null ? false : true;
    },
    /*
      Função para definir os critérios de ordenação do sort()
    */
    comparacao(time1, time2) {
      if (time1.pontos === time2.pontos) {
        if (time1.wins === time2.wins) {
          if ((time1.goals_scored - time1.goals_against) === (time2.goals_scored - time2.goals_against)) {
            if (time1.goals_scored === time2.goals_against) {
              if (time1.goals_against === time2.goals_against) {
                return (time1.wins + time1.draw + time1.defeat) - (time2.wins + time2.draw + time2.defeat);
              }
              return time2.goals_against - time1.goals_against;
            }
            return time2.goals_scored - time2.goals_against;
          }
          return (time2.goals_scored - time2.goals_against) - (time1.goals_scored - time1.goals_against);
        }
        return time2.wins - time2.wins;
      }
      return time2.pontos - time1.pontos;
    },
    /* 
      Ordena os times do grupo do time que jogou.
    */
    ordenar(group_id) {
      let grupo = this.grupos.filter((grupo) => grupo.id === group_id)[0];
      grupo.times.sort(this.comparacao);
    },
    /* 
      Calcula as pontuações dos times do grupo do time que jogou.
    */
    calcular_pontuacao(group_id) {
      let group = this.grupos.filter((grupo) => grupo.id === group_id)[0];

      for (let time of group.times) {
        const jogos_time = this.jogos.filter((jogo) => (jogo.time1.sigla === time.sigla || jogo.time2.sigla === time.sigla) && jogo.concluido);

        // console.log(time);
        let pontos = 0;
        let goals_scored = 0;
        let goals_against = 0;
        let win = 0;
        let draw = 0;
        let defeat = 0;

        for (const jogo of jogos_time) {
          if (jogo.time1.sigla === time.sigla) {
            if (jogo.placar1 > jogo.placar2) {
              pontos += 3;
              win += 1;
            } else if (jogo.placar1 == jogo.placar2) {
              pontos += 1;
              draw += 1;
            } else {
              defeat += 1;
            }
            goals_scored += parseInt(jogo.placar1);
            goals_against += parseInt(jogo.placar2);
          } else if (jogo.time2.sigla === time.sigla) {
            if (jogo.placar2 > jogo.placar1) {
              pontos += 3;
              win += 1;
            } else if (jogo.placar1 == jogo.placar2) {
              pontos += 1;
              draw += 1;
            } else {
              defeat += 1;
            }
            goals_scored += parseInt(jogo.placar2);
            goals_against += parseInt(jogo.placar1);
          }
        }

        time.pontos = parseInt(pontos);
        time.goals_against = parseInt(goals_against);
        time.goals_scored = parseInt(goals_scored);
        time.wins = parseInt(win);
        time.draw = parseInt(draw);
        time.defeat = parseInt(defeat);
      }
    },
    alterar_jogo(jogo_alterado) {
      let jogo = this.jogos.filter((jogo) => jogo.id === jogo_alterado.id)[0];
      jogo = jogo_alterado;
      jogo.concluido = true;
      this.calcular_pontuacao(jogo.time1.grupo);
      this.ordenar(jogo.time1.grupo);
    },
    cancelar_jogo(jogo_cancelado) {
      let jogo = this.jogos.filter((jogo) => jogo.id === jogo_cancelado.id)[0];
      jogo.placar1 = "";
      jogo.placar2 = "";
      jogo.concluido = false;
      this.calcular_pontuacao(jogo.time1.grupo);
      this.ordenar(jogo.time1.grupo);
    },
    alterar_jogo_fases_finais(jogo_alterado){
      let jogo = this.jogos_finais.filter((jogo) => jogo.id === jogo_alterado.id)[0];
      jogo = jogo_alterado;
      jogo.concluido = true;
    },
    cancelar_jogo_fases_finais(jogo_cancelado) {
      let jogo = this.jogos_finais.filter((jogo) => jogo.id === jogo_cancelado.id)[0];
      jogo.placar1 = "";
      jogo.placar2 = "";
      jogo.penalti1 = "";
      jogo.penalti2 = "";
      jogo.concluido = false;
    },
    vencedor_jogo_fases_finais(jogo){
      if(jogo.concluido){
        if (jogo.placar1 > jogo.placar2){
          return jogo.time1;
        }else if(jogo.placar1 < jogo.placar2){
          return jogo.time2;
        }else if(jogo.penalti1 > jogo.penalti2){
          return jogo.time1;
        }else if(jogo.penalti1 < jogo.penalti2){
          return jogo.time2;
        }
        return false;
      }
      return false;
    },
    perdedor_semifinal(jogo){
      if(jogo.concluido){
        if (jogo.placar1 > jogo.placar2){
          return jogo.time2;
        }else if(jogo.placar1 < jogo.placar2){
          return jogo.time1;
        }else if(jogo.penalti1 > jogo.penalti2){
          return jogo.time2;
        }else if(jogo.penalti1 < jogo.penalti2){
          return jogo.time1;
        }
        return false;
      }
      return false;
    }
  }
});