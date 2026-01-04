import React, { useState } from 'react';
import { Calendar as CalendarIcon, Users, Settings, Clock, MoreVertical, Filter } from 'lucide-react';

export default function DashboardAdmin() {
  const [abaAtiva, setAbaAtiva] = useState('agenda');

  const agendamentosHoje = [
    { id: 1, cliente: "Marcos Oliveira", servico: "Corte Signature", hora: "09:00", status: "Confirmado" },
    { id: 2, cliente: "Ricardo Souza", servico: "Barba & Toalha", hora: "10:30", status: "Confirmado" },
    { id: 3, cliente: "João Pedro", servico: "Combo Aura", hora: "14:00", status: "Aguardando" },
  ];

  return (
    <div className="min-h-screen bg-[#050505] text-zinc-300 flex flex-col md:flex-row font-sans">
      
      {/* Sidebar / Menu Lateral (No celular vira uma barra superior) */}
      <nav className="w-full md:w-64 bg-[#09090b] border-b md:border-r border-zinc-800 p-6 flex md:flex-col justify-between md:justify-start gap-8">
        <div className="flex flex-col">
          <h1 className="text-white font-bold tracking-tighter text-xl">AURA <span className="font-light opacity-50 text-sm">ADMIN</span></h1>
        </div>
        
        <div className="flex md:flex-col gap-4">
          <button className="flex items-center gap-3 text-white bg-zinc-800/50 p-2 rounded-lg w-full">
            <CalendarIcon size={18} /> <span className="hidden md:block text-sm">Agenda</span>
          </button>
          <button className="flex items-center gap-3 text-zinc-500 hover:text-white p-2 w-full transition-all">
            <Users size={18} /> <span className="hidden md:block text-sm">Clientes</span>
          </button>
          <button className="flex items-center gap-3 text-zinc-500 hover:text-white p-2 w-full transition-all">
            <Settings size={18} /> <span className="hidden md:block text-sm">Ajustes</span>
          </button>
        </div>
      </nav>

      {/* Área Principal */}
      <main className="flex-1 p-6 md:p-10 space-y-8">
        
        {/* Cabeçalho do Dia */}
        <header className="flex justify-between items-center">
          <div>
            <h2 className="text-2xl font-semibold text-white">Agenda de Hoje</h2>
            <p className="text-zinc-500 text-sm">Domingo, 04 de Janeiro</p>
          </div>
          <button className="bg-white text-black px-4 py-2 rounded-full text-xs font-bold hover:bg-zinc-200 transition-all flex items-center gap-2">
             Novo Bloqueio
          </button>
        </header>

        {/* Estatísticas Rápidas */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="bg-[#09090b] border border-zinc-800 p-4 rounded-2xl">
            <p className="text-zinc-500 text-[10px] uppercase tracking-widest">Total Hoje</p>
            <p className="text-xl font-bold text-white">12</p>
          </div>
          <div className="bg-[#09090b] border border-zinc-800 p-4 rounded-2xl">
            <p className="text-zinc-500 text-[10px] uppercase tracking-widest">Confirmados</p>
            <p className="text-xl font-bold text-green-500">8</p>
          </div>
        </div>

        {/* Lista de Agendamentos */}
        <div className="space-y-3">
          <div className="flex items-center justify-between text-zinc-500 text-[10px] uppercase tracking-widest px-2">
            <span>Cliente / Serviço</span>
            <span>Horário</span>
          </div>
          
          {agendamentosHoje.map((item) => (
            <div 
              key={item.id} 
              className="bg-[#09090b] border border-zinc-800 p-4 rounded-2xl flex justify-between items-center group hover:border-zinc-500 transition-all"
            >
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-zinc-800 rounded-full flex items-center justify-center text-xs font-bold text-zinc-400">
                  {item.cliente.charAt(0)}
                </div>
                <div>
                  <h4 className="text-zinc-100 font-medium text-sm">{item.cliente}</h4>
                  <p className="text-zinc-500 text-xs">{item.servico}</p>
                </div>
              </div>
              
              <div className="flex items-center gap-6">
                <div className="text-right">
                  <p className="text-white font-mono text-sm">{item.hora}</p>
                  <p className="text-[9px] text-green-500 uppercase font-bold tracking-tighter">{item.status}</p>
                </div>
                <button className="text-zinc-700 hover:text-white">
                  <MoreVertical size={18} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
