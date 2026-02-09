
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { IMAGES, INITIAL_MENU, INITIAL_HOME_CONTENT, getStorageData } from '../constants';

const PublicLanding: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuItems, setMenuItems] = useState(getStorageData('daiko_menu', INITIAL_MENU));
  const [content, setContent] = useState(getStorageData('daiko_home', INITIAL_HOME_CONTENT));
  const [contact, setContact] = useState(getStorageData('daiko_contact', {
    address: 'R. Marechal Floriano, 1234 - Centro, Taquara, RS',
    whatsapp: '(51) 99876-5432',
    phone: '(51) 3541-0000',
    hours: 'Seg a Sáb: 19h às 23:30h'
  }));

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="font-jakarta bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-100 selection:bg-primary/30">
      
      {/* Header Fixo */}
      <header className={`fixed top-0 left-0 w-full z-[100] transition-all duration-500 ${scrolled ? 'bg-white/95 dark:bg-zinc-950/95 backdrop-blur-xl py-4 shadow-xl' : 'bg-transparent py-8'}`}>
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center">
              <span className="material-symbols-outlined text-white">restaurant</span>
            </div>
            <div className="flex flex-col">
              <span className={`font-black text-2xl tracking-tighter leading-none ${scrolled ? 'text-slate-900 dark:text-white' : 'text-white'}`}>DAIKÔ</span>
              <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-primary">Sushi Bar</span>
            </div>
          </div>

          <nav className="hidden lg:flex items-center gap-10">
            {['Início', 'Cardápio', 'Sobre', 'Contato'].map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} className={`text-[11px] font-black uppercase tracking-[0.2em] hover:text-primary transition-colors ${scrolled ? 'text-slate-600 dark:text-slate-400' : 'text-white/80'}`}>{item}</a>
            ))}
          </nav>

          <div className="flex items-center gap-6">
            <Link to="/login" className={`text-[10px] font-black uppercase tracking-widest hover:text-primary ${scrolled ? 'text-slate-400' : 'text-white/40'}`}>Login</Link>
            <button className="px-8 py-3 bg-primary text-white text-[11px] font-black uppercase tracking-widest rounded-full shadow-lg hover:scale-105 transition-all">Reservar</button>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section id="início" className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden">
        <img src={IMAGES.HERO} className="absolute inset-0 w-full h-full object-cover brightness-[0.4]" alt="Hero" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-background-dark"></div>
        <div className="relative z-10 text-center px-6 max-w-4xl">
          <h1 className="text-6xl md:text-8xl font-extrabold text-white leading-none tracking-tighter mb-8">{content.heroTitle}</h1>
          <p className="text-white/60 text-lg md:text-xl mb-12 font-medium">{content.heroSubtitle}</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <a href="#cardápio" className="w-full sm:w-auto px-12 py-5 bg-primary text-white font-black rounded-full shadow-2xl hover:scale-105 transition-all text-xs tracking-widest uppercase">{content.secondaryButtonText}</a>
            <button className="w-full sm:w-auto px-12 py-5 bg-white/10 backdrop-blur-md border border-white/20 text-white font-black rounded-full hover:bg-white/20 transition-all text-xs tracking-widest uppercase">{content.primaryButtonText}</button>
          </div>
        </div>
      </section>

      {/* Menu */}
      <section id="cardápio" className="py-32 px-6 bg-white dark:bg-zinc-950">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <span className="text-primary font-black uppercase tracking-[0.4em] text-[10px]">Seleção do Chef</span>
            <h2 className="text-5xl font-extrabold tracking-tighter mt-4 dark:text-white">Destaques do Cardápio</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {menuItems.filter((i: any) => i.status === 'available').map((item: any) => (
              <div key={item.id} className="group cursor-pointer bg-slate-50 dark:bg-zinc-900 rounded-[2.5rem] overflow-hidden shadow-lg border border-slate-100 dark:border-zinc-800 transition-all hover:-translate-y-2">
                <div className="h-64 overflow-hidden">
                  <img src={item.imageUrl} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt={item.name} />
                </div>
                <div className="p-8">
                  <h3 className="text-xl font-extrabold dark:text-white mb-2">{item.name}</h3>
                  <p className="text-slate-400 text-sm mb-6 line-clamp-2">{item.description}</p>
                  <p className="text-lg font-black text-primary">R$ {parseFloat(item.price).toFixed(2).replace('.', ',')}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sobre */}
      <section id="sobre" className="py-32 px-6 bg-slate-50 dark:bg-zinc-900">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="rounded-[3rem] overflow-hidden shadow-3xl aspect-video">
            <img src={IMAGES.SUSHI_SPREAD} className="w-full h-full object-cover" alt="Mesa Farta Daikô" />
          </div>
          <div>
            <span className="text-primary font-black uppercase tracking-[0.4em] text-[10px]">Nossa História</span>
            <h2 className="text-5xl font-extrabold tracking-tighter mt-4 mb-8 dark:text-white leading-tight">Experiência Gastronômica<br/><span className="text-primary italic font-light">Incomparável</span></h2>
            <p className="text-slate-500 text-lg leading-relaxed mb-10">{content.aboutText}</p>
            <div className="flex gap-8">
               <div className="text-center">
                 <p className="text-3xl font-black dark:text-white">850+</p>
                 <p className="text-[10px] font-black uppercase text-slate-400 tracking-widest mt-1">Avaliações</p>
               </div>
               <div className="h-10 w-[1px] bg-slate-200 dark:bg-zinc-800 self-center"></div>
               <div className="text-center">
                 <p className="text-3xl font-black dark:text-white">9 anos</p>
                 <p className="text-[10px] font-black uppercase text-slate-400 tracking-widest mt-1">De Sucesso</p>
               </div>
            </div>
          </div>
        </div>
      </section>

      <footer id="contato" className="py-24 bg-background-dark text-white border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 flex flex-col items-center text-center">
          <div className="flex items-center gap-3 mb-10">
            <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center shadow-lg shadow-primary/20">
              <span className="material-symbols-outlined text-white">restaurant</span>
            </div>
            <span className="font-extrabold text-2xl tracking-tighter">DAIKÔ</span>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 w-full mb-16 max-w-4xl">
             <div className="space-y-2">
               <span className="material-symbols-outlined text-primary mb-2">location_on</span>
               <p className="text-sm text-white/60 font-medium">{contact.address}</p>
             </div>
             <div className="space-y-2">
               <span className="material-symbols-outlined text-primary mb-2">chat</span>
               <p className="text-sm text-white/60 font-medium">{contact.whatsapp}</p>
             </div>
             <div className="space-y-2">
               <span className="material-symbols-outlined text-primary mb-2">schedule</span>
               <p className="text-sm text-white/60 font-medium">{contact.hours}</p>
             </div>
          </div>

          <div className="w-full pt-16 border-t border-white/5 flex flex-col items-center gap-10">
            <p className="text-white/30 text-[11px] font-medium tracking-wide">© 2026 Daikô Sushi Bar. Todos os direitos reservados.</p>
            
            <div className="flex flex-col items-center gap-3">
               <span className="text-[9px] font-black uppercase tracking-[0.4em] text-white/10">Desenvolvido por</span>
               <img src="logotech.png" alt="Tech Lab Ltda." className="h-12 w-auto opacity-50 hover:opacity-100 transition-all filter brightness-200" />
               <p className="text-[10px] font-bold text-white/20 uppercase tracking-[0.3em]">Tech Lab Ltda.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default PublicLanding;
