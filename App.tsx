import React, { useState } from 'react';
import { Clock, ChevronRight, CheckCircle2, Calendar } from 'lucide-react';

export default function App() {
  const [etapa, setEtapa] = useState(1);
  const [servico, setServico] = useState(null);

  const listaServicos = [
    { id: 1, nome: "Corte Signature", preco: "R$ 90", tempo: "45 min" },
    { id: 2, nome: "Barba & Toalha", preco: "R$ 60", tempo: "30 min" },
    { id: 3, nome: "Combo Aura", preco: "R$ 140", tempo: "75 min" }
  ];

  return (
    <div className="min-h-screen bg-[#09090b] text-white p-6 font-sans">
      {/* Header */}
      <header className="py-12 text-center">
        <h1 className="text-3xl font-extralight tracking-[0.4em] uppercase">Aura</h1>
        <p className="text-zinc-500 text-[10px] tracking-widest mt-2">PREMIUM GROOMING</p>
      </header>

      {/* ETAPA 1: SERVIÇOS */}
      {etapa === 1 && (
        <div className="space-y-4 max-w-md mx-auto">
          <h2 className="text-sm font-light text-zinc-400 uppercase tracking-widest mb-6">Selecione o Serviço</h2>
          {listaServicos.map((s) => (
            <div 
              key={s.id}
              onClick={() => { setServico(s); setEtapa(2); }}
              className="bg-[#121214] border border-zinc-800 p-5 rounded-2xl flex justify-between items-center active:scale-95 transition-all"
            >
              <div>
                <h3 className="font-medium text-zinc-100">{s.nome}</h3>
                <p className="text-xs text-zinc-500">{s.tempo} • {s.preco}</p>
              </div>
              <ChevronRight size={18} className="text-zinc-700" />
            </div>
          ))}
        </div>
      )}

      {/* ETAPA 2: HORÁRIO */}
      {etapa === 2 && (
        <div className="space-y-6 max-w-md mx-auto">
          <button onClick={() => setEtapa(1)} className="text-zinc-500 text-xs uppercase tracking-widest">← Voltar</button>
          <h2 className="text-sm font-light text-zinc-400 uppercase tracking-widest">Escolha o Horário</h2>
          <div className="grid grid-cols-3 gap-3">
            {['09:00', '10:30', '14:00', '15:30', '17:00', '19:00'].map(hora => (
              <button 
                key={hora}
                onClick={() => setEtapa(3)}
                className="py-4 rounded-xl border border-zinc-800 bg-zinc-900/50 hover:bg-white hover:text-black transition-all text-sm font-mono"
              >
                {hora}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* ETAPA 3: SUCESSO */}
      {etapa === 3 && (
        <div className="text-center space-y-8 py-12 animate-in zoom-in-95">
          <div className="flex justify-center">
            <div className="bg-white/5 p-6 rounded-full">
               <CheckCircle2 size={48} className="text-white" strokeWidth={1} />
            </div>
          </div>
          <div className="space-y-2">
            <h2 className="text-2xl font-light">Confirmado!</h2>
            <p className="text-zinc-500 text-sm px-8">Seu horário foi reservado. Você receberá um lembrete no WhatsApp em breve.</p>
          </div>
          <button 
            onClick={() => setEtapa(1)}
            className="w-full max-w-xs bg-white text-black py-4 rounded-full text-xs font-bold uppercase tracking-widest"
          >
            Voltar ao Início
          </button>
        </div>
      )}
    </div>
  );
}
