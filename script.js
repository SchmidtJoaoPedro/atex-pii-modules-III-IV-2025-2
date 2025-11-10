// ===== SISTEMA DE CURSOS NAVCODE =====
// Script principal para gerenciamento de cursos e capítulos

/**
 * Classe principal para gerenciar o sistema de cursos
 * Responsável por carregar conteúdo, gerenciar progresso e navegação
 */
class NavCodeCourseSystem {
  constructor() {
    // Dados dos capítulos do curso técnico de informática
    this.chapters = [
      {
        id: 1,
        title: "Fundamentos de Hardware",
        description:
          "Aprenda sobre componentes básicos do computador, arquitetura e funcionamento interno dos sistemas.",
        duration: "3h 30min",
        icon: "cpu",
        completed: false,
        content: {
          intro:
            "Bem-vindo ao primeiro capítulo do curso NavCode! Aqui você aprenderá os fundamentos essenciais do hardware.",
          explanations: [
            {
              title: "Processador (CPU)",
              image: "/cpu-processor-chip-motherboard.jpg",
              text: `O processador é o "cérebro" do computador, responsável por executar todas as instruções e cálculos.

**Componentes principais:**
• Unidade de Controle (UC): Coordena as operações
• Unidade Lógica e Aritmética (ULA): Realiza cálculos
• Registradores: Armazenamento temporário de dados
• Cache: Memória ultra-rápida para dados frequentes

**Características importantes:**
• Frequência (GHz): Velocidade de processamento
• Núcleos: Quantidade de processadores em um chip
• Arquitetura: 32 bits ou 64 bits`,
            },
            {
              title: "Memória RAM",
              image: "/ram-memory-modules-computer-hardware.jpg",
              text: `A memória RAM (Random Access Memory) é o armazenamento temporário onde o sistema operacional e programas ficam carregados durante o uso.

**Tipos de RAM:**
• DDR4: Padrão atual, alta velocidade
• DDR5: Nova geração, ainda mais rápida
• SO-DIMM: Versão para notebooks

**Características:**
• Volátil: Perde dados quando desligada
• Velocidade medida em MHz
• Capacidade em GB (4GB, 8GB, 16GB, 32GB+)`,
            },
          ],
          videos: [
            {
              title: "Introdução ao Hardware",
              description: "Visão geral dos componentes principais",
              duration: "15:30",
              thumbnail: "/computer-hardware-components-overview.jpg",
            },
            {
              title: "Montagem de PC Passo a Passo",
              description: "Como montar um computador do zero",
              duration: "25:45",
              thumbnail: "/pc-assembly-computer-building.jpg",
            },
          ],
          quiz: [
            {
              question: "Qual componente é considerado o 'cérebro' do computador?",
              options: ["Memória RAM", "Processador (CPU)", "Placa de vídeo", "HD/SSD"],
              correct: 1,
              explanation:
                "O processador (CPU) é responsável por executar todas as instruções e cálculos, sendo considerado o 'cérebro' do computador.",
            },
            {
              question: "O que significa RAM?",
              options: ["Random Access Memory", "Rapid Access Memory", "Read Access Memory", "Real Access Memory"],
              correct: 0,
              explanation:
                "RAM significa Random Access Memory (Memória de Acesso Aleatório), permitindo acesso direto a qualquer posição de memória.",
            },
          ],
          exercises: [
            {
              title: "Identificação de Componentes",
              description: "Liste os 5 componentes principais de um computador e suas funções básicas.",
              points: 10,
              tips: "Pense nos componentes essenciais: processamento, memória, armazenamento, entrada e saída.",
            },
            {
              title: "Especificações Técnicas",
              description: "Pesquise as especificações de um computador atual e explique cada componente.",
              points: 15,
              tips: "Use sites de lojas online para encontrar especificações reais de computadores.",
            },
          ],
        },
      },
      {
        id: 2,
        title: "Sistemas Operacionais",
        description: "Entenda como funcionam os sistemas operacionais, instalação, configuração e gerenciamento.",
        duration: "4h 15min",
        icon: "settings",
        completed: false,
        content: {
          intro: "Explore o mundo dos sistemas operacionais e aprenda a gerenciar recursos do computador.",
          explanations: [
            {
              title: "O que é um Sistema Operacional",
              image: "/operating-system-interface-desktop.jpg",
              text: `O Sistema Operacional (SO) é o software fundamental que gerencia todos os recursos do computador e fornece interface entre usuário e hardware.

**Funções principais:**
• Gerenciamento de processos e memória
• Controle de dispositivos de entrada/saída
• Sistema de arquivos e segurança
• Interface com o usuário

**Tipos de SO:**
• Windows: Mais popular para desktop
• Linux: Open source, muito usado em servidores
• macOS: Sistema da Apple
• Android/iOS: Para dispositivos móveis`,
            },
          ],
          videos: [
            {
              title: "Instalação do Windows",
              description: "Como instalar Windows do zero",
              duration: "20:15",
              thumbnail: "/windows-installation-setup-screen.jpg",
            },
          ],
          quiz: [
            {
              question: "Qual a principal função de um sistema operacional?",
              options: ["Navegar na internet", "Gerenciar recursos do computador", "Editar textos", "Jogar games"],
              correct: 1,
              explanation:
                "O sistema operacional gerencia todos os recursos do computador, incluindo memória, processador, dispositivos e arquivos.",
            },
          ],
          exercises: [
            {
              title: "Comparação de Sistemas",
              description: "Compare Windows, Linux e macOS listando vantagens e desvantagens de cada um.",
              points: 20,
              tips: "Considere fatores como custo, facilidade de uso, segurança e compatibilidade.",
            },
          ],
        },
      },
      {
        id: 3,
        title: "Redes de Computadores",
        description: "Conceitos de redes, protocolos, configuração e troubleshooting de conexões.",
        duration: "3h 45min",
        icon: "wifi",
        completed: false,
        content: {
          intro: "Descubra como os computadores se comunicam através de redes locais e da internet.",
          explanations: [
            {
              title: "Fundamentos de Redes",
              image: "/computer-network-topology-diagram.jpg",
              text: `Redes de computadores permitem que dispositivos se comuniquem e compartilhem recursos.

**Tipos de redes:**
• LAN (Local Area Network): Rede local
• WAN (Wide Area Network): Rede ampla
• WLAN: Rede local sem fio (Wi-Fi)
• Internet: Rede mundial

**Componentes básicos:**
• Roteador: Direciona tráfego entre redes
• Switch: Conecta dispositivos na mesma rede
• Modem: Converte sinais para internet
• Cabos e conectores: Meio físico de transmissão`,
            },
          ],
          videos: [
            {
              title: "Configuração de Rede Wi-Fi",
              description: "Como configurar uma rede sem fio",
              duration: "18:20",
              thumbnail: "/wifi-router-configuration-setup.jpg",
            },
          ],
          quiz: [
            {
              question: "O que significa LAN?",
              options: ["Large Area Network", "Local Area Network", "Long Access Network", "Limited Area Network"],
              correct: 1,
              explanation:
                "LAN significa Local Area Network, uma rede que conecta dispositivos em uma área geográfica limitada.",
            },
          ],
          exercises: [
            {
              title: "Diagnóstico de Rede",
              description: "Descreva os passos para diagnosticar problemas de conexão com a internet.",
              points: 15,
              tips: "Pense em verificações desde o cabo físico até configurações de software.",
            },
          ],
        },
      },
      {
        id: 4,
        title: "Segurança da Informação",
        description: "Princípios de segurança, proteção contra malware, backup e recuperação de dados.",
        duration: "4h 00min",
        icon: "shield",
        completed: false,
        content: {
          intro: "Aprenda a proteger sistemas e dados contra ameaças digitais.",
          explanations: [
            {
              title: "Princípios da Segurança",
              image: "/cybersecurity-shield-protection-digital.jpg",
              text: `A segurança da informação baseia-se em três pilares fundamentais:

**CIA Triad:**
• Confidencialidade: Apenas pessoas autorizadas acessam
• Integridade: Dados não são alterados indevidamente
• Disponibilidade: Sistemas funcionam quando necessário

**Principais ameaças:**
• Malware: Vírus, trojans, ransomware
• Phishing: Tentativas de roubo de dados
• Ataques de força bruta: Tentativas de quebrar senhas
• Engenharia social: Manipulação psicológica

**Medidas de proteção:**
• Antivírus atualizado
• Firewall configurado
• Senhas fortes e únicas
• Backup regular dos dados`,
            },
          ],
          videos: [
            {
              title: "Configuração de Antivírus",
              description: "Como configurar proteção contra malware",
              duration: "12:45",
              thumbnail: "/antivirus-software-security-protection.jpg",
            },
          ],
          quiz: [
            {
              question: "Quais são os três pilares da segurança da informação?",
              options: [
                "Confidencialidade, Integridade, Disponibilidade",
                "Criptografia, Firewall, Antivírus",
                "Backup, Restore, Update",
                "Login, Senha, Token",
              ],
              correct: 0,
              explanation:
                "Os três pilares são Confidencialidade, Integridade e Disponibilidade, conhecidos como CIA Triad.",
            },
          ],
          exercises: [
            {
              title: "Plano de Segurança",
              description: "Crie um plano básico de segurança para um escritório pequeno.",
              points: 25,
              tips: "Inclua medidas preventivas, procedimentos de backup e plano de resposta a incidentes.",
            },
          ],
        },
      },
      {
        id: 5,
        title: "Manutenção e Troubleshooting",
        description: "Técnicas de diagnóstico, resolução de problemas e manutenção preventiva.",
        duration: "3h 20min",
        icon: "tool",
        completed: false,
        content: {
          intro: "Desenvolva habilidades para diagnosticar e resolver problemas técnicos.",
          explanations: [
            {
              title: "Metodologia de Troubleshooting",
              image: "/computer-repair-troubleshooting-tools.jpg",
              text: `Uma abordagem sistemática para resolver problemas técnicos:

**Passos do troubleshooting:**
1. Identificar o problema claramente
2. Estabelecer uma teoria da causa provável
3. Testar a teoria para determinar a causa
4. Estabelecer um plano de ação
5. Implementar a solução
6. Verificar funcionalidade completa
7. Documentar descobertas e ações

**Ferramentas essenciais:**
• Multímetro: Medir voltagem e continuidade
• Chaves de fenda e Phillips variadas
• Pulseira antiestática
• Software de diagnóstico
• Pen drive bootável com ferramentas`,
            },
          ],
          videos: [
            {
              title: "Diagnóstico de Hardware",
              description: "Como identificar componentes defeituosos",
              duration: "22:10",
              thumbnail: "/hardware-diagnostic-testing-computer-repair.jpg",
            },
          ],
          quiz: [
            {
              question: "Qual o primeiro passo no troubleshooting?",
              options: ["Trocar componentes", "Identificar o problema", "Reinstalar sistema", "Verificar cabos"],
              correct: 1,
              explanation:
                "O primeiro passo é sempre identificar claramente qual é o problema antes de tentar soluções.",
            },
          ],
          exercises: [
            {
              title: "Caso de Troubleshooting",
              description: "Um computador não liga. Descreva o processo completo de diagnóstico.",
              points: 20,
              tips: "Siga a metodologia sistemática, começando pelas causas mais simples.",
            },
          ],
        },
      },
      {
        id: 6,
        title: "Projeto Final e Certificação",
        description: "Aplicação prática dos conhecimentos adquiridos em um projeto completo.",
        duration: "2h 30min",
        icon: "award",
        completed: false,
        content: {
          intro: "Demonstre seus conhecimentos em um projeto prático que integra todos os conceitos aprendidos.",
          explanations: [
            {
              title: "Projeto Integrador",
              image: "/computer-project-presentation-technical-documentat.jpg",
              text: `O projeto final integra todos os conhecimentos do curso:

**Objetivos do projeto:**
• Aplicar conceitos de hardware e software
• Demonstrar habilidades de troubleshooting
• Implementar medidas de segurança
• Documentar processos técnicos

**Entregáveis:**
• Relatório técnico completo
• Apresentação dos resultados
• Documentação de procedimentos
• Plano de manutenção

**Critérios de avaliação:**
• Aplicação correta dos conceitos
• Qualidade da documentação
• Criatividade na solução
• Apresentação profissional`,
            },
          ],
          videos: [
            {
              title: "Apresentação de Projetos",
              description: "Como apresentar projetos técnicos",
              duration: "15:30",
              thumbnail: "/technical-presentation-project-documentation.jpg",
            },
          ],
          quiz: [
            {
              question: "O que deve conter um relatório técnico?",
              options: [
                "Apenas conclusões",
                "Problema, metodologia, resultados e conclusões",
                "Só imagens",
                "Apenas código",
              ],
              correct: 1,
              explanation: "Um relatório técnico completo deve incluir problema, metodologia, resultados e conclusões.",
            },
          ],
          exercises: [
            {
              title: "Projeto Final",
              description: "Desenvolva um projeto que integre hardware, software, redes e segurança.",
              points: 50,
              tips: "Escolha um problema real e aplique todos os conceitos aprendidos no curso.",
            },
          ],
        },
      },
    ]

    // Estado atual do sistema
    this.currentChapter = null
    this.currentSection = "intro"
    this.userProgress = this.loadProgress()

    // Inicializar sistema
    this.init()
  }

