// Sistema de Temas NavCode
// Suporte para 3 temas: neon, light, dark

// ===== CONFIGURAÇÃO DOS TEMAS =====
const themes = {
  neon: {
    name: "Neon",
    icon: "⚡",
    colors: {
      // Cores Primárias Futuristas
      "--navcode-primary": "#00d4ff",
      "--navcode-primary-dark": "#0099cc",
      "--navcode-primary-light": "#33ddff",
      "--navcode-primary-bg": "rgba(0, 212, 255, 0.1)",
      "--navcode-primary-border": "rgba(0, 212, 255, 0.3)",

      // Cores Secundárias Neon
      "--navcode-secondary": "#ff6b6b",
      "--navcode-secondary-bg": "rgba(255, 107, 107, 0.1)",
      "--navcode-secondary-dark": "#ff4757",
      "--navcode-accent": "#a55eea",
      "--navcode-accent-bg": "rgba(165, 94, 234, 0.1)",

      // Cores de Texto Modernas
      "--navcode-text-primary": "#ffffff",
      "--navcode-text-secondary": "#e2e8f0",
      "--navcode-text-muted": "#94a3b8",
      "--navcode-text-light": "#cbd5e1",
      "--navcode-text-dark": "#1e293b",

      // Cores de Fundo Futuristas
      "--navcode-bg-primary": "rgba(255, 255, 255, 0.05)",
      "--navcode-bg-secondary": "rgba(255, 255, 255, 0.1)",
      "--navcode-bg-tertiary": "rgba(255, 255, 255, 0.15)",
      "--navcode-bg-dark": "#0a0a0a",
      "--navcode-bg-dark-secondary": "#1a1a1a",
      "--navcode-bg-glass": "rgba(255, 255, 255, 0.1)",

      // Cores de Borda Neon
      "--navcode-border-light": "rgba(255, 255, 255, 0.2)",
      "--navcode-border-medium": "rgba(255, 255, 255, 0.3)",
      "--navcode-border-dark": "rgba(255, 255, 255, 0.5)",
      "--navcode-border-neon": "rgba(0, 212, 255, 0.5)",

      // Cores de Status Modernas
      "--navcode-success": "#00ff88",
      "--navcode-success-bg": "rgba(0, 255, 136, 0.1)",
      "--navcode-success-text": "#00ff88",
      "--navcode-error": "#ff4757",
      "--navcode-error-bg": "rgba(255, 71, 87, 0.1)",
      "--navcode-error-text": "#ff4757",
      "--navcode-warning": "#ffa726",
      "--navcode-warning-bg": "rgba(255, 167, 38, 0.1)",

      // Sombras Modernas e Neon
      "--navcode-shadow-sm": "0 2px 8px rgba(0, 0, 0, 0.3)",
      "--navcode-shadow-md": "0 8px 32px rgba(0, 0, 0, 0.4)",
      "--navcode-shadow-lg": "0 16px 64px rgba(0, 0, 0, 0.5)",
      "--navcode-shadow-neon": "0 0 20px rgba(0, 212, 255, 0.5)",
      "--navcode-shadow-neon-pink": "0 0 20px rgba(255, 107, 107, 0.5)",
      "--navcode-shadow-neon-purple": "0 0 20px rgba(165, 94, 234, 0.5)",

      // Gradientes Futuristas
      "--navcode-gradient-primary":
        "linear-gradient(135deg, #00d4ff 0%, #0099cc 50%, #a55eea 100%)",
      "--navcode-gradient-secondary":
        "linear-gradient(135deg, #ff6b6b 0%, #ffa726 50%, #00ff88 100%)",
      "--navcode-gradient-dark":
        "linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 50%, #2d2d2d 100%)",
      "--navcode-gradient-glass":
        "linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.05) 100%)",
      "--navcode-gradient-rainbow":
        "linear-gradient(45deg, #00d4ff, #ff6b6b, #a55eea, #00ff88, #ffa726)",

      // Efeitos de Brilho
      "--navcode-glow-blue": "0 0 30px rgba(0, 212, 255, 0.6)",
      "--navcode-glow-pink": "0 0 30px rgba(255, 107, 107, 0.6)",
      "--navcode-glow-purple": "0 0 30px rgba(165, 94, 234, 0.6)",
    },
  },

  light: {
    name: "Claro",
    icon: "☀️",
    colors: {
      // Cores Primárias Minimalistas
      "--navcode-primary": "#2563eb",
      "--navcode-primary-dark": "#1d4ed8",
      "--navcode-primary-light": "#3b82f6",
      "--navcode-primary-bg": "rgba(37, 99, 235, 0.1)",
      "--navcode-primary-border": "rgba(37, 99, 235, 0.2)",

      // Cores Secundárias Minimalistas
      "--navcode-secondary": "#dc2626",
      "--navcode-secondary-bg": "rgba(220, 38, 38, 0.1)",
      "--navcode-secondary-dark": "#b91c1c",
      "--navcode-accent": "#7c3aed",
      "--navcode-accent-bg": "rgba(124, 58, 237, 0.1)",

      // Cores de Texto Minimalistas
      "--navcode-text-primary": "#111827",
      "--navcode-text-secondary": "#374151",
      "--navcode-text-muted": "#6b7280",
      "--navcode-text-light": "#9ca3af",
      "--navcode-text-dark": "#111827",

      // Cores de Fundo Minimalistas
      "--navcode-bg-primary": "#ffffff",
      "--navcode-bg-secondary": "#f9fafb",
      "--navcode-bg-tertiary": "#f3f4f6",
      "--navcode-bg-dark": "#ffffff",
      "--navcode-bg-dark-secondary": "#f9fafb",
      "--navcode-bg-glass": "rgba(255, 255, 255, 0.8)",

      // Cores de Borda Minimalistas
      "--navcode-border-light": "rgba(209, 213, 219, 0.5)",
      "--navcode-border-medium": "rgba(156, 163, 175, 0.6)",
      "--navcode-border-dark": "rgba(107, 114, 128, 0.8)",
      "--navcode-border-neon": "rgba(37, 99, 235, 0.3)",

      // Cores de Status Minimalistas
      "--navcode-success": "#059669",
      "--navcode-success-bg": "rgba(5, 150, 105, 0.1)",
      "--navcode-success-text": "#059669",
      "--navcode-error": "#dc2626",
      "--navcode-error-bg": "rgba(220, 38, 38, 0.1)",
      "--navcode-error-text": "#dc2626",
      "--navcode-warning": "#d97706",
      "--navcode-warning-bg": "rgba(217, 119, 6, 0.1)",

      // Sombras Minimalistas
      "--navcode-shadow-sm": "0 1px 3px rgba(0, 0, 0, 0.1)",
      "--navcode-shadow-md": "0 4px 6px rgba(0, 0, 0, 0.1)",
      "--navcode-shadow-lg": "0 10px 15px rgba(0, 0, 0, 0.1)",
      "--navcode-shadow-neon": "0 0 0 3px rgba(37, 99, 235, 0.1)",
      "--navcode-shadow-neon-pink": "0 0 0 3px rgba(220, 38, 38, 0.1)",
      "--navcode-shadow-neon-purple": "0 0 0 3px rgba(124, 58, 237, 0.1)",

      // Gradientes Minimalistas
      "--navcode-gradient-primary":
        "linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%)",
      "--navcode-gradient-secondary":
        "linear-gradient(135deg, #dc2626 0%, #b91c1c 100%)",
      "--navcode-gradient-dark":
        "linear-gradient(135deg, #ffffff 0%, #f9fafb 100%)",
      "--navcode-gradient-glass":
        "linear-gradient(135deg, rgba(255, 255, 255, 0.8) 0%, rgba(249, 250, 251, 0.9) 100%)",
      "--navcode-gradient-rainbow":
        "linear-gradient(45deg, #2563eb, #dc2626, #7c3aed, #059669, #d97706)",

      // Efeitos de Brilho Minimalistas
      "--navcode-glow-blue": "0 0 0 3px rgba(37, 99, 235, 0.1)",
      "--navcode-glow-pink": "0 0 0 3px rgba(220, 38, 38, 0.1)",
      "--navcode-glow-purple": "0 0 0 3px rgba(124, 58, 237, 0.1)",
    },
  },

  dark: {
    name: "Escuro",
    icon: "🌙",
    colors: {
      // Cores Primárias Escuras
      "--navcode-primary": "#60a5fa",
      "--navcode-primary-dark": "#3b82f6",
      "--navcode-primary-light": "#93c5fd",
      "--navcode-primary-bg": "rgba(96, 165, 250, 0.1)",
      "--navcode-primary-border": "rgba(96, 165, 250, 0.3)",

      // Cores Secundárias Escuras
      "--navcode-secondary": "#f87171",
      "--navcode-secondary-bg": "rgba(248, 113, 113, 0.1)",
      "--navcode-secondary-dark": "#ef4444",
      "--navcode-accent": "#a78bfa",
      "--navcode-accent-bg": "rgba(167, 139, 250, 0.1)",

      // Cores de Texto Escuras
      "--navcode-text-primary": "#f9fafb",
      "--navcode-text-secondary": "#e5e7eb",
      "--navcode-text-muted": "#9ca3af",
      "--navcode-text-light": "#d1d5db",
      "--navcode-text-dark": "#111827",

      // Cores de Fundo Escuras
      "--navcode-bg-primary": "rgba(17, 24, 39, 0.8)",
      "--navcode-bg-secondary": "rgba(31, 41, 55, 0.9)",
      "--navcode-bg-tertiary": "rgba(55, 65, 81, 0.9)",
      "--navcode-bg-dark": "#111827",
      "--navcode-bg-dark-secondary": "#1f2937",
      "--navcode-bg-glass": "rgba(31, 41, 55, 0.8)",

      // Cores de Borda Escuras
      "--navcode-border-light": "rgba(75, 85, 99, 0.3)",
      "--navcode-border-medium": "rgba(107, 114, 128, 0.4)",
      "--navcode-border-dark": "rgba(156, 163, 175, 0.6)",
      "--navcode-border-neon": "rgba(96, 165, 250, 0.4)",

      // Cores de Status Escuras
      "--navcode-success": "#34d399",
      "--navcode-success-bg": "rgba(52, 211, 153, 0.1)",
      "--navcode-success-text": "#34d399",
      "--navcode-error": "#f87171",
      "--navcode-error-bg": "rgba(248, 113, 113, 0.1)",
      "--navcode-error-text": "#f87171",
      "--navcode-warning": "#fbbf24",
      "--navcode-warning-bg": "rgba(251, 191, 36, 0.1)",

      // Sombras Escuras
      "--navcode-shadow-sm": "0 2px 8px rgba(0, 0, 0, 0.4)",
      "--navcode-shadow-md": "0 8px 32px rgba(0, 0, 0, 0.5)",
      "--navcode-shadow-lg": "0 16px 64px rgba(0, 0, 0, 0.6)",
      "--navcode-shadow-neon": "0 0 20px rgba(96, 165, 250, 0.3)",
      "--navcode-shadow-neon-pink": "0 0 20px rgba(248, 113, 113, 0.3)",
      "--navcode-shadow-neon-purple": "0 0 20px rgba(167, 139, 250, 0.3)",

      // Gradientes Escuros
      "--navcode-gradient-primary":
        "linear-gradient(135deg, #60a5fa 0%, #3b82f6 100%)",
      "--navcode-gradient-secondary":
        "linear-gradient(135deg, #f87171 0%, #ef4444 100%)",
      "--navcode-gradient-dark":
        "linear-gradient(135deg, #111827 0%, #1f2937 50%, #374151 100%)",
      "--navcode-gradient-glass":
        "linear-gradient(135deg, rgba(31, 41, 55, 0.8) 0%, rgba(17, 24, 39, 0.9) 100%)",
      "--navcode-gradient-rainbow":
        "linear-gradient(45deg, #60a5fa, #f87171, #a78bfa, #34d399, #fbbf24)",

      // Efeitos de Brilho Escuros
      "--navcode-glow-blue": "0 0 20px rgba(96, 165, 250, 0.3)",
      "--navcode-glow-pink": "0 0 20px rgba(248, 113, 113, 0.3)",
      "--navcode-glow-purple": "0 0 20px rgba(167, 139, 250, 0.3)",
    },
  },
};

