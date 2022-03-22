import { ChromeMessage, Sender, Respond } from 'scripts/common/messages';
import { BackgroundToContentMessage } from 'scripts/common/messages/backgroundToContentMesages';
import { routeMessage } from './router';

const validateSender = (
  message: ChromeMessage,
  sender: chrome.runtime.MessageSender,
) => {
  return (
    sender.id === chrome.runtime.id && message.from === Sender.MAIN_EXTENSION
  );
};

const handleMessage = (
  message: ChromeMessage,
  sender: chrome.runtime.MessageSender,
  respond: Respond,
) => {
  if (!validateSender(message, sender)) return;

  const response = routeMessage(message as BackgroundToContentMessage);
  if (!response) return;

  respond(response);
};

chrome.runtime.onMessage.addListener(handleMessage);
