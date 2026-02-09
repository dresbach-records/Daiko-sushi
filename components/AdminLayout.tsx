
import React, { useState, useRef, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

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
  const navigate = useNavigate();
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsUserMenuOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleLogout = () => {
    window.location.href = '#/login';
    window.location.reload();
  };

  const openSupport = () => {
    const message = encodeURIComponent("Olá Tech Lab! Preciso de suporte no painel administrativo do Daikô Sushi.");
    window.open(`https://wa.me/5551981446019?text=${message}`, '_blank');
  };

  return (
    <div className="flex min-h-screen bg-slate-50 dark:bg-zinc-950 font-jakarta transition-colors duration-300">
      {/* Sidebar Desktop */}
      <aside className="w-64 bg-white dark:bg-zinc-900 border-r border-slate-200 dark:border-zinc-800 flex flex-col fixed h-full z-20 shadow-sm">
        <div className="p-8">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-primary rounded-lg shadow-lg shadow-primary/20"></div>
            <span className="font-extrabold text-xl tracking-tighter dark:text-white uppercase">DAIKÔ</span>
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
            className="w-full flex items-center justify-center gap-2 p-3 bg-slate-50 dark:bg-zinc-800 rounded-xl text-xs font-black uppercase tracking-widest hover:brightness-95 transition-all dark:text-white mb-2"
          >
            <span className="material-symbols-outlined text-lg">dark_mode</span>
            Alternar Tema
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 ml-64 flex flex-col min-h-screen relative">
        <header className="h-20 bg-white/80 dark:bg-zinc-900/80 backdrop-blur-md border-b border-slate-100 dark:border-zinc-800 px-10 flex items-center justify-between sticky top-0 z-[50]">
          <h2 className="text-sm font-black text-slate-400 uppercase tracking-[0.2em]">Painel Administrativo</h2>
          
          <div className="flex items-center gap-6">
            <Link to="/" className="text-xs font-black text-primary hover:underline underline-offset-4 uppercase tracking-widest flex items-center gap-2">
              <span className="material-symbols-outlined text-lg">visibility</span> Ver Site
            </Link>
            
            <div className="h-8 w-[1px] bg-slate-200 dark:bg-zinc-800"></div>
            
            {/* Perfil com Dropdown */}
            <div className="relative" ref={menuRef}>
              <button 
                onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
                className="flex items-center gap-4 p-1 rounded-2xl hover:bg-slate-50 dark:hover:bg-zinc-800 transition-all group"
              >
                <div className="text-right hidden sm:block">
                  <p className="text-sm font-black dark:text-white leading-tight">Admin Daikô</p>
                  <p className="text-[10px] text-slate-400 uppercase font-black tracking-[0.15em] mt-0.5">Super User</p>
                </div>
                <div className="w-11 h-11 rounded-2xl bg-slate-100 dark:bg-zinc-800 flex items-center justify-center text-slate-400 group-hover:text-primary transition-colors border border-transparent group-hover:border-primary/10 overflow-hidden shadow-sm">
                  <span className="material-symbols-outlined text-[40px] leading-none">account_circle</span>
                </div>
                <span className={`material-symbols-outlined text-slate-300 transition-transform duration-300 ${isUserMenuOpen ? 'rotate-180 text-primary' : ''}`}>expand_more</span>
              </button>

              {/* Dropdown Menu */}
              {isUserMenuOpen && (
                <div className="absolute right-0 mt-4 w-72 bg-white dark:bg-zinc-900 rounded-[2.5rem] shadow-2xl border border-slate-100 dark:border-zinc-800 py-6 animate-in fade-in slide-in-from-top-3 duration-300 z-[100] backdrop-blur-2xl">
                  <div className="px-8 pb-6 border-b border-slate-50 dark:border-zinc-800 mb-4 flex items-center gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary">
                      <span className="material-symbols-outlined text-3xl">admin_panel_settings</span>
                    </div>
                    <div>
                      <p className="text-sm font-black dark:text-white">Admin Daikô</p>
                      <p className="text-[10px] text-slate-400 uppercase font-black tracking-widest">Acesso Total</p>
                    </div>
                  </div>
                  
                  <div className="px-4 space-y-1">
                    <p className="px-4 py-2 text-[9px] font-black uppercase text-slate-300 dark:text-slate-600 tracking-[0.3em]">Menu Rápido</p>
                    {navItems.slice(0, 4).map((item) => (
                      <button 
                        key={item.path}
                        onClick={() => {navigate(item.path); setIsUserMenuOpen(false);}} 
                        className={`w-full flex items-center gap-3 px-4 py-3 rounded-2xl text-xs font-bold transition-all ${location.pathname === item.path ? 'bg-primary/5 text-primary' : 'text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-zinc-800'}`}
                      >
                        <span className="material-symbols-outlined text-xl">{item.icon}</span> {item.label}
                      </button>
                    ))}
                    
                    {/* Opção de Suporte no Dropdown */}
                    <button 
                      onClick={openSupport}
                      className="w-full flex items-center gap-3 px-4 py-3 rounded-2xl text-xs font-bold text-slate-600 dark:text-slate-400 hover:bg-primary/5 hover:text-primary transition-all"
                    >
                      <span className="material-symbols-outlined text-xl">help_center</span> Suporte Técnico
                    </button>
                  </div>

                  <div className="mx-8 my-4 border-t border-slate-50 dark:border-zinc-800"></div>

                  <div className="px-4">
                    <button 
                      onClick={handleLogout}
                      className="w-full flex items-center gap-4 px-5 py-4 rounded-3xl text-xs font-black uppercase tracking-[0.2em] text-red-500 hover:bg-red-50 dark:hover:bg-red-900/10 transition-all border border-transparent hover:border-red-100 dark:hover:border-red-900/20"
                    >
                      <span className="material-symbols-outlined text-xl">logout</span> Sair do Sistema
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </header>

        <div className="p-10 max-w-7xl mx-auto w-full flex-1">
          {children}
        </div>

        {/* Botão Flutuante de Suporte Tech Lab */}
        <div className="fixed bottom-8 right-8 z-[60] flex items-center">
          <button 
            onClick={openSupport}
            className="group relative flex items-center bg-primary text-white p-4 rounded-full shadow-2xl shadow-primary/40 hover:scale-110 active:scale-95 transition-all duration-500 overflow-hidden"
          >
            {/* Efeito Pulse */}
            <span className="absolute inset-0 rounded-full bg-white/20 animate-ping"></span>
            
            <div className="flex items-center gap-0 group-hover:gap-3 transition-all duration-500 max-w-[40px] group-hover:max-w-[200px]">
              <span className="material-symbols-outlined text-2xl relative z-10">support_agent</span>
              <span className="text-xs font-black uppercase tracking-widest whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                Suporte Tech Lab
              </span>
            </div>
          </button>
        </div>
      </main>
    </div>
  );
};

export default AdminLayout;
