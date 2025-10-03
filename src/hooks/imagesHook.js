import { useEffect, useState } from "react";

export function useImagesReady(srcs = []) {
  const [ready, setReady] = useState(srcs.length === 0);

  useEffect(() => {
    let cancelled = false;
    async function run() {
      try {
        await Promise.all(
          srcs.map((src) => {
            const img = new Image();
            img.src = src;
            return img.decode ? img.decode() : new Promise((res) => {
              img.onload = img.onerror = res;
            });
          })
        );
      } finally {
        if (!cancelled) setReady(true);
      }
    }
    run();
    return () => { cancelled = true; };
  }, [srcs]);

  return ready;
}
