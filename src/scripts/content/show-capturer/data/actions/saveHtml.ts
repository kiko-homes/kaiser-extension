import { MessageType, Sender } from 'scripts/common/messages';

const removeKaiserContent = (rawHtml: string) =>
  rawHtml.replace(/<kaiser-root>[\S\s]*<\/kaiser-root>/, '');

interface SaveHtmlOptions {
  rawHtml: string;
  title: string;
  viewportHeight: number;
  viewportWidth: number;
  projectId?: string;
}

export const saveHtml = ({
  rawHtml,
  title,
  projectId,
  viewportHeight,
  viewportWidth,
}: SaveHtmlOptions) => {
  const html = removeKaiserContent(rawHtml);
  chrome.runtime.sendMessage({
    from: Sender.CAPTURER_SCRIPT,
    type: MessageType.SAVE_HTML,
    projectId,
    title,
    html,
    viewportHeight,
    viewportWidth,
  });
};
