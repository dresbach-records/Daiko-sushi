📘 Daikô Sushi Bar – Website

Desenvolvido por Tech Labs Ltda
Versão: 1.0.0
Última atualização: DD/MM/2026

📌 Visão Geral

O site institucional do Daikô Sushi Bar é uma página web corporativa responsiva, construída para apresentar a experiência gastronômica, cardápio, localização e contato do restaurante japonês Daikô Sushi Bar (Taquara/RS – Brasil).

O propósito principal é converter visitas em reservas e pedidos via WhatsApp, além de reforçar a identidade da marca por meio de design visual contemporâneo e UX intuitiva.

Este README descreve estrutura, tecnologia e orientações para uso e edição.

🧱 Estrutura do Projeto
/
├── index.html
├── css/
│   └── style.css
├── assets/
│   ├── images/
│   └── icons/
├── js/
│   └── scripts.js
├── README.md
└── .gitignore

🛠️ Tecnologias Utilizadas
Ferramenta / Linguagem	Função
HTML5	Estrutura semântica da página
CSS3	Estilização e layout
TailwindCSS (CDN)	Biblioteca utilitária para estilo
Google Fonts	Tipografia customizada
Material Symbols	Ícones UI
JavaScript (mínimo)	Interações (Dark Mode, pequenas animações)
Git	Controle de versão
📐 Design & Identidade Visual

Paleta principal: #00C2C7 (Primary), tons claros e escuros para dark mode

Tipografia:

Display: “Plus Jakarta Sans”

Texto base: “Montserrat”

Estilo visual: Moderno, clean, com foco em gastronomia premium

Fonte de imagens: Fotografias do restaurante e pratos

🧩 Seções do Site
📍 1. Navbar (Menu Principal)

Links internos: Início, Cardápio, Experiência, Contato

Tema claro / escuro com toggle

Botão principal: Reservar (WhatsApp)

📍 2. Hero (Página Inicial)

Destaque visual: imagem de buffet

Headline com identidade

CTA: “Reservar Mesa” & “Pedir no WhatsApp”

📍 3. Destaques do Cardápio

Cards com front-end dinâmico com hover

Itens principais (Buffet, Hots, Sushi, Entradas)

Botões para chamar cardápio ou WhatsApp

📍 4. Experiência & Ambiente

Galeria visual

Texto descritivo e avaliação (ex.: ★ 4,3 no Google)

📍 5. Contato & Localização

Endereço completo

Horário de funcionamento

Ações rápidas: Abrir no Maps / Ligar

📍 6. Footer (Rodapé)

Logo

Links institucionais

Newsletter

Direitos autorais

💡 Funcionalidades Principais

✔ Visual responsivo (mobile-first)
✔ Dark Mode ativável
✔ Botões com efeito hover
✔ Seção de navegação interna (âncoras)
✔ Estrutura pronta para SEO local
✔ Priorização de UX focada em conversão

📁 Arquivo CSS Personalizado

O projeto usa Tailwind via CDN mas também inclui um arquivo customizado css/style.css para:

Ajustes visuais além do Tailwind

Transições

Efeitos de hover, dark mode refinado e responsividade

⚙️ Configuração / Instalação

Clone o repositório:

git clone https://github.com/TechOpsLtd/daiko-sushi-bar.git


Acesse a pasta:

cd daiko-sushi-bar


Abra index.html no navegador.

Nota: não é necessária compilação build para a versão atual. Tailwind é consumido via CDN.

📌 Personalização Rápida
🟦 Cores

No style.css ou na Tailwind config:

:root {
  --color-primary: #00C2C7;
  --bg-light: #FAFAFA;
  --bg-dark: #0A0A0A;
}

🔁 Dark Mode

Adicione/remova a classe dark no <html>:

document.documentElement.classList.toggle("dark");

📦 Boas Práticas

✔ Comentar alterações no CSS
✔ Versionar mudanças com Git
✔ Usar imagens otimizadas
✔ Não misturar conteúdos dinâmicos com estáticos sem camada backend

📌 Checklist de Produção

 URLs atualizadas para WhatsApp

 Imagens otimizadas em WebP

 Links internos funcionando

 Teste de responsividade (mobile, tablet, desktop)

 Implementar favicon

❓ Suporte / Contato

Se precisar de ajuda técnica para manter, evoluir ou integrar esse projeto, a Tech Ops Ltda oferece:

📩 Email: suporte@techlbsai.com.br

📞 WhatsApp: +55 (51) 8144-6019

📝 Licença

Este projeto é propriedade da Tech Ops Ltda e Daikô Sushi Bar.
Uso público sob permissão contratual.
