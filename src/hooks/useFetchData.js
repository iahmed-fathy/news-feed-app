import { debounce } from "lodash";
import { useEffect, useRef, useState } from "react";

export default function useFetchData() {
  const [articles, setarticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [category, setCategory] = useState("general");

  const PAGE_SIZE = 5;
  const controllerRef = useRef(null);
  const pageNumber = useRef(1);
  const queryValue = useRef("");

  async function LoadData(inputQuery, page) {
    setLoading(true);
    if (controllerRef.current) {
      controllerRef.current.abort();
    }

    const newController = new AbortController();
    controllerRef.current = newController;

    setError("");
    // const URL = `https://newsapi.org/v2/top-headlines?q=${inputQuery}&category=${category}&page=${page}&pageSize=${PAGE_SIZE}&country=us&apiKey=${
    //   import.meta.env.VITE_NEWS_FEED_API_KEY
    // }`;
    const URL = `/api/news?query=${inputQuery}&category=${category}&page=${page}`;

    try {
      const response = await fetch(URL, { signal: newController.signal });
      const data = await response.json();
      if (data.status === "error") {
        throw new Error("An Error Has Occurred");
      }
      const articles = data.articles.map((article) => {
        const { title, description, urlToImage, author, publishedAt, url } =
          article;
        return {
          title,
          description,
          image: urlToImage,
          author,
          publishedAt,
          url,
        };
      });

      setarticles(articles);
    } catch (error) {
      if (error.name === "AbortError") {
        console.log(error.message);
      } else {
        setError(error.message);
      }
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    LoadData(queryValue.current, pageNumber.current);

    return () => {
      if (controllerRef.current) {
        controllerRef.current.abort();
      }
    };
  }, [category]);

  const debounceLoadData = debounce((newQuery) => {
    LoadData(newQuery, pageNumber.current);
  }, 500);

  const handleSearchChange = (newQuery) => {
    pageNumber.current = 1;
    queryValue.current = newQuery;
    debounceLoadData(queryValue.current);
  };

  const onCategoryChange = (categoryValue) => {
    pageNumber.current = 1;
    setCategory(categoryValue);
  };

  const handleNextButton = () => {
    pageNumber.current += 1;
    LoadData(queryValue.current, pageNumber.current);
  };

  const handlePreviousButton = () => {
    pageNumber.current -= 1;
    LoadData(queryValue.current, pageNumber.current);
  };
  return {
    articles,
    loading,
    error,
    handleSearchChange,
    handleNextButton,
    handlePreviousButton,
    onCategoryChange,
    category,
    pageNumber: pageNumber.current,
  };
}
