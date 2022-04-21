import { toggleExtension } from '../data/actions/toggleExtension';
import { contentScriptStream } from '../utils/subscription/contentScriptStream';

export const handleTabNavitation = async (
  tabId: number,
  info: chrome.tabs.TabChangeInfo,
) => {
  if (
    contentScriptStream.subscribers.has(tabId) &&
    info.status === 'complete'
  ) {
    console.log(tabId);
    await toggleExtension(tabId);
  }
};
