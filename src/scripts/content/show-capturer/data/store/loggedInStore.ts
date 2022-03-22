import create from 'zustand/vanilla';
import createHook from 'zustand';

const loggedInStore = create<{ loggedIn: boolean | null }>(() => ({
  loggedIn: null,
}));

const { setState } = loggedInStore;

export const setLoggedIn = (loggedIn: boolean) => setState({ loggedIn });

export const useLoggedIn = createHook(loggedInStore);
