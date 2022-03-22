import { useEffect } from 'react';
import { subscribeToData } from '../../data/actions/subscribeToData';
import { useLoggedIn } from '../../data/store/loggedInStore';

export const useMenuRouter = () => {
  const loggedIn = useLoggedIn(({ loggedIn }) => loggedIn);

  useEffect(() => {
    subscribeToData();
  }, []);

  return { loggedIn };
};
