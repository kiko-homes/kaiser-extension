import { APP_HOST } from 'constants/index';

export const openAppTab = () => {
  chrome.tabs.create({ url: `${APP_HOST}?action=extension-installed` });
};
