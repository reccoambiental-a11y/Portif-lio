/**
 * Portfólio Bruno P. Recco - Gestor Ambiental & Especialista GIS
 * Base de Dados dos Mapas e Metadados Cartográficos
 */

const MAPS_DATA = [
  {
    id: 1,
    code: "01",
    category: "localizacao",
    categoryLabel: "Mapas de Localização",
    badge: "Localização",
    badgeColor: "cyan",
    title: "Localização do Parque Estadual da Serra do Mar — Núcleo Picinguaba",
    subtitle: "Parque Estadual da Serra do Mar • Ubatuba/SP",
    thumbnail: "thumbnails/thumb-01.jpg",
    fullImage: "Mapas/01.Localização do Parque Estadual da Serra do Mar — Núcleo Picinguaba.png",
    shortDesc: "Mapa de localização do Parque Estadual da Serra do Mar — Núcleo Picinguaba, situado no município de Ubatuba, litoral norte do estado de São Paulo. O produto destaca a área do município em amarelo e a unidade de conservação em hachuras verdes, evidenciando sua inserção territorial, a proximidade com municípios paulistas e sua relação regional com o estado do Rio de Janeiro. O mapa foi elaborado em SIRGAS 2000 / UTM Zona 23S, utilizando dados da Malha Municipal e Estadual do IBGE, edição de 2025, e informações sobre unidades de conservação estaduais da Fundação Florestal, de 2022. O material apoia a análise espacial da distribuição de áreas protegidas e da conservação dos remanescentes de Mata Atlântica na região da Serra do Mar.",
    fullDesc: [
      "Este mapa apresenta a localização do Parque Estadual da Serra do Mar — Núcleo Picinguaba, situado no município de Ubatuba, no litoral norte do estado de São Paulo. O produto cartográfico foi elaborado com o objetivo de representar a inserção territorial da unidade de conservação e sua relação com os municípios e estados vizinhos, destacando a importância estratégica do núcleo na proteção dos remanescentes de Mata Atlântica da Serra do Mar.",
      "A área do município de Ubatuba está destacada em amarelo, enquanto o Parque Estadual da Serra do Mar — Núcleo Picinguaba é representado por hachuras verdes. O mapa principal evidencia a distribuição espacial da unidade de conservação no território municipal e sua proximidade com os municípios de Caraguatatuba, São Luiz do Paraitinga e Cunha, no estado de São Paulo, além do município de Paraty, no estado do Rio de Janeiro.",
      "Também foi incluído um mapa de localização regional, permitindo identificar a posição do parque no contexto do litoral norte paulista e do Vale do Paraíba, bem como sua proximidade com os estados de Minas Gerais e Rio de Janeiro. A representação auxilia na compreensão da conectividade territorial entre áreas protegidas, remanescentes florestais e ambientes costeiros da região.",
      "O mapa foi elaborado no sistema de referência SIRGAS 2000 / UTM Zona 23S, utilizando como base cartográfica a Malha Municipal e Estadual do IBGE, edição de 2025. Os dados referentes às unidades de conservação estaduais foram obtidos da Fundação Florestal, com referência ao ano de 2022.",
      "A unidade representada integra o conjunto de áreas protegidas do bioma Mata Atlântica e exerce papel relevante na conservação da biodiversidade, na proteção dos recursos hídricos, na manutenção da conectividade ecológica e na preservação dos ambientes serranos e costeiros do município de Ubatuba."
    ],
    metadata: [
      { label: "Unidade de Conservação", value: "Parque Estadual da Serra do Mar — Núcleo Picinguaba" },
      { label: "Município Principal", value: "Ubatuba / SP" },
      { label: "Base Cartográfica", value: "Malha Municipal e Estadual — IBGE (2025)" },
      { label: "Fonte Unidades de Conservação", value: "Fundação Florestal (2022)" },
      { label: "Sistema de Referência Espacial", value: "SIRGAS 2000 / UTM Zona 23S (EPSG: 31983)" },
      { label: "Escala Gráfica", value: "0 a 10 km" },
      { label: "Tipo de Produto", value: "Mapa de localização e inserção territorial de Unidade de Conservação" }
    ],
    tags: ["Ubatuba", "Mata Atlântica", "Fundação Florestal", "IBGE 2025", "SIRGAS 2000"]
  },
  {
    id: 2,
    code: "02",
    category: "localizacao",
    categoryLabel: "Mapas de Localização",
    badge: "Localização",
    badgeColor: "cyan",
    title: "Mapeamento do Rio Acaraú e dos bairros de interesse — Ubatuba/SP",
    subtitle: "Bairros Sesmaria, Acaraú e Praia Grande • Ubatuba/SP",
    thumbnail: "thumbnails/thumb-02.jpg",
    fullImage: "Mapas/02.Mapeamento do Rio Acaraú e dos bairros de interesse — UbatubaSP.png",
    shortDesc: "Mapa temático do Rio Acaraú e dos bairros de interesse em Ubatuba/SP, elaborado sobre imagem de satélite do Google Satellite. O produto destaca o curso do Rio Acaraú e os bairros de Sesmaria, Acaraú e Praia Grande, permitindo analisar a relação espacial entre a rede hidrográfica, a ocupação urbana, as áreas vegetadas e o ambiente costeiro. A representação foi elaborada em SIRGAS 2000 / UTM Zona 23S, utilizando dados de hidrografia da ANA e da Malha Municipal e Estadual do IBGE, edição de 2025. O mapa pode ser aplicado em estudos de caracterização territorial, planejamento ambiental e avaliação da ocupação no entorno de cursos d’água.",
    fullDesc: [
      "Este mapa apresenta a localização e a distribuição espacial do Rio Acaraú, no município de Ubatuba, litoral norte do estado de São Paulo, com destaque para os bairros de interesse situados em seu entorno: Sesmaria, Acaraú e Praia Grande.",
      "A representação foi elaborada sobre uma imagem de satélite do Google Satellite, utilizada como base de apoio à interpretação da ocupação urbana, da cobertura vegetal, da rede hidrográfica e da relação entre o curso d’água e os bairros adjacentes. O Rio Acaraú está representado por uma linha azul, enquanto os bairros de interesse são destacados por uma área preenchida em verde-claro, permitindo visualizar sua inserção no território municipal.",
      "O mapa também apresenta um mapa de localização regional, que auxilia na identificação da área de estudo dentro do município de Ubatuba e de sua posição em relação à faixa costeira. A presença de áreas urbanizadas, remanescentes de vegetação e ambientes costeiros evidencia a diversidade de usos e características da paisagem no entorno do rio.",
      "A elaboração cartográfica foi realizada no sistema de referência SIRGAS 2000 / UTM Zona 23S, com unidades lineares em metros. Foram utilizadas informações da Malha Municipal e Estadual do IBGE, edição de 2025, e dados de hidrografia da Agência Nacional de Águas e Saneamento Básico — ANA.",
      "O produto pode contribuir para estudos de caracterização territorial, análise da ocupação urbana, planejamento ambiental, avaliação da relação entre hidrografia e áreas urbanizadas e identificação de setores prioritários para ações de gestão e conservação ambiental."
    ],
    metadata: [
      { label: "Tema Principal", value: "Rio Acaraú e bairros de interesse" },
      { label: "Área de Estudo", value: "Ubatuba / SP" },
      { label: "Bairros Representados", value: "Sesmaria, Acaraú e Praia Grande" },
      { label: "Base de Imagem", value: "Google Satellite" },
      { label: "Hidrografia", value: "Agência Nacional de Águas e Saneamento Básico — ANA" },
      { label: "Base Cartográfica", value: "Malha Municipal e Estadual — IBGE (2025)" },
      { label: "Sistema de Referência Espacial", value: "SIRGAS 2000 / UTM Zona 23S (EPSG: 31983)" },
      { label: "Escala Gráfica", value: "Extensão de até 1.000 m" },
      { label: "Tipo de Produto", value: "Mapa temático de localização e caracterização espacial" }
    ],
    tags: ["Hidrografia", "ANA", "Google Satellite", "Ubatuba", "Planejamento Urbano"]
  },
  {
    id: 3,
    code: "03",
    category: "tematico",
    categoryLabel: "Mapas Temáticos",
    badge: "Temático",
    badgeColor: "emerald",
    title: "Mapeamento das áreas sob risco de escorregamento — Bairro da Enseada, Ubatuba/SP",
    subtitle: "Classificação P0 a P5 • Instituto Geológico (IG 2014)",
    thumbnail: "thumbnails/thumb-03.jpg",
    fullImage: "Mapas/03.Mapeamento das áreas sob risco de escorregamento — Bairro da Enseada, UbatubaSP.png",
    shortDesc: "Mapa das áreas sob risco de escorregamento no bairro da Enseada, Ubatuba/SP, elaborado a partir da classificação do Instituto Geológico — IG, de 2014. O produto representa as classes de risco P0 a P5 e as áreas não classificadas, destacando sua relação espacial com as áreas urbanizadas e os limites territoriais do bairro. A imagem de satélite foi utilizada como base de apoio à interpretação da ocupação e das características da paisagem. Elaborado em SIRGAS 2000 / UTM Zona 23S, o mapa pode subsidiar estudos de planejamento territorial, gestão ambiental, prevenção de desastres e identificação de áreas prioritárias para monitoramento e defesa civil.",
    fullDesc: [
      "Este mapa apresenta a distribuição espacial das áreas classificadas quanto ao risco de escorregamento no bairro da Enseada, município de Ubatuba, litoral norte do estado de São Paulo. O produto foi elaborado com o objetivo de representar a relação entre as áreas urbanizadas, os limites territoriais do bairro e as diferentes classes de risco associadas à ocorrência de movimentos de massa.",
      "A classificação temática é representada pelas categorias P0 a P5, além da classe 'Não classificado', conforme os dados do Instituto Geológico do Estado de São Paulo — IG, de 2014. As áreas urbanizadas são indicadas por hachuras, permitindo analisar a sobreposição entre a ocupação urbana e os setores classificados quanto ao risco de escorregamento.",
      "O limite do bairro da Enseada está destacado em vermelho, enquanto o limite do município de Ubatuba é representado em preto. A imagem de satélite do Google Satellite foi utilizada como base de referência visual, auxiliando na identificação da ocupação urbana, da cobertura do solo, das encostas e das demais características da paisagem.",
      "A representação permite observar a concentração das áreas urbanizadas na faixa costeira e sua proximidade com setores de encosta classificados nas diferentes categorias de risco. Dessa forma, o mapa pode apoiar estudos de planejamento territorial, gestão ambiental, avaliação de áreas ocupadas, prevenção de desastres e identificação de setores prioritários para ações de monitoramento e defesa civil.",
      "A elaboração cartográfica foi realizada no sistema de referência SIRGAS 2000 / UTM Zona 23S, com coordenadas projetadas em metros. Ressalta-se que a classificação apresentada corresponde à base do Instituto Geológico de 2014 e deve ser interpretada como uma representação da situação registrada na fonte."
    ],
    metadata: [
      { label: "Tema Principal", value: "Risco de escorregamento e movimentos de massa" },
      { label: "Área de Estudo", value: "Bairro da Enseada, Ubatuba / SP" },
      { label: "Classificação de Risco", value: "Graus P0 a P5 e 'Não classificado'" },
      { label: "Fonte do Risco", value: "Instituto Geológico do Estado de São Paulo — IG (2014)" },
      { label: "Limites Administrativos", value: "IBGE (2022)" },
      { label: "Base de Imagem", value: "Google Satellite" },
      { label: "Sistema de Referência Espacial", value: "SIRGAS 2000 / UTM Zona 23S (EPSG: 31983)" },
      { label: "Tipo de Produto", value: "Mapa temático de risco geotécnico e ocupação territorial" }
    ],
    tags: ["Defesa Civil", "Riscos Geológicos", "Instituto Geológico", "Encostas", "Ubatuba"]
  },
  {
    id: 4,
    code: "04",
    category: "tematico",
    categoryLabel: "Mapas Temáticos",
    badge: "Temático",
    badgeColor: "emerald",
    title: "Mapa de bairros do município de Ubatuba/SP",
    subtitle: "Distribuição Espacial de 65 Setores e Localidades Urbanas",
    thumbnail: "thumbnails/thumb-04.jpg",
    fullImage: "Mapas/04.Mapa de bairros do município de UbatubaSP.png",
    shortDesc: "Mapa temático dos bairros do município de Ubatuba/SP, elaborado com o objetivo de representar a distribuição espacial das principais localidades e áreas urbanizadas do território municipal. Os bairros são identificados por códigos numéricos e diferenciados por cores, permitindo sua localização ao longo da faixa costeira e das áreas próximas à Serra do Mar. A imagem Google Satellite foi utilizada como base de apoio à interpretação da ocupação e da paisagem, enquanto os limites territoriais foram obtidos a partir de dados do IBGE. O mapa foi elaborado no sistema SIRGAS 2000 / UTM Zona 23S.",
    fullDesc: [
      "Este mapa apresenta a distribuição espacial dos bairros do município de Ubatuba, localizado no litoral norte do estado de São Paulo. A representação destaca diferentes áreas urbanizadas e localidades do município por meio de polígonos coloridos e identificados numericamente, permitindo visualizar sua organização territorial ao longo da faixa costeira e nas áreas de interface com a Serra do Mar.",
      "A base de imagem Google Satellite foi utilizada como referência visual para auxiliar na interpretação da ocupação urbana, da cobertura vegetal, dos ambientes costeiros e da configuração geral do território municipal. O limite de Ubatuba está destacado em vermelho, enquanto as áreas correspondentes aos bairros são representadas por cores distintas, facilitando sua diferenciação espacial.",
      "A legenda apresenta a identificação das áreas numeradas de 01 a 65, incluindo localidades como Praia do Sapê, Rio da Prata, Praia Vermelha, Barra Seca, Itaguá, Sesmaria, Acaraú, Praia Grande, Itamambuca, Centro, Enseada, Maranduba, Praia do Félix, Picinguaba, Camburi e Ubatumirim, entre outras.",
      "O mapa também inclui um mapa de localização regional, que evidencia a posição de Ubatuba no estado de São Paulo e sua proximidade com os estados de Minas Gerais e Rio de Janeiro. A composição cartográfica conta com grade de coordenadas, seta norte, escala gráfica, escala numérica, legenda temática e fontes de dados.",
      "O produto foi elaborado no sistema SIRGAS 2000 / UTM Zona 23S, adequado à representação cartográfica do município, utilizando dados de setores censitários do IBGE (2022) e da Malha Municipal do IBGE (2022)."
    ],
    technicalNote: "Observação técnica metodológica: O mapa utiliza polígonos derivados da malha de setores censitários do IBGE (2022) para delimitar as 65 localidades e bairros, representando a organização territorial e facilitando diagnósticos espaciais e levantamentos de campo.",
    metadata: [
      { label: "Tema Principal", value: "Distribuição espacial dos bairros e localidades de Ubatuba" },
      { label: "Área de Estudo", value: "Município de Ubatuba / SP" },
      { label: "Base de Imagem", value: "Google Satellite" },
      { label: "Dados Territoriais", value: "Setores Censitários — IBGE (2022)" },
      { label: "Limite Municipal", value: "Malha Municipal — IBGE (2022)" },
      { label: "Sistema de Referência Espacial", value: "SIRGAS 2000 / UTM Zona 23S (EPSG: 31983)" },
      { label: "Cobertura", value: "65 bairros / localidades catalogadas" },
      { label: "Tipo de Produto", value: "Mapa temático de bairros e organização territorial municipal" }
    ],
    tags: ["Setores Censitários", "Bairros", "IBGE 2022", "Ubatuba", "Território"]
  },
  {
    id: 5,
    code: "05",
    category: "tematico",
    categoryLabel: "Mapas Temáticos",
    badge: "Temático",
    badgeColor: "emerald",
    title: "Delimitação do Zoneamento Ecológico-Econômico de Ubatuba/SP",
    subtitle: "Zonas Ambientais Z1 a Z5OD • IGC / Litoral Norte",
    thumbnail: "thumbnails/thumb-05.jpg",
    fullImage: "Mapas/05.Delimitação do Zoneamento Ecológico-Econômico de UbatubaSP.png",
    shortDesc: "Mapa de delimitação do Zoneamento Ecológico-Econômico de Ubatuba/SP, elaborado para representar a distribuição espacial das zonas ambientais no município e sua inserção no contexto regional do Litoral Norte paulista. As classes do zoneamento — Z1, Z1AE, Z2, Z3, Z4, Z4OD, Z5 e Z5OD — são diferenciadas por cores, permitindo visualizar a organização territorial definida pela base temática utilizada. O produto inclui limites municipais e estaduais, imagem de satélite, mapa de localização regional, grade de coordenadas, escala gráfica, escala numérica e seta norte. A elaboração foi realizada em SIRGAS 2000 / UTM Zona 23S.",
    fullDesc: [
      "Este mapa apresenta a delimitação das zonas do Zoneamento Ecológico-Econômico — ZEE no município de Ubatuba, localizado no litoral norte do estado de São Paulo. O produto cartográfico representa a distribuição espacial das diferentes categorias de zoneamento e sua relação com os limites municipais, estaduais e com a área regional do Litoral Norte paulista.",
      "As zonas do ZEE estão representadas por cores distintas, permitindo identificar a organização territorial definida para o município. A legenda apresenta as classes Z1, Z1AE, Z2, Z3, Z4, Z4OD, Z5 e Z5OD, conforme a classificação adotada na base temática utilizada. Essas categorias estão relacionadas a diferentes níveis de proteção ambiental, conservação, ocupação dirigida, uso sustentável e áreas de desenvolvimento.",
      "O limite do município de Ubatuba está destacado por uma linha vermelha, enquanto os limites estaduais são representados em preto. A imagem Google Satellite foi utilizada como base de apoio à visualização da paisagem, permitindo relacionar as zonas delimitadas com os ambientes costeiros, áreas florestadas, áreas urbanizadas e demais características do território.",
      "O mapa também inclui um mapa de localização regional, destacando a posição de Ubatuba no contexto do estado de São Paulo e sua proximidade com os estados do Rio de Janeiro e Minas Gerais.",
      "A elaboração foi realizada no sistema de referência SIRGAS 2000 / UTM Zona 23S, com escala numérica 1:350.000. O produto pode subsidiar análises de planejamento ambiental, ordenamento territorial, gestão costeira, avaliação de conflitos de uso do solo e apoio à tomada de decisões."
    ],
    metadata: [
      { label: "Tema Principal", value: "Zoneamento Ecológico-Econômico (ZEE) de Ubatuba" },
      { label: "Área de Estudo", value: "Município de Ubatuba / SP" },
      { label: "Base Cartográfica", value: "Malha Estadual e Municipal — IBGE (2022)" },
      { label: "Base Temática", value: "Zoneamento Ecológico-Econômico — IGC (2017)" },
      { label: "Imagem de Apoio", value: "Google Satellite" },
      { label: "Classes Representadas", value: "Z1, Z1AE, Z2, Z3, Z4, Z4OD, Z5 e Z5OD" },
      { label: "Sistema de Referência Espacial", value: "SIRGAS 2000 / UTM Zona 23S (EPSG: 31983)" },
      { label: "Escala Numérica", value: "1:350.000" },
      { label: "Tipo de Produto", value: "Mapa temático de delimitação do zoneamento ambiental" }
    ],
    tags: ["ZEE", "Ordenamento Territorial", "IGC 2017", "Gestão Costeira", "Licenciamento"]
  },
  {
    id: 6,
    code: "06",
    category: "analitico",
    categoryLabel: "Mapas Analíticos",
    badge: "Analítico",
    badgeColor: "indigo",
    title: "Mapa hipsométrico da APA Campos do Jordão/SP",
    subtitle: "Modelo Digital de Elevação Copernicus GLO-30 (30m) • Relevo Serrano",
    thumbnail: "thumbnails/thumb-06.jpg",
    fullImage: "Mapas/06.Mapa hipsométrico da APA Campos do JordãoSP.png",
    shortDesc: "Mapa hipsométrico da APA Campos do Jordão/SP, elaborado a partir do Modelo Digital de Elevação Copernicus GLO-30, com resolução espacial de 30 m. O produto representa as altitudes do relevo, aproximadamente entre 537,34 m e 2.018,22 m, utilizando uma escala de cores para evidenciar a variação altimétrica do território. A delimitação da APA Campos do Jordão é indicada por linha amarela, enquanto as áreas superiores a 1.800 m são destacadas em roxo. O mapa também apresenta os limites estaduais de São Paulo, Minas Gerais e Rio de Janeiro, mapa de localização regional, grade de coordenadas, norte e escala gráfica. A elaboração foi realizada em SIRGAS 2000 / UTM Zona 23S.",
    fullDesc: [
      "Este mapa apresenta a distribuição espacial das altitudes do relevo na Área de Proteção Ambiental — APA Campos do Jordão, localizada no município de Campos do Jordão, estado de São Paulo. A representação foi elaborada a partir de um Modelo Digital de Elevação — MDE Copernicus com resolução espacial de 30 m, permitindo visualizar a variação altimétrica e a configuração do relevo na área de estudo.",
      "A hipsometria é representada por uma escala de cores que varia entre aproximadamente 537,34 m e 2.018,22 m de altitude. As tonalidades mais claras e esverdeadas correspondem às menores altitudes, enquanto as cores amarelas, alaranjadas e avermelhadas indicam setores mais elevados do terreno.",
      "A delimitação da APA Campos do Jordão, uma unidade de conservação de uso sustentável, está representada por uma linha amarela. Também são destacadas as áreas situadas acima de 1.800 m, representadas em roxo, permitindo identificar os setores de maior altitude dentro e no entorno da unidade de conservação.",
      "O mapa apresenta ainda os limites estaduais de São Paulo, Minas Gerais e Rio de Janeiro, além do limite do município de Campos do Jordão. Esses elementos auxiliam na compreensão da inserção regional da APA e de sua posição na Serra da Mantiqueira.",
      "A composição cartográfica inclui grade de coordenadas, indicação do norte, escala gráfica (0 a 5 km) e mapa de localização regional no sistema de referência SIRGAS 2000 / UTM Zona 23S. O produto subsidia estudos de caracterização geomorfológica, conservação de ambientes serranos e avaliação da relação entre relevo e proteção ambiental."
    ],
    metadata: [
      { label: "Tema Principal", value: "Hipsometria e relevo da APA Campos do Jordão" },
      { label: "Área de Estudo", value: "Município de Campos do Jordão / SP" },
      { label: "Modelo Digital de Elevação", value: "Copernicus GLO-30 (resolução espacial de 30 m)" },
      { label: "Unidade de Conservação", value: "APA Campos do Jordão (Uso Sustentável)" },
      { label: "Fonte da UC", value: "Fundação para a Conservação e a Produção Florestal de SP" },
      { label: "Limites Municipais/Estaduais", value: "IBGE" },
      { label: "Classe Complementar", value: "Áreas com altitude superior a 1.800 m (destaque em roxo)" },
      { label: "Faixa Altimétrica", value: "Aprox. 537,34 m a 2.018,22 m" },
      { label: "Sistema de Referência Espacial", value: "SIRGAS 2000 / UTM Zona 23S (EPSG: 31983)" },
      { label: "Escala Gráfica", value: "0 a 5 km" },
      { label: "Tipo de Produto", value: "Mapa hipsométrico e de áreas de elevada altitude" }
    ],
    tags: ["MDE Copernicus", "Hipsometria", "Campos do Jordão", "Serra da Mantiqueira", "Geomorfologia"]
  },
  {
    id: 7,
    code: "07",
    category: "analitico",
    categoryLabel: "Mapas Analíticos",
    badge: "Analítico",
    badgeColor: "indigo",
    title: "Análise temporal do NDVI na Praia de Itamambuca — Ubatuba/SP",
    subtitle: "Sensoriamento Remoto Sentinel-2 • Comparativo Multitemporal (2020 vs 2026)",
    thumbnail: "thumbnails/thumb-07.jpg",
    fullImage: "Mapas/07. Análise temporal do NDVI na Praia de Itamambuca — UbatubaSP.png",
    shortDesc: "Mapa comparativo do NDVI na Praia de Itamambuca, Ubatuba/SP, elaborado a partir de imagens Sentinel-2 adquiridas em 23/10/2020 e 19/07/2026. O produto representa a distribuição espacial do vigor da vegetação por meio do Índice de Vegetação por Diferença Normalizada, calculado com as bandas B8 e B4. A análise foi realizada em SIRGAS 2000 / UTM Zona 23S e permite comparar as condições da cobertura vegetal entre os dois períodos, considerando as possíveis influências da sazonalidade e das condições ambientais nas datas analisadas.",
    fullDesc: [
      "Este mapa apresenta uma comparação temporal do Índice de Vegetação por Diferença Normalizada (NDVI) na região da Praia de Itamambuca, município de Ubatuba, litoral norte do estado de São Paulo. Foram utilizadas imagens do satélite Sentinel-2, adquiridas em 23 de outubro de 2020 e 19 de julho de 2026, com o objetivo de observar a distribuição espacial e as diferenças nos valores de vigor e densidade da vegetação entre os dois períodos.",
      "O NDVI foi calculado a partir da relação entre as bandas do infravermelho próximo (B8) e do vermelho (B4), conforme a formulação canônica:",
      "NDVI = (B8 - B4) / (B8 + B4)",
      "Valores mais elevados indicam áreas com maior presença e vigor fotossintético da vegetação, enquanto valores baixos ou negativos estão geralmente associados à lâmina d'água, ao solo exposto, à ocupação urbana e a setores com vegetação esparsa.",
      "A elaboração cartográfica foi realizada no sistema de referência SIRGAS 2000 / UTM Zona 23S. A comparação deve ser interpretada considerando a diferença entre os meses de aquisição das imagens (outubro de 2020 e julho de 2026), uma vez que fatores sazonais como precipitação, umidade do solo e condições atmosféricas influenciam os valores registrados."
    ],
    metadata: [
      { label: "Satélite Utilizado", value: "Sentinel-2 (MSI — MultiSpectral Instrument)" },
      { label: "Datas de Aquisição", value: "23 de outubro de 2020 e 19 de julho de 2026" },
      { label: "Bandas Espectrais", value: "Infravermelho Próximo (B8 — 842 nm) e Vermelho (B4 — 665 nm)" },
      { label: "Fórmula Espectral", value: "NDVI = (NIR - RED) / (NIR + RED)" },
      { label: "Área de Estudo", value: "Praia de Itamambuca, Ubatuba / SP" },
      { label: "Sistema de Referência Espacial", value: "SIRGAS 2000 / UTM Zona 23S (EPSG: 31983)" },
      { label: "Tipo de Produto", value: "Mapa analítico comparativo temporal de índice de vegetação" }
    ],
    tags: ["NDVI", "Sentinel-2", "Sensoriamento Remoto", "Vigor Vegetativo", "Temporal"]
  },
  {
    id: 8,
    code: "08",
    category: "analitico",
    categoryLabel: "Mapas Analíticos",
    badge: "Analítico",
    badgeColor: "indigo",
    title: "Mapa hipsométrico, APPs e unidade de conservação — Itamonte/MG",
    subtitle: "Parque Nacional do Itatiaia • APPs por Altitude e Declividade (386m a 2.784m)",
    thumbnail: "thumbnails/thumb-08.jpg",
    fullImage: "Mapas/08.Mapa hipsométrico, APPs e unidade de conservação — ItamonteMG.png",
    shortDesc: "Mapa hipsométrico, de Áreas de Preservação Permanente e de unidade de conservação no município de Itamonte/MG, elaborado a partir de um Modelo Digital de Elevação. O produto representa a variação altimétrica do relevo, aproximadamente entre 386 m e 2.784 m, além de destacar áreas classificadas como APP por altitude, APP por declividade e o limite do Parque Nacional do Itatiaia. A composição inclui mapa de localização regional, limites administrativos, grade de coordenadas UTM, escala gráfica, norte e legenda temática. Elaborado no sistema SIRGAS 2000 / UTM Zona 23S.",
    fullDesc: [
      "Este mapa apresenta a distribuição espacial das altitudes do relevo no município de Itamonte, Minas Gerais, destacando também áreas associadas à preservação ambiental e o limite do Parque Nacional do Itatiaia.",
      "A representação hipsométrica foi elaborada a partir de um Modelo Digital de Elevação — MDE, permitindo visualizar a variação altimétrica do território, aproximadamente entre 386 m e 2.784 m. As altitudes são representadas por uma escala de cores, que possibilita identificar os setores de menor e maior elevação e compreender a configuração do relevo serrano presente na área de estudo.",
      "Além da hipsometria, o mapa apresenta áreas classificadas como APP por altitude e APP por declividade, permitindo analisar a relação entre as características físicas do terreno e as áreas destinadas à proteção ambiental segundo o Código Florestal. O Parque Nacional do Itatiaia é representado por hachuras, enquanto o limite municipal de Itamonte é destacado no mapa principal.",
      "A composição também apresenta os limites estaduais de Minas Gerais, São Paulo e Rio de Janeiro, contribuindo para a contextualização regional do município na Serra da Mantiqueira.",
      "Foram incluídos grade de coordenadas UTM, norte, escala gráfica, legenda temática e fontes no sistema SIRGAS 2000 / UTM Zona 23S."
    ],
    metadata: [
      { label: "Tema Principal", value: "Hipsometria, APPs e Unidade de Conservação" },
      { label: "Área de Estudo", value: "Município de Itamonte / MG" },
      { label: "Modelo Digital de Elevação", value: "MDE Altimétrico de alta definição" },
      { label: "Amplitude Altimétrica", value: "386 m a 2.784 m de altitude" },
      { label: "Unidade de Conservação", value: "Parque Nacional do Itatiaia (Proteção Integral)" },
      { label: "Fonte da UC", value: "Instituto Chico Mendes de Conservação da Biodiversidade — ICMBio" },
      { label: "Camadas Temáticas", value: "APP por Altitude e APP por Declividade" },
      { label: "Limites Administrativos", value: "IBGE" },
      { label: "Sistema de Referência Espacial", value: "SIRGAS 2000 / UTM Zona 23S (EPSG: 31983)" },
      { label: "Tipo de Produto", value: "Mapa hipsométrico e de áreas ambientalmente protegidas" }
    ],
    tags: ["Parque Nacional do Itatiaia", "Itamonte", "APPs", "Código Florestal", "Mantiqueira"]
  },
  {
    id: 9,
    code: "09",
    category: "analitico",
    categoryLabel: "Mapas Analíticos",
    badge: "Analítico",
    badgeColor: "indigo",
    title: "Mapa hipsométrico e áreas de alta declividade de Ubatuba/SP",
    subtitle: "Modelo Digital de Elevação FABDEM • Declividades > 45° (0 a 1.643,2m)",
    thumbnail: "thumbnails/thumb-09.jpg",
    fullImage: "Mapas/09.Mapa hipsométrico e áreas de alta declividade de UbatubaSP.png",
    shortDesc: "Mapa hipsométrico do município de Ubatuba/SP, elaborado a partir do Modelo Digital de Elevação FABDEM, com altitudes variando aproximadamente entre 0 e 1.643,2 metros. A representação destaca a distribuição das elevações e a configuração do relevo da planície costeira e da Serra do Mar, utilizando sombreamento para evidenciar vales, vertentes e cristas. Também foram mapeadas as áreas com declividade superior a 45°, representadas em amarelo, como subsídio a análises ambientais, planejamento territorial e avaliação das restrições relacionadas ao relevo. O produto foi elaborado em SIRGAS 2000 / UTM Zona 23S.",
    fullDesc: [
      "Este mapa apresenta a distribuição espacial das altitudes e das áreas com declividade superior a 45° no município de Ubatuba, litoral norte do estado de São Paulo. A representação hipsométrica foi elaborada a partir do Modelo Digital de Elevação FABDEM, com valores altimétricos variando aproximadamente de 0 a 1.643,2 metros.",
      "A composição utiliza uma escala de cores para representar as diferenças de elevação do terreno, permitindo identificar as áreas de menor altitude, associadas principalmente à planície costeira, e os setores mais elevados e acidentados localizados no domínio da Serra do Mar. O relevo sombreado (hillshade) foi utilizado como recurso de visualização para realçar a morfologia do terreno, destacando vertentes, vales, cristas e escarpas.",
      "Sobre o modelo de elevação foi sobreposta a camada de Áreas de Preservação Permanente associadas à declividade superior a 45°, representada em amarelo. Essas áreas correspondem a setores com maior inclinação do terreno e possuem relevância direta para análises ambientais, planejamento territorial, avaliação de riscos geodinâmicos e definição de restrições ao uso e à ocupação do solo.",
      "O mapa foi elaborado no sistema de referência SIRGAS 2000 / UTM Zona 23S, com unidades lineares em metros, incluindo mapa de situação regional com a posição de Ubatuba em relação a SP, MG e RJ."
    ],
    metadata: [
      { label: "Modelo Digital de Elevação", value: "FABDEM (Forest And Buildings removed Copernicus DEM)" },
      { label: "Variável Temática", value: "Altitude do terreno (0 a 1.643,2 metros)" },
      { label: "Camada Complementar", value: "Áreas com declividade superior a 45° (APP por Declividade)" },
      { label: "Limites Administrativos", value: "IBGE" },
      { label: "Unidades de Conservação", value: "ICMBio" },
      { label: "Imagem de Apoio", value: "Google Satellite" },
      { label: "Sistema de Referência Espacial", value: "SIRGAS 2000 / UTM Zona 23S (EPSG: 31983)" },
      { label: "Área de Estudo", value: "Município de Ubatuba / SP" },
      { label: "Tipo de Produto", value: "Mapa hipsométrico e morfométrico de relevo e declividade" }
    ],
    tags: ["FABDEM", "Declividade > 45°", "Serra do Mar", "Ubatuba", "Hillshade"]
  }
];
