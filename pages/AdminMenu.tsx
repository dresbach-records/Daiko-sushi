
import React from 'react';
import AdminLayout from '../components/AdminLayout';
import { MOCK_MENU } from '../constants';

const AdminMenu: React.FC = () => {
  return (
    <AdminLayout>
      <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-12">
        <div>
          <h1 className="text-4xl font-black tracking-tight dark:text-white mb-2">Cardápio Digital</h1>
          <p className="text-slate-400 font-medium">Adicione, edite ou remova itens do seu menu público.</p>
        </div>
        <button className="px-8 py-4 bg-primary text-white font-black rounded-2xl shadow-xl shadow-primary/30 hover:scale-105 transition-all flex items-center gap-3 uppercase text-xs tracking-widest">
           <span className="material-symbols-outlined">add</span> Novo Item
        </button>
      </div>

      <div className="bg-white dark:bg-zinc-900 rounded-[2.5rem] shadow-2xl border border-slate-100 dark:border-zinc-800 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-50/50 dark:bg-zinc-800/50 text-slate-400 text-[10px] font-black uppercase tracking-[0.2em] border-b border-slate-100 dark:border-zinc-800">
                <th className="px-10 py-6">Prato / Descrição</th>
                <th className="px-10 py-6">Categoria</th>
                <th className="px-10 py-6">Preço</th>
                <th className="px-10 py-6 text-center">Status</th>
                <th className="px-10 py-6 text-right">Ações</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-50 dark:divide-zinc-800">
              {MOCK_MENU.map((item) => (
                <tr key={item.id} className="group hover:bg-slate-50/30 dark:hover:bg-zinc-800/30 transition-colors">
                  <td className="px-10 py-8">
                    <div className="flex items-center gap-6">
                      <div className="w-20 h-20 rounded-2xl overflow-hidden bg-slate-100 dark:bg-zinc-800 shrink-0">
                        <img src={item.imageUrl} className="w-full h-full object-cover" alt={item.name} />
                      </div>
                      <div>
                        <p className="font-black text-lg dark:text-white leading-tight">{item.name}</p>
                        <p className="text-xs text-slate-400 mt-1 line-clamp-1">{item.description}</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-10 py-8">
                     <span className="px-4 py-1.5 bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 rounded-full text-[10px] font-black uppercase tracking-widest">
                       {item.category}
                     </span>
                  </td>
                  <td className="px-10 py-8">
                     <p className="font-black text-lg dark:text-white">R$ {item.price.toFixed(2)}</p>
                  </td>
                  <td className="px-10 py-8 text-center">
                     <label className="relative inline-flex items-center cursor-pointer">
                        <input type="checkbox" checked={item.status === 'available'} className="sr-only peer" />
                        <div className="w-12 h-6 bg-slate-200 dark:bg-zinc-800 rounded-full peer peer-checked:bg-primary after:content-[''] after:absolute after:top-1 after:left-1 after:bg-white after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:after:translate-x-6"></div>
                     </label>
                  </td>
                  <td className="px-10 py-8 text-right">
                     <div className="flex items-center justify-end gap-3 opacity-0 group-hover:opacity-100 transition-opacity">
                        <button className="p-3 bg-slate-50 dark:bg-zinc-800 text-slate-400 hover:text-primary rounded-xl transition-all"><span className="material-symbols-outlined">edit</span></button>
                        <button className="p-3 bg-slate-50 dark:bg-zinc-800 text-slate-400 hover:text-red-500 rounded-xl transition-all"><span className="material-symbols-outlined">delete</span></button>
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

export default AdminMenu;
