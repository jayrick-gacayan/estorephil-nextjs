import { useEffect } from 'react';

export function useOutsideClick(ref: any, onEvent: () => void) {

  useEffect(() => {
    function handleClickOutside(event: globalThis.MouseEvent) {
      if (ref && ref.current && !ref.current.contains(event.target)) {
        onEvent();
      }
    }

    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    }
  }, [ref, onEvent]);

}