import { openAppTab } from '../data/actions/openAppTab';

export const handleExtensionInstall = async ({
  reason,
}: chrome.runtime.InstalledDetails) => {
  if (reason !== chrome.runtime.OnInstalledReason.INSTALL) return;

  openAppTab();
};
