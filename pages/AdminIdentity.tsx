
import React from 'react';
import AdminLayout from '../components/AdminLayout';
import { IMAGES } from '../constants';

const AdminIdentity: React.FC = () => {
  return (
    <AdminLayout>
      <header className="mb-10">
        <h1 className="text-4xl font-black tracking-tight dark:text-white mb-2">Identidade Visual</h1>
        <p className="text-slate-500">Configure as diretrizes de design, cores e tipografia da marca.</p>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        <div className="lg:col-span-2 space-y-10">
          <section className="bg-white dark:bg-slate-800 rounded-[2.5rem] border border-slate-100 dark:border-slate-700 p-8 shadow-xl">
            <div className="flex items-center justify-between mb-8">
              <h3 className="text-xl font-black dark:text-white flex items-center gap-3">
                <span className="material-symbols-outlined text-primary">image</span> Logotipo
              </h3>
              <button className="text-xs font-black text-primary hover:underline uppercase tracking-widest">Download Kit</button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Versão Escura (Fundo Claro)</p>
                <div className="aspect-video bg-white rounded-3xl border-2 border-dashed border-slate-200 flex flex-col items-center justify-center p-6 group cursor-pointer hover:border-primary transition-colors">
                  <img src={IMAGES.LOGO} className="h-16 w-auto grayscale opacity-90" alt="Logo Dark" />
                  <button className="mt-6 px-4 py-2 bg-slate-50 text-[10px] font-black rounded-xl hover:bg-primary hover:text-white transition-all uppercase">Alterar Logo</button>
                </div>
              </div>
              <div className="space-y-4">
                <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Versão Clara (Fundo Escuro)</p>
                <div className="aspect-video bg-slate-900 rounded-3xl border-2 border-dashed border-slate-700 flex flex-col items-center justify-center p-6 group cursor-pointer hover:border-primary transition-colors">
                  <img src={IMAGES.LOGO} className="h-16 w-auto brightness-0 invert opacity-90" alt="Logo Light" />
                  <button className="mt-6 px-4 py-2 bg-slate-800 text-[10px] font-black rounded-xl text-white hover:bg-primary transition-all uppercase">Alterar Logo</button>
                </div>
              </div>
            </div>
          </section>

          <section className="bg-white dark:bg-slate-800 rounded-[2.5rem] border border-slate-100 dark:border-slate-700 p-8 shadow-xl">
             <h3 className="text-xl font-black dark:text-white flex items-center gap-3 mb-8">
                <span className="material-symbols-outlined text-primary">colorize</span> Cores da Marca
             </h3>
             <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                  { label: 'Cor Primária', color: '#00C2C7' },
                  { label: 'Cor Secundária', color: '#211111' },
                  { label: 'Cor de Destaque', color: '#D4AF37' }
                ].map((c, i) => (
                  <div key={i} className="space-y-4">
                    <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest">{c.label}</label>
                    <div className="flex items-center gap-4 p-3 bg-slate-50 dark:bg-slate-900 rounded-2xl border border-slate-100 dark:border-slate-700">
                      <div className="w-10 h-10 rounded-xl shadow-inner" style={{backgroundColor: c.color}}></div>
                      <input className="bg-transparent border-none text-sm font-mono focus:ring-0 p-0 w-24 dark:text-white" value={c.color} />
                    </div>
                  </div>
                ))}
             </div>
          </section>
        </div>

        <div className="lg:col-span-1">
          <div className="sticky top-24 bg-white dark:bg-slate-800 rounded-[2.5rem] border border-slate-100 dark:border-slate-700 overflow-hidden shadow-2xl">
            <div className="bg-slate-50 dark:bg-slate-900/50 px-8 py-4 border-b border-slate-100 dark:border-slate-700 flex justify-between items-center">
              <span className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">Prévia em Tempo Real</span>
              <div className="flex gap-2">
                <div className="w-2.5 h-2.5 rounded-full bg-red-500"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-yellow-500"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-green-500"></div>
              </div>
            </div>
            <div className="p-8 space-y-8">
              <div className="p-6 bg-slate-900 rounded-3xl text-center space-y-6">
                <div className="flex justify-center">
                   <img src={IMAGES.LOGO} className="h-10 w-auto brightness-0 invert" alt="Preview Logo" />
                </div>
                <h4 className="text-3xl font-black text-white leading-tight">Daikô Experience</h4>
                <p className="text-xs text-white/60 leading-relaxed uppercase tracking-widest">O verdadeiro sabor do Japão, agora contemporâneo.</p>
                <button className="w-full bg-primary text-white font-black py-4 rounded-2xl text-sm shadow-xl shadow-primary/30">RESERVAR MESA</button>
              </div>
              <div className="bg-primary/5 border border-primary/20 p-6 rounded-3xl flex gap-4">
                 <span className="material-symbols-outlined text-primary">info</span>
                 <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed font-medium">As alterações feitas aqui serão aplicadas globalmente em todo o site e sistema.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
};

export default AdminIdentity;
