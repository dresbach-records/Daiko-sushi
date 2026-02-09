
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { IMAGES } from '../constants';

const AdminLogin: React.FC<{ onLogin: () => void }> = ({ onLogin }) => {
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    onLogin();
    navigate('/admin');
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-zinc-950 flex flex-col items-center justify-center p-6 font-jakarta">
      <div className="w-full max-w-lg">
        <div className="text-center mb-12">
           <div className="inline-flex items-center justify-center w-20 h-20 bg-primary rounded-[2rem] shadow-2xl shadow-primary/40 mb-8">
             <span className="material-symbols-outlined text-white text-4xl">lock_open</span>
           </div>
           <h1 className="text-4xl font-black tracking-tight dark:text-white mb-2">Painel de Controle</h1>
           <p className="text-slate-400 font-medium">Insira suas credenciais para gerenciar o Daikô.</p>
        </div>

        <div className="bg-white dark:bg-zinc-900 p-12 rounded-[3rem] shadow-2xl border border-slate-100 dark:border-zinc-800">
           <form onSubmit={handleLogin} className="space-y-8">
              <div>
                 <label className="block text-[10px] font-black uppercase text-slate-400 tracking-[0.2em] mb-4">Identificação de Acesso</label>
                 <div className="relative group">
                    <span className="material-symbols-outlined absolute left-5 top-1/2 -translate-y-1/2 text-slate-300 group-focus-within:text-primary transition-colors">alternate_email</span>
                    <input 
                      type="email" 
                      placeholder="seu@email.com.br"
                      className="w-full pl-14 pr-6 py-5 bg-slate-50 dark:bg-zinc-800/50 border border-slate-100 dark:border-zinc-800 rounded-2xl outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary dark:text-white transition-all font-medium" 
                    />
                 </div>
              </div>

              <div>
                 <div className="flex justify-between items-center mb-4">
                    <label className="text-[10px] font-black uppercase text-slate-400 tracking-[0.2em]">Sua Senha</label>
                    <a href="#" className="text-[10px] font-black text-primary hover:underline uppercase tracking-widest">Esqueceu?</a>
                 </div>
                 <div className="relative group">
                    <span className="material-symbols-outlined absolute left-5 top-1/2 -translate-y-1/2 text-slate-300 group-focus-within:text-primary transition-colors">lock</span>
                    <input 
                      type="password" 
                      placeholder="••••••••"
                      className="w-full pl-14 pr-6 py-5 bg-slate-50 dark:bg-zinc-800/50 border border-slate-100 dark:border-zinc-800 rounded-2xl outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary dark:text-white transition-all font-medium" 
                    />
                 </div>
              </div>

              <button type="submit" className="w-full py-6 bg-primary text-white font-black rounded-2xl shadow-2xl shadow-primary/30 hover:scale-[1.02] active:scale-95 transition-all text-sm tracking-[0.2em] uppercase">
                Acessar Painel
              </button>
           </form>
        </div>
        
        <p className="text-center mt-12 text-slate-400 text-xs font-medium">
          Daikô Sushi Bar &copy; 2026. Versão 2.4.0
        </p>
      </div>
    </div>
  );
};

export default AdminLogin;
