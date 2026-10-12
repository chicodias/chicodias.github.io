// Francisco Miranda — English and Brazilian Portuguese localization
(() => {
  const pairs = [
    // Shared interface
    ["Skip to content", "Pular para o conteúdo"],
    ["Francisco Miranda home", "Página inicial de Francisco Miranda"],
    ["Primary navigation", "Navegação principal"],
    ["Toggle color theme", "Alternar tema de cores"],
    ["Toggle navigation", "Alternar navegação"],
    ["About", "Sobre"],
    ["Projects", "Projetos"],
    ["Writing", "Escrita"],
    ["Teaching", "Ensino"],
    ["Contact links", "Links de contato"],
    ["Copy email", "Copiar e-mail"],
    ["Docs ↗", "Documentação ↗"],
    ["Source (mandel.c) ↗", "Código-fonte (mandel.c) ↗"],
    ["Watch on YouTube ↗", "Assistir no YouTube ↗"],
    ["Course material ↗", "Material do curso ↗"],
    ["GitHub repository ↗", "Repositório no GitHub ↗"],
    ["Report PDF ↗", "Relatório em PDF ↗"],
    ["Article PDF ↗", "Artigo em PDF ↗"],

    // Metadata
    ["Francisco Miranda — Software Developer", "Francisco Miranda — Desenvolvedor de Software"],
    ["Francisco Miranda is a software developer working across AI, Web3, applied statistics, and zero-knowledge cryptography.", "Francisco Miranda é desenvolvedor de software com atuação em IA, Web3, estatística aplicada e criptografia de conhecimento zero."],
    ["Projects — Francisco Miranda", "Projetos — Francisco Miranda"],
    ["Projects and protocols developed by Francisco Miranda — Web3, smart contracts, AI, and systems engineering.", "Projetos e protocolos desenvolvidos por Francisco Miranda — Web3, contratos inteligentes, IA e engenharia de sistemas."],
    ["Writing & Publications — Francisco Miranda", "Artigos & Publicações — Francisco Miranda"],
    ["Scientific articles, publications, and technical reports by Francisco Miranda — DeFi, statistics, cryptography, and computing.", "Artigos científicos, publicações e relatórios técnicos de Francisco Miranda — DeFi, estatística, criptografia e computação."],
    ["Courses & Talks — Francisco Miranda", "Minicursos & Palestras — Francisco Miranda"],
    ["Courses, talks, and educational material by Francisco Miranda — machine learning, R Shiny, and stochastic processes.", "Minicursos, palestras e materiais educacionais de Francisco Miranda — aprendizado de máquina, R Shiny e processos estocásticos."],

    // Home
    ["São Paulo · Software / AI / Protocols", "São Paulo · Software / IA / Protocolos"],
    ["Software developer working across AI, decentralized systems, and applied statistics.", "Desenvolvedor de software com atuação em IA, sistemas descentralizados e estatística aplicada."],
    ["I build software, smart contracts, and research tools. I co-founded", "Desenvolvo software, contratos inteligentes e ferramentas de pesquisa. Sou cofundador da"],
    [", and I am pursuing a Master's in Computer Science at ICMC-USP focused on information security and zero-knowledge cryptography.", "; também curso mestrado em Ciência da Computação no ICMC-USP, com foco em segurança da informação e criptografia de conhecimento zero."],
    ["Away from work, I play guitar—especially samba and choro—and like travelling, hiking, and spending time outdoors. I care about open knowledge, so most of my code and teaching material is public.", "Fora do trabalho, toco violão — principalmente samba e choro — e gosto de viajar, fazer trilhas e passar tempo ao ar livre. Valorizo o conhecimento aberto; por isso, a maior parte do meu código e material didático é pública."],
    ["Experience", "Experiência"],
    ["2009 — present", "2009 — presente"],
    ["Software Consultant & Co-Founder", "Consultor de Software & Cofundador"],
    ["Jan 2023 — Present", "jan 2023 — presente"],
    ["Co-founded Mindsend to build software and infrastructure for decentralized systems.", "Cofundei a Mindsend para desenvolver software e infraestrutura para sistemas descentralizados."],
    ["Kadena Cabinet: built the governance incentive protocol and its supporting application. The protocol reached the leading TVL position on Kadena and sustained participation above 90%.", "Kadena Cabinet: desenvolvi o protocolo de incentivos para governança e sua aplicação de suporte. O protocolo alcançou a liderança em TVL na Kadena e manteve participação acima de 90%."],
    ["snaK: maintain a non-custodial MetaMask Snap that brings Kadena account management, Chainweb transfers, network switching, and testnet utilities into MetaMask.", "snaK: mantenho um MetaMask Snap não custodial que integra ao MetaMask gerenciamento de contas Kadena, transferências na Chainweb, troca de redes e ferramentas para testnet."],
    ["built the governance incentive protocol and its supporting application. The protocol reached the leading TVL position on Kadena and sustained participation above 90%.", "desenvolvi o protocolo de incentivos para governança e sua aplicação de suporte. O protocolo alcançou a liderança em TVL na Kadena e manteve participação acima de 90%."],
    ["maintain a non-custodial MetaMask Snap that brings Kadena account management, Chainweb transfers, network switching, and testnet utilities into MetaMask.", "mantenho um MetaMask Snap não custodial que integra ao MetaMask gerenciamento de contas Kadena, transferências na Chainweb, troca de redes e ferramentas para testnet."],
    ["Work across Pact smart contracts, TypeScript interfaces and integrations, and C# analytics for protocol operations.", "Atuo em contratos inteligentes em Pact, interfaces e integrações em TypeScript e análises em C# para a operação de protocolos."],
    ["Smart Contract Developer", "Desenvolvedor de Contratos Inteligentes"],
    ["Apr 2022 — Jun 2023", "abr 2022 — jun 2023"],
    ["Contributed full-stack and smart contract development to eckoDEX, a decentralized exchange on Kadena.", "Contribuí no desenvolvimento full-stack e de contratos inteligentes da eckoDEX, uma exchange descentralizada na Kadena."],
    ["Developed Pact smart-contract functionality and its integration with the web application.", "Desenvolvi funcionalidades em contratos Pact e sua integração com a aplicação web."],
    ["Worked on an algorithmic liquidity-mining multiplier intended to adjust pool incentives over time.", "Trabalhei em um multiplicador algorítmico de mineração de liquidez para ajustar os incentivos dos pools ao longo do tempo."],
    ["Used geometric Brownian-motion simulations and sigmoid tuning to study reward behavior and impermanent-loss conditions.", "Usei simulações de movimento browniano geométrico e ajuste de sigmoides para estudar o comportamento das recompensas e condições de perda impermanente."],
    ["English Instructor", "Professor de Inglês"],
    ["Nov 2016 — Feb 2020", "nov 2016 — fev 2020"],
    ["Taught English to students of different ages and proficiency levels.", "Ensinei inglês para alunos de diferentes idades e níveis de proficiência."],
    ["Planned curricula and classroom activities for each student group.", "Planejei currículos e atividades de sala de aula para cada grupo de alunos."],
    ["Adapted lessons to different learning stages while maintaining clear progression across the course.", "Adaptei as aulas a diferentes etapas de aprendizagem, mantendo uma progressão clara ao longo do curso."],
    ["Full-Stack Developer", "Desenvolvedor Full-Stack"],
    ["Mar 2015 — Nov 2018", "mar 2015 — nov 2018"],
    ["Developed and maintained the company's online store for plastic products.", "Desenvolvi e mantive a loja on-line da empresa de produtos plásticos."],
    ["Handled full-stack implementation across the storefront, application logic, and database-backed product information.", "Fui responsável pela implementação full-stack da vitrine, lógica da aplicação e informações de produtos armazenadas em banco de dados."],
    ["Maintained the application over several years, delivering content changes, fixes, and incremental improvements.", "Mantive a aplicação por vários anos, entregando alterações de conteúdo, correções e melhorias incrementais."],
    ["Educational Developer", "Desenvolvedor Educacional"],
    ["Feb 2013 — Feb 2014", "fev 2013 — fev 2014"],
    ["Combined web development with classroom teaching in a school environment.", "Combinei desenvolvimento web e ensino em sala de aula no ambiente escolar."],
    ["Developed and maintained the school's website.", "Desenvolvi e mantive o site da escola."],
    ["Taught practical information-technology classes.", "Ministrei aulas práticas de tecnologia da informação."],
    ["IT Intern", "Estagiário de TI"],
    ["May 2009 — Aug 2010", "mai 2009 — ago 2010"],
    ["Supported the IT department of a public-sector administrative development foundation.", "Prestei suporte ao departamento de TI de uma fundação pública de desenvolvimento administrativo."],
    ["Provided administrative support to the department and assisted its day-to-day operations.", "Prestei apoio administrativo ao departamento e auxiliei em suas operações diárias."],
    ["Education", "Formação"],
    ["University of São Paulo", "Universidade de São Paulo"],
    ["Master's in Computer Science", "Mestrado em Ciência da Computação"],
    ["2026 — Present", "2026 — presente"],
    ["Researching zero-knowledge SQL databases.", "Pesquisa em bancos de dados SQL com conhecimento zero."],
    ["Research focus at the intersection of database systems, information security, and zero-knowledge cryptography.", "Foco de pesquisa na interseção entre sistemas de bancos de dados, segurança da informação e criptografia de conhecimento zero."],
    ["Databases", "Bancos de dados"],
    ["Information security", "Segurança da informação"],
    ["MBA in Software Engineering", "MBA em Engenharia de Software"],
    ["Aug 2024 — Aug 2026", "ago 2024 — ago 2026"],
    ["Applied software architecture to decentralized-finance infrastructure.", "Arquitetura de software aplicada à infraestrutura de finanças descentralizadas."],
    ["Thesis:", "Trabalho de conclusão:"],
    ["Developed SagaIndexer, an event-driven microservices system for monitoring Uniswap V3 concentrated-liquidity pools.", "Desenvolvimento do SagaIndexer, um sistema de microsserviços orientado a eventos para monitorar pools de liquidez concentrada da Uniswap V3."],
    ["Distributed systems", "Sistemas distribuídos"],
    ["Bachelor's in Statistics and Data Science", "Bacharelado em Estatística e Ciência de Dados"],
    ["Feb 2020 — Jun 2024", "fev 2020 — jun 2024"],
    ["Academic training in statistics, data science, and applied computation.", "Formação acadêmica em estatística, ciência de dados e computação aplicada."],
    ["Served as a teaching assistant for Exploratory Data Analysis (EDA).", "Atuação como monitor da disciplina de Análise Exploratória de Dados (AED)."],
    ["Received an Honorable Mention at the 30th SIICUSP (USP), 2022.", "Menção Honrosa no 30º SIICUSP (USP), 2022."],
    ["Statistics", "Estatística"],
    ["EDA", "AED"],
    ["Data science", "Ciência de dados"],
    ["Selected tools", "Ferramentas selecionadas"],
    ["Used in work and research", "Uso profissional e acadêmico"],
    ["Software & contracts", "Software & contratos"],
    ["Data & AI", "Dados & IA"],
    ["Statistical modelling", "Modelagem estatística"],
    ["Machine learning", "Aprendizado de máquina"],
    ["Time series", "Séries temporais"],
    ["Technical writing", "Escrita técnica"],
    ["Infrastructure", "Infraestrutura"],
    ["Languages", "Idiomas"],
    ["Portuguese — native", "Português — nativo"],
    ["English — B2 TOEFL-ITP", "Inglês — B2 TOEFL-ITP"],
    ["Spanish — basic", "Espanhol — básico"],

    // Projects
    ["Kadena Cabinet protocol screenshot", "Captura de tela do protocolo Kadena Cabinet"],
    ["Arcade Prediction Market UI", "Interface do mercado de previsão Arcade"],
    ["Solana Stealth protocol diagram", "Diagrama do protocolo Solana Stealth"],
    ["eckoDEX Multiplier stochastic curves", "Curvas estocásticas do multiplicador da eckoDEX"],
    ["COVID-19 Geospatial analysis dashboard", "Painel de análise geoespacial da COVID-19"],
    ["Animated map of COVID-19 deaths in Brazil", "Mapa animado de óbitos por COVID-19 no Brasil"],
    ["Lord of the Rings character network", "Rede de personagens de O Senhor dos Anéis"],
    ["Classifier decision boundaries", "Fronteiras de decisão de classificadores"],
    ["Mandelbrot fractal in C", "Fractal de Mandelbrot em C"],
    ["Zero-Knowledge", "Conhecimento zero"],
    ["Data Viz", "Visualização de dados"],
    ["Selected work · 2020—2026", "Trabalhos selecionados · 2020—2026"],
    ["Protocol engineering, privacy tools, data products, and small programs built to understand how things work.", "Engenharia de protocolos, ferramentas de privacidade, produtos de dados e pequenos programas feitos para entender como as coisas funcionam."],
    ["Crypto & protocols", "Cripto & protocolos"],
    ["Smart contracts · wallets · infrastructure", "Contratos inteligentes · carteiras · infraestrutura"],
    ["Governance · Kadena", "Governança · Kadena"],
    ["A governance incentive protocol for the Kadena ecosystem. Built with Pact, TypeScript, and C#.", "Um protocolo de incentivos para governança no ecossistema Kadena. Desenvolvido com Pact, TypeScript e C#."],
    ["SagaIndexer architecture and monitoring dashboards", "Arquitetura e painéis de monitoramento do SagaIndexer"],
    ["Indexing · Ethereum", "Indexação · Ethereum"],
    ["A high-performance, event-driven microservices system for monitoring Uniswap V3 concentrated-liquidity pools, with Saga orchestration, circuit breakers, checkpointed indexing, and gRPC services.", "Um sistema de microsserviços de alta performance e orientado a eventos para monitorar pools de liquidez concentrada da Uniswap V3, com orquestração Saga, circuit breakers, indexação por checkpoints e serviços gRPC."],
    ["Microservices", "Microsserviços"],
    ["Prediction markets · Arc", "Mercados de previsão · Arc"],
    ["A prediction-market proof of concept for Arc Testnet, using CPMM liquidity and USDC collateral.", "Uma prova de conceito de mercado de previsão para a Arc Testnet, com liquidez CPMM e colateral em USDC."],
    ["Wallets · Kadena", "Carteiras · Kadena"],
    ["A MetaMask Snap for managing Kadena accounts, transferring tokens across Chainweb, switching networks, and connecting to Kadena applications.", "Um MetaMask Snap para gerenciar contas Kadena, transferir tokens pela Chainweb, alternar redes e conectar-se a aplicações Kadena."],
    ["Privacy · Solana", "Privacidade · Solana"],
    ["An implementation of stealth addresses for private payments on Solana.", "Uma implementação de endereços furtivos para pagamentos privados na Solana."],
    ["Liquidity · Kadena", "Liquidez · Kadena"],
    ["A dynamic liquidity-mining multiplier explored through Brownian-motion simulations and sigmoid tuning.", "Um multiplicador dinâmico de mineração de liquidez estudado por meio de simulações de movimento browniano e ajuste de sigmoides."],
    ["Stochastic Modeling", "Modelagem estocástica"],
    ["Data & systems", "Dados & sistemas"],
    ["Maps · R", "Mapas · R"],
    ["Machine learning · visualization · C", "Aprendizado de máquina · visualização · C"],
    ["Visualization · R", "Visualização · R"],
    ["COVID-19 interactive dashboard", "Painel interativo de COVID-19"],
    ["An R Shiny application developed with PREDICT using geolocated data, time-series regression, and data visualization.", "Uma aplicação R Shiny desenvolvida com o PREDICT usando dados geolocalizados, regressão de séries temporais e visualização de dados."],
    ["Animated COVID-19 maps", "Mapas animados da COVID-19"],
    ["Animated visualization of the moving average of COVID-19 deaths across Brazilian states and municipalities.", "Visualização animada da média móvel de óbitos por COVID-19 nos estados e municípios brasileiros."],
    ["Geospatial data", "Dados geoespaciais"],
    ["NLP · networks", "PLN · redes"],
    ["An interactive view of character relationships built with named-entity recognition.", "Uma visualização interativa das relações entre personagens construída com reconhecimento de entidades nomeadas."],
    ["Classification · Python", "Classificação · Python"],
    ["A Kaggle notebook classifying passenger survival from the supplied passenger data.", "Um notebook do Kaggle que classifica a sobrevivência dos passageiros a partir dos dados fornecidos."],
    ["Graphics · C", "Gráficos · C"],
    ["Mandelbrot fractal", "Fractal de Mandelbrot"],
    ["A C program that computes the Mandelbrot set and writes the rendered image in PPM format.", "Um programa em C que calcula o conjunto de Mandelbrot e grava a imagem renderizada no formato PPM."],
    ["Fractals", "Fractais"],
    ["Packages & algorithms", "Pacotes & algoritmos"],
    ["Open source", "Código aberto"],
    ["R package", "Pacote R"],
    ["An R package for automated collection, cleaning, and standardization of COVID-19 epidemiological data.", "Pacote do R desenvolvido para obtenção, higienização e padronização automatizada de dados epidemiológicos da COVID-19."],
    ["AVL-tree dictionary", "Dicionário em Árvore AVL"],
    ["C · Data structures", "C · Estruturas de dados"],
    ["C • Data Structures", "C • Estruturas de dados"],
    ["A dictionary indexed with a self-balancing AVL tree, balance rotations, and O(log n) operations, implemented in C.", "Implementação em C de dicionário indexado utilizando Árvore AVL auto-balanceável, rotações de balanceamento e complexidade logarítmica O(log n)."],
    ["AVL tree", "Árvore AVL"],
    ["Data structures", "Estruturas de dados"],
    ["Convex hull", "Fecho Convexo (Convex Hull)"],
    ["C · Geometric algorithms", "C · Algoritmos geométricos"],
    ["C • Geometric Algorithms", "C • Algoritmos geométricos"],
    ["A computational-geometry algorithm in C for finding the convex hull of point sets in the Euclidean plane.", "Algoritmo de geometria computacional implementado em C para cálculo do envoltório convexo de conjuntos de pontos no plano euclidiano."],
    ["Computational geometry", "Geometria computacional"],
    ["Algorithms", "Algoritmos"],

    // Writing
    ["Research · essays · reports", "Pesquisa · ensaios · relatórios"],
    ["Publications & writing", "Publicações & escrita"],
    ["Work on DeFi, statistics, public health, foundations of mathematics, and numerical methods.", "Trabalhos sobre DeFi, estatística, saúde pública, fundamentos da matemática e métodos numéricos."],
    ["Publications", "Publicações"],
    ["Journals & proceedings", "Periódicos & anais"],
    ["Risk analysis and classification models for COVID-19 deaths in the state of São Paulo", "Análise de risco e modelos de classificação para óbitos por COVID-19 no estado de São Paulo"],
    ["SINAPE 2022 · ABE Proceedings", "SINAPE 2022 · Anais da ABE"],
    ["Record in the USP Research Output Repository.", "Registro no Repositório da Produção USP."],
    ["Risk classification", "Classificação de Risco"],
    ["Direct PDF (USP Repository) ↗", "PDF Direto (Repositório USP) ↗"],
    ["USP record (item/003160905) ↗", "Registro USP (item/003160905) ↗"],
    ["SINAPE 2022 proceedings ↗", "Anais SINAPE 2022 ↗"],
    ["Bayesian inference", "Inferência Bayesiana"],
    ["Linear Regression and Variable Selection in High Dimensions", "Regressão Linear e Seleção de Variáveis em Alta Dimensionalidade"],
    ["Institute of Mathematics and Computer Sciences (ICMC-USP)", "Instituto de Ciências Matemáticas e de Computação (ICMC-USP)"],
    ["This report briefly presents high-throughput molecular characterization techniques used to infer the latent structure of gene expression from single-nucleotide polymorphisms (SNPs), using sparse seemingly unrelated regression hierarchical models (SSUR).", "Neste relatório, apresentamos brevemente algumas técnicas de caracterização molecular de alta escala, para inferir a estrutura latente de expressões gênicas de acordo com polimorfismos de nucleotídeo único (SNPs), utilizando Modelos Hierárquicos de Regressão não-relacionada aparentemente esparsa (SSUR)."],
    ["Bayesian hierarchical model graph", "Grafo de modelo hierárquico bayesiano"],
    ["Figure: high-dimensional molecular dependency graph (SSUR)", "Figura: Grafo de dependência molecular em alta dimensionalidade (SSUR)"],
    ["High dimensionality", "Alta Dimensionalidade"],
    ["Visualizing the Social Impacts of COVID-19", "Visualização dos Impactos Sociais da COVID-19"],
    ["29th SIICUSP · USP", "29º SIICUSP · USP"],
    ["Presentation of part of the work developed in 2020 by the PREDICT extension group at USP's 29th International Symposium of Scientific and Technological Initiation — SIICUSP 2021.", "Apresentação de parte dos trabalhos desenvolvidos em 2020 pelo grupo de extensão PREDICT no 29º Simpósio Internacional de Iniciação Científica e Tecnológica da USP – SIICUSP 2021."],
    ["History of mathematics", "História da matemática"],
    ["Russell's Paradox and its paradigm shift in Set Theory", "O Paradoxo de Russell e sua quebra de paradigma em Teoria dos Conjuntos"],
    ["Department of Mathematics — University of São Paulo (USP)", "Departamento de Matemática — Universidade de São Paulo (USP)"],
    ["Written in the first semester of 2020, this article presents a historical overview of the origins of Set Theory, examining the paradigm shifts it caused in mathematics and their implications for later axiomatic systems such as ZFC and Category Theory.", "Este artigo, escrito no primeiro semestre de 2020, apresenta um panorama histórico sobre a gênese da Teoria dos Conjuntos, analisando as quebras de paradigma que esta causou na matemática, assim como suas implicações na axiomatização desenvolvida posteriormente por sistemas como ZFC e Teoria das Categorias."],
    ["Set Theory", "Teoria dos Conjuntos"],
    ["Russell's Paradox", "Paradoxo de Russell"],
    ["Category Theory", "Teoria das Categorias"],
    ["Numerical methods", "Cálculo numérico"],
    ["Solutions of Polynomial Equations — History and Numerical Methods in R", "Soluções de Equações Polinomiais - História e Métodos Numéricos em R"],
    ["Applied Mathematics Laboratory — IME-USP (2016)", "Laboratório de Matemática Aplicada — IME-USP (2016)"],
    ["This work was produced in the second semester of 2016 for the Applied Mathematics Laboratory course at IME-USP. It presents a brief overview of computing numerical solutions to polynomial equations with Newton's and secant methods, using the R packages pracma and spuRs.", "Este trabalho foi realizado no segundo semestre de 2016 para a disciplina Laboratório de Matemática Aplicada, no IME-USP. Nele, apresentamos um breve panorama de como podemos calcular soluções numéricas de equações polinomiais através dos Métodos de Newton e Secante, utilizando os pacotes do R pracma e spuRs."],
    ["Newton's method for finding a root", "Método de Newton para obtenção da raíz"],
    ["Figure: finding a polynomial-equation root with Newton's method", "Figura: Gráfico que ilustra a obtenção da raíz de uma equação polinomial através do Método de Newton"],
    ["Newton's method", "Método de Newton"],
    ["Secant method", "Método da Secante"],

    // Teaching
    ["Open classes · videos · code", "Aulas abertas · vídeos · código"],
    ["Courses & talks", "Minicursos & palestras"],
    ["Material produced for ICMC-USP students and the PREDICT extension group.", "Materiais produzidos para estudantes do ICMC-USP e para o grupo de extensão PREDICT."],
    ["Machine Learning with PyCaret using COVID-19 data", "Machine Learning no Pycaret com dados do Covid-19"],
    ["PREDICT Extension Group — ICMC-USP", "Grupo de Extensão PREDICT — ICMC-USP"],
    ["Workshop", "Oficina"],
    ["A short course on classification models and time-series regression offered through the PREDICT extension group.", "Minicurso de modelos de classificação e regressão em séries temporais oferecido através do grupo de extensão PREDICT."],
    ["Geographic visualization", "Visualização geográfica"],
    ["Geolocated data visualization with R Shiny", "Visualização de dados geolocalizados com o R-Shiny"],
    ["Bachelor's in Statistics and Data Science — ICMC-USP", "Bacharelado em Estatística e Ciência de Dados — ICMC-USP"],
    ["Short course", "Minicurso"],
    ["A short course offered through the PREDICT extension group to students in ICMC-USP's Bachelor's in Statistics and Data Science.", "Minicurso oferecido através do grupo de extensão PREDICT aos alunos do Bacharelado em Estatística e Ciência de Dados do ICMC-USP."],
    ["Geolocation", "Geolocalização"],
    ["Stochastic processes", "Processos estocásticos"],
    ["Does random dispersion help survival?", "A dispersão aleatória auxilia na sobrevivência?"],
    ["Stochastic Processes · ICMC-USP", "Processos Estocásticos • ICMC-USP"],
    ["Talk", "Palestra"],
    ["A talk on birth-and-death models in stochastic processes, explaining how models with random dispersal of individuals may support survival.", "Palestra sobre modelos de nascimento e morte em Processos Estocásticos, explicando como modelos com dispersão aleatória dos indivíduos podem auxiliar em sua sobrevivência."],
    ["Markov chains", "Cadeias de Markov"],
    ["Survival", "Sobrevivência"],
    ["GitHub code (ants) ↗", "Código no GitHub (ants) ↗"]
  ];

  const normalized = value => value.replace(/\s+/g, " ").trim().toLocaleLowerCase();
  const dictionaries = { en: new Map(), "pt-BR": new Map() };

  for (const [english, portuguese] of pairs) {
    dictionaries.en.set(normalized(english), english);
    dictionaries.en.set(normalized(portuguese), english);
    dictionaries["pt-BR"].set(normalized(english), portuguese);
    dictionaries["pt-BR"].set(normalized(portuguese), portuguese);
  }

  const params = new URLSearchParams(window.location.search);
  const requestedLanguage = params.get("lang")?.toLowerCase();
  const requestedLocale = requestedLanguage === "en"
    ? "en"
    : ["pt", "pt-br"].includes(requestedLanguage)
      ? "pt-BR"
      : null;
  const storedLanguage = localStorage.getItem("francisco-language");
  const browserLanguage = navigator.language?.toLowerCase().startsWith("pt") ? "pt-BR" : "en";
  let locale = requestedLocale || storedLanguage || browserLanguage;

  if (!dictionaries[locale]) locale = "en";
  if (requestedLocale) localStorage.setItem("francisco-language", locale);

  const translateValue = value => dictionaries[locale].get(normalized(value)) || value;

  function translatePage() {
    document.documentElement.lang = locale;
    document.title = translateValue(document.title);

    const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, {
      acceptNode(node) {
        const parent = node.parentElement;
        if (!parent || ["SCRIPT", "STYLE", "CODE", "PRE"].includes(parent.tagName)) return NodeFilter.FILTER_REJECT;
        return normalized(node.nodeValue) ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_REJECT;
      }
    });

    const textNodes = [];
    while (walker.nextNode()) textNodes.push(walker.currentNode);

    for (const node of textNodes) {
      const original = node.nodeValue;
      const value = translateValue(original);
      if (value !== original) {
        const leading = original.match(/^\s*/)?.[0] || "";
        const trailing = original.match(/\s*$/)?.[0] || "";
        node.nodeValue = `${leading}${value}${trailing}`;
      }
    }

    for (const element of document.querySelectorAll("[aria-label], [title], [alt], meta[name='description']")) {
      for (const attribute of ["aria-label", "title", "alt", "content"]) {
        if (element.hasAttribute(attribute)) {
          element.setAttribute(attribute, translateValue(element.getAttribute(attribute)));
        }
      }
    }

    updateLanguageButton();
    updateInternalLinks();
  }

  function updateLanguageButton() {
    let button = document.getElementById("language-toggle");
    if (!button) {
      button = document.createElement("button");
      button.id = "language-toggle";
      button.className = "language-toggle";
      const navActions = document.querySelector(".nav-actions");
      navActions?.prepend(button);
      button.addEventListener("click", () => {
        locale = locale === "en" ? "pt-BR" : "en";
        localStorage.setItem("francisco-language", locale);
        const url = new URL(window.location.href);
        if (locale === "pt-BR") url.searchParams.set("lang", "pt-BR");
        else url.searchParams.delete("lang");
        history.replaceState({}, "", url);
        translatePage();
        window.siteI18n.locale = locale;
      });
    }

    const switchLabel = locale === "en" ? "Switch to Portuguese" : "Mudar para inglês";
    button.textContent = locale === "en" ? "PT" : "EN";
    button.setAttribute("aria-label", switchLabel);
    button.title = switchLabel;
  }

  function updateInternalLinks() {
    for (const link of document.querySelectorAll("a[href]")) {
      const rawHref = link.getAttribute("href");
      if (!rawHref || rawHref.startsWith("#") || rawHref.startsWith("mailto:")) continue;
      const url = new URL(rawHref, window.location.href);
      if (url.origin !== window.location.origin || !url.pathname.endsWith(".html")) continue;
      if (locale === "pt-BR") url.searchParams.set("lang", "pt-BR");
      else url.searchParams.delete("lang");
      link.href = `${url.pathname.split("/").pop()}${url.search}${url.hash}`;
    }
  }

  window.siteI18n = {
    get locale() { return locale; },
    set locale(value) { locale = value; },
    message(key) {
      const messages = {
        emailCopied: {
          en: "Email copied:",
          "pt-BR": "E-mail copiado:"
        }
      };
      return messages[key]?.[locale] || key;
    }
  };

  translatePage();
})();
