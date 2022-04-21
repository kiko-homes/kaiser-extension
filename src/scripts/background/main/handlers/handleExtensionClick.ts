import { toggleExtension } from '../data/actions/toggleExtension';

export const handleExtensionClick = async (tab: chrome.tabs.Tab) => {
  if (!chrome.tabs || !tab.id) return;

  await toggleExtension(tab.id);
};
