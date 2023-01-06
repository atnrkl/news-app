import { categories } from "../../../contsants";
import fetchNews from "../../../lib/fetchNews";
import { NewsList } from "../../NewsList";
type Props = {
  params: { category: Category };
};

async function NewsCategory({ params: { category } }: Props) {
  const news: NewsResponse = await fetchNews(category);

  return (
    <div>
      <NewsList news={news} />
    </div>
  );
}

export default NewsCategory;

//# prebuild this pages
export async function generateStaticParams() {
  return categories.map((category) => ({
    category: category,
  }));
}
