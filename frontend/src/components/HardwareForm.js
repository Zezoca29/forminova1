import React from 'react';

const HardwareForm = ({ formData, handleChange, onSubmit, handleFileChange }) => {
  return (
    <div className="container">
      <h2>Venda somente de Hardwares</h2>
      <form onSubmit={onSubmit}>
        <div className="question">
          <label htmlFor="companyName">Nome da Empresa:</label>
          <input
            type="text"
            id="companyName"
            name="companyName"
            value={formData.companyName}
            onChange={handleChange}
            required
          />
        </div>
        <div className="question">
          <label htmlFor="cnpj">CNPJ do Cliente:</label>
          <input
            type="text"
            id="cnpj"
            name="cnpj"
            value={formData.cnpj}
            onChange={handleChange}
            required
            pattern="[0-9]{2}\.[0-9]{3}\.[0-9]{3}/[0-9]{4}-[0-9]{2}"
            placeholder="00.394.460/0058-87"
          />
        </div>
        <div className="question">
          <label htmlFor="vendorName">Nome do Vendedor:</label>
          <input
            type="text"
            id="vendorName"
            name="vendorName"
            value={formData.vendorName}
            onChange={handleChange}
            required
          />
        </div>
        <div className="question">
          <label htmlFor="totalValue">Valor Total Vendido:</label>
          <input
            type="text"
            id="totalValue"
            name="totalValue"
            value={formData.totalValue}
            onChange={handleChange}
            required
          />
        </div>
        <div className="question">
          <label htmlFor="observations">Observações:</label>
          <textarea
            id="observations"
            name="observations"
            value={formData.observations}
            onChange={handleChange}
            required
          ></textarea>
        </div>
        <div className="question">
          <label htmlFor="proposalAttachment">Anexe a proposta comercial:</label>
          <input
            type="file"
            id="proposalAttachment"
            name="proposalAttachment"
            accept=".pdf, .doc, .docx"
            required
            onChange={handleFileChange}
          />
        </div>
      </form>
    </div>
  );
};

export default HardwareForm;
