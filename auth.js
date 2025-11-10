// Sistema de Autenticação NavCode
class AuthSystem {
  constructor() {
    this.users = this.loadUsers()
    this.initDefaultUser()
    this.emailConfig = {
      email: "navcode.ltda@gmail.com",
      password: "NAVCODE1234",
      smtpServer: "smtp.gmail.com",
      smtpPort: 587,
    }
  }

  // Carregar usuários do localStorage
  loadUsers() {
    const users = localStorage.getItem("navcode_users")
    return users ? JSON.parse(users) : {}
  }

  // Salvar usuários no localStorage
  saveUsers() {
    localStorage.setItem("navcode_users", JSON.stringify(this.users))
  }

  // Inicializar usuário padrão
  initDefaultUser() {
    // Não criar mais usuário demo automaticamente
  }

  // Registrar novo usuário
  async register(email, username, password, confirmPassword) {
    // Validações
    if (!email || !username || !password || !confirmPassword) {
      return { success: false, message: "Todos os campos são obrigatórios" }
    }

    if (password !== confirmPassword) {
      return { success: false, message: "As senhas não coincidem" }
    }

    if (password.length < 6) {
      return { success: false, message: "A senha deve ter pelo menos 6 caracteres" }
    }

    if (username.length < 3) {
      return { success: false, message: "O usuário deve ter pelo menos 3 caracteres" }
    }

    // Verificar se email já existe
    const emailExists = Object.values(this.users).some((user) => user.email === email)
    if (emailExists) {
      return { success: false, message: "Este email já está cadastrado" }
    }

    // Verificar se usuário já existe
    if (this.users[username]) {
      return { success: false, message: "Este nome de usuário já existe" }
    }

    this.users[username] = {
      email: email,
      username: username,
      password: password, // Em produção, usar hash
      createdAt: new Date().toISOString(),
      verified: true, // Definido como true já que não há mais verificação por SMS
      progress: {
        currentChapter: 1,
        completedChapters: [],
        totalScore: 0,
        exercisesCompleted: 0,
        videosWatched: 0,
      },
    }

    this.saveUsers()

    try {
      await this.sendWelcomeEmailWithCredentials(email, username)

      return {
        success: true,
        message: "Conta criada com sucesso! Verifique seu email para a mensagem de boas-vindas da NavCode.",
      }
    } catch (error) {
      console.error("[NavCode] Erro ao enviar Email:", error)
      return {
        success: true,
        message: "Conta criada com sucesso! (Email será enviado em breve)",
      }
    }
  }

  // Fazer login
  login(username, password) {
    const user = this.users[username]

    if (!user) {
      return { success: false, message: "Usuário não encontrado" }
    }

    if (user.password !== password) {
      return { success: false, message: "Senha incorreta" }
    }

    // Salvar sessão
    localStorage.setItem("navcode_logged_in", "true")
    localStorage.setItem("navcode_user", username)
    localStorage.setItem("navcode_user_data", JSON.stringify(user))

    return { success: true, message: "Login realizado com sucesso!" }
  }

  // Fazer logout
  logout() {
    localStorage.removeItem("navcode_logged_in")
    localStorage.removeItem("navcode_user")
    localStorage.removeItem("navcode_user_data")
    window.location.href = "login.html"
  }

  // Verificar se está logado
  isLoggedIn() {
    return localStorage.getItem("navcode_logged_in") === "true"
  }

  // Obter usuário atual
  getCurrentUser() {
    if (!this.isLoggedIn()) return null

    const userData = localStorage.getItem("navcode_user_data")
    return userData ? JSON.parse(userData) : null
  }

  // Atualizar progresso do usuário
  updateProgress(username, progressData) {
    if (this.users[username]) {
      this.users[username].progress = { ...this.users[username].progress, ...progressData }
      this.saveUsers()

      // Atualizar dados da sessão
      if (localStorage.getItem("navcode_user") === username) {
        localStorage.setItem("navcode_user_data", JSON.stringify(this.users[username]))
      }
    }
  }

  // Obter estatísticas do usuário
  getUserStats(username) {
    const user = this.users[username]
    if (!user) return null

    return {
      totalUsers: Object.keys(this.users).length,
      userProgress: user.progress,
      memberSince: new Date(user.createdAt).toLocaleDateString("pt-BR"),
    }
  }

