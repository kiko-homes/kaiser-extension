import { ChromeMessage, MessageType, Sender } from 'scripts/common/messages';
import { injectScipts } from '../data/actions/injectScripts';

export const handleExtensionClick = async (tab: chrome.tabs.Tab) => {
  if (!chrome.tabs || !tab.id) return;

  const message: ChromeMessage = {
    from: Sender.MAIN_EXTENSION,
    type: MessageType.TOGGLE_CAPTURER,
  };

  await injectScipts(tab.id);

  chrome.tabs.sendMessage(tab.id, message);
};
