import { toggleExtension } from '../data/actions/toggleExtension';
import { tabManager } from '../utils/subscription/tabManager';

export const handleExtensionClick = async (tab: chrome.tabs.Tab) => {
  if (!chrome.tabs || !tab.id) return;

  const isActive = tabManager.toggleActive(tab.id);
  await toggleExtension(tab.id, !isActive);
};
