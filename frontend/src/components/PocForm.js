import React from 'react';

const PocForm = ({ formData, handleChange, handleFileChange, onSubmit }) => {
  return (
    <div className="container">
      <h2>Solicitações de Prova de Conceito (POC)</h2>
      <form onSubmit={onSubmit}>
        <div className="question">
          <label htmlFor="clientName">Nome do Cliente:</label>
          <input
            type="text"
            id="clientName"
            name="clientName"
            value={formData.clientName}
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
          <label htmlFor="salesRepresentative">Representante Comercial:</label>
          <input
            type="text"
            id="salesRepresentative"
            name="salesRepresentative"
            value={formData.salesRepresentative}
            onChange={handleChange}
            required
          />
        </div>
        <div className="question">
          <label htmlFor="sponsor">Sponsor do Projeto:</label>
          <input
            type="text"
            id="sponsor"
            name="sponsor"
            value={formData.sponsor}
            onChange={handleChange}
            required
          />
        </div>
        <div className="question">
          <label htmlFor="requestedSolution">Solução Solicitada:</label>
          <input
            type="text"
            id="requestedSolution"
            name="requestedSolution"
            value={formData.requestedSolution}
            onChange={handleChange}
            required
          />
        </div>
        <div className="question">
          <label htmlFor="pocDate">Data da POC:</label>
          <input
            type="date"
            id="pocDate"
            name="pocDate"
            value={formData.pocDate}
            onChange={handleChange}
            required
          />
        </div>
        <div className="question">
          <label htmlFor="applicationContext">Contexto de Aplicação:</label>
          <textarea
            id="applicationContext"
            name="applicationContext"
            value={formData.applicationContext}
            onChange={handleChange}
            required
          ></textarea>
        </div>
        <div className="question">
          <label htmlFor="chargeClient">POC será cobrada do cliente:</label>
          <select
            id="chargeClient"
            name="chargeClient"
            value={formData.chargeClient}
            onChange={handleChange}
            required
          >
            <option value="">Selecione</option>
            <option value="Sim">Sim</option>
            <option value="Não">Não</option>
          </select>
        </div>
      </form>
    </div>
  );
};

export default PocForm;
