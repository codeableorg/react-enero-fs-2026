export type Category = {
  id: number;
  name: string;
  slug: string;
  imgSrc: string;
  alt: string | null;
  description: string;
  createdAt: Date;
  updatedAt: Date;
};

export type Product = {
  id: number;
  name: string;
  slug: string;
  imgSrc: string;
  price: number; // en centavos
  description: string;
  features: string[];
  categoryId: number;
  createdAt: Date;
  updatedAt: Date;
};