// ===== FUNÇÕES DO SISTEMA DE TEMAS =====

/**
 * Aplica um tema específico
 * @param {string} themeName - Nome do tema (neon, light, dark)
 */
function applyTheme(themeName) {
  const theme = themes[themeName];
  if (!theme) {
    console.error(`[NavCode] Tema '${themeName}' não encontrado!`);
    return;
  }

  const root = document.documentElement;

  // Aplicar todas as variáveis CSS do tema
  Object.entries(theme.colors).forEach(([property, value]) => {
    root.style.setProperty(property, value);
  });

  // Atualizar atributo data-theme
  root.setAttribute("data-theme", themeName);

  // Salvar preferência no localStorage
  localStorage.setItem("navcode_theme", themeName);

  // Atualizar botão de tema se existir
  updateThemeButton(themeName);

  console.log(`[NavCode] Tema '${theme.name}' aplicado com sucesso!`);
}

/**
 * Alterna entre os temas disponíveis
 */
function toggleTheme() {
  const currentTheme =
    document.documentElement.getAttribute("data-theme") || "neon";
  const themeNames = Object.keys(themes);
  const currentIndex = themeNames.indexOf(currentTheme);
  const nextIndex = (currentIndex + 1) % themeNames.length;
  const nextTheme = themeNames[nextIndex];

  applyTheme(nextTheme);
}

