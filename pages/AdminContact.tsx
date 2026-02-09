
import React from 'react';
import AdminLayout from '../components/AdminLayout';

const AdminContact: React.FC = () => {
  return (
    <AdminLayout>
      <header className="mb-10">
        <h1 className="text-4xl font-black tracking-tight dark:text-white mb-2">Contato & Localização</h1>
        <p className="text-slate-500">Configure como os clientes encontram e entram em contato.</p>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
        <div className="lg:col-span-7 space-y-10">
          <section className="bg-white dark:bg-slate-800 rounded-[2.5rem] border border-slate-100 dark:border-slate-700 p-8 shadow-xl">
             <div className="flex items-center gap-4 mb-8">
               <span className="material-symbols-outlined text-primary text-3xl">pin_drop</span>
               <h3 className="text-xl font-black dark:text-white uppercase tracking-wider">Localização</h3>
             </div>
             <div className="space-y-8">
                <div>
                  <label className="block text-[10px] font-black uppercase tracking-widest text-slate-500 mb-4">Endereço Completo</label>
                  <div className="relative group">
                    <input className="w-full bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-2xl p-4 text-sm dark:text-white outline-none focus:ring-2 focus:ring-primary transition-all" value="R. Marechal Floriano, 1234 - Taquara, RS" />
                    <span className="material-symbols-outlined absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-primary transition-colors">map</span>
                  </div>
                </div>
                <div>
                  <label className="block text-[10px] font-black uppercase tracking-widest text-slate-500 mb-4">Embed Google Maps</label>
                  <textarea className="w-full bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-2xl p-4 text-xs font-mono dark:text-slate-300 outline-none focus:ring-2 focus:ring-primary transition-all min-h-[100px]" placeholder="Cole o código do iframe aqui..." defaultValue='<iframe src="https://www.google.com/maps/embed?..." width="600" height="450"></iframe>' />
                </div>
             </div>
          </section>

          <section className="bg-white dark:bg-slate-800 rounded-[2.5rem] border border-slate-100 dark:border-slate-700 p-8 shadow-xl">
             <div className="flex items-center gap-4 mb-8">
               <span className="material-symbols-outlined text-primary text-3xl">call</span>
               <h3 className="text-xl font-black dark:text-white uppercase tracking-wider">Canais de Atendimento</h3>
             </div>
             <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                <div>
                   <label className="block text-[10px] font-black uppercase tracking-widest text-slate-500 mb-4">WhatsApp Business</label>
                   <input className="w-full bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-2xl p-4 text-sm dark:text-white" value="(51) 99876-5432" />
                </div>
                <div>
                   <label className="block text-[10px] font-black uppercase tracking-widest text-slate-500 mb-4">Telefone Fixo</label>
                   <input className="w-full bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-2xl p-4 text-sm dark:text-white" value="(51) 3541-0000" />
                </div>
             </div>
             <div className="p-6 bg-emerald-50 dark:bg-emerald-950/20 border border-emerald-100 dark:border-emerald-900/30 rounded-3xl flex items-center justify-between">
                <div className="flex gap-4 items-center">
                  <div className="w-12 h-12 bg-emerald-500 text-white rounded-2xl flex items-center justify-center shadow-lg shadow-emerald-500/30">
                    <span className="material-symbols-outlined">chat_bubble</span>
                  </div>
                  <div>
                    <p className="font-black text-sm dark:text-white">Botão Flutuante de WhatsApp</p>
                    <p className="text-xs text-slate-500">Exibir ícone flutuante no site para fácil contato.</p>
                  </div>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input type="checkbox" checked className="sr-only peer" />
                  <div className="w-12 h-6 bg-slate-300 dark:bg-slate-700 rounded-full peer peer-checked:bg-emerald-500 peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-1 after:left-1 after:bg-white after:rounded-full after:h-4 after:w-4 after:transition-all"></div>
                </label>
             </div>
          </section>
        </div>

        <div className="lg:col-span-5">
          <section className="bg-white dark:bg-slate-800 rounded-[2.5rem] border border-slate-100 dark:border-slate-700 overflow-hidden shadow-xl">
            <div className="p-8 border-b border-slate-100 dark:border-slate-700 bg-slate-50/50 dark:bg-slate-900/30 flex items-center gap-4">
              <span className="material-symbols-outlined text-primary">schedule</span>
              <h3 className="font-black text-lg dark:text-white uppercase tracking-widest">Horário de Funcionamento</h3>
            </div>
            <div className="p-8 divide-y divide-slate-100 dark:divide-slate-700">
              {['Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado', 'Domingo'].map((day) => (
                <div key={day} className="py-5 flex items-center justify-between gap-6">
                   <p className={`text-sm font-black w-20 ${day === 'Sexta' || day === 'Sábado' ? 'text-primary' : 'text-slate-600 dark:text-slate-300'}`}>{day}</p>
                   <div className={`flex-1 flex items-center gap-3 ${day === 'Segunda' ? 'opacity-30' : ''}`}>
                      <input className="w-full bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl px-4 py-2 text-center text-xs dark:text-white" disabled={day === 'Segunda'} value={day === 'Segunda' ? '--' : '19:00'} />
                      <span className="text-slate-400 text-[10px] font-black uppercase">às</span>
                      <input className="w-full bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl px-4 py-2 text-center text-xs dark:text-white" disabled={day === 'Segunda'} value={day === 'Segunda' ? '--' : (day === 'Sexta' || day === 'Sábado' ? '00:00' : '23:30')} />
                   </div>
                   <div className="flex items-center gap-3">
                      <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Fechado</span>
                      <input type="checkbox" checked={day === 'Segunda'} className="h-5 w-5 rounded-lg text-primary border-slate-300 focus:ring-primary" />
                   </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </AdminLayout>
  );
};

export default AdminContact;
