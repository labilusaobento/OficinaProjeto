# Biblioteca Sonora · 5.º Ano 🎧

Aplicação web (PWA) pensada para uma turma de 5.º ano ouvir histórias em áudio com calma, autonomia e inclusão — pronta para publicar no **GitHub Pages** e partilhar no **Microsoft Teams** através de um link fixo.

## O que já inclui
- **Histórias prontas com vozes naturais de Portugal (*Raquel* feminina e *Duarte* masculina):**
  - *O Falcão que Não Voava*
  - *O Bom Grande*
  - *A Lenda da Serra da Estrela*, *O Segredo da Biblioteca Fechada*, *Viagem ao Fundo do Atlântico* e *A Floresta do Vento Calmo*
- **Leitor inclusivo:** alternar entre voz feminina e masculina, velocidade ajustável (`0.75x`, `1x`, `1.25x`, `1.5x`), recuo/avanço de 10 segundos e som ambiente opcional.
- **Modo *Ler e Ouvir*:** texto de apoio opcional com **Leitura Fácil** (alta legibilidade para dislexia) e ajuste de tamanho de letra.
- **Modo Professor (PIN predefinido: `5000`):** adicionar histórias, gravar com o microfone, carregar ficheiros MP3/WAV e exportar `stories.json`.

---

## Como publicar no GitHub Pages (gratuito)

### 1. Criar o repositório no GitHub
1. Acede a [github.com/new](https://github.com/new) e inicia sessão na tua conta GitHub.
2. Em **Repository name**, escreve por exemplo `biblioteca-sonora-5ano`.
3. Deixa selecionado **Public** *(necessário para GitHub Pages gratuito)* e clica em **Create repository** (sem marcar README nem .gitignore).

### 2. Enviar os ficheiros para o GitHub
No Terminal (ou aqui comigo — basta dizeres o link do repositório que criaste!), executa na pasta do projeto:

```bash
git remote add origin https://github.com/O_TEU_UTILIZADOR/biblioteca-sonora-5ano.git
git push -u origin main
```

### 3. Ativar o GitHub Pages
1. No repositório no GitHub, vai a **Settings** → **Pages** (no menu lateral esquerdo).
2. Em **Build and deployment → Source**, escolhe **Deploy from a branch**.
3. Em **Branch**, seleciona **`main`** e a pasta **`/ (root)`** e clica em **Save**.
4. Passados cerca de 1–2 minutos, aparece no topo o teu link permanente:
   `https://O_TEU_UTILIZADOR.github.io/biblioteca-sonora-5ano/`

---

## Como adicionar ao Microsoft Teams
1. No canal da tua turma no **Microsoft Teams**, clica no **`+`** no topo para adicionar um separador.
2. Escolhe **Website**.
3. Dá-lhe um nome (ex.: *Biblioteca Sonora*) e cola o link do GitHub Pages.
4. Sempre que adicionares novas histórias e fizeres `git push`, o link no Teams atualiza-se sozinho!
