import React, { useState } from 'react';
import ProjectForm from './components/ProjectForm';
import HardwareForm from './components/HardwareForm';
import PocForm from './components/PocForm';
import './components/assets/css/App.css';
import LogoInovacode from './components/assets/logo/logo2.0.png';


function App() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    requestType: ''
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Dados do formulário enviados:', formData);
  };

  const renderFormBasedOnRequestType = () => {
    switch (formData.requestType) {
      case 'Projeto Vendido':
      case 'Projeto PRO BONO (sem custo)':
      case 'Projeto Piloto':
        return <ProjectForm />;
      case 'Venda somente de hardwares':
        return <HardwareForm />;
      case 'Prova de conceito (POC)':
        return <PocForm />;
      default:
        return null;
    }
  };

  return (
    <div className="container-outer">
      <div className="App">
      <img src={LogoInovacode} alt="Inovacode Logo" width="150" height="60" />

      <h1>Formulário de Solicitação</h1>
      <form onSubmit={handleSubmit}>
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
            <option value="">Selecione...</option>
            <option value="Projeto Vendido">Projeto Vendido</option>
            <option value="Venda somente de hardwares">Venda somente de hardwares</option>
            <option value="Prova de conceito (POC)">Prova de conceito (POC)</option>
            <option value="Projeto PRO BONO (sem custo)">Projeto PRO BONO (sem custo)</option>
            <option value="Projeto Piloto">Projeto Piloto</option>
          </select>
        </div>
        <button type="submit">Enviar</button>
      </form>
      {renderFormBasedOnRequestType()}
    </div>
    </div>
  );
}

export default App;
