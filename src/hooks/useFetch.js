import { useEffect, useState } from "react";

export function useFetch(url) {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [urlSt, setUrlSt] = useState(url);

  function refetch(params) {
    const searchParams = new URLSearchParams(params.params).toString();
    setData(null);
    setIsLoading(true);
    setError(null);
    setUrlSt(`${url}?${searchParams}`);
  }

  useEffect(() => {
    let fetchFunc = setTimeout(() => {
      fetch(urlSt)
        .then((res) => {
          if (!res.ok) {
            throw Error("bad req error");
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
    }, 2000);

    return () => clearTimeout(fetchFunc);
  }, [urlSt]);

  return { data, isLoading, error, refetch };
}
