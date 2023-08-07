import React, { useState } from 'react';
import ProjectForm from './components/ProjectForm';
import HardwareForm from './components/HardwareForm';
import PocForm from './components/PocForm';
import FormDataDisplay from './components/FormDataDisplay';
import './components/assets/css/App.css';
import LogoInovacode from './components/assets/logo/logo2.0.png';
import axios from 'axios';

function App() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    requestType: '',
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  
    // Specific handling for requestType
    if (name === 'requestType') {
      // Reset additional fields based on requestType
      setFormData((prevFormData) => {
        if (value === 'Projeto Vendido') {
          return { ...prevFormData, projectName: '', companyName: '', cnpj: '', vendorName: '', totalValue: '', observations: '' };
        } else if (value === 'Venda somente de hardwares') {
          return { ...prevFormData, companyName: '', cnpj: '', vendorName: '', totalValue: '', observations: '' };
        } else if (value === 'Prova de conceito (POC)') {
          return { ...prevFormData, clientName: '', cnpj: '', salesRepresentative: '', sponsor: '', requestedSolution: '', pocDate: '', applicationContext: '', chargeClient: '' };
        } else {
          return prevFormData;
        }
      });
    }
  };
  

  const handleFormSubmit = () => {
    // Combinar campos básicos com campos adicionais
    let additionalFields = {};
    if (formData.requestType === 'Projeto Vendido') {
      additionalFields = {
        projectName: formData.projectName,
        companyName: formData.companyName,
        cnpj: formData.cnpj,
        vendorName: formData.vendorName,
        totalValue: formData.totalValue,
        observations: formData.observations,
      };
    } else if (formData.requestType === 'Venda somente de hardwares' || formData.requestType === 'Projeto PRO BONO (sem custo)') {
      additionalFields = {
        companyName: formData.companyName,
        cnpj: formData.cnpj,
        vendorName: formData.vendorName,
        totalValue: formData.totalValue,
        observations: formData.observations,
      };
    } else if (formData.requestType === 'Prova de conceito (POC)') {
      additionalFields = {
        clientName: formData.clientName,
        cnpj: formData.cnpj,
        salesRepresentative: formData.salesRepresentative,
        sponsor: formData.sponsor,
        requestedSolution: formData.requestedSolution,
        pocDate: formData.pocDate,
        applicationContext: formData.applicationContext,
        chargeClient: formData.chargeClient,
      };
    } else {
      return alert('Tipo de solicitação inválido');
    }

    const finalFormData = {
      name: formData.name,
      email: formData.email,
      requestType: formData.requestType,
      ...additionalFields,
    };

    axios
      .post('http://localhost:5000/api/send-email', finalFormData)
      .then((response) => {
        console.log('Resposta do backend:', response.data);
        alert('Formulário enviado com sucesso! Verifique seu email.');
      })
      .catch((error) => {
        console.error('Erro ao enviar o formulário:', error);
        alert('Ocorreu um erro ao enviar o formulário. Tente novamente mais tarde.');
      });
  };

  const renderFormBasedOnRequestType = () => {
    switch (formData.requestType) {
      case 'Projeto Vendido':
        return <ProjectForm formData={formData} handleChange={handleChange} onSubmit={handleFormSubmit} />;
      case 'Venda somente de hardwares':
        return <HardwareForm formData={formData} handleChange={handleChange} onSubmit={handleFormSubmit} />;
      case 'Projeto Piloto':
        return <ProjectForm formData={formData} handleChange={handleChange} onSubmit={handleFormSubmit} />;
      case 'Projeto PRO BONO (sem custo)':
        <ProjectForm formData={formData} handleChange={handleChange} onSubmit={handleFormSubmit} />;
      case 'Prova de conceito (POC)':
        return <PocForm formData={formData} handleChange={handleChange} onSubmit={handleFormSubmit} />;
      default:
        return null;
    }
  };

  return (
    <div className="container-outer">
      <div className="App">
        <img src={LogoInovacode} alt="Inovacode Logo" width="150" height="60" />

        <h1>Formulário de Solicitação</h1>
        <form onSubmit={handleFormSubmit}>
          <div>
            <label htmlFor="name">Nome:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label htmlFor="email">E-mail:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label htmlFor="requestType">Tipo de Solicitação:</label>
            <select
              id="requestType"
              name="requestType"
              value={formData.requestType}
              onChange={handleChange}
              required
            >
              <option value="">Selecione o tipo de solicitação</option>
              <option value="Projeto Vendido">Projeto Vendido</option>
              <option value="Venda somente de hardwares">Venda somente de hardwares</option>
              <option value="Projeto PRO BONO (sem custo)">Projeto PRO BONO (sem custo)</option>
              <option value="Prova de conceito (POC)">Prova de conceito (POC)</option>
              <option value="Projeto Piloto">Projeto Piloto</option>
            </select>
          </div>

          {renderFormBasedOnRequestType()}
          <button type="submit">Enviar</button>
          <FormDataDisplay formData={formData} />
        </form>
      </div>
    </div>
  );
}

export default App;
