import { Respond } from 'scripts/common/messages';
import { authenticateExtension } from '../data/actions/authenticateExtension';
import { logoutExtension } from '../data/actions/logoutExtension';
import { ExternalMessage } from '../messages/externalMessage';

export const handleExternalMessages = async (
  message: string,
  _: chrome.runtime.MessageSender,
  respond: Respond,
) => {
  const parsed = JSON.parse(message) as ExternalMessage;
  if (parsed.type === 'ping') respond('pong');

  if (parsed.type === 'auth') {
    await authenticateExtension(parsed.token);
    respond('OK');
  }

  if (parsed.type === 'logout') {
    await logoutExtension();
    respond('OK');
  }
};
