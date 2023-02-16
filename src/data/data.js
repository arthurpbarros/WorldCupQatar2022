const times = [
  // A e B
  { sigla: "SEN", nome: "SENEGAL", img: "sn", pontos: 0, goals_scored: 0, goals_against: 0, grupo: 'A' },
  { sigla: "CAT", nome: "CATAR", img: "qa", pontos: 0, goals_scored: 0, goals_against: 0, grupo: 'A' },
  { sigla: "EQU", nome: "EQUADOR", img: "ec", pontos: 0, goals_scored: 0, goals_against: 0, grupo: 'A' },
  { sigla: "HOL", nome: "HOLANDA", img: "nl", pontos: 0, goals_scored: 0, goals_against: 0, grupo: 'A' },

  { sigla: "ING", nome: "INGLATERRA", img: "gb-eng", pontos: 0, goals_scored: 0, goals_against: 0, grupo: 'B' },
  { sigla: "EUA", nome: "EUA", img: "usa", pontos: 0, goals_scored: 0, goals_against: 0, grupo: 'B' },
  { sigla: "PGA", nome: "PAÍS DE GALES", img: "gb-wls", pontos: 0, goals_scored: 0, goals_against: 0, grupo: 'B' },
  { sigla: "IRA", nome: "IRÃ", img: "ir", pontos: 0, goals_scored: 0, goals_against: 0, grupo: 'B' },

  // C e D
  { sigla: "ARG", nome: "ARGENTINA", img: "ar", pontos: 0, goals_scored: 0, goals_against: 0, grupo: 'C' },
  { sigla: "SAU", nome: "ARÁBIA SAUDITA", img: "sa", pontos: 0, goals_scored: 0, goals_against: 0, grupo: 'C' },
  { sigla: "MEX", nome: "MÉXICO", img: "mx", pontos: 0, goals_scored: 0, goals_against: 0, grupo: 'C' },
  { sigla: "POL", nome: "POLÔNIA", img: "pl", pontos: 0, goals_scored: 0, goals_against: 0, grupo: 'C' },

  { sigla: "FRA", nome: "FRANÇA", img: "fr", pontos: 0, goals_scored: 0, goals_against: 0, grupo: 'D' },
  { sigla: "AUS", nome: "AUSTRÁLIA", img: "au", pontos: 0, goals_scored: 0, goals_against: 0, grupo: 'D' },
  { sigla: "DIN", nome: "DINAMARCA", img: "dk", pontos: 0, goals_scored: 0, goals_against: 0, grupo: 'D' },
  { sigla: "TUN", nome: "TUNÍSIA", img: "tn", pontos: 0, goals_scored: 0, goals_against: 0, grupo: 'D' },

  // E e F
  { sigla: "ESP", nome: "ESPANHA", img: "es", pontos: 0, goals_scored: 0, goals_against: 0, grupo: 'E' },
  { sigla: "CRI", nome: "COSTA RICA", img: "cr", pontos: 0, goals_scored: 0, goals_against: 0, grupo: 'E' },
  { sigla: "ALE", nome: "ALEMANHA", img: "de", pontos: 0, goals_scored: 0, goals_against: 0, grupo: 'E' },
  { sigla: "JPN", nome: "JAPÃO", img: "jp", pontos: 0, goals_scored: 0, goals_against: 0, grupo: 'E' },

  { sigla: "BEL", nome: "BÉLGICA", img: "be", pontos: 0, goals_scored: 0, goals_against: 0, grupo: 'F' },
  { sigla: "CAN", nome: "CANADÁ", img: "ca", pontos: 0, goals_scored: 0, goals_against: 0, grupo: 'F' },
  { sigla: "MAR", nome: "MARROCOS", img: "ma", pontos: 0, goals_scored: 0, goals_against: 0, grupo: 'F' },
  { sigla: "CRO", nome: "CROÁCIA", img: "hr", pontos: 0, goals_scored: 0, goals_against: 0, grupo: 'F' },

  // G e H
  { sigla: "CAM", nome: "CAMARÕES", img: "cm", pontos: 0, goals_scored: 0, goals_against: 0, grupo: 'G' },
  { sigla: "BRA", nome: "BRASIL", img: "br", pontos: 0, goals_scored: 0, goals_against: 0, grupo: 'G' },
  { sigla: "SER", nome: "SÉRVIA", img: "rs", pontos: 0, goals_scored: 0, goals_against: 0, grupo: 'G' },
  { sigla: "SUI", nome: "SUÍÇA", img: "ch", pontos: 0, goals_scored: 0, goals_against: 0, grupo: 'G' },

  { sigla: "POR", nome: "PORTUGAL", img: "pt", pontos: 0, goals_scored: 0, goals_against: 0, grupo: 'H' },
  { sigla: "GAN", nome: "GANA", img: "gh", pontos: 0, goals_scored: 0, goals_against: 0, grupo: 'H' },
  { sigla: "KOR", nome: "CORÉIA DO SUL", img: "kr", pontos: 0, goals_scored: 0, goals_against: 0, grupo: 'H' },
  { sigla: "URU", nome: "URUGUAÍ", img: "uy", pontos: 0, goals_scored: 0, goals_against: 0, grupo: 'H' }
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
  {id: 0, time1: times[1],time2: times[2], placar1: '__',placar2: '__',data:"20/11/2022",hora:"13:00",local:estadios[2]},
  {id: 1, time1: times[4],time2: times[7], placar1: '__',placar2: '__',data:"21/11/2022",hora:"13:00",local:estadios[6]},
  {id: 2, time1: times[0],time2: times[3], placar1: '__',placar2: '__',data:"21/11/2022",hora:"13:00",local:estadios[0]},
  {id: 3, time1: times[5],time2: times[6], placar1: '__',placar2: '__',data:"21/11/2022",hora:"22:00",local:estadios[3]},

  {id: 4, time1: times[8],time2: times[9], placar1: '__',placar2: '__',data:"22/11/2022",hora:"13:00",local:estadios[7]},
  {id: 5, time1: times[10],time2: times[11], placar1: '__',placar2: '__',data:"22/11/2022",hora:"19:00",local:estadios[5]},
  {id: 6, time1: times[14],time2: times[15], placar1: '__',placar2: '__',data:"22/11/2022",hora:"13:00",local:estadios[4]},
  {id: 7, time1: times[12],time2: times[13], placar1: '__',placar2: '__',data:"22/11/2022",hora:"22:00",local:estadios[2]},

  {id: 8, time1: times[22],time2: times[23], placar1: '__',placar2: '__',data:"23/11/2022",hora:"13:00",local:estadios[2]},
  {id: 9, time1: times[18],time2: times[19], placar1: '__',placar2: '__',data:"23/11/2022",hora:"16:00",local:estadios[6]},
  {id: 10, time1: times[16],time2: times[17], placar1: '__',placar2: '__',data:"23/11/2022",hora:"19:00",local:estadios[0]},
  {id: 11, time1: times[20],time2: times[21], placar1: '__',placar2: '__',data:"23/11/2022",hora:"22:00",local:estadios[3]},

  {id: 12, time1: times[25],time2: times[26], placar1: '__',placar2: '__',data:"24/11/2022",hora:"22:00",local:estadios[7]},
  {id: 13, time1: times[28],time2: times[29], placar1: '__',placar2: '__',data:"24/11/2022",hora:"19:00",local:estadios[5]},
  {id: 14, time1: times[31],time2: times[30], placar1: '__',placar2: '__',data:"24/11/2022",hora:"16:00",local:estadios[4]},
  {id: 15, time1: times[27],time2: times[24], placar1: '__',placar2: '__',data:"24/11/2022",hora:"13:00",local:estadios[2]},

  {id: 16, time1: times[4],time2: times[5], placar1: '__',placar2: '__',data:"25/11/2022",hora:"22:00",local:estadios[2]},
  {id: 17, time1: times[3],time2: times[2], placar1: '__',placar2: '__',data:"25/11/2022",hora:"13:00",local:estadios[6]},
  {id: 18, time1: times[1],time2: times[0], placar1: '__',placar2: '__',data:"25/11/2022",hora:"10:00",local:estadios[0]},
  {id: 19, time1: times[6],time2: times[7], placar1: '__',placar2: '__',data:"25/11/2022",hora:"13:00",local:estadios[3]},

  {id: 20, time1: times[8],time2: times[10], placar1: '__',placar2: '__',data:"26/11/2022",hora:"22:00",local:estadios[7]},
  {id: 21, time1: times[12],time2: times[14], placar1: '__',placar2: '__',data:"26/11/2022",hora:"19:00",local:estadios[5]},
  {id: 22, time1: times[11],time2: times[9], placar1: '__',placar2: '__',data:"26/11/2022",hora:"16:00",local:estadios[4]},
  {id: 23, time1: times[15],time2: times[13], placar1: '__',placar2: '__',data:"26/11/2022",hora:"13:00",local:estadios[2]},

  {id: 24, time1: times[16],time2: times[18], placar1: '__',placar2: '__',data:"27/11/2022",hora:"22:00",local:estadios[2]},
  {id: 25, time1: times[23],time2: times[21], placar1: '__',placar2: '__',data:"27/11/2022",hora:"19:00",local:estadios[6]},
  {id: 26, time1: times[20],time2: times[22], placar1: '__',placar2: '__',data:"27/11/2022",hora:"16:00",local:estadios[0]},
  {id: 27, time1: times[19],time2: times[17], placar1: '__',placar2: '__',data:"27/11/2022",hora:"13:00",local:estadios[3]},

  {id: 28, time1: times[28],time2: times[31], placar1: '__',placar2: '__',data:"28/11/2022",hora:"22:00",local:estadios[7]},
  {id: 29, time1: times[25],time2: times[27], placar1: '__',placar2: '__',data:"28/11/2022",hora:"19:00",local:estadios[5]},
  {id: 30, time1: times[30],time2: times[29], placar1: '__',placar2: '__',data:"28/11/2022",hora:"16:00",local:estadios[4]},
  {id: 31, time1: times[24],time2: times[26], placar1: '__',placar2: '__',data:"28/11/2022",hora:"13:00",local:estadios[2]},
    //DIAS A PARTIR DE 29
  {id: 32, time1: times[3],time2: times[1], placar1: '__',placar2: '__',data:"29/11/2022",hora:"12:00",local:estadios[2]},
  {id: 33, time1: times[2],time2: times[0], placar1: '__',placar2: '__',data:"29/11/2022",hora:"12:00",local:estadios[6]},
  {id: 34, time1: times[7],time2: times[5], placar1: '__',placar2: '__',data:"29/11/2022",hora:"22:00",local:estadios[0]},
  {id: 35, time1: times[6],time2: times[4], placar1: '__',placar2: '__',data:"29/11/2022",hora:"22:00",local:estadios[3]},

  {id: 36, time1: times[9],time2: times[10], placar1: '__',placar2: '__',data:"30/11/2022",hora:"22:00",local:estadios[7]},
  {id: 37, time1: times[11],time2: times[8], placar1: '__',placar2: '__',data:"30/11/2022",hora:"22:00",local:estadios[5]},
  {id: 38, time1: times[15],time2: times[12], placar1: '__',placar2: '__',data:"30/11/2022",hora:"18:00",local:estadios[4]},
  {id: 39, time1: times[13],time2: times[14], placar1: '__',placar2: '__',data:"30/11/2022",hora:"18:00",local:estadios[2]},
    //DIAS A PARTIR DE 01
  {id: 40, time1: times[17],time2: times[18], placar1: '__',placar2: '__',data:"01/12/2022",hora:"18:00",local:estadios[2]},
  {id: 41, time1: times[19],time2: times[16], placar1: '__',placar2: '__',data:"01/12/2022",hora:"18:00",local:estadios[6]},
  {id: 42, time1: times[21],time2: times[22], placar1: '__',placar2: '__',data:"01/12/2022",hora:"22:00",local:estadios[0]},
  {id: 43, time1: times[23],time2: times[20], placar1: '__',placar2: '__',data:"01/12/2022",hora:"22:00",local:estadios[3]},

  {id: 44, time1: times[24],time2: times[25], placar1: '__',placar2: '__',data:"02/12/2022",hora:"22:00",local:estadios[7]},
  {id: 45, time1: times[26],time2: times[27], placar1: '__',placar2: '__',data:"02/12/2022",hora:"22:00",local:estadios[5]},
  {id: 46, time1: times[30],time2: times[28], placar1: '__',placar2: '__',data:"02/12/2022",hora:"18:00",local:estadios[4]},
  {id: 47, time1: times[29],time2: times[31], placar1: '__',placar2: '__',data:"02/12/2022",hora:"18:00",local:estadios[2]},
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

export {grupos,times,jogos,estadios};