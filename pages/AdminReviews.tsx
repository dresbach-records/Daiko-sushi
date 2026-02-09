
import React from 'react';
import AdminLayout from '../components/AdminLayout';

const AdminReviews: React.FC = () => {
  const reviews = [
    { name: "Ana Silva", comment: "O melhor sushi da cidade, ambiente maravilhoso!", rating: 5, featured: true },
    { name: "João Pedro", comment: "Peixe muito fresco e atendimento impecável.", rating: 5, featured: true },
    { name: "Marina Souza", comment: "Gostei bastante do combo premium, recomendo.", rating: 4, featured: false },
    { name: "Lucas Lima", comment: "Ambiente lounge sofisticado e drinks ótimos.", rating: 5, featured: true }
  ];

  return (
    <AdminLayout>
      <header className="mb-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div>
          <h1 className="text-4xl font-black tracking-tight dark:text-white">Gerenciar Avaliações</h1>
          <p className="text-slate-500 mt-1">Modere os depoimentos que aparecem no site.</p>
        </div>
        <button className="bg-primary text-white px-8 py-4 rounded-2xl font-black shadow-xl active:scale-95 transition-all flex items-center gap-2">
           <span className="material-symbols-outlined">add_circle</span> Adicionar Manualmente
        </button>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-10">
        <div className="lg:col-span-2 bg-white dark:bg-slate-800 rounded-[2rem] p-8 border border-slate-100 dark:border-slate-700 shadow-xl flex items-center justify-between">
          <div>
            <h3 className="text-sm font-bold text-slate-500 uppercase tracking-widest mb-2">Status da Reputação</h3>
            <p className="text-3xl font-black dark:text-white">Excelência Reconhecida</p>
          </div>
          <div className="w-16 h-16 bg-primary/10 text-primary rounded-2xl flex items-center justify-center">
            <span className="material-symbols-outlined text-4xl filled-star">verified</span>
          </div>
        </div>
        <div className="bg-white dark:bg-slate-800 rounded-[2rem] p-8 border border-slate-100 dark:border-slate-700 shadow-xl flex items-center gap-6">
          <div className="bg-slate-50 dark:bg-slate-900 w-16 h-16 rounded-2xl flex items-center justify-center">
             <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuBBDjZD3GqVHvePGIdjaT7B6_UAcOJu49erFHz61qC8tW4_bTA81-LPmS1XMw4ktTRmUI6freJWzibAk3zkgZDd9p2NLFOIafV2I35n1ZkCUEtk8oEXRPJqPzBgcBerdD1H6COuuQ9ola00bHF4SK6Qms1j-MTUFpv5EGTp7VlTBJCwm1lqYos0ZQZclRBaPSL4gNhWUtUxV6BMVhUhRhtBI_iwXxRBDy_BaJhB_XH7Y_hI7vDaVTZniOwYziLPKc43XJ-JEijg9ZU" className="w-10 h-10 object-contain" />
          </div>
          <div>
             <p className="text-[10px] font-black text-slate-500 uppercase tracking-[0.2em] mb-1">Referência Google</p>
             <p className="text-3xl font-black dark:text-white">4.3 <span className="text-lg text-slate-400 font-medium">/ 5.0</span></p>
          </div>
        </div>
      </div>

      <div className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-[2rem] overflow-hidden shadow-2xl">
        <div className="px-8 py-6 border-b border-slate-100 dark:border-slate-700 flex items-center justify-between bg-slate-50/30 dark:bg-slate-900/30">
           <h3 className="font-black text-xl dark:text-white">Depoimentos</h3>
           <div className="relative">
             <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">search</span>
             <input className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl pl-10 pr-4 py-2 text-sm outline-none focus:ring-2 focus:ring-primary dark:text-white" placeholder="Filtrar clientes..." />
           </div>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="text-slate-500 dark:text-slate-400 text-xs font-black uppercase tracking-widest border-b border-slate-100 dark:border-slate-700">
                <th className="px-8 py-4">Cliente</th>
                <th className="px-8 py-4">Depoimento</th>
                <th className="px-8 py-4">Avaliação</th>
                <th className="px-8 py-4 text-center">Destaque</th>
                <th className="px-8 py-4 text-right">Ações</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 dark:divide-slate-700">
              {reviews.map((r, i) => (
                <tr key={i} className="hover:bg-slate-50/50 dark:hover:bg-slate-700/30 transition-colors group">
                  <td className="px-8 py-6">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-full bg-primary/10 text-primary flex items-center justify-center font-black text-xs">
                        {r.name.split(' ').map(n => n[0]).join('')}
                      </div>
                      <span className="font-black text-sm dark:text-white">{r.name}</span>
                    </div>
                  </td>
                  <td className="px-8 py-6 max-w-xs">
                    <p className="text-sm text-slate-600 dark:text-slate-400 italic line-clamp-2">"{r.comment}"</p>
                  </td>
                  <td className="px-8 py-6">
                    <div className="flex text-primary">
                      {Array.from({length: 5}).map((_, idx) => (
                        <span key={idx} className={`material-symbols-outlined text-sm ${idx < r.rating ? 'filled-star' : ''}`}>star</span>
                      ))}
                    </div>
                  </td>
                  <td className="px-8 py-6 text-center">
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input type="checkbox" checked={r.featured} className="sr-only peer" />
                      <div className="w-10 h-5 bg-slate-200 dark:bg-slate-700 rounded-full peer peer-checked:after:translate-x-full peer-checked:bg-primary after:content-[''] after:absolute after:top-[2.5px] after:left-[2.5px] after:bg-white after:rounded-full after:h-4 after:w-4 after:transition-all"></div>
                    </label>
                  </td>
                  <td className="px-8 py-6 text-right">
                    <div className="flex items-center justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                      <button className="p-2 text-slate-400 hover:text-primary transition-colors"><span className="material-symbols-outlined">edit</span></button>
                      <button className="p-2 text-slate-400 hover:text-red-500 transition-colors"><span className="material-symbols-outlined">delete</span></button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </AdminLayout>
  );
};

export default AdminReviews;
