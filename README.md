# Album-Tata-Isac

Este projeto é um álbum digital desenvolvido em React com backend em Node.js e MongoDB, criado para registrar e celebrar momentos especiais do casal Tata e Isac.

## Funcionalidades

- **Carrossel de Fotos:** Visualize todas as fotos do casal em um carrossel responsivo, adaptado para celular e desktop.
- **Contador de Tempo Juntos:** Um contador animado mostra há quantos anos, meses e dias o casal está junto, com efeito digital e animação de flip.
- **Menu Responsivo:** Navegação fácil entre as seções do álbum, contador e página inicial, com menu hamburguer para dispositivos móveis.
- **Upload de Imagens:** Possibilidade de adicionar novas fotos ao álbum (backend pronto para upload e armazenamento de imagens).
- **Design Responsivo:** Layout adaptado para diferentes tamanhos de tela, garantindo boa experiência em qualquer dispositivo.

## Tecnologias Utilizadas

- **Frontend:** React, TypeScript, Tailwind CSS, Vite
- **Backend:** Node.js, Express, Multer (upload de imagens), MongoDB (armazenamento dos caminhos das imagens)
- **Outros:** React Router, animações CSS personalizadas

## Como rodar o projeto

### Frontend

```bash
cd frontend
npm install
npm run dev
```

### Backend

```bash
cd backend
npm install
npm run dev
```

> O backend roda por padrão na porta 5000 e o frontend na 5173.

## Estrutura de Pastas

```
├── backend
│   └── server.js
├── frontend
│   ├── src
│   │   ├── assets/images
│   │   ├── components
│   │   │   └── Carrossel
│   │   └── pages/Home/sections/Contador
│   └── public
├── uploads
└── README.md
```

## Como adicionar novas fotos

1. Acesse a funcionalidade de upload (ou adicione manualmente na pasta `uploads`).
2. O backend salva a imagem e registra o caminho no MongoDB.
3. As novas fotos aparecem automaticamente no carrossel.

## Créditos

Projeto desenvolvido por Isac para Tata, com muito carinho e dedicação.

---

````<!-- filepath: /media/isac/Jogos/Projetos/Album-Novo/README.md -->

# Album-Tata-Isac

Este projeto é um álbum digital desenvolvido em React com backend em Node.js e MongoDB, criado para registrar e celebrar momentos especiais do casal Tata e Isac.

## Funcionalidades

- **Carrossel de Fotos:** Visualize todas as fotos do casal em um carrossel responsivo, adaptado para celular e desktop.
- **Contador de Tempo Juntos:** Um contador animado mostra há quantos anos, meses e dias o casal está junto, com efeito digital e animação de flip.
- **Menu Responsivo:** Navegação fácil entre as seções do álbum, contador e página inicial, com menu hamburguer para dispositivos móveis.
- **Upload de Imagens:** Possibilidade de adicionar novas fotos ao álbum (backend pronto para upload e armazenamento de imagens).
- **Design Responsivo:** Layout adaptado para diferentes tamanhos de tela, garantindo boa experiência em qualquer dispositivo.

## Tecnologias Utilizadas

- **Frontend:** React, TypeScript, Tailwind CSS, Vite
- **Backend:** Node.js, Express, Multer (upload de imagens), MongoDB (armazenamento dos caminhos das imagens)
- **Outros:** React Router, animações CSS personalizadas

## Como rodar o projeto

### Frontend

```bash
cd frontend
npm install
npm run dev
````

### Backend

```bash
cd backend
npm install
npm run dev
```

> O backend roda por padrão na porta 5000 e o frontend na 5173.

## Estrutura de Pastas

```
├── backend
│   └── server.js
├── frontend
│   ├── src
│   │   ├── assets/images
│   │   ├── components
│   │   │   └── Carrossel
│   │   └── pages/Home/sections/Contador
│   └── public
├── uploads
└── README.md
```

## Como adicionar novas fotos

1. Acesse a funcionalidade de upload (ou adicione manualmente na pasta `uploads`).
2. O backend salva a imagem e registra o caminho no MongoDB.
3. As novas fotos aparecem automaticamente no carrossel.

## Créditos

Projeto desenvolvido por Isac para Tata, com muito carinho e dedicação.

---
