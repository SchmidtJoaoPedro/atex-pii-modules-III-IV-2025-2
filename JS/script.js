// Verificar login ao carregar a página
function checkLogin() {
  if (localStorage.getItem("navcode_logged_in") !== "true") {
    window.location.href = "login.html"
    return false
  }
  return true
}

// Função de logout
function logout() {
  localStorage.removeItem("navcode_logged_in")
  localStorage.removeItem("navcode_user")
  window.location.href = "login.html"
}

// Course data
const chapters = [
  {
    id: 1,
    title: "Fundamentos de Hardware",
    description: "Componentes básicos do computador, processadores, memória e placas-mãe",
    icon: `<rect x="2" y="3" width="20" height="14" rx="2" ry="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/>`,
    duration: "3 horas",
    content: {
      intro: {
        title: "Fundamentos de Hardware",
        content: `Bem-vindo ao primeiro capítulo do nosso curso NavCode! Aqui você aprenderá sobre os componentes fundamentais que compõem um computador moderno.

**Objetivos do Capítulo:**
• Identificar e compreender todos os componentes de hardware
• Dominar especificações técnicas e compatibilidade
• Aprender montagem e diagnóstico de problemas
• Conhecer tendências e tecnologias emergentes

**Conteúdo Detalhado:**

**1. PROCESSADORES (CPUs)**
- Arquiteturas x86 e x64: diferenças e aplicações
- Intel vs AMD: comparativo técnico detalhado
- Núcleos físicos vs lógicos (Hyper-Threading)
- Cache L1, L2, L3: função e impacto na performance
- TDP (Thermal Design Power) e gerenciamento térmico
- Overclocking: conceitos, riscos e benefícios
- Sockets: LGA, PGA, BGA e compatibilidade

**2. MEMÓRIA RAM**
- Tecnologias: DDR3, DDR4, DDR5 - evolução e diferenças
- Frequências: 2133MHz até 6400MHz+ - impacto real
- Latências (CL): como interpretar e otimizar
- Dual/Quad Channel: configuração e benefícios
- ECC vs Non-ECC: quando usar cada tipo
- Capacidades: 4GB até 128GB+ por módulo
- Troubleshooting: testes de memória e diagnóstico

Este conhecimento aprofundado é essencial para se destacar como técnico especializado.`,
      },
      explanations: [
        {
          title: "Anatomia da Placa-Mãe",
          image: "/computer-motherboard-components.png",
          content: `A placa-mãe é o componente central que conecta todos os outros componentes do computador. Vamos analisar cada parte:

**Socket do Processador:** Local onde o CPU é instalado. Diferentes gerações usam sockets específicos (LGA 1700, AM5, etc.).

**Slots de Memória RAM:** Geralmente 2 ou 4 slots DIMM para módulos de memória. A configuração dual-channel requer uso de slots específicos.

**Chipset:** Conjunto de chips que gerencia comunicação entre componentes. Dividido em Northbridge (CPU, RAM, GPU) e Southbridge (periféricos).

**Slots PCIe:** Para placas de expansão. PCIe x16 para GPU, x1 para placas menores. Versões 3.0, 4.0 e 5.0 oferecem diferentes velocidades.

**Conectores SATA:** Para HDDs e SSDs. SATA III oferece até 6 Gbps de velocidade.

**Conectores M.2:** Para SSDs NVMe de alta velocidade. Suportam PCIe 3.0/4.0.

**VRMs (Voltage Regulator Modules):** Regulam voltagem para CPU e RAM. Qualidade impacta estabilidade do overclocking.`,
        },
        {
          title: "Comparativo de Processadores",
          image: "/cpu-processor-comparison-intel-amd.png",
          content: `Entenda as diferenças fundamentais entre Intel e AMD:

**Arquitetura Intel (13ª Geração):**
- Hybrid Architecture: P-cores (performance) + E-cores (efficiency)
- Processo de fabricação: Intel 7 (10nm melhorado)
- IPC (Instructions Per Clock): Alto para single-thread
- Consumo: Maior TDP, especialmente em cargas máximas
- Compatibilidade: Socket LGA 1700

**Arquitetura AMD (Série 7000):**
- Zen 4: Foco em eficiência e multi-threading
- Processo: TSMC 5nm
- Chiplet design: Melhor yields e custos
- Consumo: Mais eficiente por watt
- Compatibilidade: Socket AM5

**Casos de Uso:**
- Gaming: Intel lidera em 1080p, AMD compete em resoluções maiores
- Produtividade: AMD geralmente melhor em multi-threading
- Eficiência energética: AMD Zen 4 mais eficiente
- Overclocking: Ambos oferecem boas opções

**Considerações de Preço:**
Intel tradicionalmente mais caro no high-end, AMD oferece melhor custo-benefício no mainstream.`,
        },
        {
          title: "Tecnologias de Memória RAM",
          image: "/ram-memory-modules-ddr4-ddr5.png",
          content: `Evolução e características das tecnologias de memória:

**DDR4 (2014-presente):**
- Voltagem: 1.2V (menor consumo que DDR3)
- Velocidades: 2133-3200 MHz (JEDEC), até 5000+ MHz (overclocking)
- Capacidade: Até 32GB por módulo (mainstream)
- Latências: CL14-CL19 típicas
- Compatibilidade: Ampla, preços acessíveis

**DDR5 (2021-presente):**
- Voltagem: 1.1V (ainda mais eficiente)
- Velocidades: 4800-6400+ MHz
- Capacidade: Até 128GB por módulo
- Latências: CL36-CL40 (maiores que DDR4, mas compensadas pela velocidade)
- Recursos: ECC on-die, power management integrado

**Configurações de Canal:**
- Single Channel: Um módulo, largura de banda limitada
- Dual Channel: Dois módulos, dobra largura de banda
- Quad Channel: Quatro módulos (plataformas HEDT/server)

**Impacto na Performance:**
- Gaming: 5-15% diferença entre single e dual channel
- Produtividade: Até 30% melhoria em aplicações que usam muita memória
- Latência vs Velocidade: Balance entre CL baixo e frequência alta`,
        },
      ],
      videos: [
        {
          title: "Anatomia Completa de um PC Moderno",
          duration: "25 min",
          description: "Análise detalhada de todos os componentes internos",
          thumbnail: "/computer-motherboard-components.png",
        },
        {
          title: "Processadores: Intel vs AMD 2024",
          duration: "20 min",
          description: "Comparativo técnico das últimas gerações",
          thumbnail: "/cpu-processor-comparison-intel-amd.png",
        },
        {
          title: "Montagem Profissional Passo a Passo",
          duration: "35 min",
          description: "Técnicas avançadas de montagem e cable management",
          thumbnail: "/pc-assembly-step-by-step-build.png",
        },
      ],
      quiz: [
        {
          question: "Qual é a principal diferença entre cache L2 e L3 em processadores?",
          options: [
            "L2 é mais rápido mas menor, L3 é maior mas mais lento",
            "L2 é compartilhado, L3 é exclusivo por núcleo",
            "L2 armazena dados, L3 armazena instruções",
            "Não há diferença significativa",
          ],
          correct: 0,
          explanation:
            "Cache L2 é mais próximo dos núcleos (mais rápido) mas menor, enquanto L3 é compartilhado entre núcleos, maior mas com maior latência.",
        },
        {
          question: "O que significa TDP em processadores?",
          options: [
            "Temperatura máxima de operação",
            "Potência térmica de design - calor máximo que o cooler deve dissipar",
            "Velocidade máxima do processador",
            "Número de transistores",
          ],
          correct: 1,
          explanation:
            "TDP (Thermal Design Power) indica a quantidade máxima de calor que o sistema de refrigeração deve ser capaz de dissipar.",
        },
        {
          question: "Qual a vantagem do dual channel em memória RAM?",
          options: [
            "Dobra a capacidade de memória",
            "Reduz o consumo de energia",
            "Aumenta a largura de banda de memória",
            "Melhora a latência",
          ],
          correct: 2,
          explanation:
            "Dual channel dobra a largura de banda da memória, permitindo transferência simultânea por dois canais.",
        },
        {
          question: "O que diferencia um SSD NVMe de um SSD SATA?",
          options: [
            "Apenas o conector físico",
            "NVMe usa interface PCIe, oferecendo maior velocidade",
            "SATA é mais confiável",
            "NVMe consome menos energia",
          ],
          correct: 1,
          explanation:
            "SSDs NVMe utilizam interface PCIe, oferecendo velocidades muito superiores aos SSDs SATA limitados pela interface SATA III.",
        },
        {
          question: "Para que serve o chipset da placa-mãe?",
          options: [
            "Processar gráficos",
            "Gerenciar comunicação entre CPU, RAM e periféricos",
            "Armazenar dados temporariamente",
            "Controlar a velocidade dos ventiladores",
          ],
          correct: 1,
          explanation:
            "O chipset gerencia a comunicação entre processador, memória e dispositivos periféricos, controlando barramentos e interfaces.",
        },
        {
          question: "Qual a importância da certificação 80 Plus em fontes?",
          options: [
            "Indica a potência máxima",
            "Garante eficiência energética mínima",
            "Define o número de conectores",
            "Especifica a voltagem de saída",
          ],
          correct: 1,
          explanation:
            "Certificação 80 Plus garante eficiência energética mínima de 80%, reduzindo desperdício e geração de calor.",
        },
      ],
      exercises: [
        {
          question:
            "Análise Técnica Completa: Compare detalhadamente um processador Intel Core i7-13700K com um AMD Ryzen 7 7700X, incluindo arquitetura, performance, consumo, preço e casos de uso recomendados:",
          type: "text",
          points: 25,
        },
        {
          question:
            "Projeto de Sistema: Especifique um computador completo para edição de vídeo 4K (orçamento R$ 8.000), justificando cada componente escolhido e explicando as interações entre eles:",
          type: "text",
          points: 30,
        },
        {
          question:
            "Troubleshooting Avançado: Um cliente relata que seu PC reinicia aleatoriamente durante jogos. Liste 15 possíveis causas relacionadas ao hardware, em ordem de probabilidade, com métodos de diagnóstico específicos:",
          type: "text",
          points: 25,
        },
        {
          question:
            "Configuração de BIOS/UEFI: Descreva 20 configurações importantes no BIOS/UEFI, explicando o impacto de cada uma na performance e estabilidade do sistema:",
          type: "text",
          points: 20,
        },
        {
          question:
            "Overclocking Seguro: Explique o processo completo de overclocking de CPU e RAM, incluindo testes de estabilidade, monitoramento de temperaturas e configurações de voltagem:",
          type: "text",
          points: 25,
        },
        {
          question:
            "Compatibilidade de Componentes: Crie uma matriz de compatibilidade explicando as interações entre CPU, placa-mãe, RAM, GPU e fonte, incluindo limitações e gargalos:",
          type: "text",
          points: 20,
        },
        {
          question:
            "Refrigeração Otimizada: Projete um sistema de refrigeração completo para um PC high-end, incluindo curvas de ventilação, posicionamento de coolers e gerenciamento térmico:",
          type: "text",
          points: 20,
        },
        {
          question:
            "Diagnóstico de Performance: Um PC está com performance abaixo do esperado. Desenvolva um protocolo de 25 passos para identificar e resolver gargalos de hardware:",
          type: "text",
          points: 30,
        },
        {
          question:
            "Evolução Tecnológica: Analise as tendências de hardware para os próximos 3 anos, incluindo DDR5, PCIe 5.0, processadores ARM e impacto na indústria:",
          type: "text",
          points: 20,
        },
        {
          question:
            "Caso Empresarial: Uma empresa precisa de 50 estações de trabalho para CAD. Desenvolva especificações técnicas, cronograma de implementação e plano de manutenção:",
          type: "text",
          points: 35,
        },
      ],
      conclusion: `**Parabéns pela NavCode!** Você dominou completamente os fundamentos de hardware de computadores.

**Conquistas Técnicas:**
• Conhecimento profundo sobre todos os componentes de hardware
• Habilidades avançadas de diagnóstico e troubleshooting
• Competência em especificação e montagem de sistemas
• Compreensão de tecnologias emergentes e tendências

**Aplicação Profissional:**
Com este conhecimento aprofundado, você está preparado para atuar em níveis técnicos avançados, desde montagem básica até consultoria especializada em hardware.

**Próximos Passos:**
No próximo capítulo, exploraremos Sistemas Operacionais com foco em administração avançada, otimização e troubleshooting profissional.

**Certificação NavCode:**
Você desenvolveu competências de nível profissional em hardware, estabelecendo uma base sólida para sua carreira como técnico especializado.`,
    },
  },
  {
    id: 2,
    title: "Sistemas Operacionais",
    description: "Windows, Linux, instalação, configuração e manutenção avançada de sistemas",
    icon: `<rect x="2" y="3" width="20" height="14" rx="2" ry="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/>`,
    duration: "4 horas",
    content: {
      intro: {
        title: "Sistemas Operacionais Avançados",
        content: `Neste capítulo NavCode, você se tornará um especialista em sistemas operacionais, dominando Windows e Linux em nível profissional.

**Objetivos Avançados:**
• Dominar administração avançada de Windows e Linux
• Implementar automação e scripts personalizados
• Configurar serviços e servidores
• Otimizar performance em nível empresarial
• Resolver problemas complexos de sistema

**Conteúdo Técnico Detalhado:**

**1. WINDOWS AVANÇADO**
- Registry: estrutura, hives, chaves críticas
- Serviços: configuração, dependências, troubleshooting
- Group Policy: implementação e gerenciamento
- PowerShell: scripts avançados e automação
- WMI (Windows Management Instrumentation)
- Event Viewer: análise de logs e diagnóstico
- Performance Monitor: métricas e otimização
- Windows Subsystem for Linux (WSL)

**2. LINUX PROFISSIONAL**
- Distribuições empresariais: RHEL, CentOS, Ubuntu Server
- Systemd: gerenciamento de serviços e inicialização
- Shell scripting: Bash avançado e automação
- Gerenciamento de usuários e grupos avançado
- Permissões especiais: SUID, SGID, Sticky bit
- Cron jobs e agendamento de tarefas
- Log analysis: rsyslog, journalctl
- Kernel: módulos, compilação, tuning

**3. VIRTUALIZAÇÃO**
- Hypervisors: Type 1 vs Type 2
- VMware vSphere: configuração e gerenciamento
- Hyper-V: implementação empresarial
- KVM/QEMU: virtualização Linux
- Containers: Docker, Podman
- Kubernetes: conceitos básicos

**4. SEGURANÇA DE SISTEMAS**
- Hardening: Windows e Linux
- Firewall avançado: iptables, Windows Firewall
- Antivírus empresarial: configuração e políticas
- Backup automatizado: scripts e ferramentas
- Disaster recovery: planejamento e implementação
- Compliance: LGPD, ISO 27001

**5. PERFORMANCE E OTIMIZAÇÃO**
- Análise de bottlenecks: CPU, RAM, I/O
- Tuning de kernel Linux
- Windows Performance Toolkit
- Monitoramento proativo: Nagios, Zabbix
- Capacity planning: crescimento e escalabilidade

**6. AUTOMAÇÃO E SCRIPTING**
- PowerShell DSC (Desired State Configuration)
- Ansible: automação multiplataforma
- Puppet/Chef: gerenciamento de configuração
- CI/CD básico: Jenkins, GitLab CI

Este nível de conhecimento diferencia técnicos especialistas no mercado.`,
      },
      videos: [
        {
          title: "Windows Server 2022 - Configuração Completa",
          duration: "45 min",
          description: "Instalação, configuração e hardening profissional",
          thumbnail: "/windows-11-installation-setup-screen.png",
        },
        {
          title: "Linux Ubuntu Server - Administração Avançada",
          duration: "40 min",
          description: "Configuração de serviços e automação",
          thumbnail: "/ubuntu-linux-desktop-terminal-interface.png",
        },
        {
          title: "PowerShell para Administradores",
          duration: "35 min",
          description: "Scripts avançados e automação de tarefas",
          thumbnail: "/windows-settings-configuration-control-panel.png",
        },
      ],
      quiz: [
        {
          question: "Qual comando PowerShell lista todos os serviços em execução?",
          options: [
            "Get-Process",
            "Get-Service | Where-Object {$_.Status -eq 'Running'}",
            "List-Services -Running",
            "Show-Services -Active",
          ],
          correct: 1,
          explanation:
            "Get-Service lista serviços e Where-Object filtra apenas os que estão em execução (Status = Running).",
        },
        {
          question: "No Linux, qual comando mostra processos em tempo real?",
          options: ["ps aux", "top", "ls -la", "netstat"],
          correct: 1,
          explanation: "O comando 'top' mostra processos em execução em tempo real com atualização contínua.",
        },
        {
          question: "O que é systemd no Linux?",
          options: [
            "Um editor de texto",
            "Sistema de inicialização e gerenciamento de serviços",
            "Um firewall",
            "Um compilador",
          ],
          correct: 1,
          explanation:
            "Systemd é o sistema de inicialização moderno do Linux que gerencia serviços, processos e recursos do sistema.",
        },
        {
          question: "Qual a diferença entre SUID e SGID no Linux?",
          options: [
            "SUID executa como dono do arquivo, SGID como grupo do arquivo",
            "SUID é para arquivos, SGID para diretórios",
            "Não há diferença",
            "SUID é mais seguro que SGID",
          ],
          correct: 0,
          explanation:
            "SUID executa o arquivo com permissões do proprietário, SGID executa com permissões do grupo proprietário.",
        },
        {
          question: "O que é Group Policy no Windows?",
          options: [
            "Um antivírus",
            "Sistema de gerenciamento centralizado de configurações",
            "Um tipo de backup",
            "Uma ferramenta de rede",
          ],
          correct: 1,
          explanation:
            "Group Policy permite gerenciar centralizadamente configurações de usuários e computadores em domínios Windows.",
        },
        {
          question: "Qual comando Linux altera permissões de arquivo?",
          options: ["chown", "chmod", "chgrp", "ls"],
          correct: 1,
          explanation:
            "chmod (change mode) altera as permissões de leitura, escrita e execução de arquivos e diretórios.",
        },
      ],
      exercises: [
        {
          question:
            "Script PowerShell Avançado: Crie um script que monitore o uso de CPU e memória, enviando alertas por email quando ultrapassar 80% de uso, incluindo logs detalhados:",
          type: "text",
          points: 30,
        },
        {
          question:
            "Administração Linux: Configure um servidor Ubuntu com Apache, MySQL, PHP, SSL, firewall e backup automatizado. Documente todos os passos e configurações:",
          type: "text",
          points: 35,
        },
        {
          question:
            "Troubleshooting Avançado: Um servidor Windows está com performance degradada. Desenvolva um protocolo de 20 passos para diagnóstico usando ferramentas nativas:",
          type: "text",
          points: 25,
        },
        {
          question:
            "Automação com Bash: Crie um script que faça backup incremental, rotação de logs, limpeza de arquivos temporários e envie relatório por email:",
          type: "text",
          points: 25,
        },
        {
          question:
            "Group Policy Empresarial: Projete políticas de grupo para uma empresa com 200 usuários, incluindo segurança, software deployment e configurações de desktop:",
          type: "text",
          points: 30,
        },
        {
          question:
            "Virtualização: Compare VMware vSphere, Hyper-V e KVM, incluindo recursos, performance, custos e casos de uso recomendados:",
          type: "text",
          points: 20,
        },
        {
          question:
            "Segurança de Sistemas: Implemente um plano de hardening completo para Windows Server e Linux, incluindo 25 medidas de segurança específicas:",
          type: "text",
          points: 30,
        },
        {
          question:
            "Performance Tuning: Otimize um servidor Linux para alta performance, incluindo kernel tuning, I/O scheduling e memory management:",
          type: "text",
          points: 25,
        },
        {
          question:
            "Disaster Recovery: Desenvolva um plano completo de recuperação de desastres para infraestrutura mista Windows/Linux, incluindo RTOs e RPOs:",
          type: "text",
          points: 35,
        },
        {
          question:
            "Projeto Empresarial: Migre uma infraestrutura de 100 usuários do Windows 10 para Windows 11, incluindo planejamento, testes e rollback:",
          type: "text",
          points: 40,
        },
      ],
      conclusion: `**Excelente trabalho NavCode!** Você se tornou um especialista em sistemas operacionais.

**Competências Desenvolvidas:**
• Administração avançada de Windows e Linux
• Automação e scripting profissional
• Troubleshooting de problemas complexos
• Implementação de segurança empresarial
• Otimização de performance e recursos

**Diferencial Profissional:**
Com essas habilidades avançadas, você está qualificado para posições de administrador de sistemas, DevOps e consultor técnico especializado.

**Próximo Capítulo:**
Vamos explorar Armazenamento e Backup em nível empresarial, incluindo SANs, NAS, replicação e estratégias de alta disponibilidade.

**Certificação NavCode:**
Você domina sistemas operacionais em nível profissional, uma competência fundamental para técnicos especializados e administradores de sistemas.`,
    },
  },
  {
    id: 3,
    title: "Armazenamento e Backup Empresarial",
    description: "SANs, NAS, RAID avançado, estratégias de backup e alta disponibilidade",
    icon: `<ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/>`,
    duration: "3.5 horas",
    content: {
      intro: {
        title: "Armazenamento e Backup Empresarial",
        content: `Domine tecnologias de armazenamento empresarial e estratégias avançadas de proteção de dados com NavCode.

**Objetivos Empresariais:**
• Implementar soluções SAN e NAS
• Configurar RAID avançado e alta disponibilidade
• Desenvolver estratégias de backup empresarial
• Gerenciar replicação e disaster recovery
• Otimizar performance de storage

**Conteúdo Técnico Avançado:**

**1. TECNOLOGIAS DE ARMAZENAMENTO**
- SAN (Storage Area Network): Fibre Channel, iSCSI
- NAS (Network Attached Storage): protocolos e configuração
- DAS (Direct Attached Storage): casos de uso
- Cloud Storage: híbrido, público, privado
- Software-Defined Storage (SDS)
- Deduplicação e compressão de dados

**2. RAID EMPRESARIAL**
- RAID 0, 1, 5, 6, 10, 50, 60: configuração avançada
- Hot spare e rebuild automático
- RAID por software vs hardware
- Performance tuning e otimização
- Monitoramento e alertas
- Migração entre níveis RAID

**3. BACKUP ESTRATÉGICO**
- Estratégias 3-2-1-1-0 e 4-3-2
- Backup incremental, diferencial, sintético
- Veeam, Acronis, Bacula: configuração empresarial
- Tape backup: LTO-8, LTO-9
- Cloud backup: AWS, Azure, Google Cloud
- Testes de restore e validação

**4. ALTA DISPONIBILIDADE**
- Clustering de storage
- Replicação síncrona e assíncrona
- Failover automático
- Load balancing de storage
- RPO e RTO: definição e implementação
- Business continuity planning

Este conhecimento é essencial para ambientes empresariais críticos.`,
      },
      videos: [
        {
          title: "Configuração SAN com iSCSI",
          duration: "30 min",
          description: "Implementação completa de SAN empresarial",
          thumbnail: "/enterprise-storage-san-configuration.png",
        },
        {
          title: "Estratégias de Backup Empresarial",
          duration: "25 min",
          description: "Implementação da regra 3-2-1 em ambiente real",
          thumbnail: "/backup-strategy-cloud-storage-external-drive.png",
        },
      ],
      quiz: [
        {
          question: "Qual a principal diferença entre SAN e NAS?",
          options: [
            "SAN é mais barato que NAS",
            "SAN fornece armazenamento em bloco, NAS fornece armazenamento em arquivo",
            "NAS é mais rápido que SAN",
            "Não há diferença significativa",
          ],
          correct: 1,
          explanation:
            "SAN fornece armazenamento em nível de bloco (como um HD local), enquanto NAS fornece armazenamento em nível de arquivo via rede.",
        },
        {
          question: "O que significa RPO em backup?",
          options: [
            "Recovery Point Objective - máxima perda de dados aceitável",
            "Recovery Process Operation",
            "Restore Point Option",
            "Rapid Protection Operation",
          ],
          correct: 0,
          explanation:
            "RPO define o ponto máximo de perda de dados aceitável em caso de desastre, determinando a frequência dos backups.",
        },
        {
          question: "Qual RAID oferece melhor performance para escrita?",
          options: ["RAID 1", "RAID 5", "RAID 0", "RAID 6"],
          correct: 2,
          explanation:
            "RAID 0 oferece melhor performance de escrita pois distribui dados sem redundância, eliminando overhead de paridade.",
        },
      ],
      exercises: [
        {
          question:
            "Projeto SAN: Especifique uma solução SAN completa para empresa com 500 usuários, incluindo switches, storage, conectividade e redundância:",
          type: "text",
          points: 35,
        },
        {
          question:
            "Estratégia de Backup: Desenvolva um plano de backup empresarial seguindo a regra 3-2-1-1-0, incluindo custos, cronogramas e testes:",
          type: "text",
          points: 30,
        },
        {
          question:
            "Disaster Recovery: Crie um plano de DR completo com RPO de 1 hora e RTO de 4 horas para infraestrutura crítica:",
          type: "text",
          points: 35,
        },
      ],
      conclusion: `**Parabéns NavCode!** Você domina armazenamento e backup em nível empresarial, competências críticas para infraestruturas modernas.`,
    },
  },
  {
    id: 4,
    title: "Redes e Conectividade Avançada",
    description: "Redes empresariais, VLANs, VPNs, segurança de rede e troubleshooting",
    icon: `<path d="M16 16v1a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h2m0 0V3a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2m0 0h2a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-2"/>`,
    duration: "4 horas",
    content: {
      intro: {
        title: "Redes e Conectividade Empresarial",
        content: `Torne-se um especialista em redes empresariais com NavCode, dominando desde conceitos básicos até implementações complexas.

**Objetivos Profissionais:**
• Projetar e implementar redes empresariais
• Configurar VLANs, VPNs e QoS
• Implementar segurança de rede avançada
• Realizar troubleshooting complexo
• Gerenciar infraestrutura de rede

**Conteúdo Técnico Especializado:**

**1. FUNDAMENTOS AVANÇADOS**
- Modelo OSI e TCP/IP: aplicação prática
- Subnetting e VLSM: cálculos avançados
- Roteamento: estático, dinâmico (OSPF, BGP)
- Switching: STP, VTP, DTP
- IPv6: implementação e migração
- QoS: classificação e priorização de tráfego

**2. EQUIPAMENTOS EMPRESARIAIS**
- Switches gerenciáveis: configuração avançada
- Roteadores empresariais: Cisco, Mikrotik
- Firewalls: pfSense, FortiGate, SonicWall
- Access Points empresariais: controladores WLAN
- Load balancers: distribuição de carga
- Proxy servers: configuração e políticas

**3. SEGURANÇA DE REDE**
- Firewalls: regras avançadas e NAT
- IDS/IPS: detecção e prevenção de intrusão
- VPNs: Site-to-Site, Remote Access
- 802.1X: autenticação de rede
- Network segmentation: micro-segmentação
- Zero Trust Network Architecture

**4. MONITORAMENTO E GESTÃO**
- SNMP: monitoramento de equipamentos
- Syslog: centralização de logs
- Network monitoring: PRTG, Nagios, Zabbix
- Bandwidth monitoring: análise de tráfego
- Network documentation: diagramas e inventário
- Change management: controle de alterações

Este nível de expertise é fundamental para administradores de rede e especialistas em infraestrutura.`,
      },
      videos: [
        {
          title: "Configuração Avançada de Switches",
          duration: "35 min",
          description: "VLANs, trunking e spanning tree protocol",
          thumbnail: "/network-switch-configuration-vlan.png",
        },
      ],
      quiz: [
        {
          question: "Quantas camadas possui o modelo OSI?",
          options: ["5", "6", "7", "8"],
          correct: 2,
          explanation:
            "O modelo OSI possui 7 camadas: Física, Enlace, Rede, Transporte, Sessão, Apresentação e Aplicação.",
        },
        {
          question: "Qual protocolo é usado para roteamento dinâmico em redes grandes?",
          options: ["RIP", "OSPF", "EIGRP", "BGP"],
          correct: 3,
          explanation:
            "BGP (Border Gateway Protocol) é usado para roteamento entre sistemas autônomos na Internet e redes muito grandes.",
        },
      ],
      exercises: [
        {
          question:
            "Projeto de Rede: Projete uma rede empresarial completa para 300 usuários em 3 andares, incluindo VLANs, segurança e redundância:",
          type: "text",
          points: 40,
        },
        {
          question:
            "Troubleshooting de Rede: Desenvolva um protocolo de 25 passos para diagnosticar problemas de conectividade em ambiente empresarial:",
          type: "text",
          points: 30,
        },
      ],
      conclusion: `**Excelente NavCode!** Você desenvolveu expertise em redes empresariais, uma competência altamente valorizada no mercado.`,
    },
  },
  {
    id: 5,
    title: "Segurança da Informação Avançada",
    description: "Cybersecurity, compliance, gestão de riscos e resposta a incidentes",
    icon: `<rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><circle cx="12" cy="16" r="1"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/>`,
    duration: "3 horas",
    content: {
      intro: {
        title: "Segurança da Informação Empresarial",
        content: `Torne-se um especialista em cybersecurity com NavCode, protegendo organizações contra ameaças modernas.

**Objetivos de Segurança:**
• Implementar frameworks de segurança
• Gerenciar riscos e vulnerabilidades
• Responder a incidentes de segurança
• Garantir compliance regulatório
• Desenvolver políticas de segurança

**Conteúdo Especializado:**

**1. FRAMEWORKS DE SEGURANÇA**
- ISO 27001: implementação e auditoria
- NIST Cybersecurity Framework
- CIS Controls: controles críticos
- COBIT: governança de TI
- LGPD: proteção de dados pessoais
- SOX, HIPAA: compliance setorial

**2. GESTÃO DE VULNERABILIDADES**
- Vulnerability assessment: ferramentas e metodologia
- Penetration testing: técnicas e relatórios
- Patch management: estratégias e automação
- Security scanning: Nessus, OpenVAS
- Risk assessment: análise e mitigação
- Threat modeling: identificação de ameaças

**3. RESPOSTA A INCIDENTES**
- CSIRT: estruturação de equipe
- Incident response plan: desenvolvimento
- Forensics digital: coleta e análise
- Malware analysis: técnicas básicas
- Communication plan: gestão de crise
- Lessons learned: melhoria contínua

**4. TECNOLOGIAS DE PROTEÇÃO**
- SIEM: correlação de eventos
- EDR/XDR: detecção e resposta
- DLP: prevenção de vazamento de dados
- PAM: gerenciamento de acessos privilegiados
- Zero Trust: arquitetura de confiança zero
- Cloud security: proteção em nuvem

Este conhecimento é essencial para profissionais de cybersecurity.`,
      },
      videos: [
        {
          title: "Implementação de SIEM Empresarial",
          duration: "40 min",
          description: "Configuração e correlação de eventos de segurança",
          thumbnail: "/cybersecurity-siem-dashboard-monitoring.png",
        },
      ],
      quiz: [
        {
          question: "O que é um SIEM?",
          options: [
            "Sistema de backup",
            "Security Information and Event Management",
            "Software de antivírus",
            "Sistema de firewall",
          ],
          correct: 1,
          explanation:
            "SIEM coleta, correlaciona e analisa eventos de segurança de múltiplas fontes para detectar ameaças.",
        },
      ],
      exercises: [
        {
          question:
            "Plano de Resposta a Incidentes: Desenvolva um plano completo de resposta a ransomware para empresa de 500 funcionários:",
          type: "text",
          points: 35,
        },
      ],
      conclusion: `**Parabéns NavCode!** Você desenvolveu competências avançadas em segurança da informação, essenciais para proteger organizações modernas.`,
    },
  },
  {
    id: 6,
    title: "Manutenção e Suporte Especializado",
    description: "Service desk, ITIL, automação de suporte e gestão de ativos de TI",
    icon: `<path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/>`,
    duration: "3 horas",
    content: {
      intro: {
        title: "Manutenção e Suporte Empresarial",
        content: `Desenvolva habilidades avançadas de suporte técnico e gestão de serviços de TI com NavCode.

**Objetivos Profissionais:**
• Implementar service desk profissional
• Aplicar metodologias ITIL
• Automatizar processos de suporte
• Gerenciar ativos de TI
• Desenvolver métricas e KPIs

**Conteúdo Especializado:**

**1. SERVICE DESK AVANÇADO**
- ITIL 4: processos e práticas
- Incident management: classificação e resolução
- Problem management: análise de causa raiz
- Change management: controle de mudanças
- Knowledge management: base de conhecimento
- SLA/OLA: definição e monitoramento

**2. AUTOMAÇÃO DE SUPORTE**
- Ticketing systems: ServiceNow, Jira Service Desk
- Chatbots: implementação e treinamento
- RPA: automação de processos
- Self-service portals: desenvolvimento
- Monitoring proativo: alertas automáticos
- Deployment automation: ferramentas e scripts

**3. GESTÃO DE ATIVOS**
- CMDB: configuration management database
- Asset lifecycle: aquisição até descarte
- License management: compliance e otimização
- Inventory automation: descoberta automática
- Cost optimization: análise de TCO
- Vendor management: relacionamento com fornecedores

Este conhecimento é fundamental para líderes técnicos e gestores de TI.`,
      },
      videos: [
        {
          title: "Implementação de Service Desk ITIL",
          duration: "35 min",
          description: "Processos ITIL na prática empresarial",
          thumbnail: "/itil-service-desk-help-desk-support.png",
        },
      ],
      quiz: [
        {
          question: "Qual é o objetivo principal do ITIL?",
          options: [
            "Reduzir custos de TI",
            "Alinhar serviços de TI com necessidades do negócio",
            "Automatizar processos",
            "Treinar funcionários",
          ],
          correct: 1,
          explanation:
            "ITIL visa alinhar os serviços de TI com as necessidades do negócio, melhorando a qualidade e eficiência.",
        },
      ],
      exercises: [
        {
          question:
            "Implementação de Service Desk: Projete um service desk completo para empresa de 1000 usuários, incluindo processos, ferramentas e métricas:",
          type: "text",
          points: 40,
        },
      ],
      conclusion: `**Parabéns NavCode!** Você completou o curso de Técnico de Informática Avançado, desenvolvendo competências de nível empresarial em todas as áreas críticas de TI.

**Certificação NavCode Completa:**
Você agora possui conhecimentos avançados em hardware, sistemas operacionais, armazenamento, redes, segurança e suporte, qualificando-se para posições técnicas seniores e de liderança.`,
    },
  },
]

