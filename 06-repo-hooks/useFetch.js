import { useEffect, useRef, useState } from "react";

export const useFetch = (url) => {
  const isCharged = useRef(true);

  useEffect(() => {
    return () => {
      isCharged.current = false;
    };
  }, []);

  const [first, setfirst] = useState({
    data: null,
    loading: true,
    error: null,
  });

  useEffect(() => {
    setfirst({
      loading: true,
      error: null,
      data: null,
    });

    fetch(url)
      .then((resp) => resp.json())
      .then((data) => {
        setTimeout(() => {
          // if (isCharged.current) {

          // } else {
          //   console.log("set estate no se llamo");
          // }


          setfirst({
            loading: false,
            error: null,
            data,
          });
        }, 2000);
      });
  }, [url]);

  return first;
};
