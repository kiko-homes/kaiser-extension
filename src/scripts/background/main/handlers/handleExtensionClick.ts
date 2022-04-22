import { toggleExtension } from '../data/actions/toggleExtension';
import { tabManager } from '../utils/subscription/tabManager';

export const handleExtensionClick = async (tab: chrome.tabs.Tab) => {
  if (!chrome.tabs || !tab.id) return;

  await toggleExtension(tab.id);
  tabManager.toggleActive(tab.id);
};
