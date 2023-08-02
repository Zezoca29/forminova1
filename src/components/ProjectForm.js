import React, { useState } from 'react';
import './assets/css/App.css';
import './assets/js/forms.js';

const ProjectForm = () => {
  const [projectData, setProjectData] = useState({
    clientName: '',
    cnpj: '',
    vendorName: '',
    sponsor: '',
    sponsorContact: '',
    isPartner: '',
    projectTimeline: '',
    requestedSolution: '',
    applicationContext: '',
    erpIntegration: '',
    erpName: '',
    proposalAttachment: null,
    projectBidAttachment: null,
    hasContract: '',
    contractAttachment: null
  });

  const [showElaborarContratoButton, setShowElaborarContratoButton] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setProjectData({ ...projectData, [name]: value });
  };

  const handleFileChange = (event) => {
    const { name, files } = event.target;
    setProjectData({ ...projectData, [name]: files[0] });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Aqui você pode adicionar a lógica para enviar os dados do formulário de Projetos para o backend ou fazer outras ações necessárias
    console.log('Dados do formulário de Projetos enviados:', projectData);
  };

  const handleContractChange = (event) => {
    const value = event.target.value;
    if (value === 'NÃO') {
      setShowElaborarContratoButton(true);
    } else {
      setShowElaborarContratoButton(false);
    }
  };

  return (
    <div className = "container">
  <h2>Solicitações de Projetos</h2>
  <form>
    <div className = "question">
      <label for="clientName">Informe o nome do cliente:</label>
      <input
        type="text"
        id="clientName"
        name="clientName"
        required
      />
    </div>
    <div className = "question">
      <label for="cnpj">Informe o CNPJ:</label>
      <input
        type="text"
        id="cnpj"
        name="cnpj"
        required
        pattern="[0-9]{2}\.[0-9]{3}\.[0-9]{3}/[0-9]{4}-[0-9]{2}"
        placeholder="00.394.460/0058-87"
      />
    </div>
    <div className = "question">
      <label for="vendorName">Informe o nome do vendedor:</label>
      <input
        type="text"
        id="vendorName"
        name="vendorName"
        required
      />
    </div>
    <div className = "question">
      <label for="sponsor">Quem é o sponsor do projeto (principal representante do cliente) e número de contato?</label>
      <input
        type="text"
        id="sponsor"
        name="sponsor"
        required
        placeholder="Exemplo: Jonas - (11) 97044-2255"
      />
    </div>
    <div classname = "question">
      <label for="isPartner">O projeto é proveniente de um parceiro Inovacode?</label>
      <select
        id="isPartner"
        name="isPartner"
        required
      >
        <option value="">Selecione...</option>
        <option value="SIM">SIM</option>
        <option value="NÃO">NÃO</option>
      </select>
    </div>
    <div className = "question">
      <label for="projectTimeline">Qual a expectativa do cliente para o término do projeto?</label>
      <select
        id="projectTimeline"
        name="projectTimeline"
        required
      >
        <option value="">Selecione...</option>
        <option value="Até 30 dias">Até 30 dias</option>
        <option value="1 a 3 meses">1 a 3 meses</option>
        <option value="3 a 6 meses">3 a 6 meses</option>
        <option value="6 meses a 12 meses">6 meses a 12 meses</option>
        <option value="Mais que 12 meses">Mais que 12 meses</option>
        <option value="Outro">Outro</option>
      </select>
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
        <option value="Controle de Packs (Têxtil)">Controle de Packs (Têxtil)</option>
        <option value="Controle de Acesso">Controle de Acesso</option>
        <option value="Controle de Furto">Controle de Furto</option>
        <option value="Loja Autônoma">Loja Autônoma</option>
        <option value="Monitoramento">Monitoramento</option>
        <option value="Rastreamento">Rastreamento</option>
        <option value="Outro">Outro</option>
      </select>
    </div>
    <div className = "question">
      <label for="applicationContext">Descreva o contexto de aplicação:</label>
      <textarea
        id="applicationContext"
        name="applicationContext"
        required
      ></textarea>
    </div>
    <div className = "question">
      <label for="erpIntegration">Haverá integração com o ERP?</label>
      <select
        id="erpIntegration"
        name="erpIntegration"
        required
      >
        <option value="">Selecione...</option>
        <option value="SIM">SIM</option>
        <option value="NÃO">NÃO</option>
      </select>
    </div>
    <div className = "question">
      <label for="erpName">Se sim, qual o nome do ERP?</label>
      <input
        type="text"
        id="erpName"
        name="erpName"
      />
    </div>
    <div className = "question">
      <label for="proposalAttachment">Anexe a proposta comercial:</label>
      <input
        type="file"
        id="proposalAttachment"
        name="proposalAttachment"
        accept=".pdf, .doc, .docx"
        required
      />
    </div>
    <div className = "question">
      <label for="projectBidAttachment">Caso possua, anexe o edital do projeto:</label>
      <input
        type="file"
        id="projectBidAttachment"
        name="projectBidAttachment"
        accept=".pdf, .doc, .docx"
      />
    </div>
    <div className="question">
        <label htmlFor="hasContract">O projeto possui contrato?</label>
        <select
          id="hasContract"
          name="hasContract"
          required
          onChange={handleContractChange} // Adicionamos o evento onChange para a função handleContractChange
        >
    <option value="">Selecione...</option>
    <option value="SIM">SIM</option>
    <option value="NÃO">NÃO</option>
    <option value="JÁ FOI SOLICITADO">JÁ FOI SOLICITADO</option>
  </select>
</div>

{showElaborarContratoButton && (
        <div id="elaborarContratoDiv">
          <a href="https://docs.google.com/document/d/1qJH6BcBsEOk__X3F8V2KAIS3z2BmnqG7/edit?usp=share_link&ouid=110475971778171162377&rtpof=true&sd=true" className="elaborarContratoButton">Elaborar Contrato</a>
        </div>
      )}

    <div className = "question">
      <label for="contractAttachment">Anexe o contrato:</label>
      <input
        type="file"
        id="contractAttachment"
        name="contractAttachment"
        accept=".pdf, .doc, .docx"
      />
    </div>
    <button type="submit">Enviar</button>
  </form>
</div>

  );
};

export default ProjectForm;
