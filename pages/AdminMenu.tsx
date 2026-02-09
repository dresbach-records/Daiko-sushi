
import React, { useState } from 'react';
import AdminLayout from '../components/AdminLayout';
import { INITIAL_MENU, getStorageData, setStorageData } from '../constants';

const AdminMenu: React.FC = () => {
  const [items, setItems] = useState(getStorageData('daiko_menu', INITIAL_MENU));
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingItem, setEditingItem] = useState<any>(null);

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    const newItem = {
      id: editingItem?.id || Date.now().toString(),
      name: formData.get('name'),
      description: formData.get('description'),
      price: parseFloat(formData.get('price') as string),
      category: formData.get('category'),
      status: formData.get('status') || 'available',
      imageUrl: formData.get('imageUrl') || 'https://images.unsplash.com/photo-1579871494447-9811cf80d66c?q=80&w=1200&auto=format&fit=crop'
    };

    let updated;
    if (editingItem) {
      updated = items.map((i: any) => i.id === editingItem.id ? newItem : i);
    } else {
      updated = [...items, newItem];
    }

    setItems(updated);
    setStorageData('daiko_menu', updated);
    setIsModalOpen(false);
    setEditingItem(null);
  };

  const deleteItem = (id: string) => {
    const updated = items.filter((i: any) => i.id !== id);
    setItems(updated);
    setStorageData('daiko_menu', updated);
  };

  const toggleStatus = (id: string) => {
    const updated = items.map((i: any) => 
      i.id === id ? { ...i, status: i.status === 'available' ? 'sold_out' : 'available' } : i
    );
    setItems(updated);
    setStorageData('daiko_menu', updated);
  };

  return (
    <AdminLayout>
      <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-12">
        <div>
          <h1 className="text-4xl font-black tracking-tight dark:text-white mb-2">Cardápio Digital</h1>
          <p className="text-slate-400 font-medium">Gerencie os itens exibidos no seu site.</p>
        </div>
        <button 
          onClick={() => { setEditingItem(null); setIsModalOpen(true); }}
          className="px-8 py-4 bg-primary text-white font-black rounded-2xl shadow-xl hover:scale-105 transition-all flex items-center gap-3 uppercase text-xs tracking-widest"
        >
           <span className="material-symbols-outlined">add</span> Novo Item
        </button>
      </div>

      <div className="bg-white dark:bg-zinc-900 rounded-[2.5rem] shadow-2xl border border-slate-100 dark:border-zinc-800 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead className="bg-slate-50/50 dark:bg-zinc-800/50 border-b border-slate-100 dark:border-zinc-800 text-slate-400 text-[10px] font-black uppercase tracking-[0.2em]">
              <tr>
                <th className="px-10 py-6">Item</th>
                <th className="px-10 py-6">Categoria</th>
                <th className="px-10 py-6">Preço</th>
                <th className="px-10 py-6 text-center">Disponível</th>
                <th className="px-10 py-6 text-right">Ações</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-50 dark:divide-zinc-800">
              {items.map((item: any) => (
                <tr key={item.id} className="group hover:bg-slate-50/30 dark:hover:bg-zinc-800/30 transition-colors">
                  <td className="px-10 py-8">
                    <div className="flex items-center gap-6">
                      <img src={item.imageUrl} className="w-16 h-16 rounded-xl object-cover" alt="" />
                      <div>
                        <p className="font-black text-lg dark:text-white">{item.name}</p>
                        <p className="text-xs text-slate-400 line-clamp-1">{item.description}</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-10 py-8">
                     <span className="px-4 py-1 bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 rounded-full text-[10px] font-black uppercase">
                       {item.category}
                     </span>
                  </td>
                  <td className="px-10 py-8 font-black text-lg dark:text-white">R$ {item.price.toFixed(2)}</td>
                  <td className="px-10 py-8 text-center">
                    <button onClick={() => toggleStatus(item.id)} className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${item.status === 'available' ? 'bg-primary' : 'bg-slate-200 dark:bg-zinc-800'}`}>
                      <span className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${item.status === 'available' ? 'translate-x-6' : 'translate-x-1'}`} />
                    </button>
                  </td>
                  <td className="px-10 py-8 text-right">
                    <div className="flex justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                      <button onClick={() => { setEditingItem(item); setIsModalOpen(true); }} className="p-3 bg-slate-50 dark:bg-zinc-800 text-slate-400 hover:text-primary rounded-xl transition-all"><span className="material-symbols-outlined">edit</span></button>
                      <button onClick={() => deleteItem(item.id)} className="p-3 bg-slate-50 dark:bg-zinc-800 text-slate-400 hover:text-red-500 rounded-xl transition-all"><span className="material-symbols-outlined">delete</span></button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-[200] flex items-center justify-center p-6 bg-black/60 backdrop-blur-sm">
          <div className="bg-white dark:bg-zinc-900 w-full max-w-xl rounded-[2.5rem] shadow-3xl overflow-hidden animate-in fade-in zoom-in duration-300">
            <div className="p-8 border-b border-slate-100 dark:border-zinc-800 flex justify-between items-center">
              <h3 className="text-2xl font-black dark:text-white">{editingItem ? 'Editar Item' : 'Novo Item'}</h3>
              <button onClick={() => setIsModalOpen(false)} className="text-slate-400 hover:text-primary"><span className="material-symbols-outlined">close</span></button>
            </div>
            <form onSubmit={handleSave} className="p-10 space-y-6">
              <div className="grid grid-cols-2 gap-6">
                <div className="col-span-2">
                  <label className="block text-[10px] font-black uppercase text-slate-400 mb-2 tracking-widest">Nome do Prato</label>
                  <input name="name" defaultValue={editingItem?.name} required className="w-full p-4 bg-slate-50 dark:bg-zinc-800 border border-slate-100 dark:border-zinc-800 rounded-2xl outline-none focus:ring-2 focus:ring-primary dark:text-white transition-all" />
                </div>
                <div className="col-span-2">
                  <label className="block text-[10px] font-black uppercase text-slate-400 mb-2 tracking-widest">Descrição</label>
                  <textarea name="description" defaultValue={editingItem?.description} className="w-full p-4 bg-slate-50 dark:bg-zinc-800 border border-slate-100 dark:border-zinc-800 rounded-2xl outline-none focus:ring-2 focus:ring-primary dark:text-white transition-all h-24" />
                </div>
                <div>
                  <label className="block text-[10px] font-black uppercase text-slate-400 mb-2 tracking-widest">Preço (R$)</label>
                  <input name="price" type="number" step="0.01" defaultValue={editingItem?.price} required className="w-full p-4 bg-slate-50 dark:bg-zinc-800 border border-slate-100 dark:border-zinc-800 rounded-2xl outline-none focus:ring-2 focus:ring-primary dark:text-white transition-all" />
                </div>
                <div>
                  <label className="block text-[10px] font-black uppercase text-slate-400 mb-2 tracking-widest">Categoria</label>
                  <select name="category" defaultValue={editingItem?.category || 'Combos'} className="w-full p-4 bg-slate-50 dark:bg-zinc-800 border border-slate-100 dark:border-zinc-800 rounded-2xl outline-none focus:ring-2 focus:ring-primary dark:text-white transition-all">
                    <option>Combos</option>
                    <option>Hots</option>
                    <option>Uramakis</option>
                    <option>Niguiris</option>
                    <option>Sashimis</option>
                  </select>
                </div>
              </div>
              <div className="flex gap-4 pt-6">
                <button type="button" onClick={() => setIsModalOpen(false)} className="flex-1 py-4 bg-slate-100 dark:bg-zinc-800 text-slate-500 font-bold rounded-2xl transition-all">Cancelar</button>
                <button type="submit" className="flex-[2] py-4 bg-primary text-white font-black rounded-2xl shadow-xl transition-all">Salvar Alterações</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </AdminLayout>
  );
};

export default AdminMenu;
