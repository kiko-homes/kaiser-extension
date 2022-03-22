import { BackgroundToContentMessage } from 'scripts/common/messages/backgroundToContentMesages';
import { createStream } from './stream';

export const contentScriptStream = createStream<BackgroundToContentMessage>(
  (
    tabId: number,
    message: BackgroundToContentMessage,
    callback?: (tabId: number, response: any) => void,
  ) => {
    chrome.tabs.sendMessage(tabId, message, (response) => {
      callback?.(tabId, response);
    });
  },
);
