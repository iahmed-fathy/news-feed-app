import { useContext } from "react";
import LoadingArticleSkeleton from "./LoadingArticleSkeleton";
import NewsArticle from "./NewsArticle";
import Typography from "@mui/material/Typography";
import { AppContext } from "../AppContext";

export default function NewsFeed() {
  const { articles, loading, error } = useContext(AppContext);

  if (!loading && error) {
    return (
      <Typography color="error" align="center" marginTop={5}>
        {error}
      </Typography>
    );
  }

  if (loading) {
    return (
      <div>
        {[...Array(5)]?.map((article, index) => (
          <LoadingArticleSkeleton key={index} {...article} />
        ))}
      </div>
    );
  }

  if (!loading && articles?.length > 0) {
    return (
      <div>
        {articles?.map((article) => (
          <NewsArticle key={JSON.stringify(article)} {...article} />
        ))}
      </div>
    );
  }

  if (!loading && !error && Array.isArray(articles) && articles.length === 0) {
    return (
      <Typography align="center" marginTop={5}>
        No Article Found
      </Typography>
    );
  }

  return null;
}
