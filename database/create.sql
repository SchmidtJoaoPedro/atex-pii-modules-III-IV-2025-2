-- cria tabela de usuários
CREATE TABLE usuarios (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    nome TEXT NOT NULL,
    email TEXT UNIQUE NOT NULL,
    senha TEXT NOT NULL
);

-- inserindo usuários diretamente
INSERT INTO usuarios (nome, email, senha)
VALUES ('Maria Silva', 'maria@email.com', '123456'),
       ('João Souza', 'joao@email.com', 'abcdef');