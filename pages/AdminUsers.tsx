
import React, { useState } from 'react';
import AdminLayout from '../components/AdminLayout';
import { getStorageData, setStorageData } from '../constants';

const INITIAL_USERS = [
  { id: '1', name: "Carlos Admin", email: "carlos@daiko.com.br", role: "Admin", status: "active" },
  { id: '2', name: "João Silva", email: "joao.silva@daiko.com.br", role: "Editor", status: "active" }
];

const AdminUsers: React.FC = () => {
  const [users, setUsers] = useState(getStorageData('daiko_users', INITIAL_USERS));
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    const newUser = {
      id: Date.now().toString(),
      name: formData.get('name') as string,
      email: formData.get('email') as string,
      role: formData.get('role') as string,
      status: 'active'
    };
    const updated = [...users, newUser];
    setUsers(updated);
    setStorageData('daiko_users', updated);
    setIsModalOpen(false);
  };

  const deleteUser = (id: string) => {
    if (id === '1') return alert('Não é possível excluir o Admin mestre.');
    const updated = users.filter((u: any) => u.id !== id);
    setUsers(updated);
    setStorageData('daiko_users', updated);
  };

  return (
    <AdminLayout>
      <header className="mb-12 flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div>
          <h1 className="text-4xl font-black tracking-tight dark:text-white mb-2">Equipe Daikô</h1>
          <p className="text-slate-500">Gerencie quem pode editar os conteúdos do sistema.</p>
        </div>
        <button 
          onClick={() => setIsModalOpen(true)}
          className="bg-primary text-white px-8 py-4 rounded-2xl font-black shadow-xl active:scale-95 transition-all flex items-center gap-3 text-xs uppercase tracking-widest"
        >
          <span className="material-symbols-outlined">person_add</span> Novo Usuário
        </button>
      </header>

      <div className="bg-white dark:bg-zinc-900 rounded-[2.5rem] overflow-hidden shadow-2xl border border-slate-100 dark:border-zinc-800">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead className="bg-slate-50/50 dark:bg-zinc-800/50 border-b border-slate-100 dark:border-zinc-800 text-slate-400 text-[10px] font-black uppercase tracking-[0.2em]">
              <tr>
                <th className="px-10 py-6">Nome</th>
                <th className="px-10 py-6">E-mail</th>
                <th className="px-10 py-6">Perfil</th>
                <th className="px-10 py-6 text-right">Ações</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-50 dark:divide-zinc-800">
              {users.map((user: any) => (
                <tr key={user.id} className="group hover:bg-slate-50/30 dark:hover:bg-zinc-800/30 transition-colors">
                  <td className="px-10 py-8">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-full bg-slate-100 dark:bg-zinc-800 flex items-center justify-center font-black text-slate-500">
                        {user.name[0]}
                      </div>
                      <span className="font-black text-sm dark:text-white">{user.name}</span>
                    </div>
                  </td>
                  <td className="px-10 py-8 text-sm text-slate-500">{user.email}</td>
                  <td className="px-10 py-8">
                     <span className={`px-4 py-1.5 rounded-full text-[9px] font-black uppercase tracking-widest ${user.role === 'Admin' ? 'bg-primary/10 text-primary border border-primary/20' : 'bg-slate-100 dark:bg-zinc-800 text-slate-400'}`}>
                        {user.role}
                     </span>
                  </td>
                  <td className="px-10 py-8 text-right">
                    <button onClick={() => deleteUser(user.id)} className="p-3 text-slate-300 hover:text-red-500 transition-colors">
                      <span className="material-symbols-outlined">delete</span>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 z-[200] flex items-center justify-center p-6 bg-black/60 backdrop-blur-sm">
          <div className="bg-white dark:bg-zinc-900 w-full max-w-lg rounded-[2.5rem] shadow-3xl overflow-hidden animate-in zoom-in duration-300">
            <div className="p-8 border-b border-slate-100 dark:border-zinc-800 flex justify-between items-center">
              <h3 className="text-2xl font-black dark:text-white">Convidar Membro</h3>
              <button onClick={() => setIsModalOpen(false)} className="text-slate-400 hover:text-primary"><span className="material-symbols-outlined">close</span></button>
            </div>
            <form onSubmit={handleAdd} className="p-10 space-y-6">
              <div>
                <label className="block text-[10px] font-black uppercase text-slate-400 mb-2 tracking-widest">Nome Completo</label>
                <input name="name" required className="w-full p-4 bg-slate-50 dark:bg-zinc-800 border border-slate-100 dark:border-zinc-800 rounded-2xl outline-none focus:ring-2 focus:ring-primary dark:text-white transition-all" />
              </div>
              <div>
                <label className="block text-[10px] font-black uppercase text-slate-400 mb-2 tracking-widest">E-mail Corporativo</label>
                <input name="email" type="email" required className="w-full p-4 bg-slate-50 dark:bg-zinc-800 border border-slate-100 dark:border-zinc-800 rounded-2xl outline-none focus:ring-2 focus:ring-primary dark:text-white transition-all" />
              </div>
              <div>
                <label className="block text-[10px] font-black uppercase text-slate-400 mb-2 tracking-widest">Perfil de Acesso</label>
                <select name="role" className="w-full p-4 bg-slate-50 dark:bg-zinc-800 border border-slate-100 dark:border-zinc-800 rounded-2xl outline-none focus:ring-2 focus:ring-primary dark:text-white transition-all">
                  <option>Editor</option>
                  <option>Admin</option>
                </select>
              </div>
              <button type="submit" className="w-full py-5 bg-primary text-white font-black rounded-2xl shadow-xl shadow-primary/30 transition-all text-xs uppercase tracking-widest mt-6">
                Salvar Novo Membro
              </button>
            </form>
          </div>
        </div>
      )}
    </AdminLayout>
  );
};

export default AdminUsers;
