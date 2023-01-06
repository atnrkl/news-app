import { NewsList } from "../NewsList";
import fetchNews from "../../lib/fetchNews";
type Props = {
  searchParams?: { term: string };
};

async function SearchPage({ searchParams }: Props) {
  const news: NewsResponse = await fetchNews(
    "general",
    searchParams?.term,
    true
  );
  return (
    <div className="flex flex-center flex-col justify-center">
      <h1 className="font-serif pl-4 text-lg">
        Search results for{" "}
        <span className="font-bold">{searchParams?.term}</span>
      </h1>
      <NewsList news={news} />
    </div>
  );
}

export default SearchPage;