/**
 * Carrega o tema salvo ou aplica o padrão
 */
function loadTheme() {
  const savedTheme = localStorage.getItem("navcode_theme") || "neon";
  applyTheme(savedTheme);
}

/**
 * Atualiza o botão de tema com o tema atual
 * @param {string} themeName - Nome do tema atual
 */
function updateThemeButton(themeName) {
  const themeButton = document.getElementById("theme-toggle");
  if (!themeButton) return;

  const theme = themes[themeName];
  const icon = themeButton.querySelector(".icon");

  if (icon) {
    // Atualizar ícone baseado no tema
    const iconPaths = {
      neon: `<path d="M13 2L3 14h7l-1 8 10-12h-7l1-8z"/>`,
      light: `<circle cx="12" cy="12" r="5"/><path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/>`,
      dark: `<path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>`,
    };

    icon.innerHTML = iconPaths[themeName] || iconPaths.neon;
  }

  // Atualizar tooltip
  themeButton.setAttribute("data-tooltip", `Tema Atual: ${theme.name}`);
}

/**
 * Cria o botão de alternância de tema
 * @returns {HTMLElement} - Elemento do botão
 */
function createThemeButton() {
  const button = document.createElement("button");
  button.id = "theme-toggle";
  button.className = "theme-toggle";
  button.setAttribute("data-tooltip", "Alternar Tema");
  button.onclick = toggleTheme;

  button.innerHTML = `
    <svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <circle cx="12" cy="12" r="5"/>
      <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/>
    </svg>
  `;

  return button;
}

/**
 * Inicializa o sistema de temas
 */
function initThemeSystem() {
  // Carregar tema salvo
  loadTheme();

  // Criar botão de tema se não existir
  if (!document.getElementById("theme-toggle")) {
    const themeButton = createThemeButton();
    document.body.appendChild(themeButton);
  }

  console.log("[NavCode] Sistema de temas inicializado!");
}

// ===== INICIALIZAÇÃO AUTOMÁTICA =====
// Inicializar quando o DOM estiver pronto
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initThemeSystem);
} else {
  initThemeSystem();
}

// Exportar funções para uso global
window.toggleTheme = toggleTheme;
window.applyTheme = applyTheme;
window.loadTheme = loadTheme;
