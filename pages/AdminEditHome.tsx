
import React from 'react';
import AdminLayout from '../components/AdminLayout';
import { IMAGES } from '../constants';

const AdminEditHome: React.FC = () => {
  return (
    <AdminLayout>
      <header className="mb-10 flex items-center justify-between">
        <div>
          <h1 className="text-4xl font-black tracking-tight dark:text-white mb-2">Editar Home</h1>
          <p className="text-slate-500">Configure os elementos principais da página inicial.</p>
        </div>
        <div className="flex gap-4">
          <button className="px-6 py-3 border border-slate-200 dark:border-slate-700 rounded-2xl font-bold hover:bg-slate-50 dark:hover:bg-slate-800 dark:text-white transition-all flex items-center gap-2">
            <span className="material-symbols-outlined">visibility</span> Visualizar
          </button>
          <button className="bg-primary text-white px-8 py-3 rounded-2xl font-black shadow-xl shadow-primary/30 active:scale-95 transition-all">
            Salvar Alterações
          </button>
        </div>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        <div className="lg:col-span-2 space-y-10">
          <section className="bg-white dark:bg-slate-800 rounded-[2rem] border border-slate-100 dark:border-slate-700 p-8 shadow-xl">
            <div className="flex items-center gap-3 mb-8 border-b border-slate-50 dark:border-slate-700 pb-6">
              <span className="material-symbols-outlined text-primary">bolt</span>
              <h3 className="text-xl font-black dark:text-white">Seção Hero</h3>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div>
                  <label className="block text-xs font-black uppercase tracking-[0.2em] text-slate-500 mb-3">Título Principal</label>
                  <input className="w-full bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-2xl p-4 text-sm focus:ring-2 focus:ring-primary dark:text-white transition-all outline-none" value="Daikô: Uma Experiência Gourmet" />
                </div>
                <div>
                  <label className="block text-xs font-black uppercase tracking-[0.2em] text-slate-500 mb-3">Subtítulo</label>
                  <textarea className="w-full bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-2xl p-4 text-sm focus:ring-2 focus:ring-primary dark:text-white transition-all outline-none min-h-[120px]">Descubra a harmonia perfeita entre a tradição japonesa e a inovação contemporânea em um ambiente sofisticado e acolhedor.</textarea>
                </div>
              </div>
              <div className="space-y-4">
                <label className="block text-xs font-black uppercase tracking-[0.2em] text-slate-500 mb-3">Imagem de Fundo</label>
                <div className="relative group aspect-video rounded-3xl overflow-hidden border border-slate-200 dark:border-slate-700 bg-slate-100 dark:bg-slate-900">
                  <img src={IMAGES.HERO} alt="Hero Preview" className="w-full h-full object-cover opacity-80" />
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <button className="bg-primary text-white px-6 py-3 rounded-xl font-bold flex items-center gap-2"><span className="material-symbols-outlined">upload</span> Alterar</button>
                  </div>
                </div>
                <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest text-center">Recomendado: 1920x1080px (JPG/WebP)</p>
              </div>
            </div>
          </section>

          <section className="bg-white dark:bg-slate-800 rounded-[2rem] border border-slate-100 dark:border-slate-700 p-8 shadow-xl">
            <div className="flex items-center gap-3 mb-8 border-b border-slate-50 dark:border-slate-700 pb-6">
              <span className="material-symbols-outlined text-primary">history_edu</span>
              <h3 className="text-xl font-black dark:text-white">Texto Institucional</h3>
            </div>
            <textarea className="w-full bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-3xl p-6 text-sm leading-relaxed dark:text-white focus:ring-2 focus:ring-primary outline-none min-h-[200px]">Fundado em 2015, o Daikô Sushi Bar nasceu da paixão pela autêntica gastronomia nipônica. Nosso compromisso é selecionar os peixes mais frescos do mercado todas as manhãs, garantindo uma explosão de sabores em cada peça...</textarea>
          </section>
        </div>

        <div className="space-y-8">
          <div className="bg-white dark:bg-slate-800 rounded-[2rem] border border-slate-100 dark:border-slate-700 p-8 shadow-xl">
             <h4 className="text-xs font-black uppercase tracking-[0.2em] text-slate-400 mb-6">Configurações de Botões</h4>
             <div className="space-y-6">
                <div className="p-4 bg-slate-50 dark:bg-slate-900 rounded-2xl border border-slate-100 dark:border-slate-700">
                   <p className="text-[10px] font-black uppercase text-primary mb-4 tracking-widest">Botão Primário</p>
                   <input className="w-full bg-white dark:bg-slate-800 border-none rounded-xl p-3 text-xs mb-3 dark:text-white" value="Ver Cardápio" />
                   <input className="w-full bg-white dark:bg-slate-800 border-none rounded-xl p-3 text-xs dark:text-white" value="/cardapio" />
                </div>
                <div className="p-4 bg-slate-50 dark:bg-slate-900 rounded-2xl border border-slate-100 dark:border-slate-700">
                   <p className="text-[10px] font-black uppercase text-slate-400 mb-4 tracking-widest">Botão Secundário</p>
                   <input className="w-full bg-white dark:bg-slate-800 border-none rounded-xl p-3 text-xs mb-3 dark:text-white" value="Reservar Mesa" />
                   <input className="w-full bg-white dark:bg-slate-800 border-none rounded-xl p-3 text-xs dark:text-white" value="/reservas" />
                </div>
             </div>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
};

export default AdminEditHome;
