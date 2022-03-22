import { signInWithCustomToken } from 'firebase/auth';
import { auth } from '../../utils/firebase/firebase';

export const authenticateExtension = (token: string) =>
  signInWithCustomToken(auth, token);
