
import React, { useState } from 'react';
import AdminLayout from '../components/AdminLayout';

const AdminUsers: React.FC = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <AdminLayout>
      <header className="mb-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div>
          <h1 className="text-4xl font-black tracking-tight dark:text-white mb-2">Gestão de Usuários</h1>
          <p className="text-slate-500">Controle permissões e acessos dos funcionários.</p>
        </div>
        <button 
          onClick={() => setShowModal(true)}
          className="bg-primary text-white px-8 py-4 rounded-2xl font-black shadow-xl active:scale-95 transition-all flex items-center gap-2"
        >
          <span className="material-symbols-outlined">person_add</span> Adicionar Usuário
        </button>
      </header>

      <div className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-[2.5rem] overflow-hidden shadow-2xl">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-50 dark:bg-slate-900/50 text-slate-500 dark:text-slate-400 text-xs font-black uppercase tracking-widest border-b border-slate-100 dark:border-slate-700">
                <th className="px-8 py-6">Funcionário</th>
                <th className="px-8 py-6">E-mail</th>
                <th className="px-8 py-6">Perfil</th>
                <th className="px-8 py-6 text-center">Status</th>
                <th className="px-8 py-6 text-right">Ações</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 dark:divide-slate-700">
              {[
                { name: "Carlos Admin", email: "carlos@daiko.com.br", role: "Admin", status: "Ativo" },
                { name: "João Silva", email: "joao.silva@daiko.com.br", role: "Editor", status: "Ativo" },
                { name: "Maria Oliveira", email: "maria.o@daiko.com.br", role: "Editor", status: "Inativo" }
              ].map((user, i) => (
                <tr key={i} className="group hover:bg-slate-50/50 dark:hover:bg-slate-700/30 transition-colors">
                  <td className="px-8 py-6">
                    <div className="flex items-center gap-4">
                      <div className="size-12 rounded-full bg-slate-200 dark:bg-slate-700 flex items-center justify-center font-black text-slate-500">
                        {user.name[0]}
                      </div>
                      <span className="font-black text-sm dark:text-white">{user.name}</span>
                    </div>
                  </td>
                  <td className="px-8 py-6 text-sm text-slate-600 dark:text-slate-400">{user.email}</td>
                  <td className="px-8 py-6">
                     <span className={`px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest ${user.role === 'Admin' ? 'bg-primary/10 text-primary border border-primary/20' : 'bg-slate-100 dark:bg-slate-900 text-slate-500 border border-slate-200 dark:border-slate-700'}`}>
                        {user.role}
                     </span>
                  </td>
                  <td className="px-8 py-6 text-center">
                     <label className="relative inline-flex items-center cursor-pointer">
                        <input type="checkbox" checked={user.status === 'Ativo'} className="sr-only peer" />
                        <div className="w-10 h-5 bg-slate-200 dark:bg-slate-700 rounded-full peer peer-checked:bg-green-500 peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-[2.5px] after:left-[2.5px] after:bg-white after:rounded-full after:h-4 after:w-4 after:transition-all"></div>
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

      {/* Modal User Edit */}
      {showModal && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[100] flex items-center justify-center p-6">
          <div className="bg-white dark:bg-slate-800 w-full max-w-lg rounded-[2.5rem] shadow-3xl overflow-hidden border border-slate-100 dark:border-slate-700 animate-in fade-in zoom-in duration-300">
            <div className="p-8 border-b border-slate-50 dark:border-slate-700 flex items-center justify-between">
              <h3 className="text-2xl font-black dark:text-white">Configurar Usuário</h3>
              <button onClick={() => setShowModal(false)} className="text-slate-400 hover:text-primary"><span className="material-symbols-outlined text-3xl">close</span></button>
            </div>
            <form className="p-10 space-y-8" onSubmit={(e) => { e.preventDefault(); setShowModal(false); }}>
              <div className="flex flex-col items-center gap-4">
                 <div className="size-24 rounded-full bg-slate-50 dark:bg-slate-900 border-4 border-dashed border-slate-200 dark:border-slate-700 flex flex-col items-center justify-center text-slate-400 group cursor-pointer hover:border-primary transition-all">
                    <span className="material-symbols-outlined text-4xl group-hover:text-primary">add_a_photo</span>
                 </div>
                 <span className="text-[10px] font-black uppercase text-slate-500 tracking-[0.2em]">Adicionar Foto</span>
              </div>
              <div className="space-y-6">
                <div>
                  <label className="block text-[10px] font-black uppercase text-slate-500 mb-3 tracking-widest">Nome Completo</label>
                  <input className="w-full bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-2xl p-4 text-sm dark:text-white outline-none focus:ring-2 focus:ring-primary transition-all" placeholder="Ex: Lucas Ferreira" />
                </div>
                <div>
                  <label className="block text-[10px] font-black uppercase text-slate-500 mb-3 tracking-widest">E-mail de Acesso</label>
                  <input className="w-full bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-2xl p-4 text-sm dark:text-white outline-none focus:ring-2 focus:ring-primary transition-all" placeholder="lucas@daiko.com.br" />
                </div>
                <div className="grid grid-cols-2 gap-6">
                   <div>
                     <label className="block text-[10px] font-black uppercase text-slate-500 mb-3 tracking-widest">Senha</label>
                     <input className="w-full bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-2xl p-4 text-sm dark:text-white outline-none focus:ring-2 focus:ring-primary transition-all" type="password" placeholder="••••••••" />
                   </div>
                   <div>
                     <label className="block text-[10px] font-black uppercase text-slate-500 mb-3 tracking-widest">Perfil</label>
                     <select className="w-full bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-2xl p-4 text-sm dark:text-white outline-none focus:ring-2 focus:ring-primary appearance-none cursor-pointer">
                        <option>Editor</option>
                        <option>Administrador</option>
                     </select>
                   </div>
                </div>
              </div>
              <div className="pt-6 flex gap-4">
                 <button type="button" onClick={() => setShowModal(false)} className="flex-1 py-4 bg-slate-100 dark:bg-slate-700 text-slate-500 dark:text-slate-300 font-bold rounded-2xl hover:bg-slate-200 dark:hover:bg-slate-600 transition-all">Cancelar</button>
                 <button type="submit" className="flex-[2] bg-primary text-white font-black py-4 rounded-2xl shadow-xl shadow-primary/30 active:scale-95 transition-all">Salvar Usuário</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </AdminLayout>
  );
};

export default AdminUsers;
