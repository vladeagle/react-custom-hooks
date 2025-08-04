import { useEffect, useState } from "react";

export function useFetch(url) {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [urlSt, setUrlSt] = useState(url);

  function refetch(params) {
    if (url && params) {
      const searchParams = new URLSearchParams(params.params).toString();
      setData(null);
      setIsLoading(true);
      setError(null);
      setUrlSt(`${url}?${searchParams}`);
    }
  }

  useEffect(() => {
    let controller = new AbortController();

    fetch(urlSt, {
      signal: controller.signal,
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error(`Response status: ${res.status}`);
        }
        return res.json();
      })
      .then((data) => {
        setData(data);
        setIsLoading(false);
        setError(null);
      })
      .catch((err) => {
        setIsLoading(false);
        setError(err.message);
      });

    return () => controller.abort();
  }, [urlSt]);

  return { data, isLoading, error, refetch };
}
