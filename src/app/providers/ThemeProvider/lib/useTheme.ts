import useTypedContext from '@/shared/lib/hooks/useTypedContext';
import { ThemeContext } from './ThemeContext';

export const useTheme = () => {
  const values = useTypedContext(ThemeContext);

  return values;
};
