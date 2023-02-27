import { times, estadios, grupos, jogos } from './data';
import { defineStore } from 'pinia';
export const wc_store = defineStore('worldcup', {
  state() {
    return {
      times: times,
      estadios: estadios,
      grupos: grupos,
      jogos: jogos,
      logado: false
    }
  },
  getters: {

  },
  actions: {
    existe_localstorage(){
      return localStorage.getItem("worldcup2022") === null? false : true;
    },
    resgatar_localstorage(){
      this.$state = JSON.parse(localStorage.getItem("worldcup2022"));
      this.dados_resgatados = true;
      console.log(this.$state);
    },
    salvar_localstorage() {
      const dados = this.$state;
      localStorage.setItem("worldcup2022", JSON.stringify(dados));
    },
    comparacao(time1, time2){
      if(time1.pontos === time2.pontos){
        if(time1.wins === time2.wins){
          if((time1.goals_scored - time1.goals_against) === (time2.goals_scored - time2.goals_against)){
            if(time1.goals_scored === time2.goals_against){
              if (time1.goals_against === time2.goals_against){
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
    ordenar(){
      this.times.sort(this.comparacao);
    },
    calcular_pontuacao() {
      for(let time of this.times){
        const jogos_time = this.jogos.filter((jogo)=> (jogo.time1.sigla === time.sigla || jogo.time2.sigla === time.sigla) && jogo.concluido);

        // console.log(time);
        let pontos = 0;
        let goals_scored = 0;
        let goals_against = 0;
        let win = 0;
        let draw = 0;
        let defeat = 0;

        for(const jogo of jogos_time){
          if(jogo.time1.sigla === time.sigla){
            if(jogo.placar1 > jogo.placar2){
              pontos += 3;
              win += 1;
            }else if(jogo.placar1 == jogo.placar2){
              pontos += 1;
              draw += 1;
            }else{
              defeat += 1;
            }
            goals_scored += parseInt(jogo.placar1);
            goals_against += parseInt(jogo.placar2);
          }else if(jogo.time2.sigla === time.sigla){
            if(jogo.placar2 > jogo.placar1){
              pontos += 3;
              win += 1;
            }else if(jogo.placar1 == jogo.placar2){
              pontos += 1;
              draw += 1;
            }else{
              defeat += 1;
            }
            goals_scored += parseInt(jogo.placar2);
            goals_against += parseInt(jogo.placar1);
          }
        }

        time.pontos = parseInt(pontos);
        time.goals_against = parseInt(goals_against);
        time.goals_scored = parseInt(goals_scored);
        time.jogos = parseInt(jogos);
        time.wins = parseInt(win);
        time.draw = parseInt(draw);
        time.defeat = parseInt(defeat);
      }
      /*
        Para cada time, buscar os seus jogos concluido e calcular os atributos
      */
    },
    alterar_jogo(jogo_alterado) {
      let jogo = this.jogos.filter((jogo) => jogo.id === jogo_alterado.id);
      jogo = jogo_alterado;
      jogo.concluido = true;
      this.calcular_pontuacao();
      this.ordenar();
      this.salvar_localstorage();
    }
  }
});