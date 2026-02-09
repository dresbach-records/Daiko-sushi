
import React, { useState } from 'react';
import AdminLayout from '../components/AdminLayout';
import { getStorageData, setStorageData } from '../constants';

const AdminContact: React.FC = () => {
  const [contact, setContact] = useState(getStorageData('daiko_contact', {
    address: 'R. Marechal Floriano, 1234 - Centro, Taquara, RS',
    whatsapp: '(51) 99876-5432',
    phone: '(51) 3541-0000',
    hours: 'Seg a Sáb: 19h às 23:30h'
  }));

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    const newContact = {
      address: formData.get('address'),
      whatsapp: formData.get('whatsapp'),
      phone: formData.get('phone'),
      hours: formData.get('hours')
    };
    setContact(newContact);
    setStorageData('daiko_contact', newContact);
    alert('Informações de contato atualizadas!');
  };

  return (
    <AdminLayout>
      <header className="mb-10 flex items-center justify-between">
        <div>
          <h1 className="text-4xl font-black tracking-tight dark:text-white mb-2">Contato & Localização</h1>
          <p className="text-slate-500">Configure como os clientes encontram o Daikô.</p>
        </div>
        <button form="contact-form" type="submit" className="bg-primary text-white px-8 py-4 rounded-2xl font-black shadow-xl hover:scale-105 active:scale-95 transition-all text-xs uppercase tracking-widest">
           Salvar Alterações
        </button>
      </header>

      <form id="contact-form" onSubmit={handleSave} className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        <section className="bg-white dark:bg-zinc-900 rounded-[2.5rem] border border-slate-100 dark:border-zinc-800 p-10 shadow-xl space-y-8">
           <h3 className="text-xl font-black dark:text-white flex items-center gap-4">
             <span className="material-symbols-outlined text-primary">pin_drop</span> Endereço e Canais
           </h3>
           <div className="space-y-6">
              <div>
                <label className="block text-[10px] font-black uppercase text-slate-400 mb-3 tracking-widest">Endereço Completo</label>
                <input name="address" defaultValue={contact.address} className="w-full p-4 bg-slate-50 dark:bg-zinc-800 border border-slate-100 dark:border-zinc-800 rounded-2xl outline-none focus:ring-2 focus:ring-primary dark:text-white" />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-[10px] font-black uppercase text-slate-400 mb-3 tracking-widest">WhatsApp</label>
                  <input name="whatsapp" defaultValue={contact.whatsapp} className="w-full p-4 bg-slate-50 dark:bg-zinc-800 border border-slate-100 dark:border-zinc-800 rounded-2xl outline-none focus:ring-2 focus:ring-primary dark:text-white" />
                </div>
                <div>
                  <label className="block text-[10px] font-black uppercase text-slate-400 mb-3 tracking-widest">Telefone Fixo</label>
                  <input name="phone" defaultValue={contact.phone} className="w-full p-4 bg-slate-50 dark:bg-zinc-800 border border-slate-100 dark:border-zinc-800 rounded-2xl outline-none focus:ring-2 focus:ring-primary dark:text-white" />
                </div>
              </div>
           </div>
        </section>

        <section className="bg-white dark:bg-zinc-900 rounded-[2.5rem] border border-slate-100 dark:border-zinc-800 p-10 shadow-xl space-y-8">
           <h3 className="text-xl font-black dark:text-white flex items-center gap-4">
             <span className="material-symbols-outlined text-primary">schedule</span> Horários de Funcionamento
           </h3>
           <div>
             <label className="block text-[10px] font-black uppercase text-slate-400 mb-3 tracking-widest">Resumo de Horários</label>
             <textarea name="hours" defaultValue={contact.hours} className="w-full p-4 bg-slate-50 dark:bg-zinc-800 border border-slate-100 dark:border-zinc-800 rounded-2xl outline-none focus:ring-2 focus:ring-primary dark:text-white h-32" />
           </div>
           <div className="p-6 bg-blue-50 dark:bg-blue-900/10 rounded-3xl border border-blue-100 dark:border-blue-800 flex gap-4">
             <span className="material-symbols-outlined text-blue-500">info</span>
             <p className="text-xs text-blue-600 dark:text-blue-400 font-medium">As informações aqui editadas refletirão instantaneamente no rodapé do site público.</p>
           </div>
        </section>
      </form>
    </AdminLayout>
  );
};

export default AdminContact;
