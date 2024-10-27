import { useContext } from 'react';
import ScrollContext from './ScrollContext';

export const useScrollSections = () => {
  return useContext(ScrollContext);
};
