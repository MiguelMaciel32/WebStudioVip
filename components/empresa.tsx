'use client';

import React, { useState } from 'react';

export default function CadastrarEmpresa() {
  const [companyName, setCompanyName] = useState('');
  const [contactInfo, setContactInfo] = useState('');
  const [address, setAddress] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [logo, setLogo] = useState<File | null>(null);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    if (!companyName || !contactInfo || !address || !username || !password || !logo) {
      setError('Todos os campos são obrigatórios.');
      return;
    }

    const formData = new FormData();
    formData.append('companyName', companyName);
    formData.append('contactInfo', contactInfo);
    formData.append('address', address);
    formData.append('username', username);
    formData.append('password', password);
    formData.append('logo', logo);

    try {
      const response = await fetch('/api/cadastrar-empresa', {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) {
        throw new Error('Erro ao cadastrar empresa');
      }

      const result = await response.json();
      if (result.error) {
        setError(result.error);
      } else {
        setSuccess('Empresa cadastrada com sucesso!');
        setCompanyName('');
        setContactInfo('');
        setAddress('');
        setUsername('');
        setPassword('');
        setLogo(null);
      }
    } catch (error) {
    }
  };

  return (
    <section className="px-6 py-4">
      <h1 className="font-bold w-full text-center mt-4 text-3xl tracking-tighter md:text-5xl md:text-start">
        Cadastrar Empresa
      </h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="companyName">Nome da Empresa:</label>
          <input
            id="companyName"
            type="text"
            value={companyName}
            onChange={(e) => setCompanyName(e.target.value)}
            required
            className="border rounded px-2 py-1 w-full"
          />
        </div>
        <div>
          <label htmlFor="contactInfo">Informações de Contato:</label>
          <input
            id="contactInfo"
            type="text"
            value={contactInfo}
            onChange={(e) => setContactInfo(e.target.value)}
            required
            className="border rounded px-2 py-1 w-full"
          />
        </div>
        <div>
          <label htmlFor="address">Endereço:</label>
          <input
            id="address"
            type="text"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            required
            className="border rounded px-2 py-1 w-full"
          />
        </div>
        <div>
          <label htmlFor="username">Nome de Usuário:</label>
          <input
            id="username"
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
            className="border rounded px-2 py-1 w-full"
          />
        </div>
        <div>
          <label htmlFor="password">Senha:</label>
          <input
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="border rounded px-2 py-1 w-full"
          />
        </div>
        <div>
          <label htmlFor="logo">Logo:</label>
          <input
            id="logo"
            type="file"
            onChange={(e) => setLogo(e.target.files ? e.target.files[0] : null)}
            required
            className="border rounded px-2 py-1 w-full"
          />
        </div>
        {error && <p className="text-red-500">{error}</p>}
        {success && <p className="text-green-500">{success}</p>}
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
          Cadastrar
        </button>
      </form>
    </section>
  );
}