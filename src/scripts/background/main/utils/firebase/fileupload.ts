import './xhrPolyfill';
import {
  getDownloadURL,
  getStorage,
  ref,
  uploadBytes,
  UploadMetadata,
  uploadString,
} from 'firebase/storage';

const storage = getStorage();

export const uploadTextFile = async (
  path: string,
  file: string,
  metadata: UploadMetadata,
) => {
  const fileRef = ref(storage, path);

  await uploadString(fileRef, file, 'raw', metadata);

  return await getDownloadURL(fileRef);
};

export const uploadBlobFile = async (
  path: string,
  file: Blob,
  metadata: UploadMetadata,
) => {
  const fileRef = ref(storage, path);

  await uploadBytes(fileRef, file, metadata);

  return await getDownloadURL(fileRef);
};
