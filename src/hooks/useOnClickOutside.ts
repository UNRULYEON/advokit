import { useEffect } from 'react';

const useOnClickOutside = (ref: any, handler: (event: any) => void) => {
  useEffect(() => {
    const listener = (event: any) => {
      if (!ref.current || ref.current.contains(event.target)) {
        return;
      }
      handler(event);
    };
    document.addEventListener('mouseup', listener);
    document.addEventListener('touchstart', listener);
    return () => {
      document.removeEventListener('mouseup', listener);
      document.removeEventListener('touchstart', listener);
    };
  }, [ref, handler]);
};

export default useOnClickOutside;
