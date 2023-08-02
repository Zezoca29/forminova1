import React from 'react';
import './assets/css/App.css';

const HardwareForm = () => {
  return (
    <div className = "container">
  <h2>Formulário de Venda de Hardwares</h2>
  <form>
    <div className = "question">
      <label for="companyName">Informe o nome da Empresa:</label>
      <input
        type="text"
        id="companyName"
        name="companyName"
        required
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
      <label for="totalValue">Informe o valor total vendido:</label>
      <input
        type="number"
        id="totalValue"
        name="totalValue"
        step="0.01"
        required
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
      <label for="observations">Campo livre para observações:</label>
      <textarea
        id="observations"
        name="observations"
      ></textarea>
    </div>
    <button type="submit">Enviar</button>
  </form>
</div>

  );
};

export default HardwareForm;