// State management
const completedChapters = JSON.parse(localStorage.getItem("completedChapters") || "[]")
let currentChapter = null
let currentSection = "intro"
let quizAnswers = {}
let quizScore = null
let exerciseAnswers = {}

// DOM elements
const chaptersGrid = document.getElementById("chapters-grid")
const chapterModal = document.getElementById("chapter-modal")
const backButton = document.getElementById("back-button")
const chapterContent = document.getElementById("chapter-content")
const progressFill = document.getElementById("progress-fill")
const progressPercentage = document.getElementById("progress-percentage")
const completedCount = document.getElementById("completed-count")

// Initialize the application
function init() {
  renderChapters()
  updateProgress()
  setupEventListeners()
}

// Render chapters grid
function renderChapters() {
  chaptersGrid.innerHTML = chapters
    .map((chapter) => {
      const isCompleted = completedChapters.includes(chapter.id)
      return `
            <div class="chapter-card" onclick="openChapter(${chapter.id})">
                <div class="chapter-header">
                    <div class="chapter-info">
                        <div class="chapter-icon-wrapper">
                            <svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                ${chapter.icon}
                            </svg>
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
                    ${
                      isCompleted
                        ? `
                        <div class="completed-badge">
                            <svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
                                <polyline points="22,4 12,14.01 9,11.01"/>
                            </svg>
                            Concluído
                        </div>
                    `
                        : ""
                    }
                </div>
                <div class="chapter-body">
                    <p class="chapter-description">${chapter.description}</p>
                    <button class="chapter-button ${isCompleted ? "secondary" : "primary"}">
                        ${isCompleted ? "Revisar Capítulo" : "Iniciar Capítulo"}
                    </button>
                </div>
            </div>
        `
    })
    .join("")
}

