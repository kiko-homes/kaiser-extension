import { signOut } from 'firebase/auth';
import { auth } from '../../utils/firebase/firebase';

export const logoutExtension = () => signOut(auth);
