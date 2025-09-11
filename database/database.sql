-- Cria a base de dados
CREATE DATABASE IF NOT EXISTS navcode;

-- Seleciona a base de dados
USE navcode;

-- Cria uma tabela para armazenar os usuários e suas credenciais
CREATE TABLE usuarios (
    id INT AUTO_INCREMENT PRIMARY KEY,          -- Identificador único para cada usuário, com incremento automático
    usuario VARCHAR(50) UNIQUE NOT NULL,        -- Nome de usuário, deve ser único e não pode ser nulo
    email VARCHAR(100) UNIQUE NOT NULL,         -- Email do usuário, deve ser único e não pode ser nulo
    senha_hash VARCHAR(255) NOT NULL,           -- Campo para armazenar a senha criptografada (hash), essencial para segurança
    nome_completo VARCHAR(100) NOT NULL,        -- Nome completo do usuário
    criado_em TIMESTAMP DEFAULT CURRENT_TIMESTAMP, -- Data e hora de criação do registro (automático)
    ultimo_login TIMESTAMP NULL,                -- Último login do usuário (pode ser nulo no início)
    ativo BOOLEAN DEFAULT TRUE                  -- Status do usuário, ativo ou inativo
);