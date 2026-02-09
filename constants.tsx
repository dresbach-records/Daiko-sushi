
export const IMAGES = {
  LOGO: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBrE2jA_DSbfJcccPmANIMYy2esooDgdjXtnVrFpv7MQlF9zL4YZ9u1m3MXbticRyhc3EpNmzSaRSROJ8LFtgszStVBYIevgIsgq0JJ1Ga91DDItb6Nx6910a6ICPWphBFKUrWMTTgUfdajdaNpoZLsumkSbcX_LfN6GjaKvwthuEVIk3rDyj48MsQzv2IwoT_yoDBEdKYQP2jZg94WoALu6Q_ADznflbEhOhQYb1Ln8jqiXSPRNVQZvwQlw5ewR7T50paqu4Ww2LU',
  HERO: 'https://images.unsplash.com/photo-1579871494447-9811cf80d66c?q=80&w=2000&auto=format&fit=crop',
  BUFFET: 'https://images.unsplash.com/photo-1553621042-f6e147245754?q=80&w=1200&auto=format&fit=crop',
  HOT_SPECIAL: 'https://images.unsplash.com/photo-1611143669185-af224c5e3252?q=80&w=1200&auto=format&fit=crop',
  SASHIMI: 'https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?q=80&w=1200&auto=format&fit=crop',
  INTERIOR: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1200&auto=format&fit=crop',
  SUSHI_SPREAD: 'https://images.unsplash.com/photo-1583623025817-d180a2221d0a?q=80&w=1200&auto=format&fit=crop'
};

export const INITIAL_MENU = [
  { id: '1', name: 'Combo Premium Daikô', description: '40 peças selecionadas pelo chef com salmão maçaricado e trufas.', price: 149.90, category: 'Combos', status: 'available', imageUrl: IMAGES.SASHIMI },
  { id: '2', name: 'Hot Roll Crispy', description: '8 unidades de hot roll com cream cheese e crispy de couve.', price: 34.00, category: 'Hots', status: 'available', imageUrl: IMAGES.HOT_SPECIAL },
  { id: '3', name: 'Uramaki Filadélfia', description: 'Clássico uramaki de salmão com cream cheese e gergelim.', price: 28.90, category: 'Uramakis', status: 'available', imageUrl: IMAGES.BUFFET },
  { id: '4', name: 'Niguiri de Salmão', description: 'Finas fatias de salmão sobre arroz shari temperado (4 unidades).', price: 22.00, category: 'Niguiris', status: 'sold_out', imageUrl: IMAGES.SASHIMI },
];

export const INITIAL_HOME_CONTENT = {
  heroTitle: "Tradição que se renova.",
  heroSubtitle: "Em Taquara, o Daikô une o rigor da técnica japonesa à criatividade contemporânea para criar momentos inesquecíveis.",
  aboutText: "Fundado em 2015, o Daikô Sushi Bar nasceu da paixão pela autêntica gastronomia nipônica. Nosso compromisso é selecionar os peixes mais frescos do mercado todas as manhãs, garantindo uma explosão de sabores em cada peça.",
  primaryButtonText: "Reservar Mesa",
  secondaryButtonText: "Ver Cardápio"
};

export const getStorageData = (key: string, initial: any) => {
  const data = localStorage.getItem(key);
  return data ? JSON.parse(data) : initial;
};

export const setStorageData = (key: string, data: any) => {
  localStorage.setItem(key, JSON.stringify(data));
};