  /**
   * Inicializa o sistema de cursos
   */
  init() {
    console.log("[NavCode] Inicializando sistema de cursos...")

    // Verificar se está na página principal
    if (document.getElementById("chapters-grid")) {
      this.loadChapters()
      this.updateProgress()
    }

    // Configurar event listeners
    this.setupEventListeners()

    console.log("[NavCode] Sistema de cursos inicializado com sucesso!")
  }

  /**
   * Configura event listeners para navegação
   */
  setupEventListeners() {
    // Botão de voltar no modal
    const backButton = document.getElementById("back-button")
    if (backButton) {
      backButton.addEventListener("click", () => this.closeChapter())
    }

    // Navegação entre seções do capítulo
    const navItems = document.querySelectorAll(".nav-item")
    navItems.forEach((item) => {
      item.addEventListener("click", (e) => {
        const section = e.target.getAttribute("data-section")
        this.showSection(section)
      })
    })

    // Fechar modal ao clicar fora
    const modal = document.getElementById("chapter-modal")
    if (modal) {
      modal.addEventListener("click", (e) => {
        if (e.target === modal) {
          this.closeChapter()
        }
      })
    }
  }

  /**
   * Carrega e exibe todos os capítulos
   */
  loadChapters() {
    const chaptersGrid = document.getElementById("chapters-grid")
    if (!chaptersGrid) return

    chaptersGrid.innerHTML = ""

    this.chapters.forEach((chapter) => {
      const chapterCard = this.createChapterCard(chapter)
      chaptersGrid.appendChild(chapterCard)
    })

    console.log(`[NavCode] ${this.chapters.length} capítulos carregados`)
  }