// Update progress
function updateProgress() {
  const progress = (completedChapters.length / chapters.length) * 100
  progressFill.style.width = `${progress}%`
  progressPercentage.textContent = Math.round(progress)
  completedCount.textContent = completedChapters.length
}

// Open chapter modal
function openChapter(chapterId) {
  currentChapter = chapters.find((c) => c.id === chapterId)
  currentSection = "intro"
  quizAnswers = {}
  quizScore = null
  exerciseAnswers = {}

  // Update modal header
  document.getElementById("chapter-title").textContent = currentChapter.title
  document.getElementById("chapter-description").textContent = currentChapter.description
  document.getElementById("chapter-icon").innerHTML = currentChapter.icon

  const completedBadge = document.getElementById("completed-badge")
  if (completedChapters.includes(chapterId)) {
    completedBadge.style.display = "flex"
  } else {
    completedBadge.style.display = "none"
  }

  // Show modal and render content
  chapterModal.classList.add("active")
  document.body.style.overflow = "hidden"
  renderChapterContent()
  updateNavigation()
}

// Close chapter modal
function closeChapter() {
  chapterModal.classList.remove("active")
  document.body.style.overflow = "auto"
  currentChapter = null
}

function renderChapterContent() {
  const content = currentChapter.content
  let html = ""

  switch (currentSection) {
    case "intro":
      html = `
                <div class="content-section active">
                    <h2>${content.intro.title}</h2>
                    <div class="content-text">${content.intro.content}</div>
                    <div class="action-buttons">
                        <button class="btn btn-primary" onclick="setSection('explanations')">
                            Ver Explicações Detalhadas
                        </button>
                    </div>
                </div>
            `
      break

    case "explanations":
      html = `
                <div class="content-section active">
                    <h2>📖 Explicações Detalhadas</h2>
                    <p class="section-description">Conteúdo teórico aprofundado com imagens e diagramas explicativos.</p>
                    
                    ${
                      content.explanations
                        ? content.explanations
                            .map(
                              (explanation) => `
                        <div class="explanation-card">
                            <h3>${explanation.title}</h3>
                            <div class="explanation-content">
                                <img src="${explanation.image}" alt="${explanation.title}" class="explanation-image">
                                <div class="explanation-text">${explanation.content}</div>
                            </div>
                        </div>
                    `,
                            )
                            .join("")
                        : "<p>Conteúdo em desenvolvimento...</p>"
                    }
                    
                    <div class="action-buttons">
                        <button class="btn btn-secondary" onclick="setSection('intro')">Voltar</button>
                        <button class="btn btn-primary" onclick="setSection('content')">Ver Videoaulas</button>
                    </div>
                </div>
            `
      break

    case "content":
      html = `
                <div class="content-section active">
                    <h2>🎥 Videoaulas</h2>
                    
                    ${
                      content.videos
                        ? `
                    <div class="content-card">
                        <div class="videos-grid">
                            ${content.videos
                              .map(
                                (video) => `
                                <div class="video-card">
                                    <img src="${video.thumbnail}" alt="${video.title}" class="video-thumbnail">
                                    <div class="video-info">
                                        <h4>${video.title}</h4>
                                        <p class="video-description">${video.description}</p>
                                        <span class="video-duration">⏱️ ${video.duration}</span>
                                    </div>
                                </div>
                            `,
                              )
                              .join("")}
                        </div>
                    </div>
                    `
                        : ""
                    }
                    
                    <div class="action-buttons">
                        <button class="btn btn-secondary" onclick="setSection('explanations')">Voltar às Explicações</button>
                        <button class="btn btn-primary" onclick="setSection('quiz')">Fazer Quiz</button>
                    </div>
                </div>
            `
      break

    case "quiz":
      html = `
                <div class="content-section active">
                    <h2>Quiz do Capítulo</h2>
                    <p class="quiz-intro">Teste seus conhecimentos com ${content.quiz.length} questões sobre o conteúdo estudado.</p>
                    
                    ${content.quiz
                      .map(
                        (question, index) => `
                        <div class="content-card quiz-question">
                            <h4>Pergunta ${index + 1} de ${content.quiz.length}</h4>
                            <p style="color: #374151; margin-bottom: 1rem; font-weight: 500;">${question.question}</p>
                            <div class="quiz-options">
                                ${question.options
                                  .map(
                                    (option, optionIndex) => `
                                    <label class="quiz-option ${quizAnswers[index] === optionIndex ? "selected" : ""}">
                                        <input type="radio" name="question-${index}" value="${optionIndex}" 
                                               onchange="updateQuizAnswer(${index}, ${optionIndex})"
                                               ${quizAnswers[index] === optionIndex ? "checked" : ""}>
                                        <span>${option}</span>
                                    </label>
                                `,
                                  )
                                  .join("")}
                            </div>
                            ${
                              quizScore !== null && question.explanation
                                ? `
                                <div class="quiz-explanation ${quizAnswers[index] === question.correct ? "correct" : "incorrect"}">
                                    <strong>${quizAnswers[index] === question.correct ? "✅ Correto!" : "❌ Incorreto"}</strong>
                                    <p>${question.explanation}</p>
                                </div>
                            `
                                : ""
                            }
                        </div>
                    `,
                      )
                      .join("")}
                    
                    ${
                      quizScore !== null
                        ? `
                        <div class="quiz-result">
                            <div class="quiz-score ${quizScore >= 70 ? "passed" : "failed"}">${Math.round(quizScore)}%</div>
                            <p class="quiz-message">
                                ${quizScore >= 70 ? "🎉 Parabéns! Você passou no quiz!" : "📚 Continue estudando. Você pode tentar novamente!"}
                            </p>
                            <div class="quiz-stats">
                                <span>Acertos: ${content.quiz.filter((q, i) => quizAnswers[i] === q.correct).length}/${content.quiz.length}</span>
                            </div>
                        </div>
                    `
                        : ""
                    }
                    
                    <div class="action-buttons">
                        <button class="btn btn-secondary" onclick="setSection('content')">Voltar</button>
                        ${
                          quizScore === null
                            ? `<button class="btn btn-primary" onclick="submitQuiz()" ${Object.keys(quizAnswers).length < content.quiz.length ? "disabled" : ""}>
                                Enviar Respostas ${Object.keys(quizAnswers).length}/${content.quiz.length}
                               </button>`
                            : `<button class="btn btn-primary" onclick="setSection('exercises')">Fazer Exercícios</button>`
                        }
                    </div>
                </div>
            `
      break

    case "exercises":
      const totalPoints = content.exercises.reduce((sum, ex) => sum + (ex.points || 10), 0)
      html = `
                <div class="content-section active">
                    <h2>Exercícios Práticos</h2>
                    <p class="exercises-intro">Complete os exercícios abaixo para fixar o conteúdo. Total: ${totalPoints} pontos</p>
                    
                    ${content.exercises
                      .map(
                        (exercise, index) => `
                        <div class="content-card exercise-item">
                            <div class="exercise-header">
                                <h4>Exercício ${index + 1}</h4>
                                <span class="exercise-points">${exercise.points || 10} pontos</span>
                            </div>
                            <p style="color: #374151; margin-bottom: 1rem; font-weight: 500;">${exercise.question}</p>
                            <textarea class="exercise-textarea" 
                                      placeholder="Digite sua resposta detalhada aqui..."
                                      onchange="updateExerciseAnswer(${index}, this.value)"
                                      rows="6">${exerciseAnswers[index] || ""}</textarea>
                            <div class="exercise-tips">
                                <small>💡 Dica: Seja específico e detalhado em sua resposta para obter a pontuação máxima.</small>
                            </div>
                        </div>
                    `,
                      )
                      .join("")}
                    
                    <div class="exercises-summary">
                        <p>Exercícios respondidos: ${Object.keys(exerciseAnswers).length}/${content.exercises.length}</p>
                        <div class="progress-bar">
                            <div class="progress-fill" style="width: ${(Object.keys(exerciseAnswers).length / content.exercises.length) * 100}%"></div>
                        </div>
                    </div>
                    
                    <div class="action-buttons">
                        <button class="btn btn-secondary" onclick="setSection('quiz')">Voltar</button>
                        <button class="btn btn-primary" onclick="setSection('conclusion')">Ver Conclusão</button>
                    </div>
                </div>
            `
      break

    case "conclusion":
      const isCompleted = completedChapters.includes(currentChapter.id)
      html = `
                <div class="content-section active">
                    <h2>Conclusão do Capítulo</h2>
                    <div class="content-card conclusion-card">
                        <div class="content-text">${content.conclusion}</div>
                        
                        <div class="chapter-summary">
                            <h3>📊 Resumo da sua Performance</h3>
                            <div class="performance-stats">
                                <div class="stat-item">
                                    <span class="stat-label">Quiz:</span>
                                    <span class="stat-value">${quizScore ? Math.round(quizScore) + "%" : "Não realizado"}</span>
                                </div>
                                <div class="stat-item">
                                    <span class="stat-label">Exercícios:</span>
                                    <span class="stat-value">${Object.keys(exerciseAnswers).length}/${content.exercises.length} respondidos</span>
                                </div>
                                <div class="stat-item">
                                    <span class="stat-label">Status:</span>
                                    <span class="stat-value ${isCompleted ? "completed" : "pending"}">${isCompleted ? "✅ Concluído" : "⏳ Pendente"}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div class="action-buttons">
                        <button class="btn btn-secondary" onclick="setSection('exercises')">Voltar</button>
                        <button class="btn btn-primary" onclick="completeChapter()">
                            ${isCompleted ? "Finalizar Revisão" : "Concluir Capítulo"}
                        </button>
                    </div>
                </div>
            `
      break
  }

  document.getElementById("chapter-content").innerHTML = html
}