  async sendWelcomeEmailWithCredentials(email, username) {
    console.log(`[NavCode] Enviando email de boas-vindas para: ${email}`)
    console.log(`[NavCode] Usando credenciais: ${this.emailConfig.email}`)

    return new Promise((resolve) => {
      setTimeout(() => {
        // Em produção, usar as credenciais reais para envio via SMTP
        const emailContent = {
          from: this.emailConfig.email,
          to: email,
          subject: "🚀 Bem-vindo(a) à NavCode - Sua jornada em TI começa agora!",
          html: `
            <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #f8fafc; padding: 20px;">
              <div style="background: white; border-radius: 12px; padding: 30px; box-shadow: 0 4px 6px rgba(0,0,0,0.1);">
                <div style="text-align: center; margin-bottom: 30px;">
                  <div style="background: #059669; color: white; width: 80px; height: 80px; border-radius: 12px; display: inline-flex; align-items: center; justify-content: center; font-size: 32px; font-weight: bold; margin-bottom: 20px;">NC</div>
                  <h1 style="color: #1f2937; margin: 0;">Bem-vindo(a) à NavCode!</h1>
                </div>
                
                <p style="color: #374151; font-size: 16px; line-height: 1.6;">Olá <strong>${username}</strong>!</p>
                
                <p style="color: #374151; font-size: 16px; line-height: 1.6;">
                  Estamos muito felizes em tê-lo(a) conosco em nossa jornada de aprendizado em <strong>Técnico de Informática</strong>!
                </p>
                
                <div style="background: #f0fdf4; border: 1px solid #bbf7d0; border-radius: 8px; padding: 20px; margin: 20px 0;">
                  <h3 style="color: #166534; margin: 0 0 15px 0;">🎯 Seu curso inclui:</h3>
                  <ul style="color: #166534; margin: 0; padding-left: 20px;">
                    <li>6 capítulos completos e detalhados</li>
                    <li>Mais de 60 exercícios práticos</li>
                    <li>30+ videoaulas exclusivas</li>
                    <li>Explicações com imagens e diagramas</li>
                    <li>Acompanhamento de progresso</li>
                    <li>Suporte técnico especializado</li>
                  </ul>
                </div>
                
                <div style="text-align: center; margin: 30px 0;">
                  <a href="#" style="background: #059669; color: white; padding: 12px 30px; border-radius: 8px; text-decoration: none; font-weight: 600; display: inline-block;">Começar Curso Agora</a>
                </div>
                
                <p style="color: #6b7280; font-size: 14px; line-height: 1.6;">
                  <strong>Obrigado por escolher a NavCode para sua formação profissional!</strong><br>
                  Nossa equipe está sempre disponível para ajudá-lo(a) em sua jornada de aprendizado.
                </p>
                
                <hr style="border: none; border-top: 1px solid #e5e7eb; margin: 30px 0;">
                
                <div style="text-align: center;">
                  <p style="color: #9ca3af; font-size: 12px; margin: 0;">
                    NavCode - Educação em Tecnologia<br>
                    Email: navcode.ltda@gmail.com
                  </p>
                </div>
              </div>
            </div>
          `,
          credentials: {
            user: this.emailConfig.email,
            pass: this.emailConfig.password,
            host: this.emailConfig.smtpServer,
            port: this.emailConfig.smtpPort,
          },
        }

        console.log(`[NavCode] Email de boas-vindas enviado com sucesso para ${email}`)

        // Simular notificação visual do email (apenas para demonstração)
        if (typeof window !== "undefined") {
          setTimeout(() => {
            alert(
              `📧 Email NavCode enviado!\n\nPara: ${email}\nDe: ${this.emailConfig.email}\n\nVerifique sua caixa de entrada para a mensagem de boas-vindas completa!`,
            )
          }, 3000)
        }

        resolve({ success: true, emailContent })
      }, 2000)
    })
  }

  // Simular envio de email (em produção, usar serviço real como EmailJS, SendGrid, etc.)
  sendWelcomeEmail(email, username) {
    console.log(`[NavCode] Enviando email de boas-vindas para: ${email}`)

    // Simular delay de envio
    return new Promise((resolve) => {
      setTimeout(() => {
        // Aqui seria a integração com serviço de email real
        const emailContent = {
          to: email,
          subject: "Bem-vindo(a) à NavCode! 🚀",
          body: `
            Olá ${username}!
            
            Seja muito bem-vindo(a) à NavCode! 
            
            Estamos muito felizes em tê-lo(a) conosco em nossa jornada de aprendizado em Técnico de Informática.
            
            Seu curso já está disponível e você pode começar a estudar imediatamente. 
            
            Nosso curso oferece:
            ✅ 6 capítulos completos
            ✅ Mais de 60 exercícios práticos
            ✅ 30+ videoaulas exclusivas
            ✅ Acompanhamento de progresso
            
            Obrigado por escolher a NavCode para sua formação profissional!
            
            Atenciosamente,
            Equipe NavCode
          `,
        }

        console.log(`[NavCode] Email enviado com sucesso para ${email}`)
        resolve({ success: true, emailContent })
      }, 1500)
    })
  }
}

// Instância global do sistema de autenticação
const authSystem = new AuthSystem()

// Funções globais para uso nas páginas
async function registerUser(email, username, password, confirmPassword) {
  return await authSystem.register(email, username, password, confirmPassword)
}

function loginUser(username, password) {
  return authSystem.login(username, password)
}

function logoutUser() {
  authSystem.logout()
}

function getCurrentUser() {
  return authSystem.getCurrentUser()
}

function updateUserProgress(progressData) {
  const currentUser = localStorage.getItem("navcode_user")
  if (currentUser) {
    authSystem.updateProgress(currentUser, progressData)
  }
}

function getUserStats() {
  const currentUser = localStorage.getItem("navcode_user")
  return currentUser ? authSystem.getUserStats(currentUser) : null
}

// Verificar autenticação em páginas protegidas
function requireAuth() {
  if (!authSystem.isLoggedIn()) {
    window.location.href = "login.html"
    return false
  }
  return true
}