  /**
   * Cria elemento HTML para um capítulo
   * @param {Object} chapter - Dados do capítulo
   * @returns {HTMLElement} - Elemento do cartão
   */
  createChapterCard(chapter) {
    const card = document.createElement("div")
    card.className = "chapter-card"
    card.onclick = () => this.openChapter(chapter.id)

    const isCompleted = this.userProgress.completedChapters.includes(chapter.id)
    const completedBadge = isCompleted
      ? `<div class="completed-badge">
                <svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
                    <polyline points="22,4 12,14.01 9,11.01"/>
                </svg>
                Concluído
            </div>`
      : ""

    card.innerHTML = `
            <div class="chapter-header">
                <div class="chapter-info">
                    <div class="chapter-icon-wrapper">
                        ${this.getChapterIcon(chapter.icon)}
                    </div>
                    <div class="chapter-details">
                        <h3>${chapter.title}</h3>
                        <div class="chapter-duration">
                            <svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <circle cx="12" cy="12" r="10"/>
                                <polyline points="12,6 12,12 16,14"/>
                            </svg>
                            ${chapter.duration}
                        </div>
                    </div>
                </div>
                ${completedBadge}
            </div>
            <div class="chapter-body">
                <p class="chapter-description">${chapter.description}</p>
                <button class="chapter-button ${isCompleted ? "secondary" : "primary"}">
                    ${isCompleted ? "Revisar Capítulo" : "Iniciar Capítulo"}
                </button>
            </div>
        `

    return card
  }

