
export interface Subject {
  id: string;
  name: string;
  link?: string;
  description?: string;
  verified?: boolean;
}

export interface Year {
  id: string;
  name: string;
  subjects: Subject[];
}

export interface ResourceType {
  id: string;
  name: string;
  icon: string;
  color: string;
  years: Year[];
}

export interface Course {
  id: string;
  name: string;
  description: string;
  resources: Record<string, ResourceType>;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}

export interface Book {
  id: string;
  name: string;
  price: number;
  image: string;
  writer: string;
  description: string;
  pages: number;
  format: 'Paperback' | 'Hardcover' | 'E-Book';
  publisher: string;
}
