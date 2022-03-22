import { toggleCapturer } from 'scripts/content/show-capturer/Capturer';
import { MessageType } from 'scripts/common/messages';
import {
  BackgroundToContentMessage,
  ExtensionData,
  LoggedInStatus,
} from 'scripts/common/messages/backgroundToContentMesages';
import { setLoggedIn } from './data/store/loggedInStore';
import { setProjects } from './data/store/projectsStore';

export const routeMessage = async (message: BackgroundToContentMessage) => {
  if (message.type === MessageType.TOGGLE_CAPTURER) toggleCapturer();
  if (message.type === MessageType.LOG_IN_STATUS)
    setLoggedIn((message as LoggedInStatus).loggedIn);
  if (message.type === MessageType.EXTENSION_DATA)
    setProjects((message as ExtensionData).projects);
};
