import sqlite3

# -------------------------------
# 1. Gerar conexão com o banco
# -------------------------------
conexao = sqlite3.connect("usuarios.db")
cursor = conexao.cursor()

# -------------------------------
# 2. Criação da tabela de usuários
# -------------------------------
cursor.execute("""
CREATE TABLE IF NOT EXISTS usuarios (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    nome TEXT NOT NULL,
    email TEXT UNIQUE NOT NULL,
    senha TEXT NOT NULL
);
""")

# -------------------------------
# 3. Inserir dados
# -------------------------------
cursor.execute("INSERT INTO usuarios (nome, email, senha) VALUES (?, ?, ?)",
               ("Maria Silva", "maria@email.com", "123456"))

cursor.execute("INSERT INTO usuarios (nome, email, senha) VALUES (?, ?, ?)",
               ("João Souza", "joao@email.com", "abcdef"))

cursor.execute("INSERT INTO usuarios (nome, email, senha) VALUES (?, ?, ?)",
               ("Ana Costa", "ana@email.com", "senha123"))

conexao.commit()

# -------------------------------
# 4. Consultar os usuários
# -------------------------------
cursor.execute("SELECT * FROM usuarios")
usuarios = cursor.fetchall()

print("\n👤 Lista de Usuários:")
for u in usuarios:
    print(u)

# -------------------------------
# 5. Fechar conexão
# -------------------------------
conexao.close()