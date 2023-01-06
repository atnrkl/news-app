import { gql } from "graphql-request";
import sortNewsByImage from "./sortNewsByImage";

const fetchNews = async (
  category?: Category | string,
  keywords?: string,
  isDynamic?: boolean
) => {
  /* gql query */

  const query = gql`
    query MyQuery(
      $access_key: String!
      $categories: String!
      $keywords: String
    ) {
      myQuery(
        access_key: $access_key
        categories: $categories
        countries: "gb, us"
        sort: "published_desc"
        keywords: $keywords
      ) {
        data {
          author
          category
          country
          description
          image
          language
          published_at
          source
          title
          url
        }
        pagination {
          count
          limit
          offset
          total
        }
      }
    }
  `;
  /* fetch data next 13 caching */
  const res = await fetch(
    "https://ladorada.stepzen.net/api/callous-opossum/__graphql",
    {
      method: "POST",
      cache: isDynamic ? "no-cache" : "default",
      next: isDynamic ? { revalidate: 0 } : { revalidate: 20 },
      headers: {
        "Content-Type": "application/json",
        Authorization: `Apikey ${process.env.STZ_KEY}`,
      },
      body: JSON.stringify({
        query,
        variables: {
          access_key: process.env.API_KEY,
          categories: category,
          keywords: keywords,
        },
      }),
    }
  );

  const newsResponse = await res.json();

  /* sort function */

  const news = sortNewsByImage(newsResponse.data.myQuery);

  /* return res */
  return news;
};

export default fetchNews;
// stepzen import curl "http://api.mediastack.com/v1/news?access_key=fd2b2eca8ba546012c967e736cc1bca6&categories=health,sports&countries=au,us&languages=en,de&limit=100&offset=0&keywords=ronaldo&sort=published_desc"
