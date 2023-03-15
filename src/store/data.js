const times = [
    // A e B
    { sigla: "SEN", nome: "SENEGAL", img: "sn", pontos: 0, goals_scored: 0, goals_against: 0, grupo: 'A', wins: 0, draw: 0, defeat: 0 },
    { sigla: "CAT", nome: "CATAR", img: "qa", pontos: 0, goals_scored: 0, goals_against: 0, grupo: 'A', wins: 0, draw: 0, defeat: 0 },
    { sigla: "EQU", nome: "EQUADOR", img: "ec", pontos: 0, goals_scored: 0, goals_against: 0, grupo: 'A', wins: 0, draw: 0, defeat: 0 },
    { sigla: "HOL", nome: "HOLANDA", img: "nl", pontos: 0, goals_scored: 0, goals_against: 0, grupo: 'A', wins: 0, draw: 0, defeat: 0 },
    { sigla: "ING", nome: "INGLATERRA", img: "gb-eng", pontos: 0, goals_scored: 0, goals_against: 0, grupo: 'B', wins: 0, draw: 0, defeat: 0 },
    { sigla: "EUA", nome: "EUA", img: "usa", pontos: 0, goals_scored: 0, goals_against: 0, grupo: 'B', wins: 0, draw: 0, defeat: 0 },
    { sigla: "PGA", nome: "PAÍS DE GALES", img: "gb-wls", pontos: 0, goals_scored: 0, goals_against: 0, grupo: 'B', wins: 0, draw: 0, defeat: 0 },
    { sigla: "IRA", nome: "IRÃ", img: "ir", pontos: 0, goals_scored: 0, goals_against: 0, grupo: 'B', wins: 0, draw: 0, defeat: 0 },
    { sigla: "ARG", nome: "ARGENTINA", img: "ar", pontos: 0, goals_scored: 0, goals_against: 0, grupo: 'C', wins: 0, draw: 0, defeat: 0 },
    { sigla: "SAU", nome: "ARÁBIA SAUDITA", img: "sa", pontos: 0, goals_scored: 0, goals_against: 0, grupo: 'C', wins: 0, draw: 0, defeat: 0 },
    { sigla: "MEX", nome: "MÉXICO", img: "mx", pontos: 0, goals_scored: 0, goals_against: 0, grupo: 'C', wins: 0, draw: 0, defeat: 0 },
    { sigla: "POL", nome: "POLÔNIA", img: "pl", pontos: 0, goals_scored: 0, goals_against: 0, grupo: 'C', wins: 0, draw: 0, defeat: 0 },
    { sigla: "FRA", nome: "FRANÇA", img: "fr", pontos: 0, goals_scored: 0, goals_against: 0, grupo: 'D', wins: 0, draw: 0, defeat: 0 },
    { sigla: "AUS", nome: "AUSTRÁLIA", img: "au", pontos: 0, goals_scored: 0, goals_against: 0, grupo: 'D', wins: 0, draw: 0, defeat: 0 },
    { sigla: "DIN", nome: "DINAMARCA", img: "dk", pontos: 0, goals_scored: 0, goals_against: 0, grupo: 'D', wins: 0, draw: 0, defeat: 0 },
    { sigla: "TUN", nome: "TUNÍSIA", img: "tn", pontos: 0, goals_scored: 0, goals_against: 0, grupo: 'D', wins: 0, draw: 0, defeat: 0 },
    { sigla: "ESP", nome: "ESPANHA", img: "es", pontos: 0, goals_scored: 0, goals_against: 0, grupo: 'E', wins: 0, draw: 0, defeat: 0 },
    { sigla: "CRI", nome: "COSTA RICA", img: "cr", pontos: 0, goals_scored: 0, goals_against: 0, grupo: 'E', wins: 0, draw: 0, defeat: 0 },
    { sigla: "ALE", nome: "ALEMANHA", img: "de", pontos: 0, goals_scored: 0, goals_against: 0, grupo: 'E', wins: 0, draw: 0, defeat: 0 },
    { sigla: "JPN", nome: "JAPÃO", img: "jp", pontos: 0, goals_scored: 0, goals_against: 0, grupo: 'E', wins: 0, draw: 0, defeat: 0 },
    { sigla: "BEL", nome: "BÉLGICA", img: "be", pontos: 0, goals_scored: 0, goals_against: 0, grupo: 'F', wins: 0, draw: 0, defeat: 0 },
    { sigla: "CAN", nome: "CANADÁ", img: "ca", pontos: 0, goals_scored: 0, goals_against: 0, grupo: 'F', wins: 0, draw: 0, defeat: 0 },
    { sigla: "MAR", nome: "MARROCOS", img: "ma", pontos: 0, goals_scored: 0, goals_against: 0, grupo: 'F', wins: 0, draw: 0, defeat: 0 },
    { sigla: "CRO", nome: "CROÁCIA", img: "hr", pontos: 0, goals_scored: 0, goals_against: 0, grupo: 'F', wins: 0, draw: 0, defeat: 0 },
    { sigla: "CAM", nome: "CAMARÕES", img: "cm", pontos: 0, goals_scored: 0, goals_against: 0, grupo: 'G', wins: 0, draw: 0, defeat: 0 },
    { sigla: "BRA", nome: "BRASIL", img: "br", pontos: 0, goals_scored: 0, goals_against: 0, grupo: 'G', wins: 0, draw: 0, defeat: 0 },
    { sigla: "SER", nome: "SÉRVIA", img: "rs", pontos: 0, goals_scored: 0, goals_against: 0, grupo: 'G', wins: 0, draw: 0, defeat: 0 },
    { sigla: "SUI", nome: "SUÍÇA", img: "ch", pontos: 0, goals_scored: 0, goals_against: 0, grupo: 'G', wins: 0, draw: 0, defeat: 0 },
    { sigla: "POR", nome: "PORTUGAL", img: "pt", pontos: 0, goals_scored: 0, goals_against: 0, grupo: 'H', wins: 0, draw: 0, defeat: 0 },
    { sigla: "GAN", nome: "GANA", img: "gh", pontos: 0, goals_scored: 0, goals_against: 0, grupo: 'H', wins: 0, draw: 0, defeat: 0 },
    { sigla: "KOR", nome: "CORÉIA DO SUL", img: "kr", pontos: 0, goals_scored: 0, goals_against: 0, grupo: 'H', wins: 0, draw: 0, defeat: 0 },
    { sigla: "URU", nome: "URUGUAÍ", img: "uy", pontos: 0, goals_scored: 0, goals_against: 0, grupo: 'H', wins: 0, draw: 0, defeat: 0 }
  ];
  
  const estadios = [
    { id: "EST1", nome: "AL THUMAMA", info: "Localizado 12 quilômetros ao sul de Doha, o estádio Al Thumama entrelaça a cultura árabe por sua fachada, inspirando-se nos padrões dos tecidos de uma Gahfiya, tradicional touca usada por homens muçulmanos na região árabe. Além de seu desenho, a área em volta do projeto explora a importância da arquitetura ecológica e contextual, buscando a certificação de quatro estrelas do Sistema de Avaliação de Sustentabilidade (GSAS), tanto para o design quanto para a construção.", img: "https://images.adsttc.com/media/images/61d2/b31c/3e4b/3194/cc00/00de/newsletter/Al-Thumama-Stadium-homepage-dusk.jpg?1641198358" },
    { id: "EST2", nome: "Al Janoub", info: "A Zaha Hadid Architects foi selecionado em 2013 para trabalhar ao lado da AECOM para desenvolver e construir o Estádio Al Janoub. Construído em Al Wakrah, uma das áreas mais antigas a serem habitadas ao sul de Doha, e encaixado-se em um lugar culturalmente rico com uma profunda herança arquitetônica, o projeto é inspirado pelo histórico da cidade com seus mergulhadores de pérolas, pescadores e barcos veleiros dhow.", img: "https://images.adsttc.com/media/images/61d2/b30a/3e4b/318f/9700/00e7/newsletter/Al-Janoub-Stadium.jpg?1641198339" },
    { id: "EST3", nome: "Al Bayt Stadium", info: "Inspirado pelas barracas tradicionais nômades, o estádio de 60 mil lugares deve ser o palco da partida de estreia da Copa do Mundo FIFA 2022, e vai receber partidas até a fase semifinal. Localizado na cidade de Al Khor, famosa pelos mergulhadores e pesca de pérolas que sempre convidaram os habitantes do deserto até a costa ao longo dos anos, o design do estádio homenageia o passado e o presente do Catar, destacando a cultura, tradições e história da cidade.", img: "https://images.adsttc.com/media/images/61d2/b2ff/3e4b/3194/cc00/00db/newsletter/al-bayt-stadium-world-cup-qatar-giant-tent.jpg?1641198329" },
    { id: "EST4", nome: "Ahmad bin Ali", info: "Casa de um dos times mais celebrados do Catar na cidade de Al Rayyan, o estádio Ahmad bin Ali celebra a união de sua comunidade ao incorporar símbolos das tradições e da cultura catari. Uma das principais características do projeto é a fachada ondulada, composta por padrões que caracterizam diferentes aspectos do país, como \"a importância da família, a beleza do deserto, a flora e a fauna nativas, além do comércio local e internacional\".", img: "https://images.adsttc.com/media/images/61d2/b2da/3e4b/318f/9700/00e3/newsletter/06_Ahmad-Bin-Ali-Stadium_Credit_Supreme-Committee-for-Delivery-Legacy.jpg?1641198290" },
    { id: "EST5", nome: "Education City Stadium", info: "Situado em um centro vibrante de conhecimento e inovação, o estádio Cidade da Educação é cercado de instalações acadêmicas e organizações esportivas. Devido à sua localização particular na Cidade da Educação, a estrutura foi desenhada com grande foco em acessibilidade. A fachada apresenta padrões triangulares, uma reimaginação dos arabescos tradicionais, que parecem mudar de cor ao longo do dia, seguindo os movimentos do sol pelo céu.", img: "https://images.adsttc.com/media/images/61d2/b337/3e4b/3194/cc00/00e0/newsletter/Education_City_Venue_Archdaily3.jpg?1641198386" },
    { id: "EST6", nome: "974 Stadium", info: "Considerado um dos designs mais inovadores dentre todas as oito estruturas, o Estádio 974, conhecido anteriormente como Ras Abou Aboud, é inspirado pelo comércio internacional e marítimo do Catar. O número 974 é altamente significativo para o projeto, já que é o código internacional telefônico do país, assim como o número de contêineres utilizados na construção. A estrutura fica na orla oposta ao skyline da Baía Oeste de Doha.", img: "https://images.adsttc.com/media/images/61d2/b36e/3e4b/3194/cc00/00e5/newsletter/RasAbuAboud053.jpg?1641198439" },
    { id: "EST7", nome: "Internacional Khalifa Stadium", info: "Construído em 1976 em Al Rayyan, o Estádio Internacional Khalifa é, há muito tempo, um dos estádios mais notáveis do país, e já sediou os Jogos Asiáticos, a Copa do Golfo Árabe e a Copa Asiática AFC, entre outros eventos. Para o Mundial, o estádio é expandido para acomodar 40 mil torcedores e será equipado com \"tecnologia de resfriamento inovadora\" que permitirá que os jogadores atuem em um ambiente confortável.", img: "https://images.adsttc.com/media/images/61d2/b342/3e4b/318f/9700/00ec/newsletter/khalifa_stadium09.jpg?1641198397" },
    { id: "EST8", nome: "Lusail Stadium", info: "Com capacidade para 80 mil pessoas, o Estádio Lusail é o maior dos oito recintos, e vai receber a final da Copa do Mundo FIFA Catar 2022. O design é inspirado pelo jogo de luz e sombra visto nas lanternas Fanar. A forma estrutural e a fachada repetem os motivos intrincados de peças de arte e mobiliário encontradas pelos mundos árabe e islâmico desde suas primeiras civilizações.", img: "https://images.adsttc.com/media/images/61d2/b175/3e4b/3194/cc00/00d1/newsletter/Lusail_Stadium_AFL_Architects_1.jpg?1641197935" },
  ];
  
  const jogos = [
    { id: 0, time1: times[1], time2: times[2], placar1: '', placar2: '', data: "20/11/2022", hora: "13:00", local: estadios[2], concluido: false, rodada: 1 },
    { id: 1, time1: times[0], time2: times[3], placar1: '', placar2: '', data: "21/11/2022", hora: "13:00", local: estadios[0], concluido: false, rodada: 1 },
    { id: 2, time1: times[1], time2: times[0], placar1: '', placar2: '', data: "25/11/2022", hora: "10:00", local: estadios[0], concluido: false, rodada: 2 },
    { id: 3, time1: times[3], time2: times[2], placar1: '', placar2: '', data: "25/11/2022", hora: "13:00", local: estadios[6], concluido: false, rodada: 2 },
    { id: 4, time1: times[3], time2: times[1], placar1: '', placar2: '', data: "29/11/2022", hora: "12:00", local: estadios[2], concluido: false, rodada: 3 },
    { id: 5, time1: times[2], time2: times[0], placar1: '', placar2: '', data: "29/11/2022", hora: "12:00", local: estadios[6], concluido: false, rodada: 3 },

    { id: 6, time1: times[4], time2: times[7], placar1: '', placar2: '', data: "21/11/2022", hora: "10:00", local: estadios[6], concluido: false, rodada: 1 },
    { id: 7, time1: times[5], time2: times[6], placar1: '', placar2: '', data: "21/11/2022", hora: "16:00", local: estadios[3], concluido: false, rodada: 1 },
    { id: 8, time1: times[6], time2: times[7], placar1: '', placar2: '', data: "25/11/2022", hora: "07:00", local: estadios[3], concluido: false, rodada: 2 },
    { id: 9, time1: times[4], time2: times[5], placar1: '', placar2: '', data: "25/11/2022", hora: "16:00", local: estadios[2], concluido: false, rodada: 2 },
    { id: 10, time1: times[7], time2: times[5], placar1: '', placar2: '', data: "29/11/2022", hora: "16:00", local: estadios[0], concluido: false, rodada: 3 },
    { id: 11, time1: times[6], time2: times[4], placar1: '', placar2: '', data: "29/11/2022", hora: "16:00", local: estadios[3], concluido: false, rodada: 3 },    
  
    { id: 12, time1: times[8], time2: times[9], placar1: '', placar2: '', data: "20/11/2022", hora: "13:00", local: estadios[6], concluido: false, rodada: 1 },
    { id: 13, time1: times[10], time2: times[11], placar1: '', placar2: '', data: "21/11/2022", hora: "13:00", local: estadios[3], concluido: false, rodada: 1 },
    { id: 14, time1: times[11], time2: times[9], placar1: '', placar2: '', data: "25/11/2022", hora: "10:00", local: estadios[3], concluido: false, rodada: 2 },
    { id: 15, time1: times[8], time2: times[10], placar1: '', placar2: '', data: "25/11/2022", hora: "13:00", local: estadios[2], concluido: false, rodada: 2 },
    { id: 16, time1: times[11], time2: times[8], placar1: '', placar2: '', data: "29/11/2022", hora: "12:00", local: estadios[0], concluido: false, rodada: 3 },
    { id: 17, time1: times[9], time2: times[10], placar1: '', placar2: '', data: "29/11/2022", hora: "12:00", local: estadios[3], concluido: false, rodada: 3 },
  
    { id: 18, time1: times[14], time2: times[15], placar1: '', placar2: '', data: "22/11/2022", hora: "10:00", local: estadios[4], concluido: false, rodada: 1 },
    { id: 19, time1: times[12], time2: times[13], placar1: '', placar2: '', data: "22/11/2022", hora: "16:00", local: estadios[1], concluido: false, rodada: 1 },
    { id: 20, time1: times[15], time2: times[13], placar1: '', placar2: '', data: "26/11/2022", hora: "07:00", local: estadios[1], concluido: false, rodada: 2 },
    { id: 21, time1: times[12], time2: times[14], placar1: '', placar2: '', data: "26/11/2022", hora: "13:00", local: estadios[5], concluido: false, rodada: 2 },
    { id: 22, time1: times[15], time2: times[12], placar1: '', placar2: '', data: "30/11/2022", hora: "12:00", local: estadios[4], concluido: false, rodada: 3 },
    { id: 23, time1: times[13], time2: times[14], placar1: '', placar2: '', data: "30/11/2022", hora: "12:00", local: estadios[1], concluido: false, rodada: 3 },
  
    { id: 24, time1: times[18], time2: times[19], placar1: '', placar2: '', data: "23/11/2022", hora: "10:00", local: estadios[6], concluido: false, rodada: 1 },
    { id: 25, time1: times[16], time2: times[17], placar1: '', placar2: '', data: "23/11/2022", hora: "13:00", local: estadios[0], concluido: false, rodada: 1 },
    { id: 26, time1: times[19], time2: times[17], placar1: '', placar2: '', data: "27/11/2022", hora: "07:00", local: estadios[3], concluido: false, rodada: 2 },
    { id: 27, time1: times[16], time2: times[18], placar1: '', placar2: '', data: "27/11/2022", hora: "16:00", local: estadios[2], concluido: false, rodada: 2 },
    { id: 28, time1: times[19], time2: times[16], placar1: '', placar2: '', data: "01/12/2022", hora: "16:00", local: estadios[6], concluido: false, rodada: 3 },
    { id: 29, time1: times[17], time2: times[18], placar1: '', placar2: '', data: "01/12/2022", hora: "16:00", local: estadios[2], concluido: false, rodada: 3 },

    { id: 30, time1: times[22], time2: times[23], placar1: '', placar2: '', data: "23/11/2022", hora: "07:00", local: estadios[2], concluido: false, rodada: 1 },
    { id: 31, time1: times[20], time2: times[21], placar1: '', placar2: '', data: "23/11/2022", hora: "16:00", local: estadios[3], concluido: false, rodada: 1 },
    { id: 32, time1: times[20], time2: times[22], placar1: '', placar2: '', data: "27/11/2022", hora: "10:00", local: estadios[0], concluido: false, rodada: 2 },
    { id: 33, time1: times[23], time2: times[21], placar1: '', placar2: '', data: "27/11/2022", hora: "13:00", local: estadios[6], concluido: false, rodada: 2 },
    { id: 34, time1: times[23], time2: times[20], placar1: '', placar2: '', data: "01/12/2022", hora: "16:00", local: estadios[3], concluido: false, rodada: 3 },
    { id: 35, time1: times[21], time2: times[22], placar1: '', placar2: '', data: "01/12/2022", hora: "16:00", local: estadios[0], concluido: false, rodada: 3 },

    { id: 36, time1: times[27], time2: times[24], placar1: '', placar2: '', data: "24/11/2022", hora: "07:00", local: estadios[1], concluido: false, rodada: 1 },
    { id: 37, time1: times[25], time2: times[26], placar1: '', placar2: '', data: "24/11/2022", hora: "16:00", local: estadios[7], concluido: false, rodada: 1 },
    { id: 38, time1: times[24], time2: times[26], placar1: '', placar2: '', data: "28/11/2022", hora: "07:00", local: estadios[1], concluido: false, rodada: 2 },
    { id: 39, time1: times[25], time2: times[27], placar1: '', placar2: '', data: "28/11/2022", hora: "13:00", local: estadios[5], concluido: false, rodada: 2 },
    { id: 40, time1: times[24], time2: times[25], placar1: '', placar2: '', data: "02/12/2022", hora: "16:00", local: estadios[7], concluido: false, rodada: 3 },
    { id: 41, time1: times[26], time2: times[27], placar1: '', placar2: '', data: "02/12/2022", hora: "16:00", local: estadios[5], concluido: false, rodada: 3 },

    { id: 42, time1: times[31], time2: times[30], placar1: '', placar2: '', data: "24/11/2022", hora: "10:00", local: estadios[4], concluido: false, rodada: 1 },
    { id: 43, time1: times[28], time2: times[29], placar1: '', placar2: '', data: "24/11/2022", hora: "13:00", local: estadios[5], concluido: false, rodada: 1 },
    { id: 44, time1: times[30], time2: times[29], placar1: '', placar2: '', data: "28/11/2022", hora: "10:00", local: estadios[4], concluido: false, rodada: 2 },
    { id: 45, time1: times[28], time2: times[31], placar1: '', placar2: '', data: "28/11/2022", hora: "16:00", local: estadios[7], concluido: false, rodada: 2 },
    { id: 46, time1: times[30], time2: times[28], placar1: '', placar2: '', data: "02/12/2022", hora: "12:00", local: estadios[4], concluido: false, rodada: 3 },
    { id: 47, time1: times[29], time2: times[31], placar1: '', placar2: '', data: "02/12/2022", hora: "12:00", local: estadios[1], concluido: false, rodada: 3 }, 
  ];

  const grupos = [
    { id: "A", times: times.slice(0, 4) },
    { id: "B", times: times.slice(4, 8) },
    { id: "C", times: times.slice(8, 12) },
    { id: "D", times: times.slice(12, 16) },
    { id: "E", times: times.slice(16, 20) },
    { id: "F", times: times.slice(20, 24) },
    { id: "G", times: times.slice(24, 28) },
    { id: "H", times: times.slice(28, 32) }
  ];
  
  const jogos_finais = [
    { id: 1, time1: {}, time2: {}, placar1: '', placar2: '', data: "03/12/2022", hora: "12:00", local: estadios[6], concluido: false, fase: 1, ref1: 'A0', ref2: 'B1', penalti1: '', penalti2: '' },
    { id: 2, time1: {}, time2: {}, placar1: '', placar2: '', data: "04/12/2022", hora: "16:00", local: estadios[2], concluido: false, fase: 1, ref1: 'B0', ref2: 'A1', penalti1: '', penalti2: '' },
    { id: 3, time1: {}, time2: {}, placar1: '', placar2: '', data: "03/12/2022", hora: "16:00", local: estadios[3], concluido: false, fase: 1, ref1: 'C0', ref2: 'D1', penalti1: '', penalti2: '' },
    { id: 4, time1: {}, time2: {}, placar1: '', placar2: '', data: "04/12/2022", hora: "12:00", local: estadios[0], concluido: false, fase: 1, ref1: 'D0', ref2: 'C1', penalti1: '', penalti2: '' },
    { id: 5, time1: {}, time2: {}, placar1: '', placar2: '', data: "05/12/2022", hora: "12:00", local: estadios[1], concluido: false, fase: 1, ref1: 'E0', ref2: 'F1', penalti1: '', penalti2: '' },
    { id: 6, time1: {}, time2: {}, placar1: '', placar2: '', data: "06/12/2022", hora: "12:00", local: estadios[4], concluido: false, fase: 1, ref1: 'F0', ref2: 'E1', penalti1: '', penalti2: '' },
    { id: 7, time1: {}, time2: {}, placar1: '', placar2: '', data: "05/12/2022", hora: "16:00", local: estadios[5], concluido: false, fase: 1, ref1: 'G0', ref2: 'H1', penalti1: '', penalti2: '' },
    { id: 8, time1: {}, time2: {}, placar1: '', placar2: '', data: "06/12/2022", hora: "16:00", local: estadios[7], concluido: false, fase: 1, ref1: 'H0', ref2: 'G1', penalti1: '', penalti2: '' },

    { id: 9 , time1: {}, time2: {}, placar1: '', placar2: '', data: "09/12/2022", hora: "16:00", local: estadios[7], concluido: false, fase: 2, ref1:1, ref2:3, penalti1: '', penalti2: '' },
    { id: 10, time1: {}, time2: {}, placar1: '', placar2: '', data: "09/12/2022", hora: "12:00", local: estadios[4], concluido: false, fase: 2, ref1:5, ref2:7, penalti1: '', penalti2: '' },
    { id: 11, time1: {}, time2: {}, placar1: '', placar2: '', data: "10/12/2022", hora: "16:00", local: estadios[2], concluido: false, fase: 2, ref1:2, ref2:4, penalti1: '', penalti2: '' },
    { id: 12, time1: {}, time2: {}, placar1: '', placar2: '', data: "10/12/2022", hora: "12:00", local: estadios[0], concluido: false, fase: 2, ref1:6, ref2:8, penalti1: '', penalti2: '' },

    { id: 13, time1: {}, time2: {}, placar1: '', placar2: '', data: "02/12/2022", hora: "12:00", local: estadios[1], concluido: false, fase: 3, ref1:9, ref2:10, penalti1: '', penalti2: '' },
    { id: 14, time1: {}, time2: {}, placar1: '', placar2: '', data: "02/12/2022", hora: "12:00", local: estadios[1], concluido: false, fase: 3, ref1:11, ref2:12, penalti1: '', penalti2: '' },
  ];
  

  export {estadios, grupos, jogos, jogos_finais};