import { addDoc, collection, doc, updateDoc } from 'firebase/firestore';
import { SaveHtml } from 'scripts/common/messages/contentToBackgroundMessages';
import { Snapshot } from 'scripts/common/models/snapshot';
import { db, uploadBlobFile, uploadTextFile } from '../../utils/firebase';

// 1 year
const CACHE_CONTROL = 'public,max-age=31536000';

export const storeSnapshot = async (
  organisationUid: string,
  request: SaveHtml,
  thumbnail: Blob,
): Promise<Snapshot> => {
  const createSnapshotData = {
    organisationUid,
    name: request.title,
  };
  const snapshot = await addDoc(
    collection(db, 'snapshots'),
    createSnapshotData,
  );

  const snapshotPath = `${organisationUid}/${snapshot.id}/page-v-1.html`;
  const thumbnailPath = `${organisationUid}/${snapshot.id}/thumbnail-v-1.jpeg`;

  const snapshotUrl = await uploadTextFile(snapshotPath, request.html, {
    contentType: 'text/html',
    cacheControl: CACHE_CONTROL,
  });

  const thumbnailUrl = await uploadBlobFile(thumbnailPath, thumbnail, {
    contentType: 'image/jpeg',
    cacheControl: CACHE_CONTROL,
  });

  const updateUrlsData = {
    html: snapshotUrl,
    thumbnail: thumbnailUrl,
    version: 0,
    versions: [
      {
        version: 0,
        html: snapshotUrl,
        thumbnail: thumbnailUrl,
      },
    ],
  };
  await updateDoc(doc(db, 'snapshots', snapshot.id), updateUrlsData);

  return {
    uid: snapshot.id,
    ...createSnapshotData,
    ...updateUrlsData,
  };
};
