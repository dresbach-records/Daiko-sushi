
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { IMAGES } from '../constants';

const PublicLanding: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="font-jakarta bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-100 selection:bg-primary/30">
      
      {/* Cabeçalho Fixo e Dinâmico */}
      <header className={`fixed top-0 left-0 w-full z-[100] transition-all duration-500 ${scrolled ? 'bg-white/90 dark:bg-zinc-950/90 backdrop-blur-xl py-4 shadow-xl border-b border-slate-100 dark:border-zinc-800' : 'bg-transparent py-8'}`}>
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          <div className="flex items-center gap-3 group cursor-pointer">
            <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center shadow-lg shadow-primary/20 group-hover:scale-110 transition-transform">
              <span className="material-symbols-outlined text-white">restaurant</span>
            </div>
            <div className="flex flex-col">
              <span className={`font-black text-2xl tracking-tighter leading-none ${scrolled ? 'text-slate-900 dark:text-white' : 'text-white'}`}>DAIKÔ</span>
              <span className={`text-[10px] font-bold uppercase tracking-[0.3em] mt-1 ${scrolled ? 'text-primary' : 'text-primary/80'}`}>Sushi Bar</span>
            </div>
          </div>

          <nav className="hidden lg:flex items-center gap-12">
            {['Início', 'Cardápio', 'Ambiente', 'Localização'].map((item) => (
              <a 
                key={item} 
                href={`#${item.toLowerCase()}`} 
                className={`text-[11px] font-black uppercase tracking-[0.3em] hover:text-primary transition-colors ${scrolled ? 'text-slate-600 dark:text-slate-400' : 'text-white/80'}`}
              >
                {item}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-6">
            <Link to="/login" className={`hidden sm:block text-[10px] font-black uppercase tracking-widest hover:text-primary transition-colors ${scrolled ? 'text-slate-400' : 'text-white/40'}`}>Acesso Admin</Link>
            <button className="px-8 py-3 bg-primary text-white text-[11px] font-black uppercase tracking-widest rounded-full shadow-lg shadow-primary/30 hover:scale-105 active:scale-95 transition-all">
              Reservar Mesa
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section com Visual de Alta Gastronomia */}
      <section id="inicio" className="relative h-screen min-h-[800px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={IMAGES.HERO} className="w-full h-full object-cover scale-105" alt="Destaque Sushi" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/20 to-background-dark"></div>
        </div>

        <div className="relative z-10 text-center px-6 max-w-5xl mt-20">
          <div className="inline-flex items-center gap-4 px-6 py-2 bg-white/5 backdrop-blur-md border border-white/10 rounded-full mb-8">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
            <span className="text-[10px] font-black text-white uppercase tracking-[0.4em]">Experiência Gastronômica Premium</span>
          </div>
          
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-extrabold text-white leading-none tracking-tighter mb-10">
            Tradição que <br/>
            <span className="italic font-light text-primary">se renova.</span>
          </h1>
          
          <p className="text-white/60 text-lg md:text-xl max-w-2xl mx-auto font-medium leading-relaxed mb-16 px-4">
            Em Taquara, o Daikô une o rigor da técnica japonesa à criatividade contemporânea para criar momentos inesquecíveis.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <button className="group w-full sm:w-auto px-12 py-6 bg-primary text-white font-black rounded-full shadow-2xl shadow-primary/40 hover:scale-105 active:scale-95 transition-all flex items-center justify-center gap-3 uppercase text-xs tracking-[0.2em]">
              Explorar Menu <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">arrow_forward</span>
            </button>
            <button className="w-full sm:w-auto px-12 py-6 bg-white/10 backdrop-blur-md border border-white/20 text-white font-black rounded-full hover:bg-white/20 transition-all text-xs tracking-[0.2em] uppercase">
              Ver Localização
            </button>
          </div>
        </div>

        {/* Floating Social Icons */}
        <div className="absolute bottom-12 left-12 hidden lg:flex flex-col gap-6">
           <div className="w-[1px] h-20 bg-white/20 mx-auto"></div>
           <a href="#" className="text-white/40 hover:text-primary transition-colors"><span className="material-symbols-outlined">facebook</span></a>
           <a href="#" className="text-white/40 hover:text-primary transition-colors font-bold">IG</a>
        </div>
      </section>

      {/* Seção Inspirada na Imagem Enviada: "A Realidade Daikô" */}
      <section className="py-32 px-6 md:px-12 bg-white dark:bg-zinc-950 overflow-hidden">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="relative">
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-primary/10 rounded-full blur-3xl"></div>
            <div className="relative aspect-[4/3] rounded-[3rem] overflow-hidden shadow-3xl border-8 border-white dark:border-zinc-900 group">
              <img 
                src="https://images.unsplash.com/photo-1579871494447-9811cf80d66c?q=80&w=1200&auto=format&fit=crop" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000" 
                alt="Nosso Buffet" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <div className="absolute bottom-8 left-8">
                <p className="text-white text-3xl font-black tracking-tighter">O Fartura & Qualidade</p>
                <p className="text-primary font-bold uppercase text-[10px] tracking-widest mt-2">Visual Real do Nosso Salão</p>
              </div>
            </div>
          </div>
          <div className="space-y-8">
            <span className="text-primary font-black uppercase tracking-[0.4em] text-[10px]">A Experiência Real</span>
            <h2 className="text-5xl md:text-6xl font-extrabold tracking-tighter dark:text-white leading-none">
              Mesa farta, <br/>
              <span className="text-slate-400 font-light italic">peixe sempre fresco.</span>
            </h2>
            <p className="text-slate-500 text-lg leading-relaxed">
              Como você vê na imagem, nossa entrega é generosa. Trabalhamos com buffets completos e combos premium onde cada peça é montada com precisão artesanal, utilizando apenas os cortes mais nobres do dia.
            </p>
            <div className="grid grid-cols-2 gap-8 pt-6">
              <div className="space-y-2">
                <p className="text-3xl font-black dark:text-white leading-none tracking-tight">850+</p>
                <p className="text-[10px] font-black uppercase text-slate-400 tracking-widest">Avaliações 5 Estrelas</p>
              </div>
              <div className="space-y-2">
                <p className="text-3xl font-black dark:text-white leading-none tracking-tight">120+</p>
                <p className="text-[10px] font-black uppercase text-slate-400 tracking-widest">Opções no Cardápio</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Destaques do Menu */}
      <section id="cardápio" className="py-32 px-6 md:px-12 bg-slate-50 dark:bg-zinc-900">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-24">
            <span className="text-primary font-black uppercase tracking-[0.4em] text-[10px]">O Melhor de Taquara</span>
            <h2 className="text-5xl md:text-6xl font-extrabold tracking-tighter mt-6 dark:text-white">Destaques Daikô</h2>
            <div className="w-20 h-1 bg-primary mx-auto mt-8 rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: 'Buffet Livre', desc: 'Sushis, hots e sashimis à vontade.', price: '94,90', img: IMAGES.BUFFET },
              { title: 'Combo Premium', desc: 'A seleção dos 40 melhores cortes.', price: '149,90', img: IMAGES.SASHIMI },
              { title: 'Hot Roll Crispy', desc: 'Clássico com toque crocante do chef.', price: '34,00', img: IMAGES.HOT_SPECIAL },
              // Fix: Changed IMAGES.SUSHI_DISP to IMAGES.SUSHI_REAL_SPREAD as SUSHI_DISP does not exist in constants.tsx
              { title: 'Uramaki Especial', desc: 'Sabor equilibrado e apresentação única.', price: '28,90', img: IMAGES.SUSHI_REAL_SPREAD }
            ].map((item, idx) => (
              <div key={idx} className="group bg-white dark:bg-zinc-950 rounded-[2.5rem] overflow-hidden shadow-xl border border-slate-100 dark:border-zinc-800 transition-all hover:-translate-y-3">
                <div className="h-64 overflow-hidden relative">
                  <img src={item.img} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt={item.title} />
                  <div className="absolute top-4 right-4 px-4 py-1.5 bg-primary text-white text-[10px] font-black uppercase tracking-widest rounded-full shadow-lg">Popular</div>
                </div>
                <div className="p-8">
                  <h3 className="text-xl font-extrabold dark:text-white mb-2">{item.title}</h3>
                  <p className="text-slate-400 text-sm mb-6 leading-relaxed">{item.desc}</p>
                  <div className="flex items-center justify-between mt-auto">
                    <span className="text-lg font-black dark:text-white tracking-tighter">R$ {item.price}</span>
                    <button className="w-10 h-10 rounded-full bg-slate-100 dark:bg-zinc-800 text-slate-500 hover:bg-primary hover:text-white transition-all flex items-center justify-center">
                      <span className="material-symbols-outlined text-sm">add</span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Localização e Footer */}
      <footer id="localização" className="pt-32 pb-12 px-6 md:px-12 bg-background-dark text-white border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-24 mb-32">
            <div className="space-y-8">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center">
                  <span className="material-symbols-outlined text-white">restaurant</span>
                </div>
                <span className="font-extrabold text-3xl tracking-tighter">DAIKÔ</span>
              </div>
              <p className="text-white/40 leading-relaxed font-medium">
                Criando experiências gastronômicas autênticas em Taquara desde 2015. Venha sentir o verdadeiro sabor do Japão.
              </p>
              <div className="flex gap-4">
                {['facebook', 'instagram', 'youtube'].map(social => (
                  <a key={social} href="#" className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-white/40 hover:bg-primary hover:text-white transition-all">
                    <span className="material-symbols-outlined text-xl">{social === 'instagram' ? 'camera' : social}</span>
                  </a>
                ))}
              </div>
            </div>

            <div className="space-y-8">
              <h4 className="text-sm font-black uppercase tracking-[0.3em] text-primary">Contatos</h4>
              <ul className="space-y-6">
                <li className="flex items-start gap-4">
                  <span className="material-symbols-outlined text-primary">pin_drop</span>
                  <span className="text-white/60 text-sm leading-relaxed">R. Marechal Floriano, 1234 - Centro<br/>Taquara, RS - CEP 95600-000</span>
                </li>
                <li className="flex items-center gap-4">
                  <span className="material-symbols-outlined text-primary">call</span>
                  <span className="text-white/60 text-sm font-bold">(51) 99876-5432</span>
                </li>
                <li className="flex items-center gap-4">
                  <span className="material-symbols-outlined text-primary">schedule</span>
                  <span className="text-white/60 text-sm">Seg a Sáb: 19h às 23:30h</span>
                </li>
              </ul>
            </div>

            <div className="space-y-8">
              <h4 className="text-sm font-black uppercase tracking-[0.3em] text-primary">Fique por dentro</h4>
              <p className="text-white/40 text-sm">Receba novidades e promoções exclusivas.</p>
              <form className="relative">
                <input 
                  type="email" 
                  placeholder="Seu melhor e-mail" 
                  className="w-full bg-white/5 border border-white/10 rounded-2xl py-5 px-6 outline-none focus:ring-2 focus:ring-primary transition-all text-sm"
                />
                <button className="absolute right-2 top-2 bottom-2 px-6 bg-primary text-white rounded-xl text-[10px] font-black uppercase tracking-widest">Assinar</button>
              </form>
            </div>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-center pt-12 border-t border-white/10 gap-8">
            <p className="text-white/20 text-[11px] font-medium tracking-wide">© 2024 Daikô Sushi Bar. Todos os direitos reservados.</p>
            <div className="flex gap-12">
               <a href="#" className="text-white/20 text-[11px] font-black uppercase tracking-widest hover:text-white transition-colors">Privacidade</a>
               <a href="#" className="text-white/20 text-[11px] font-black uppercase tracking-widest hover:text-white transition-colors">Termos de Uso</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default PublicLanding;