  /**
   * Retorna ícone SVG para o capítulo
   * @param {string} iconType - Tipo do ícone
   * @returns {string} - HTML do ícone
   */
  getChapterIcon(iconType) {
    const icons = {
      cpu: `<svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <rect x="4" y="4" width="16" height="16" rx="2" ry="2"/>
                <rect x="9" y="9" width="6" height="6"/>
                <line x1="9" y1="1" x2="9" y2="4"/>
                <line x1="15" y1="1" x2="15" y2="4"/>
                <line x1="9" y1="20" x2="9" y2="23"/>
                <line x1="20" y1="9" x2="23" y2="9"/>
                <line x1="20" y1="14" x2="23" y2="14"/>
                <line x1="1" y1="9" x2="4" y2="9"/>
                <line x1="1" y1="14" x2="4" y2="14"/>
            </svg>`,
      settings: `<svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <circle cx="12" cy="12" r="3"/>
                <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1 1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"/>
            </svg>`,
      wifi: `<svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M1.42 9a16 16 0 0 1 21.16 0"/>
                <path d="M5 12.55a11 11 0 0 1 14.08 0"/>
                <path d="M8.53 16.11a6 6 0 0 1 6.95 0"/>
                <line x1="12" y1="20" x2="12.01" y2="20"/>
            </svg>`,
      shield: `<svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
            </svg>`,
      tool: `<svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/>
            </svg>`,
      award: `<svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <circle cx="12" cy="8" r="7"/>
                <polyline points="8.21,13.89 7,23 12,20 17,23 15.79,13.88"/>
            </svg>`,
    }

    return icons[iconType] || icons.cpu
  }

