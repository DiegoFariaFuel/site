// CÓDIGO PARA GOOGLE APPS SCRIPT
// Cole este código no editor do Google Apps Script

function doPost(e) {
  try {
    // Configurações - ALTERE AQUI O SEU EMAIL
    const EMAIL_DESTINO = "suportesolviz@gmail.com";
    
    // Obter dados do formulário
    const params = e.parameter;
    const nome = params.nome || '';
    const email = params.email || '';
    const telefone = params.telefone || '';
    const empresa = params.empresa || 'Não informado';
    const tipo = params.tipo || '';
    const mensagem = params.mensagem || '';
    
    // Mapear tipos de projeto
    const tiposProjeto = {
      'app-mobile': 'App Mobile',
      'site': 'Site / Plataforma Web',
      'sistema': 'Sistema sob Medida',
      'outro': 'Outro'
    };
    const tipoFormatado = tiposProjeto[tipo] || tipo;
    
    // Criar corpo do email em HTML
    const corpoEmail = `
      <html>
        <head>
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background: linear-gradient(120deg, #ffb648, #ff6b4a); color: #fff; padding: 20px; border-radius: 8px 8px 0 0; }
            .header h2 { margin: 0; font-size: 24px; }
            .content { background: #f5f5f5; padding: 25px; border-radius: 0 0 8px 8px; }
            .field { margin-bottom: 18px; background: #fff; padding: 15px; border-radius: 6px; border-left: 4px solid #ffb648; }
            .field-label { font-weight: bold; color: #555; font-size: 12px; text-transform: uppercase; margin-bottom: 5px; }
            .field-value { color: #333; font-size: 15px; }
            .message-box { background: #fff; padding: 18px; border-radius: 6px; margin-top: 20px; border: 1px solid #ddd; }
            .footer { text-align: center; margin-top: 20px; font-size: 12px; color: #999; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h2>📧 Novo contato do site Solviz</h2>
            </div>
            <div class="content">
              <div class="field">
                <div class="field-label">Nome completo</div>
                <div class="field-value">${nome}</div>
              </div>
              
              <div class="field">
                <div class="field-label">E-mail</div>
                <div class="field-value"><a href="mailto:${email}">${email}</a></div>
              </div>
              
              <div class="field">
                <div class="field-label">Telefone / WhatsApp</div>
                <div class="field-value">
                  <a href="https://wa.me/${telefone.replace(/\D/g, '')}">${telefone}</a>
                </div>
              </div>
              
              <div class="field">
                <div class="field-label">Empresa</div>
                <div class="field-value">${empresa}</div>
              </div>
              
              <div class="field">
                <div class="field-label">Tipo de projeto</div>
                <div class="field-value">${tipoFormatado}</div>
              </div>
              
              <div class="message-box">
                <div class="field-label" style="margin-bottom: 10px;">Mensagem do projeto</div>
                <div class="field-value">${mensagem.replace(/\n/g, '<br>')}</div>
              </div>
              
              <div class="footer">
                <p>Este e-mail foi enviado automaticamente através do formulário de contato do site Solviz.</p>
                <p>Data: ${new Date().toLocaleString('pt-BR', { timeZone: 'America/Sao_Paulo' })}</p>
              </div>
            </div>
          </div>
        </body>
      </html>
    `;
    
    // Enviar email
    GmailApp.sendEmail(
      EMAIL_DESTINO,
      `🌟 Novo contato: ${nome} - ${tipoFormatado}`,
      `Novo contato recebido do site.\n\nNome: ${nome}\nEmail: ${email}\nTelefone: ${telefone}\nEmpresa: ${empresa}\nTipo: ${tipoFormatado}\n\nMensagem:\n${mensagem}`,
      {
        htmlBody: corpoEmail,
        name: 'Site Solviz',
        replyTo: email
      }
    );
    
    // Retornar sucesso
    return ContentService
      .createTextOutput(JSON.stringify({ 
        status: 'success', 
        message: 'E-mail enviado com sucesso!' 
      }))
      .setMimeType(ContentService.MimeType.JSON);
      
  } catch (error) {
    // Retornar erro
    return ContentService
      .createTextOutput(JSON.stringify({ 
        status: 'error', 
        message: error.toString() 
      }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

// Função para testar (opcional)
function testarEnvio() {
  const teste = {
    parameter: {
      nome: "João da Silva",
      email: "joao@exemplo.com",
      telefone: "(62) 98140-1343",
      empresa: "Empresa Teste LTDA",
      tipo: "app-mobile",
      mensagem: "Este é um teste de envio do formulário."
    }
  };
  
  const resultado = doPost(teste);
  Logger.log(resultado.getContent());
}
