
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

  // Fechar menu ao clicar fora
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
    // Em um app real, aqui limparíamos tokens/sessão
    window.location.href = '#/login';
    window.location.reload(); // Força o reset do estado de autenticação do App.tsx
  };

  return (
    <div className="flex min-h-screen bg-slate-50 dark:bg-zinc-950 font-jakarta transition-colors duration-300">
      {/* Sidebar */}
      <aside className="w-64 bg-white dark:bg-zinc-900 border-r border-slate-200 dark:border-zinc-800 flex flex-col fixed h-full z-20">
        <div className="p-8">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-primary rounded-lg shadow-lg shadow-primary/20"></div>
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
        <header className="h-20 bg-white/80 dark:bg-zinc-900/80 backdrop-blur-md border-b border-slate-100 dark:border-zinc-800 px-10 flex items-center justify-between sticky top-0 z-[50]">
          <h2 className="text-sm font-black text-slate-400 uppercase tracking-[0.2em]">Área Administrativa</h2>
          
          <div className="flex items-center gap-6">
            <Link to="/" className="text-xs font-black text-primary hover:underline underline-offset-4 uppercase tracking-widest flex items-center gap-2">
              <span className="material-symbols-outlined text-lg">visibility</span> Site Público
            </Link>
            
            <div className="h-8 w-[1px] bg-slate-200 dark:bg-zinc-800"></div>
            
            {/* Perfil com Dropdown */}
            <div className="relative" ref={menuRef}>
              <button 
                onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
                className="flex items-center gap-3 p-1.5 rounded-2xl hover:bg-slate-50 dark:hover:bg-zinc-800 transition-all group"
              >
                <div className="text-right hidden sm:block">
                  <p className="text-sm font-bold dark:text-white leading-none">Admin Daikô</p>
                  <p className="text-[10px] text-slate-400 uppercase font-black tracking-widest mt-1">Super User</p>
                </div>
                <div className="w-10 h-10 rounded-full bg-slate-100 dark:bg-zinc-800 flex items-center justify-center text-slate-400 group-hover:text-primary transition-colors border border-transparent group-hover:border-primary/20 overflow-hidden shadow-inner">
                  <span className="material-symbols-outlined text-3xl">account_circle</span>
                </div>
                <span className={`material-symbols-outlined text-slate-400 transition-transform duration-300 ${isUserMenuOpen ? 'rotate-180' : ''}`}>expand_more</span>
              </button>

              {/* Dropdown Menu */}
              {isUserMenuOpen && (
                <div className="absolute right-0 mt-3 w-64 bg-white dark:bg-zinc-900 rounded-[2rem] shadow-2xl border border-slate-100 dark:border-zinc-800 py-4 animate-in fade-in slide-in-from-top-2 duration-200 z-[100] backdrop-blur-xl">
                  <div className="px-6 py-4 border-b border-slate-50 dark:border-zinc-800 mb-2">
                    <p className="text-[10px] font-black uppercase text-slate-400 tracking-widest">Sessão Ativa</p>
                    <p className="text-sm font-bold dark:text-white truncate">admin@daikosushi.com.br</p>
                  </div>
                  
                  <div className="px-2 space-y-1">
                    <button onClick={() => {navigate('/admin/identity'); setIsUserMenuOpen(false);}} className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-bold text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-zinc-800 transition-colors">
                      <span className="material-symbols-outlined text-xl text-slate-400">settings</span> Configurações
                    </button>
                    <button onClick={() => {navigate('/admin/users'); setIsUserMenuOpen(false);}} className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-bold text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-zinc-800 transition-colors">
                      <span className="material-symbols-outlined text-xl text-slate-400">group</span> Gerenciar Equipe
                    </button>
                  </div>

                  <div className="mx-4 my-2 border-t border-slate-50 dark:border-zinc-800"></div>

                  <div className="px-2">
                    <button 
                      onClick={handleLogout}
                      className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-black uppercase tracking-widest text-red-500 hover:bg-red-50 dark:hover:bg-red-900/10 transition-colors"
                    >
                      <span className="material-symbols-outlined text-xl">logout</span> Sair do Sistema
                    </button>
                  </div>
                </div>
              )}
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
