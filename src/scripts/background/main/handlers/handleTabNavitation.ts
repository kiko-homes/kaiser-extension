import { toggleExtension } from '../data/actions/toggleExtension';
import { tabManager } from '../utils/subscription/tabManager';

export const handleTabNavitation = async (
  tabId: number,
  info: chrome.tabs.TabChangeInfo,
) => {
  if (tabManager.isActive(tabId) && info.status === 'complete') {
    await toggleExtension(tabId, true);
  }
};
