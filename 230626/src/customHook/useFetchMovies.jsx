import { useEffect, useState } from "react";

export const useFetchMovies = (API_URL) => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await fetch(API_URL);
        const json = await response.json();
        setData(json.data);
        setLoading(false);
      } catch (error) {
        console.error("Failed to fetch movies:", error);
        setLoading(false);
      }
    };

    fetchMovies();
  }, [API_URL]);

  return { data, loading };
};
