# 🌟 **Guia de Uso do Git Flow com Emojis**

Este guia padroniza os comandos do **Git Flow** usando emojis para facilitar o aprendizado e garantir consistência no trabalho em equipe.

---

## 🛠️ **Inicialização do Git Flow**

Antes de começar, inicialize o Git Flow no repositório:

bash

Copiar código

`git flow init`

🔹 Siga as instruções para configurar os nomes das branches (padrão: `main` e `develop`).

---

## 🚀 **Começando uma Feature**

1. Crie uma nova feature:

   bash

   Copiar código

   `git flow feature start nome-da-feature`

   > Exemplo: `git flow feature start adicionar-login`

2. Comece a trabalhar nos arquivos da feature. Após finalizar, adicione e faça commit:

   bash

   Copiar código

   `git add . git commit -m "✨ Adiciona funcionalidade de [descrição]"`

   > Exemplo: `git commit -m "✨ Adiciona funcionalidade de login com autenticação"`

3. Finalize a feature:

   bash

   Copiar código

   `git flow feature finish nome-da-feature`

   > Exemplo: `git flow feature finish adicionar-login`

---

## 🧪 **Criando uma Release**

1. Comece uma release quando o `develop` estiver estável:

   bash

   Copiar código

   `git flow release start nome-da-versao`

   > Exemplo: `git flow release start v1.0.0`

2. Faça ajustes finais e commits (ex.: correções de bugs ou atualização do changelog):

   bash

   Copiar código

   `git add . git commit -m "📝 Atualiza changelog para versão [descrição]"`

   > Exemplo: `git commit -m "📝 Atualiza changelog para versão 1.0.0"`

3. Finalize a release:

   bash

   Copiar código

   `git flow release finish nome-da-versao`

   > Exemplo: `git flow release finish v1.0.0`

4. Suba as mudanças:

   bash

   Copiar código

   `git push origin main && git push origin develop`

---

## 🐞 **Criando um Hotfix**

1. Inicie um hotfix para corrigir um problema na produção:

   bash

   Copiar código

   `git flow hotfix start nome-do-hotfix`

   > Exemplo: `git flow hotfix start corrigir-login`

2. Faça os ajustes necessários, adicione e faça commit:

   bash

   Copiar código

   `git add . git commit -m "🐛 Corrige [descrição do problema]"`

   > Exemplo: `git commit -m "🐛 Corrige bug no formulário de login"`

3. Finalize o hotfix:

   bash

   Copiar código

   `git flow hotfix finish nome-do-hotfix`

   > Exemplo: `git flow hotfix finish corrigir-login`

4. Suba as mudanças:

   bash

   Copiar código

   `git push origin main && git push origin develop`

---

## 🧹 **Limpeza e Atualização**

1. Apague branches locais que já foram finalizadas:

   bash

   Copiar código

   `git branch -d nome-da-branch`

   > Exemplo: `git branch -d feature/adicionar-login`

2. Apague branches remotas desnecessárias:

   bash

   Copiar código

   `git push origin --delete nome-da-branch`

   > Exemplo: `git push origin --delete feature/adicionar-login`

3. Atualize sempre o `develop` e o `main`:

   bash

   Copiar código

   `git pull origin develop && git pull origin main`

---

## 📚 **Resumo de Emojis Usados**

| Emoji | Descrição                          |
| ----- | ---------------------------------- |
| ✨    | Adiciona nova funcionalidade       |
| 🐛    | Corrige um bug                     |
| 📝    | Atualiza documentação ou changelog |
| 🛠️    | Ajustes gerais ou manutenção       |

---

Esse padrão pode ser usado pela equipe para treinar e adotar uma cultura de versionamento organizada e intuitiva.
