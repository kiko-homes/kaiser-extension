import { ChromeMessage, MessageType, Sender } from 'scripts/common/messages';

export const handleExtensionClick = (tab: chrome.tabs.Tab) => {
  if (!chrome.tabs || !tab.id) return;

  const message: ChromeMessage = {
    from: Sender.MAIN_EXTENSION,
    type: MessageType.TOGGLE_CAPTURER,
  };

  chrome.tabs.sendMessage(tab.id, message);
};
