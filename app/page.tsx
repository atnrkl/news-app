import { categories } from "../contsants";
import fetchNews from "../lib/fetchNews";
import { NewsList } from "./NewsList";

const HomePage = async () => {
  const news: NewsResponse = await fetchNews(categories.join(","));

  return (
    <div>
      <NewsList news={news} />
    </div>
  );
};

export default HomePage;
