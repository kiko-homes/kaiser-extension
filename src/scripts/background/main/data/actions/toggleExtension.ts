import { ChromeMessage, MessageType, Sender } from 'scripts/common/messages';
import { injectScipts } from './injectScripts';

export const toggleExtension = async (tabId: number, show: boolean) => {
  const message: ChromeMessage = {
    from: Sender.MAIN_EXTENSION,
    type: MessageType.TOGGLE_CAPTURER,
    show,
  };

  await injectScipts(tabId);

  return new Promise((resolve, reject) => {
    chrome.tabs.sendMessage(tabId, message, () => {
      if (chrome.runtime.lastError) reject(chrome.runtime.lastError);
      else resolve('OK');
    });
  });
};
