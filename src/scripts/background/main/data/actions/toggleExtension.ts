import { ChromeMessage, MessageType, Sender } from 'scripts/common/messages';
import { injectScipts } from './injectScripts';

export const toggleExtension = async (tabId: number) => {
  const message: ChromeMessage = {
    from: Sender.MAIN_EXTENSION,
    type: MessageType.TOGGLE_CAPTURER,
  };

  await injectScipts(tabId);

  chrome.tabs.sendMessage(tabId, message);
};
