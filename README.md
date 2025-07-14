# 📄 Gerador de PDF

Projeto Backend desenvolvido em **Next.js + Tailwind CSS + Prisma** com objetivo de gerar, importar e gerenciar dados a partir de um formulário dinâmico. Totalmente funcional, com backend integrado, validação de dados e persistência em banco de dados.

---

## 🚀 Tecnologias Utilizadas

- **Next.js 14 (App Router)**
- **TypeScript**
- **Tailwind CSS**
- **Prisma ORM**
- **SQLite** (ambiente local)
- **pdf-lib** (geração de PDF)
- **pdf-parse** (leitura de PDF importado)
- **Zod** (validação de dados)

---

## ✅ Funcionalidades Implementadas

### 📥 Formulário completo com campos:
- Nome, e-mail, telefone, senha, cidade, idade, cor favorita, interesses, site, horário de contato, data de nascimento, gênero, entre outros

### 📤 Backend (API REST):
- `POST /api/form/save` – Salva dados validados no banco
- `GET /api/form/list` – Lista todos os formulários salvos
- `POST /api/pdf/generate` – Gera um PDF a partir dos dados
- `POST /api/pdf/import` – Importa e extrai texto de um arquivo PDF

### 🧠 Backend inteligente:
- ✅ Validação de todos os dados via `Zod`
- ✅ Logs de operações e erros no console
- ✅ Banco com modelo `Formulario` gerenciado via Prisma

---

## 🖼️ Interface
- Layout centralizado com **card cinza escuro**
- Fundo da tela cinza claro
- Botões funcionais de "Gerar PDF" e "Importar PDF"
- Design responsivo com Tailwind CSS

---
