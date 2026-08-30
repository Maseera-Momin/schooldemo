import { useEffect } from 'react';

export default function ScrollToTop({ activePage }) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [activePage]);

  return null;
}
