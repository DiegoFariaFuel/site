# Solviz — site oficial

Site institucional da Solviz, estúdio de desenvolvimento de aplicativos, sites e soluções de inteligência artificial.

## Recursos

- Design responsivo e acessível
- Navegação para desktop e celular
- Tradução para 36 idiomas
- Formulário de contato integrado ao WhatsApp
- Validação dos campos antes do redirecionamento
- Metadados de SEO, Open Graph e dados estruturados
- Publicação estática pela Vercel

## Tecnologias

- HTML5, CSS3 e JavaScript sem dependências
- Google Translate
- WhatsApp para contato
- Vercel

## Executar localmente

O projeto não precisa de instalação nem de etapa de build. Para testar todos os recursos, sirva a pasta com um servidor local:

    python -m http.server 8000

Depois acesse <http://localhost:8000>. Abrir **index.html** diretamente também exibe o site, mas recursos externos podem limitar páginas carregadas pelo protocolo local.

## Fluxo de contato

O visitante preenche nome, e-mail, telefone, empresa, tipo de projeto e mensagem. Ao selecionar **Continuar no WhatsApp**, o site valida os dados e abre uma conversa com a Solviz contendo as informações preenchidas.

Número configurado:

    +55 62 98140-1343

## Idiomas disponíveis

Português, espanhol, inglês, francês, alemão, italiano, holandês, polonês, tcheco, romeno, húngaro, sueco, dinamarquês, finlandês, norueguês, turco, grego, russo, ucraniano, árabe, hebraico, hindi, bengali, tâmil, telugu, guzerate, urdu, tailandês, vietnamita, indonésio, malaio, filipino, coreano, japonês, chinês simplificado e chinês tradicional.

## Publicação

O site está configurado para a Vercel no endereço <https://www.solviz.com.br/>. O domínio raiz <https://solviz.com.br/> deve redirecionar para a versão com **www**.

A publicação usa o modo estático da Vercel, com preset **Other** e sem comando de build. O arquivo **vercel.json** direciona somente a rota inicial para **index.html**.

## Contato

- WhatsApp: (62) 98140-1343

© 2026 Solviz. Todos os direitos reservados.
