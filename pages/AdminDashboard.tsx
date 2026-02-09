
import React from 'react';
import AdminLayout from '../components/AdminLayout';

const AdminDashboard: React.FC = () => {
  return (
    <AdminLayout>
      <div className="flex flex-col md:flex-row items-end justify-between gap-6 mb-12">
        <div>
          <h1 className="text-5xl font-black tracking-tight dark:text-white mb-3">Bem-vindo, Daikô.</h1>
          <p className="text-slate-400 font-medium">Aqui está o resumo do que está acontecendo no seu restaurante hoje.</p>
        </div>
        <div className="bg-emerald-50 dark:bg-emerald-950/30 text-emerald-600 dark:text-emerald-400 px-6 py-3 rounded-2xl border border-emerald-100 dark:border-emerald-900/50 flex items-center gap-4">
           <span className="relative flex h-3 w-3">
             <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
             <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
           </span>
           <span className="text-xs font-black uppercase tracking-widest">Sistema em Tempo Real</span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        {[
          { label: 'Itens no Menu', value: '124', icon: 'restaurant_menu', color: 'bg-blue-500' },
          { label: 'Avaliações', value: '852', icon: 'star', color: 'bg-amber-500' },
          { label: 'Fotos Galeria', value: '42', icon: 'photo_library', color: 'bg-primary' }
        ].map((stat, i) => (
          <div key={i} className="bg-white dark:bg-zinc-900 p-8 rounded-[2.5rem] shadow-xl border border-slate-100 dark:border-zinc-800 hover:scale-[1.02] transition-transform">
            <div className={`w-12 h-12 ${stat.color} text-white rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-${stat.color.split('-')[1]}-500/30`}>
              <span className="material-symbols-outlined">{stat.icon}</span>
            </div>
            <p className="text-xs font-black text-slate-400 uppercase tracking-widest mb-1">{stat.label}</p>
            <p className="text-5xl font-black dark:text-white leading-none">{stat.value}</p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        <div className="bg-white dark:bg-zinc-900 rounded-[2.5rem] shadow-xl border border-slate-100 dark:border-zinc-800 overflow-hidden">
          <div className="p-10 border-b border-slate-50 dark:border-zinc-800 flex justify-between items-center">
            <h3 className="font-black text-xl uppercase tracking-widest dark:text-white">Ações Rápidas</h3>
            <span className="w-2 h-2 rounded-full bg-primary"></span>
          </div>
          <div className="p-6 grid grid-cols-2 gap-4">
            <button className="flex flex-col items-center justify-center p-8 bg-slate-50 dark:bg-zinc-800/50 rounded-3xl hover:bg-primary hover:text-white transition-all gap-4 group">
               <span className="material-symbols-outlined text-3xl">add_circle</span>
               <span className="text-xs font-bold uppercase tracking-widest">Novo Prato</span>
            </button>
            <button className="flex flex-col items-center justify-center p-8 bg-slate-50 dark:bg-zinc-800/50 rounded-3xl hover:bg-primary hover:text-white transition-all gap-4 group">
               <span className="material-symbols-outlined text-3xl">edit_square</span>
               <span className="text-xs font-bold uppercase tracking-widest">Editar Home</span>
            </button>
            <button className="flex flex-col items-center justify-center p-8 bg-slate-50 dark:bg-zinc-800/50 rounded-3xl hover:bg-primary hover:text-white transition-all gap-4 group">
               <span className="material-symbols-outlined text-3xl">stars</span>
               <span className="text-xs font-bold uppercase tracking-widest">Destaques</span>
            </button>
            <button className="flex flex-col items-center justify-center p-8 bg-slate-50 dark:bg-zinc-800/50 rounded-3xl hover:bg-primary hover:text-white transition-all gap-4 group">
               <span className="material-symbols-outlined text-3xl">palette</span>
               <span className="text-xs font-bold uppercase tracking-widest">Identidade</span>
            </button>
          </div>
        </div>

        <div className="bg-white dark:bg-zinc-900 rounded-[2.5rem] shadow-xl border border-slate-100 dark:border-zinc-800 p-10">
          <h3 className="font-black text-xl uppercase tracking-widest dark:text-white mb-10">Últimas Atividades</h3>
          <div className="space-y-8">
            {[
              { text: "Preço do 'Combo Daikô' atualizado", time: "Há 2 horas", icon: "sync" },
              { text: "3 novas fotos adicionadas ao ambiente", time: "Ontem às 18:00", icon: "add_photo_alternate" },
              { text: "Usuário 'João Silva' fez login", time: "Há 5 minutos", icon: "login" }
            ].map((act, i) => (
              <div key={i} className="flex gap-6 items-start">
                <div className="w-10 h-10 rounded-xl bg-slate-50 dark:bg-zinc-800 flex items-center justify-center text-slate-400 shrink-0">
                  <span className="material-symbols-outlined text-xl">{act.icon}</span>
                </div>
                <div>
                  <p className="font-bold text-sm dark:text-white leading-tight">{act.text}</p>
                  <p className="text-[10px] text-slate-400 font-black uppercase tracking-widest mt-1">{act.time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </AdminLayout>
  );
};

export default AdminDashboard;
