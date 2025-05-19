Cavaleiros do Zodíaco

Um projeto web interativo dedicado à série Cavaleiros do Zodíaco (Saint Seiya), criado para fins educacionais. O site apresenta seções sobre a história, wallpapers, trailers, personagens e filmes da série, com um carrossel 3D interativo para exibição de wallpapers.

📖 Sobre o Projeto

Este projeto é uma aplicação web desenvolvida com React, Tailwind CSS e Vite, utilizando CDNs para carregar dependências. O destaque é o carrossel 3D na seção "Wallpapers", que exibe uma imagem central em destaque com outras imagens ao fundo, criando um efeito de profundidade. O site é responsivo e inclui navegação intuitiva, vídeos, e interações visuais, como ampliação de imagens na seção "Personagens".

Funcionalidades

Navegação Responsiva: Menu fixo com links para todas as seções, adaptável para dispositivos móveis.

Home: Vídeo de fundo com overlay e texto introdutório.

História: Resumo da história de Cavaleiros do Zodíaco.

Wallpapers: Carrossel 3D com imagem central destacada, navegação manual, auto-slide (a cada 5 segundos) e botão de download.

Trailer: Vídeo do YouTube incorporado.

Personagens: Galeria de personagens com efeito de ampliação ao passar o mouse.

Filmes: Lista de filmes com trailers do YouTube e descrições.

Footer: Informações de direitos autorais.

🛠️ Tecnologias Utilizadas

React: Biblioteca JavaScript para construção de interfaces (via CDN, v18.2.0).

Tailwind CSS: Framework CSS para estilização (via CDN).

Vite: Ferramenta de build para desenvolvimento rápido.

Babel: Transpilador para suportar JSX (via CDN, v7.22.5).

CSS 3D: Estilos personalizados para o carrossel 3D (translateZ, perspective, filter: blur).

HTML5: Estrutura semântica do site.

Markdown: Documentação do projeto.

📂 Estrutura do Projeto

cavaleiros-zodiaco/
├── public/
│ ├── assets/
│ │ ├── images/
│ │ │ ├── cavaleiros1.jpg
│ │ │ ├── cavaleiros2.jpg
│ │ │ ├── cavaleiros3.png
│ │ │ ├── cavaleiros4.png
│ │ │ ├── cavaleiros5.jpg
│ │ │ ├── cavaleiros6.jpg
│ │ │ ├── Seiya.jpg
│ │ │ ├── Shiryu.jpg
│ │ │ ├── Shun de Andromeda.png
│ │ │ ├── Hyoga.jpg
│ │ │ ├── Ikki.jpg
│ │ │ ├── Shaka.png
│ │ │ ├── Saori.jpg
│ │ │ ├── Dohko.png
│ │ │ ├── Shura.jpg
│ │ ├── videos/
│ │ │ ├── video1.mp4
│ ├── wallpapers.jsx
│ ├── index.html
├── README.md
├── package.json
├── vite.config.js

🚀 Como Executar o Projeto

Pré-requisitos

Node.js: Versão 16 ou superior (para usar o Vite).

Navegador Moderno: Chrome, Firefox ou Edge para suporte a CSS 3D.

Git: Para clonar o repositório (opcional).

Passos para Instalação

Clone o Repositório (se já estiver no GitHub):

git clone https://github.com/SEU_USUARIO/cavaleiros-zodiaco.git
cd cavaleiros-zodiaco

Ou copie os arquivos para uma pasta local.

Instale as Dependências:

npm install

Execute o Projeto:

npm run dev

O Vite iniciará um servidor local (geralmente em http://localhost:5173).

Abra o URL no navegador.

Verifique os Assets:

Certifique-se de que as imagens e vídeos estão em public/assets/images e public/assets/videos.

Se necessário, substitua por placeholders (ex.: https://via.placeholder.com/600x400).

Notas

O projeto usa CDNs para React, Tailwind CSS e Babel, então não requer instalação de pacotes adicionais além do Vite.

Para abrir sem Vite, use um servidor local (ex.: npx serve) ou abra index.html diretamente (alguns assets podem não carregar localmente).

🐛 Solução de Problemas

Imagens Não Carregam:

Verifique os caminhos em public/assets/images.

Execute:

dir public\assets\images

Cheque a aba Network (F12) para erros 404.

Carrossel 3D Não Funciona:

Confirme que wallpapers.jsx está em public/ e incluído no index.html.

Inspecione (F12) para verificar se .carousel-item tem translateZ e filter.

Erro de Servidor:

Reinstale as dependências: npm install.

Reinicie o Vite: npm run dev.

Footer Não Visível:

Inspecione <footer> (F12) e verifique CSS (display: none).

📝 Licença

Este projeto é para fins educacionais. Todo conteúdo de imagem e vídeo possui licença livre. © 2025 - Todos os direitos reservados.

🙌 Contribuições

Contribuições são bem-vindas! Para sugerir melhorias:

Faça um fork do repositório.

Crie uma branch: git checkout -b minha-melhoria.

Faça commit: git commit -m "Descrição da melhoria".

Envie para o GitHub: git push origin minha-melhoria.

Abra um Pull Request.

📧 Contato

Autor: Luiz Silva Carvalho

GitHub: [https://github.com/LuizSilvaCarvalho]
