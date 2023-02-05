import { useDispatch } from 'react-redux';
import { AppDispatch } from 'app/providers/StoreProvider/config/storeTypes';

export const useAppDispatch = () => useDispatch<AppDispatch>();
