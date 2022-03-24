import { User } from 'firebase/auth';
import { MessageType, Sender } from 'scripts/common/messages';
import { contentScriptStream } from '../../utils/subscription/contentScriptStream';
import { getUserOrganisationId } from './getUserOrganisationId';
import { subscribeToOrganisationProjects } from './subscribeToOrganisationProjects';

export const streamAppData = async (user: User | null) => {
  if (!user) return;

  const userOrganisationUid = await getUserOrganisationId(user.uid);

  subscribeToOrganisationProjects(userOrganisationUid, (projects) => {
    contentScriptStream.publish({
      from: Sender.MAIN_EXTENSION,
      type: MessageType.EXTENSION_DATA,
      projects,
    });
  });
};
