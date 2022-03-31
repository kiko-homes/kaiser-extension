import { MessageType, Sender } from 'scripts/common/messages';

const removeKaiserContent = (rawHtml: string) =>
  rawHtml.replace(/<kaiser-root>[\S\s]*<\/kaiser-root>/, '');

export const saveHtml = (
  rawHtml: string,
  title: string,
  projectId?: string,
) => {
  const html = removeKaiserContent(rawHtml);
  chrome.runtime.sendMessage({
    from: Sender.CAPTURER_SCRIPT,
    type: MessageType.SAVE_HTML,
    projectId,
    title,
    html,
  });
};
