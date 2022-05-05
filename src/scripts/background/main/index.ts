import 'single-file/lib/single-file-background.js';
import { streamAppData } from './data/queries/streamAppData';
import { streamAuthUpdates } from './data/queries/streamAuthUpdates';
import { auth } from './utils/firebase/firebase';
import { handleContentScriptMessages } from './handlers/handleContentScriptMessages';
import { handleExtensionClick } from './handlers/handleExtensionClick';
import { handleExternalMessages } from './handlers/handleExternalMessages';
import { handleTabNavitation } from './handlers/handleTabNavitation';

/** User interactions */
chrome.action.onClicked.addListener(handleExtensionClick);

/** Messages from web app */
chrome.runtime.onMessageExternal.addListener(handleExternalMessages);

/** Messages from content script */
chrome.runtime.onMessage.addListener(handleContentScriptMessages);

chrome.tabs.onUpdated.addListener(handleTabNavitation);

/** Firestore data streaming to content script */
streamAuthUpdates();
streamAppData(auth.currentUser);
