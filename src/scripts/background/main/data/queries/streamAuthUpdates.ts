import { onAuthStateChanged, User } from 'firebase/auth';
import { MessageType, Sender } from 'scripts/common/messages';
import { auth } from '../../utils/firebase/firebase';
import { contentScriptStream } from '../../utils/subscription/contentScriptStream';
import { streamAppData } from './streamAppData';

export const streamAuthUpdates = () => {
  onAuthStateChanged(auth, sendAuthUpdate);
};

export const sendAuthUpdate = (user: User | null) => {
  const loggedIn = !!user;
  contentScriptStream.publish({
    from: Sender.MAIN_EXTENSION,
    type: MessageType.LOG_IN_STATUS,
    loggedIn,
  });

  if (user) {
    streamAppData(user);
  }
};
