
import React, { useState } from 'react';
import AdminLayout from '../components/AdminLayout';
import { INITIAL_HOME_CONTENT, getStorageData, setStorageData } from '../constants';

const AdminEditHome: React.FC = () => {
  const [content, setContent] = useState(getStorageData('daiko_home', INITIAL_HOME_CONTENT));
  const [saveStatus, setSaveStatus] = useState('');

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    const newContent = {
      heroTitle: formData.get('heroTitle'),
      heroSubtitle: formData.get('heroSubtitle'),
      aboutText: formData.get('aboutText'),
      primaryButtonText: formData.get('primaryButtonText'),
      secondaryButtonText: formData.get('secondaryButtonText')
    };
    setContent(newContent);
    setStorageData('daiko_home', newContent);
    setSaveStatus('Sucesso! Site atualizado.');
    setTimeout(() => setSaveStatus(''), 3000);
  };

  return (
    <AdminLayout>
      <header className="mb-10 flex items-center justify-between">
        <div>
          <h1 className="text-4xl font-black tracking-tight dark:text-white mb-2">Editor de Home</h1>
          <p className="text-slate-500">Altere os textos e chamadas principais da Landing Page.</p>
        </div>
        <div className="flex items-center gap-4">
          {saveStatus && <span className="text-xs font-black text-emerald-500 uppercase tracking-widest animate-pulse">{saveStatus}</span>}
          <a href="#/" target="_blank" className="px-6 py-3 border border-slate-200 dark:border-zinc-800 rounded-2xl font-bold dark:text-white flex items-center gap-2 text-xs uppercase tracking-widest">
            <span className="material-symbols-outlined text-lg">visibility</span> Visualizar
          </a>
        </div>
      </header>

      <form onSubmit={handleSave} className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        <div className="lg:col-span-2 space-y-10">
          <section className="bg-white dark:bg-zinc-900 rounded-[2.5rem] border border-slate-100 dark:border-zinc-800 p-10 shadow-xl">
            <h3 className="text-xl font-black dark:text-white mb-8 flex items-center gap-3">
              <span className="material-symbols-outlined text-primary">bolt</span> Seção Principal (Hero)
            </h3>
            <div className="space-y-6">
              <div>
                <label className="block text-[10px] font-black uppercase text-slate-400 mb-3 tracking-widest">Título de Impacto</label>
                <input name="heroTitle" defaultValue={content.heroTitle} className="w-full p-4 bg-slate-50 dark:bg-zinc-800/50 border border-slate-100 dark:border-zinc-800 rounded-2xl outline-none focus:ring-2 focus:ring-primary dark:text-white transition-all" />
              </div>
              <div>
                <label className="block text-[10px] font-black uppercase text-slate-400 mb-3 tracking-widest">Subtítulo Descritivo</label>
                <textarea name="heroSubtitle" defaultValue={content.heroSubtitle} className="w-full p-4 bg-slate-50 dark:bg-zinc-800/50 border border-slate-100 dark:border-zinc-800 rounded-2xl outline-none focus:ring-2 focus:ring-primary dark:text-white transition-all h-32" />
              </div>
            </div>
          </section>

          <section className="bg-white dark:bg-zinc-900 rounded-[2.5rem] border border-slate-100 dark:border-zinc-800 p-10 shadow-xl">
            <h3 className="text-xl font-black dark:text-white mb-8 flex items-center gap-3">
              <span className="material-symbols-outlined text-primary">history_edu</span> História / Sobre
            </h3>
            <textarea name="aboutText" defaultValue={content.aboutText} className="w-full p-6 bg-slate-50 dark:bg-zinc-800/50 border border-slate-100 dark:border-zinc-800 rounded-3xl outline-none focus:ring-2 focus:ring-primary dark:text-white transition-all h-48 leading-relaxed" />
          </section>
        </div>

        <div className="space-y-8">
          <section className="bg-white dark:bg-zinc-900 rounded-[2.5rem] border border-slate-100 dark:border-zinc-800 p-10 shadow-xl">
             <h4 className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-8">Botões e Chamadas</h4>
             <div className="space-y-6">
                <div>
                  <label className="block text-[10px] font-black uppercase text-slate-500 mb-2">Botão Primário</label>
                  <input name="primaryButtonText" defaultValue={content.primaryButtonText} className="w-full p-3 bg-slate-50 dark:bg-zinc-800 border border-slate-100 dark:border-zinc-800 rounded-xl text-xs dark:text-white" />
                </div>
                <div>
                  <label className="block text-[10px] font-black uppercase text-slate-500 mb-2">Botão Secundário</label>
                  <input name="secondaryButtonText" defaultValue={content.secondaryButtonText} className="w-full p-3 bg-slate-50 dark:bg-zinc-800 border border-slate-100 dark:border-zinc-800 rounded-xl text-xs dark:text-white" />
                </div>
                <button type="submit" className="w-full py-5 bg-primary text-white font-black rounded-2xl shadow-xl shadow-primary/30 transition-all hover:brightness-110 active:scale-95 text-xs uppercase tracking-widest">
                  Publicar Alterações
                </button>
             </div>
          </section>
        </div>
      </form>
    </AdminLayout>
  );
};

export default AdminEditHome;
