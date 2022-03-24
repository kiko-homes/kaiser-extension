import { MessageType, Sender } from 'scripts/common/messages';

export const saveHtml = (html: string, title: string, projectId?: string) => {
  chrome.runtime.sendMessage({
    from: Sender.CAPTURER_SCRIPT,
    type: MessageType.SAVE_HTML,
    projectId,
    title,
    html,
  });
};
