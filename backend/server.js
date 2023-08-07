const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

// ...
app.post('/api/enviar-email', (req, res) => {
  const { requestType } = req.body;

  // Verificar se os campos obrigatórios estão presentes no formulário
  if (!requestType) {
    return res.status(400).json({ error: 'Tipo de solicitação não fornecido' });
  }

  // Campos adicionais dependendo do tipo de solicitação
  let camposAdicionais = {};
  if (requestType === 'Projeto Vendido') {
    camposAdicionais = {
      nomeProjeto: req.body.nomeProjeto,
      nomeEmpresa: req.body.nomeEmpresa,
      cnpj: req.body.cnpj,
      nomeVendedor: req.body.nomeVendedor,
      valorTotal: req.body.valorTotal,
      anexoProposta: req.body.anexoProposta,
      observacoes: req.body.observacoes,
    };
  } else if (requestType === 'Venda somente de hardwares') {
    camposAdicionais = {
      nomeEmpresa: req.body.nomeEmpresa,
      cnpj: req.body.cnpj,
      nomeVendedor: req.body.nomeVendedor,
      valorTotal: req.body.valorTotal,
      anexoProposta: req.body.anexoProposta,
      observacoes: req.body.observacoes,
    };
  } else if (requestType === 'Prova de conceito (POC)') {
    camposAdicionais = {
      nomeCliente: req.body.nomeCliente,
      cnpjCliente: req.body.cnpjCliente,
      representanteComercial: req.body.representanteComercial,
      patrocinadorProjeto: req.body.patrocinadorProjeto,
      solucaoSolicitada: req.body.solucaoSolicitada,
      dataPOC: req.body.dataPOC,
      contextoAplicacao: req.body.contextoAplicacao,
      pocSeraCobrada: req.body.pocSeraCobrada,
    };
  } else {
    // Tipo de formulário não reconhecido
    return res.status(400).json({ error: 'Tipo de formulário não reconhecido' });
  }

  // Combinar campos básicos com campos adicionais
  const formData = {
    nome: req.body.nome,
    email: req.body.email,
    tipoSolicitacao: requestType,
    nomeCliente: req.body.nomeCliente,
      cnpjCliente: req.body.cnpjCliente,
      representanteComercial: req.body.representanteComercial,
      patrocinadorProjeto: req.body.patrocinadorProjeto,
      solucaoSolicitada: req.body.solucaoSolicitada,
      dataPOC: req.body.dataPOC,
      contextoAplicacao: req.body.contextoAplicacao,
      pocSeraCobrada: req.body.pocSeraCobrada,
  };

  // Configurações do serviço de email
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'projetointernoinova@gmail.com', // Substitua pelo seu email de envio
      pass: 'cuvalcepgllvuldf', // Substitua pela senha do seu email de envio
    },
  });

  // Montar o texto do email como JSON
  const mailOptions = {
    from: 'projetointernoinova@gmail.com',
    to: 'projetointernoinova@gmail.com',
    subject: 'Formulário de Solicitação',
    text: JSON.stringify(formData, null, 2), // O segundo parâmetro é para formatar o JSON com 2 espaços de indentação
  };

  // Enviar o email
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log('Erro ao enviar o email:', error);
      res.status(500).json({ error: 'Erro ao enviar o email' });
    } else {
      console.log('Email enviado com sucesso:', info.response);
      res.json({ message: 'Email enviado com sucesso' });
    }
  });
});

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
