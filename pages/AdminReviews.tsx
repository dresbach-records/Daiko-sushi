
import React, { useState } from 'react';
import AdminLayout from '../components/AdminLayout';
import { getStorageData, setStorageData } from '../constants';

const INITIAL_REVIEWS = [
  { id: '1', name: "Ana Silva", comment: "O melhor sushi da cidade, ambiente maravilhoso!", rating: 5, featured: true },
  { id: '2', name: "João Pedro", comment: "Peixe muito fresco e atendimento impecável.", rating: 5, featured: true },
  { id: '3', name: "Marina Souza", comment: "Gostei bastante do combo premium, recomendo.", rating: 4, featured: false },
  { id: '4', name: "Lucas Lima", comment: "Ambiente lounge sofisticado e drinks ótimos.", rating: 5, featured: true }
];

const AdminReviews: React.FC = () => {
  const [reviews, setReviews] = useState(getStorageData('daiko_reviews', INITIAL_REVIEWS));

  const toggleFeatured = (id: string) => {
    const updated = reviews.map((r: any) => 
      r.id === id ? { ...r, featured: !r.featured } : r
    );
    setReviews(updated);
    setStorageData('daiko_reviews', updated);
  };

  const deleteReview = (id: string) => {
    const updated = reviews.filter((r: any) => r.id !== id);
    setReviews(updated);
    setStorageData('daiko_reviews', updated);
  };

  return (
    <AdminLayout>
      <header className="mb-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div>
          <h1 className="text-4xl font-black tracking-tight dark:text-white">Gerenciar Avaliações</h1>
          <p className="text-slate-500 mt-1">Modere os depoimentos que aparecem no site.</p>
        </div>
        <button className="bg-primary text-white px-8 py-4 rounded-2xl font-black shadow-xl hover:scale-105 transition-all flex items-center gap-2 uppercase text-xs tracking-widest">
           <span className="material-symbols-outlined">add_circle</span> Adicionar Manualmente
        </button>
      </header>

      <div className="bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 rounded-[2.5rem] overflow-hidden shadow-2xl">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-50/50 dark:bg-zinc-800/50 text-slate-500 dark:text-slate-400 text-[10px] font-black uppercase tracking-[0.2em] border-b border-slate-100 dark:border-zinc-800">
                <th className="px-10 py-6">Cliente</th>
                <th className="px-10 py-6">Depoimento</th>
                <th className="px-10 py-6">Avaliação</th>
                <th className="px-10 py-6 text-center">Destaque</th>
                <th className="px-10 py-6 text-right">Ações</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 dark:divide-zinc-800">
              {reviews.map((r: any) => (
                <tr key={r.id} className="hover:bg-slate-50/50 dark:hover:bg-zinc-800/30 transition-colors group">
                  <td className="px-10 py-8">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-full bg-primary/10 text-primary flex items-center justify-center font-black text-xs">
                        {r.name[0]}
                      </div>
                      <span className="font-black text-sm dark:text-white">{r.name}</span>
                    </div>
                  </td>
                  <td className="px-10 py-8 max-w-xs">
                    <p className="text-sm text-slate-600 dark:text-slate-400 italic line-clamp-2">"{r.comment}"</p>
                  </td>
                  <td className="px-10 py-8">
                    <div className="flex text-primary">
                      {Array.from({length: 5}).map((_, idx) => (
                        <span key={idx} className={`material-symbols-outlined text-sm ${idx < r.rating ? 'filled-star' : ''}`}>star</span>
                      ))}
                    </div>
                  </td>
                  <td className="px-10 py-8 text-center">
                    <button onClick={() => toggleFeatured(r.id)} className={`relative inline-flex h-5 w-10 items-center rounded-full transition-colors ${r.featured ? 'bg-primary' : 'bg-slate-200 dark:bg-zinc-800'}`}>
                      <span className={`inline-block h-3 w-3 transform rounded-full bg-white transition-transform ${r.featured ? 'translate-x-6' : 'translate-x-1'}`} />
                    </button>
                  </td>
                  <td className="px-10 py-8 text-right">
                    <button onClick={() => deleteReview(r.id)} className="p-3 text-slate-300 hover:text-red-500 transition-colors"><span className="material-symbols-outlined">delete</span></button>
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
