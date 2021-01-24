import { useMemo } from 'react';
import { useLocation } from 'react-router-dom';

export const useSearchParams = (): URLSearchParams => {
  const location = useLocation();

  const searchParams = useMemo(() => new URLSearchParams(location.search), [
    location.search,
  ]);

  return searchParams;
};