// Update navigation active state
function updateNavigation() {
  document.querySelectorAll(".nav-item").forEach((item) => {
    item.classList.remove("active")
    if (item.dataset.section === currentSection) {
      item.classList.add("active")
    }
  })
}

// Set current section
function setSection(section) {
  currentSection = section
  renderChapterContent()
  updateNavigation()
}

// Update quiz answer
function updateQuizAnswer(questionIndex, answerIndex) {
  quizAnswers[questionIndex] = answerIndex
}

// Submit quiz
function submitQuiz() {
  const quiz = currentChapter.content.quiz
  let correct = 0

  quiz.forEach((question, index) => {
    if (quizAnswers[index] === question.correct) {
      correct++
    }
  })

  quizScore = (correct / quiz.length) * 100
  renderChapterContent()
}

// Update exercise answer
function updateExerciseAnswer(exerciseIndex, answer) {
  exerciseAnswers[exerciseIndex] = answer
}

// Complete chapter
function completeChapter() {
  if (!completedChapters.includes(currentChapter.id)) {
    completedChapters.push(currentChapter.id)
    localStorage.setItem("completedChapters", JSON.stringify(completedChapters))
  }

  closeChapter()
  renderChapters()
  updateProgress()
}

// Setup event listeners
function setupEventListeners() {
  backButton.addEventListener("click", closeChapter)

  // Navigation items
  document.querySelectorAll(".nav-item").forEach((item) => {
    item.addEventListener("click", () => {
      setSection(item.dataset.section)
    })
  })

  // Close modal when clicking outside
  chapterModal.addEventListener("click", (e) => {
    if (e.target === chapterModal) {
      closeChapter()
    }
  })

  // Escape key to close modal
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && chapterModal.classList.contains("active")) {
      closeChapter()
    }
  })
}

document.addEventListener("DOMContentLoaded", () => {
  // Verificar login
  if (!checkLogin()) {
    return
  }

  // Mostrar nome do usuário
  const username = localStorage.getItem("navcode_user")
  if (username) {
    document.querySelector(".user-info").innerHTML = `
      <span>Bem-vindo, ${username}!</span>
      <button onclick="logout()" class="btn btn-secondary" style="margin-left: 1rem; padding: 0.5rem 1rem;">Sair</button>
    `
  }

  // Initialize the application when DOM is loaded
  init()
})