  /**
   * Abre modal do capítulo
   * @param {number} chapterId - ID do capítulo
   */
  openChapter(chapterId) {
    const chapter = this.chapters.find((c) => c.id === chapterId)
    if (!chapter) return

    this.currentChapter = chapter
    this.currentSection = "intro"

    // Atualizar informações do modal
    document.getElementById("chapter-title").textContent = chapter.title
    document.getElementById("chapter-description").textContent = chapter.description

    // Atualizar ícone do capítulo
    const chapterIcon = document.getElementById("chapter-icon")
    chapterIcon.innerHTML = this.getChapterIcon(chapter.icon)

    // Mostrar badge de concluído se aplicável
    const completedBadge = document.getElementById("completed-badge")
    const isCompleted = this.userProgress.completedChapters.includes(chapterId)
    completedBadge.style.display = isCompleted ? "flex" : "none"

    // Carregar conteúdo inicial
    this.showSection("intro")

    // Mostrar modal
    document.getElementById("chapter-modal").classList.add("active")
    document.body.style.overflow = "hidden" // Prevenir scroll da página
  }

  /**
   * Fecha modal do capítulo
   */
  closeChapter() {
    document.getElementById("chapter-modal").classList.remove("active")
    document.body.style.overflow = "auto" // Restaurar scroll
    this.currentChapter = null
  }

  /**
   * Mostra seção específica do capítulo
   * @param {string} section - Nome da seção
   */
  showSection(section) {
    if (!this.currentChapter) return

    this.currentSection = section

    // Atualizar navegação ativa
    document.querySelectorAll(".nav-item").forEach((item) => {
      item.classList.remove("active")
    })
    document.querySelector(`[data-section="${section}"]`).classList.add("active")

    // Carregar conteúdo da seção
    const content = this.generateSectionContent(section)
    document.getElementById("chapter-content").innerHTML = content

    // Configurar event listeners específicos da seção
    this.setupSectionListeners(section)
  }

