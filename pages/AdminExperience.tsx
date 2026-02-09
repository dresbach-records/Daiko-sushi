
import React from 'react';
import AdminLayout from '../components/AdminLayout';
import { IMAGES } from '../constants';

const AdminExperience: React.FC = () => {
  return (
    <AdminLayout>
      <header className="mb-10 flex items-center justify-between">
        <div>
          <h1 className="text-4xl font-black tracking-tight dark:text-white mb-2">Experiência & Ambiente</h1>
          <p className="text-slate-500">Gerencie a galeria de fotos e textos do espaço físico.</p>
        </div>
        <button className="bg-primary text-white px-8 py-4 rounded-2xl font-black shadow-xl active:scale-95 transition-all">Salvar Tudo</button>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        <div className="lg:col-span-1">
          <section className="bg-white dark:bg-slate-800 rounded-[2.5rem] border border-slate-100 dark:border-slate-700 p-8 shadow-xl">
            <h3 className="text-xl font-black dark:text-white mb-8 flex items-center gap-3">
              <span className="material-symbols-outlined text-primary">description</span> Texto da Seção
            </h3>
            <div className="space-y-8">
              <div>
                <label className="block text-[10px] font-black uppercase tracking-widest text-slate-500 mb-4">Título da Seção</label>
                <input className="w-full bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-2xl p-4 text-sm dark:text-white font-bold transition-all outline-none focus:ring-2 focus:ring-primary" value="Ambiente Único" />
              </div>
              <div>
                <label className="block text-[10px] font-black uppercase tracking-widest text-slate-500 mb-4">Descrição</label>
                <textarea className="w-full bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-2xl p-4 text-sm dark:text-white leading-relaxed transition-all outline-none focus:ring-2 focus:ring-primary min-h-[150px]">Desfrute de uma experiência completa em um ambiente contemporâneo, acolhedor e perfeitamente iluminado. Ideal para jantares românticos e comemorações especiais com amigos e família.</textarea>
              </div>
            </div>
          </section>
        </div>

        <div className="lg:col-span-2 space-y-10">
          <section className="bg-white dark:bg-slate-800 rounded-[2.5rem] border border-slate-100 dark:border-slate-700 p-8 shadow-xl">
             <div className="flex justify-between items-center mb-8">
                <h3 className="text-xl font-black dark:text-white flex items-center gap-3">
                  <span className="material-symbols-outlined text-primary">gallery_thumbnail</span> Galeria de Imagens
                </h3>
                <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">3 de 12 fotos</span>
             </div>

             <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mb-8">
                {[IMAGES.INTERIOR, IMAGES.BUFFET, IMAGES.SASHIMI].map((img, i) => (
                  <div key={i} className="group relative aspect-square rounded-[2rem] overflow-hidden border border-slate-100 dark:border-slate-700 shadow-md">
                    <img src={img} alt="Gallery" className="w-full h-full object-cover transition-transform group-hover:scale-110" />
                    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-between p-4">
                      <div className="flex justify-between">
                         <button className="bg-white/20 p-2 rounded-xl text-white"><span className="material-symbols-outlined">drag_indicator</span></button>
                         <button className="bg-red-500/20 p-2 rounded-xl text-red-500 hover:bg-red-500 hover:text-white transition-colors"><span className="material-symbols-outlined">delete</span></button>
                      </div>
                      <span className="text-[10px] text-white/70 font-black uppercase tracking-widest">Imagem {i+1}</span>
                    </div>
                  </div>
                ))}
                <button className="aspect-square rounded-[2rem] border-4 border-dashed border-slate-100 dark:border-slate-700 hover:border-primary hover:bg-primary/5 transition-all flex flex-col items-center justify-center gap-4 group">
                  <div className="w-16 h-16 bg-slate-50 dark:bg-slate-900 rounded-full flex items-center justify-center text-slate-400 group-hover:text-primary transition-colors">
                    <span className="material-symbols-outlined text-4xl">add_photo_alternate</span>
                  </div>
                  <div className="text-center">
                    <p className="text-[10px] font-black uppercase text-slate-500 tracking-widest group-hover:text-primary">Adicionar Fotos</p>
                    <p className="text-[10px] text-slate-400 mt-1">PNG, JPG até 5MB</p>
                  </div>
                </button>
             </div>

             <div className="bg-blue-50 dark:bg-blue-900/10 border border-blue-100 dark:border-blue-900/30 p-6 rounded-3xl flex gap-4">
                <span className="material-symbols-outlined text-blue-500">info</span>
                <p className="text-sm text-blue-700 dark:text-blue-300 leading-relaxed font-medium">
                  A primeira imagem da galeria será utilizada como destaque na versão desktop. Arraste as fotos para reordenar a sequência de exibição.
                </p>
             </div>
          </section>
        </div>
      </div>
    </AdminLayout>
  );
};

export default AdminExperience;
