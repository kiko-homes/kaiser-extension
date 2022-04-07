import {
  addDoc,
  collection,
  doc,
  getDoc,
  Timestamp,
  updateDoc,
} from 'firebase/firestore';
import { ProjectFull } from 'scripts/common/models/project';
import { Snapshot } from 'scripts/common/models/snapshot';
import { db } from '../../utils/firebase/firebase';

export const createSnapshotSlide = async (
  projectUid: string,
  snapshot: Snapshot,
) => {
  const project = await getDoc(doc(db, 'projects', projectUid)).then(
    (it) => it.data() as ProjectFull,
  );

  const { id } = await addDoc(
    collection(db, 'projects/' + projectUid + '/slides'),
    {
      snapshotUid: snapshot.uid,
      thumbnail: snapshot.thumbnail,
      order: project.slidesCount,
      insertedAt: Timestamp.now(),
      updatedAt: Timestamp.now(),
    },
  );

  updateDoc(doc(db, 'projects', projectUid), {
    slidesCount: project.slidesCount + 1,
    updatedAt: Timestamp.now(),
  });
  return id;
};
