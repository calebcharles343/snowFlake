import { useEffect, useState } from "react";

export default function useDebounce<T>(value: T, delay = 500) {
  //const { querry, setQuerry } = useHomeStore();
  const [debounceValue, setDebounce] = useState<T>(value);

  useEffect(
    function () {
      const timeout = setTimeout(() => {
        setDebounce(value);
      }, delay);

      return () => clearTimeout(timeout);
    },
    [value, delay]
  );

  return debounceValue;
}
