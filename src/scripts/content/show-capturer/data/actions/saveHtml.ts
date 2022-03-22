import { MessageType, Sender } from 'scripts/common/messages';

export const saveHtml = (projectId: string, html: string) => {
  chrome.runtime.sendMessage({
    sender: Sender.CAPTURER_SCRIPT,
    type: MessageType.SAVE_HTML,
    projectId,
    html,
  });
};
