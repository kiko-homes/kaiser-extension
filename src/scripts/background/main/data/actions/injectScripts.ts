const CONTENT_SCRIPTS = [
  'lib/chrome-browser-polyfill.js',
  'lib/single-file-bootstrap.js',
  'lib/extension-core.js',
  'lib/single-file.js',
  'lib/show-capturer.js',
];

let scriptsInjected = false;

export const injectScipts = async (tabId: number) => {
  if (scriptsInjected) return;

  const resultData = (
    await chrome.scripting.executeScript({
      target: { tabId },
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      func: () => Boolean((globalThis as any).singlefile),
    })
  )[0];
  scriptsInjected = resultData && resultData.result;

  if (scriptsInjected) return;

  try {
    await chrome.scripting.executeScript({
      target: { tabId },
      files: CONTENT_SCRIPTS,
    });
    scriptsInjected = true;
  } catch (error) {
    // ignored
  }
};
