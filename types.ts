
export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  category: string;
  status: 'available' | 'sold_out';
  imageUrl: string;
}

export interface Review {
  id: string;
  customerName: string;
  rating: number;
  comment: string;
  featured: boolean;
  date: string;
}

export interface User {
  id: string;
  name: string;
  email: string;
  role: 'admin' | 'editor';
  status: 'active' | 'inactive';
}