  /**
   * Gera HTML do conteúdo da seção
   * @param {string} section - Nome da seção
   * @returns {string} - HTML do conteúdo
   */
  generateSectionContent(section) {
    const chapter = this.currentChapter
    const content = chapter.content

    switch (section) {
      case "intro":
        return `
                    <div class="container">
                        <div class="content-section active">
                            <h2>Introdução</h2>
                            <p class="content-text">${content.intro}</p>
                            <div class="content-card">
                                <h3>O que você vai aprender:</h3>
                                <p class="content-text">${chapter.description}</p>
                                <p><strong>Duração estimada:</strong> ${chapter.duration}</p>
                            </div>
                        </div>
                    </div>
                `

      case "explanations":
        return `
                    <div class="container">
                        <div class="content-section active">
                            <h2>Explicações Detalhadas</h2>
                            ${content.explanations
                              .map(
                                (exp) => `
                                <div class="explanation-card">
                                    <h3>
                                        <svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                            <circle cx="12" cy="12" r="10"/>
                                            <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/>
                                            <line x1="12" y1="17" x2="12.01" y2="17"/>
                                        </svg>
                                        ${exp.title}
                                    </h3>
                                    <div class="explanation-content">
                                        <img src="${exp.image}" alt="${exp.title}" class="explanation-image">
                                        <div class="explanation-text">${exp.text}</div>
                                    </div>
                                </div>
                            `,
                              )
                              .join("")}
                        </div>
                    </div>
                `

      case "content":
        return `
                    <div class="container">
                        <div class="content-section active">
                            <h2>Videoaulas</h2>
                            <p class="content-text">Assista às videoaulas para aprofundar seus conhecimentos:</p>
                            <div class="videos-grid">
                                ${content.videos
                                  .map(
                                    (video) => `
                                    <div class="video-card" onclick="playVideo('${video.title}')">
                                        <img src="${video.thumbnail}" alt="${video.title}" class="video-thumbnail">
                                        <div class="video-info">
                                            <h4>${video.title}</h4>
                                            <p class="video-description">${video.description}</p>
                                            <span class="video-duration">${video.duration}</span>
                                        </div>
                                    </div>
                                `,
                                  )
                                  .join("")}
                            </div>
                        </div>
                    </div>
                `

      case "quiz":
        return `
                    <div class="container">
                        <div class="content-section active">
                            <h2>Quiz de Conhecimento</h2>
                            <p class="content-text">Teste seus conhecimentos com estas questões:</p>
                            <div id="quiz-container">
                                ${content.quiz
                                  .map(
                                    (q, index) => `
                                    <div class="quiz-question" data-question="${index}">
                                        <h4>Questão ${index + 1}: ${q.question}</h4>
                                        <div class="quiz-options">
                                            ${q.options
                                              .map(
                                                (option, optIndex) => `
                                                <label class="quiz-option" onclick="selectOption(${index}, ${optIndex})">
                                                    <input type="radio" name="question_${index}" value="${optIndex}">
                                                    <span>${option}</span>
                                                </label>
                                            `,
                                              )
                                              .join("")}
                                        </div>
                                        <div class="quiz-explanation" id="explanation_${index}" style="display: none;">
                                            <strong></strong>
                                            <span></span>
                                        </div>
                                    </div>
                                `,
                                  )
                                  .join("")}
                                <button class="btn btn-primary" onclick="submitQuiz()" style="margin-top: 1rem;">
                                    Finalizar Quiz
                                </button>
                            </div>
                        </div>
                    </div>
                `

      case "exercises":
        return `
                    <div class="container">
                        <div class="content-section active">
                            <h2>Exercícios Práticos</h2>
                            <p class="exercises-intro">
                                Complete os exercícios abaixo para fixar o conteúdo aprendido. 
                                Cada exercício tem uma pontuação específica.
                            </p>
                            ${content.exercises
                              .map(
                                (exercise, index) => `
                                <div class="content-card exercise-item">
                                    <div class="exercise-header">
                                        <h4>Exercício ${index + 1}: ${exercise.title}</h4>
                                        <span class="exercise-points">${exercise.points} pontos</span>
                                    </div>
                                    <p>${exercise.description}</p>
                                    <textarea 
                                        class="exercise-textarea" 
                                        id="exercise_${index}"
                                        placeholder="Digite sua resposta aqui..."
                                    ></textarea>
                                    <div class="exercise-tips">
                                        <small><strong>Dica:</strong> ${exercise.tips}</small>
                                    </div>
                                </div>
                            `,
                              )
                              .join("")}
                            <div class="exercises-summary">
                                <p><strong>Total de pontos disponíveis:</strong> ${content.exercises.reduce((sum, ex) => sum + ex.points, 0)} pontos</p>
                                <button class="btn btn-primary" onclick="submitExercises()">
                                    Enviar Exercícios
                                </button>
                            </div>
                        </div>
                    </div>
                `

      case "conclusion":
        return `
                    <div class="container">
                        <div class="content-section active">
                            <h2>Conclusão do Capítulo</h2>
                            <div class="conclusion-card content-card">
                                <h3>🎉 Parabéns!</h3>
                                <p class="content-text">
                                    Você concluiu o capítulo "${chapter.title}". 
                                    Agora você possui conhecimentos sólidos sobre este tópico.
                                </p>
                                
                                <div class="chapter-summary">
                                    <h3>Resumo do Capítulo</h3>
                                    <p class="content-text">${chapter.description}</p>
                                    
                                    <div class="performance-stats">
                                        <div class="stat-item">
                                            <span class="stat-label">Explicações</span>
                                            <span class="stat-value completed">${content.explanations.length} lidas</span>
                                        </div>
                                        <div class="stat-item">
                                            <span class="stat-label">Vídeos</span>
                                            <span class="stat-value completed">${content.videos.length} disponíveis</span>
                                        </div>
                                        <div class="stat-item">
                                            <span class="stat-label">Quiz</span>
                                            <span class="stat-value pending">${content.quiz.length} questões</span>
                                        </div>
                                        <div class="stat-item">
                                            <span class="stat-label">Exercícios</span>
                                            <span class="stat-value pending">${content.exercises.length} práticos</span>
                                        </div>
                                    </div>
                                </div>
                                
                                <div style="display: flex; gap: 1rem; margin-top: 2rem;">
                                    <button class="btn btn-primary" onclick="completeChapter()">
                                        Marcar como Concluído
                                    </button>
                                    <button class="btn btn-secondary" onclick="courseSystem.closeChapter()">
                                        Voltar aos Capítulos
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                `

      default:
        return '<div class="container"><p>Seção não encontrada.</p></div>'
    }
  }

