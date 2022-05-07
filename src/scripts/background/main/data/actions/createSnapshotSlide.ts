import {
  collection,
  doc,
  getDoc,
  setDoc,
  Timestamp,
  updateDoc,
} from 'firebase/firestore';
import { SaveHtml } from 'scripts/common/messages/contentToBackgroundMessages';
import { ProjectFull } from 'scripts/common/models/project';
import { Snapshot } from 'scripts/common/models/snapshot';
import { uploadBlobFile, uploadTextFile } from '../../utils/firebase';
import { db } from '../../utils/firebase/firebase';

const CACHE_CONTROL = 'public,max-age=31536000';

export const createSnapshotSlide = async (
  projectUid: string,
  snapshot: Snapshot,
  request: SaveHtml,
  thumbnail: Blob,
) => {
  const projectDoc = await getDoc(doc(db, 'projects', projectUid));

  const project = projectDoc.data() as ProjectFull;

  if (!project) return;
  const slideDoc = doc(collection(db, 'projects/' + projectUid + '/slides'));

  const htmlPath = `${project.organisationUid}/projects/${projectUid}/${slideDoc.id}-page.html`;
  const thumbnailPath = `${project.organisationUid}/projects/${projectUid}/${slideDoc.id}-thumbnail.jpeg`;

  await uploadTextFile(htmlPath, request.html, {
    contentType: 'text/html',
    cacheControl: CACHE_CONTROL,
  });

  await uploadBlobFile(thumbnailPath, thumbnail, {
    contentType: 'image/jpeg',
    cacheControl: CACHE_CONTROL,
  });

  await setDoc(slideDoc, {
    name: snapshot.name,
    snapshotUid: snapshot.uid,
    order: project.slidesCount,
    html: htmlPath,
    thumbnail: thumbnailPath,
    insertedAt: Timestamp.now(),
    updatedAt: Timestamp.now(),
  });

  const projectThumbnail =
    project.slidesCount === 0 ? thumbnailPath : project.thumbnail;
  updateDoc(doc(db, 'projects', projectUid), {
    slidesCount: project.slidesCount + 1,
    thumbnail: projectThumbnail,
    updatedAt: Timestamp.now(),
  });

  return slideDoc.id;
};
