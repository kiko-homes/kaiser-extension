import { collection, getDocs, query, where } from 'firebase/firestore';
import { db } from '../../utils/firebase/firebase';

export const getUserOrganisationId = async (userUid: string) =>
  getDocs(
    query(
      collection(db, 'organisations'),
      where('users', 'array-contains', userUid),
    ),
  ).then((it) => it.docs[0].id);
