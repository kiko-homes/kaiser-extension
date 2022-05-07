import { BackgroundToContentMessage } from 'scripts/common/messages/backgroundToContentMesages';
import { createStream } from './stream';

export const contentScriptStream = createStream<BackgroundToContentMessage>(
  (
    tabId: number,
    message: BackgroundToContentMessage,
    callback?: (tabId: number, response: unknown) => void,
  ) => {
    chrome.tabs.sendMessage(tabId, message, (response: unknown) => {
      callback?.(tabId, response);
    });
  },
);
