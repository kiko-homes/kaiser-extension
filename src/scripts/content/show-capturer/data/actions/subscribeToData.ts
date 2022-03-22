import { MessageType, Sender } from 'scripts/common/messages';

export const subscribeToData = () => {
  chrome.runtime.sendMessage({
    from: Sender.CAPTURER_SCRIPT,
    type: MessageType.SUBSCRIBE_TO_DATA,
  });
};