  /**
   * Configura event listeners específicos da seção
   * @param {string} section - Nome da seção
   */
  setupSectionListeners(section) {
    // Event listeners específicos serão adicionados aqui conforme necessário
    if (section === "quiz") {
      // Quiz listeners já são configurados via onclick nos elementos
    }
  }

  /**
   * Atualiza progresso do usuário
   */
  updateProgress() {
    const completedCount = this.userProgress.completedChapters.length
    const totalChapters = this.chapters.length
    const percentage = Math.round((completedCount / totalChapters) * 100)

    // Atualizar elementos da interface
    const completedCountEl = document.getElementById("completed-count")
    const progressPercentageEl = document.getElementById("progress-percentage")
    const progressFillEl = document.getElementById("progress-fill")

    if (completedCountEl) completedCountEl.textContent = completedCount
    if (progressPercentageEl) progressPercentageEl.textContent = percentage
    if (progressFillEl) {
      setTimeout(() => {
        progressFillEl.style.width = `${percentage}%`
      }, 300)
    }
  }

  /**
   * Marca capítulo como concluído
   */
  completeChapter() {
    if (!this.currentChapter) return

    const chapterId = this.currentChapter.id

    if (!this.userProgress.completedChapters.includes(chapterId)) {
      this.userProgress.completedChapters.push(chapterId)
      this.saveProgress()
      this.updateProgress()

      alert(`Parabéns! Capítulo "${this.currentChapter.title}" concluído com sucesso!`)

      // Recarregar capítulos para atualizar visual
      this.loadChapters()
    }

    this.closeChapter()
  }

