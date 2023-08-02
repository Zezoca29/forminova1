import React from 'react';
import './assets/css/App.css';

const PocForm = () => {
  return (
    <div class = "container">
    <h2>Formulário de Prova de Conceito (POC)</h2>
    <form>
    <div className = "question">
        <label for="clientName">Informe o nome do cliente:</label>
        <input
          type="text"
          id="clientName"
          name="clientName"
          required
          value=""
        />
      </div>
      <div className = "question">
        <label for="cnpj">Informe o CNPJ do cliente:</label>
        <input
          type="text"
          id="cnpj"
          name="cnpj"
          required
          pattern="[0-9]{2}\.[0-9]{3}\.[0-9]{3}/[0-9]{4}-[0-9]{2}"
          placeholder="05.703.627/0001-22"
          value=""
        />
      </div>
      <div className = "question">
        <label for="salesRepresentative">Informe quem é o representante comercial:</label>
        <input
          type="text"
          id="salesRepresentative"
          name="salesRepresentative"
          required
          value=""
        />
      </div>
      <div className = "question">
        <label for="sponsor">Quem é o sponsor do projeto (principal representante do cliente) e número de contato?</label>
        <input
          type="text"
          id="sponsor"
          name="sponsor"
          required
          placeholder="Exemplo: JONAS - (11) 97044-2255"
          value=""
        />
      </div>
      <div className = "question">
        <label for="requestedSolution">Qual a solução solicitada?</label>
        <select
          id="requestedSolution"
          name="requestedSolution"
          required
        >
          <option value="">Selecione...</option>
          <option value="Controle de Patrimônio">Controle de Patrimônio</option>
          <option value="Controle de Estoque">Controle de Estoque</option>
          <option value="Controle Logístico">Controle Logístico</option>
          <option value="Controle de Enxoval">Controle de Enxoval</option>
          <option value="Controle de Furto">Controle de Furto</option>
          <option value="Controle de Packs (Têxtil)">Controle de Packs (Têxtil)</option>
          <option value="Controle de Acesso">Controle de Acesso</option>
          <option value="Loja Autônoma">Loja Autônoma</option>
          <option value="Monitoramento">Monitoramento</option>
          <option value="Rastreamento">Rastreamento</option>
          <option value="Outro">Outro</option>
        </select>
      </div>
      <div className = "question">
        <label for="pocDate">Existe data definida para a POC? Se sim, qual?</label>
        <input
          type="text"
          id="pocDate"
          name="pocDate"
          required
          value=""
        />
      </div>
      <div className = "question">
        <label for="applicationContext">Descreva o contexto de aplicação e os pontos a serem controlados:</label>
        <textarea
          id="applicationContext"
          name="applicationContext"
          required
        ></textarea>
      </div>
      <div className = "question">
        <label for="chargeClient">A POC será cobrada do cliente?</label>
        <select
          id="chargeClient"
          name="chargeClient"
          required
        >
          <option value="">Selecione...</option>
          <option value="SIM">SIM</option>
          <option value="NÃO">NÃO</option>
        </select>
      </div>
      <div className = "question">
        <label for="proposalAttachment">Caso possua anexe a proposta comercial:</label>
        <input
          type="file"
          id="proposalAttachment"
          name="proposalAttachment"
          accept=".pdf, .doc, .docx"
        />
      </div>
      <button type="submit">Enviar</button>
    </form>
  </div>
  
  );
};

export default PocForm;
