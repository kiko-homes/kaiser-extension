import {
  ChromeMessage,
  MessageType,
  Respond,
  Sender,
} from 'scripts/common/messages';
import { saveHtml } from '../data/actions';
import { sendAuthUpdate } from '../data/queries';
import { auth } from '../utils/firebase/firebase';
import { contentScriptStream } from '../utils/subscription/contentScriptStream';
import { tabManager } from '../utils/subscription/tabManager';

const validateSender = (message: ChromeMessage) => {
  return message.from === Sender.CAPTURER_SCRIPT;
};

export const handleContentScriptMessages = (
  message: ChromeMessage,
  sender: chrome.runtime.MessageSender,
  respond: Respond,
) => {
  if (!validateSender(message)) return;

  if (message.type === MessageType.SUBSCRIBE_TO_DATA && sender.tab?.id) {
    contentScriptStream.subscribe(sender.tab?.id);
    sendAuthUpdate(auth.currentUser);
    respond('OK');
  }

  if (message.type === MessageType.ON_CAPTURER_CLOSED && sender.tab?.id) {
    tabManager.toggleActive(sender.tab?.id);
    respond('OK');
  }

  if (message.type === MessageType.SAVE_HTML) {
    saveHtml(message).then(() => respond('OK'));
    return true;
  }
};
