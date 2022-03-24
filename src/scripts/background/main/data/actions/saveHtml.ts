import { SaveHtml } from 'scripts/common/messages/contentToBackgroundMessages';
import { auth } from '../../utils/firebase/firebase';
import { getUserOrganisationId } from '../queries/getUserOrganisationId';
import { createScreenThumbnail } from './createScreenThumbnail';
import { createSnapshotSlide } from './createSnapshotSlide';
import { storeSnapshot } from './storeSnapshot';

export const saveHtml = async (request: SaveHtml) => {
  const userId = auth.currentUser?.uid;
  if (!userId) return;

  const organisationUid = await getUserOrganisationId(userId);

  const thumbnail = await createScreenThumbnail();

  const snapshot = await storeSnapshot(organisationUid, request, thumbnail);
  if (request.projectId) {
    await createSnapshotSlide(request.projectId, snapshot);
  }
};
