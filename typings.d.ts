type Category =
  | "general"
  | "business"
  | "science"
  | "entertainment"
  | "health"
  | "technology"
  | "sports";

type Pagination = {
  count: number;
  limit: number;
  offset: number;
  total: number;
};

type Article = {
  author: string | null;
  category: string;
  country: string;
  description: string;
  image: string | null;
  language: string;
  published_at: string;
  source: string;
  title: string;
  url: string;
};

type NewsResponse = {
  pagination: Pagination;
  data: Article[];
};
