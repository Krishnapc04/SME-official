import blogData from './blog.json';

export interface Blog {
  id: number;
  title: string;
  category: string;
  date: string;
  author: string;
  summary: string;
  image: string;
  content: string;
  questions?: { question: string; answer: string }[];
  tips?: string[];
}

export const blogs: Blog[] = blogData as Blog[];