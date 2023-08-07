import React from 'react';

const FormDataDisplay = ({ formData }) => {
  return (
    <div>
      <h2>Dados do formulário enviados:</h2>
      <p>
        <strong>Nome:</strong> {formData.name}
      </p>
      <p>
        <strong>E-mail:</strong> {formData.email}
      </p>
      <p>
        <strong>Tipo de Solicitação:</strong> {formData.requestType}
      </p>
      {(formData.requestType === 'Projeto Vendido' || formData.requestType === 'Projeto Piloto' || formData.requestType === 'PRO Bono (sem custo)') && (
        <>
          <p>
            <strong>Nome da Empresa:</strong> {formData.companyName}
          </p>
          <p>
            <strong>CNPJ do Cliente:</strong> {formData.cnpj}
          </p>
          <p>
            <strong>Nome do Vendedor:</strong> {formData.vendorName}
          </p>
          <p>
            <strong>Valor Total Vendido:</strong> {formData.totalValue}
          </p>
          <p>
            <strong>Observações:</strong> {formData.observations}
          </p>
        </>
      )}
      {formData.requestType === 'Venda somente de hardwares' && (
        <>
          <p>
            <strong>Nome da Empresa:</strong> {formData.companyName}
          </p>
          <p>
            <strong>CNPJ do Cliente:</strong> {formData.cnpj}
          </p>
          <p>
            <strong>Nome do Vendedor:</strong> {formData.vendorName}
          </p>
          <p>
            <strong>Valor Total Vendido:</strong> {formData.totalValue}
          </p>
          <p>
            <strong>Observações:</strong> {formData.observations}
          </p>
        </>
      )}
      {formData.requestType === 'Prova de conceito (POC)' && (
        <>
          <p>
            <strong>Nome do Cliente:</strong> {formData.clientName}
          </p>
          <p>
            <strong>CNPJ do Cliente:</strong> {formData.cnpj}
          </p>
          <p>
            <strong>Representante Comercial:</strong> {formData.salesRepresentative}
          </p>
          <p>
            <strong>Sponsor do Projeto:</strong> {formData.sponsor}
          </p>
          <p>
            <strong>Solução Solicitada:</strong> {formData.requestedSolution}
          </p>
          <p>
            <strong>Data da POC:</strong> {formData.pocDate}
          </p>
          <p>
            <strong>Contexto de Aplicação:</strong> {formData.applicationContext}
          </p>
          <p>
            <strong>POC será cobrada do cliente:</strong> {formData.chargeClient}
          </p>
        </>
      )}
    </div>
  );
};

export default FormDataDisplay;