  /**
   * Carrega progresso do localStorage
   * @returns {Object} - Dados do progresso
   */
  loadProgress() {
    const saved = localStorage.getItem("navcode_progress")
    return saved
      ? JSON.parse(saved)
      : {
          completedChapters: [],
          totalScore: 0,
          exercisesCompleted: 0,
          videosWatched: 0,
        }
  }

  /**
   * Salva progresso no localStorage
   */
  saveProgress() {
    localStorage.setItem("navcode_progress", JSON.stringify(this.userProgress))
  }
}

// ===== FUNÇÕES GLOBAIS PARA INTERAÇÃO =====

/**
 * Reproduz vídeo (placeholder)
 * @param {string} videoTitle - Título do vídeo
 */
function playVideo(videoTitle) {
  alert(`Reproduzindo: ${videoTitle}\n\nEm breve os vídeos estarão disponíveis na plataforma!`)
}

/**
 * Seleciona opção do quiz
 * @param {number} questionIndex - Índice da questão
 * @param {number} optionIndex - Índice da opção
 */
function selectOption(questionIndex, optionIndex) {
  const question = courseSystem.currentChapter.content.quiz[questionIndex]
  const explanationEl = document.getElementById(`explanation_${questionIndex}`)
  const explanationStrong = explanationEl.querySelector("strong")
  const explanationSpan = explanationEl.querySelector("span")

  const isCorrect = optionIndex === question.correct

  // Atualizar visual da opção selecionada
  const questionEl = document.querySelector(`[data-question="${questionIndex}"]`)
  questionEl.querySelectorAll(".quiz-option").forEach((opt) => opt.classList.remove("selected"))
  questionEl.querySelectorAll(".quiz-option")[optionIndex].classList.add("selected")

  // Mostrar explicação
  explanationEl.style.display = "block"
  explanationEl.className = `quiz-explanation ${isCorrect ? "correct" : "incorrect"}`
  explanationStrong.textContent = isCorrect ? "Correto!" : "Incorreto!"
  explanationSpan.textContent = question.explanation
}

/**
 * Submete quiz completo
 */
function submitQuiz() {
  const questions = courseSystem.currentChapter.content.quiz
  let correctAnswers = 0

  questions.forEach((question, index) => {
    const selectedOption = document.querySelector(`input[name="question_${index}"]:checked`)
    if (selectedOption && Number.parseInt(selectedOption.value) === question.correct) {
      correctAnswers++
    }
  })

  const percentage = Math.round((correctAnswers / questions.length) * 100)
  const passed = percentage >= 70

  alert(
    `Quiz finalizado!\n\nAcertos: ${correctAnswers}/${questions.length}\nPorcentagem: ${percentage}%\n\n${passed ? "Parabéns! Você passou no quiz!" : "Continue estudando para melhorar sua pontuação."}`,
  )
}

/**
 * Submete exercícios práticos
 */
function submitExercises() {
  const exercises = courseSystem.currentChapter.content.exercises
  let completedExercises = 0

  exercises.forEach((exercise, index) => {
    const answer = document.getElementById(`exercise_${index}`).value.trim()
    if (answer.length > 10) {
      // Resposta mínima
      completedExercises++
    }
  })

  if (completedExercises === exercises.length) {
    alert(
      `Exercícios enviados com sucesso!\n\nTodos os ${exercises.length} exercícios foram completados.\n\nEm breve você receberá feedback detalhado!`,
    )
  } else {
    alert(
      `Atenção!\n\nApenas ${completedExercises} de ${exercises.length} exercícios foram completados.\n\nComplete todos os exercícios antes de enviar.`,
    )
  }
}

/**
 * Marca capítulo atual como concluído
 */
function completeChapter() {
  courseSystem.completeChapter()
}

// ===== INICIALIZAÇÃO =====
// Criar instância global do sistema de cursos
let courseSystem

// Inicializar quando DOM estiver carregado
document.addEventListener("DOMContentLoaded", () => {
  courseSystem = new NavCodeCourseSystem()
})

// Log de inicialização
console.log("[NavCode] Script de cursos carregado")
