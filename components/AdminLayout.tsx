
import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const navItems = [
  { path: '/admin', icon: 'dashboard', label: 'Dashboard' },
  { path: '/admin/home', icon: 'home', label: 'Editar Home' },
  { path: '/admin/menu', icon: 'restaurant_menu', label: 'Cardápio' },
  { path: '/admin/experience', icon: 'photo_library', label: 'Experiência' },
  { path: '/admin/reviews', icon: 'star', label: 'Avaliações' },
  { path: '/admin/contact', icon: 'location_on', label: 'Contato' },
  { path: '/admin/identity', icon: 'palette', label: 'Identidade' },
  { path: '/admin/users', icon: 'group', label: 'Usuários' },
];

const AdminLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const location = useLocation();

  return (
    <div className="flex min-h-screen bg-slate-50 dark:bg-zinc-950 font-jakarta transition-colors duration-300">
      {/* Sidebar */}
      <aside className="w-64 bg-white dark:bg-zinc-900 border-r border-slate-200 dark:border-zinc-800 flex flex-col fixed h-full z-20">
        <div className="p-8">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-primary rounded-lg"></div>
            <span className="font-extrabold text-xl tracking-tighter dark:text-white">DAIKÔ</span>
          </div>
        </div>

        <nav className="flex-1 px-4 space-y-1">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-bold transition-all ${
                location.pathname === item.path
                  ? 'bg-primary text-white shadow-lg shadow-primary/20 scale-[1.02]'
                  : 'text-slate-500 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-zinc-800'
              }`}
            >
              <span className="material-symbols-outlined text-xl">{item.icon}</span>
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="p-6 border-t border-slate-100 dark:border-zinc-800">
          <button 
            onClick={() => document.documentElement.classList.toggle('dark')}
            className="w-full flex items-center justify-center gap-2 p-3 bg-slate-50 dark:bg-zinc-800 rounded-xl text-xs font-black uppercase tracking-widest hover:brightness-95 transition-all dark:text-white"
          >
            <span className="material-symbols-outlined text-lg">dark_mode</span>
            Alternar Tema
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 ml-64 flex flex-col min-h-screen">
        <header className="h-20 bg-white/80 dark:bg-zinc-900/80 backdrop-blur-md border-b border-slate-100 dark:border-zinc-800 px-10 flex items-center justify-between sticky top-0 z-10">
          <h2 className="text-sm font-black text-slate-400 uppercase tracking-[0.2em]">Área Administrativa</h2>
          <div className="flex items-center gap-6">
            <Link to="/" className="text-xs font-black text-primary hover:underline underline-offset-4 uppercase tracking-widest flex items-center gap-2">
              <span className="material-symbols-outlined text-lg">visibility</span> Visualizar Site
            </Link>
            <div className="h-8 w-[1px] bg-slate-200 dark:bg-zinc-800"></div>
            <div className="flex items-center gap-3">
              <div className="text-right hidden sm:block">
                <p className="text-sm font-bold dark:text-white leading-none">Admin Daikô</p>
                <p className="text-[10px] text-slate-400 uppercase font-black tracking-widest mt-1">Super User</p>
              </div>
              <div className="w-10 h-10 rounded-full bg-slate-100 dark:bg-zinc-800 flex items-center justify-center text-slate-400">
                <span className="material-symbols-outlined">account_circle</span>
              </div>
            </div>
          </div>
        </header>

        <div className="p-10 max-w-7xl mx-auto w-full">
          {children}
        </div>
      </main>
    </div>
  );
};

export default AdminLayout;
