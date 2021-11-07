import { useEffect, useRef } from "react";

export default function useInterval(callback : any, delay : any) {
  const savedCallback = useRef();

  useEffect(() => {
    savedCallback.current = callback;
  });

  useEffect(() => {
    // savedCallback.current = callback;
    if (delay !== null) {
      //console.log("Setting interval with a delay");
      //@ts-ignore
      let id = setInterval(() => savedCallback.current(), delay);
      return () => clearInterval(id);
    }
  }, [delay]);
}
