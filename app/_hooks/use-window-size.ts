import { useState, useEffect } from 'react';

export function useWindowSize() {

  const [width, setWidth] = useState<number | undefined>(typeof window !== 'undefined' ? window.innerWidth : undefined);
  const [height, setHeight] = useState<number | undefined>(typeof window !== 'undefined' ? window.innerHeight : undefined);

  useEffect(() => {
    function listener() {
      setWidth(window.innerWidth);
      setHeight(window.innerHeight);
    }

    if (typeof window !== undefined) {
      window.addEventListener('resize', listener);
    }

    return () => {
      if (typeof window !== undefined) {
        window.removeEventListener('resize', listener);
      }
    };
  }, []);

  return {
    width,
    height,
  };
}
