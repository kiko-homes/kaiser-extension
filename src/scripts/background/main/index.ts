import { streamAppData } from './data/queries/streamAppData';
import { streamAuthUpdates } from './data/queries/streamAuthUpdates';
import { auth } from './utils/firebase/firebase';
import { handleContentScriptMessages } from './handlers/handleContentScriptMessages';
import { handleExtensionClick } from './handlers/handleExtensionClick';
import { handleExternalMessages } from './handlers/handleExternalMessages';

/** User interactions */
chrome.action.onClicked.addListener(handleExtensionClick);

/** Messages from web app */
chrome.runtime.onMessageExternal.addListener(handleExternalMessages);

/** Messages from content script */
chrome.runtime.onMessage.addListener(handleContentScriptMessages);

/** Firestore data streaming to content script */
streamAuthUpdates();
streamAppData(auth.currentUser);
