import { Sender } from './sender';
import { MessageType } from './type';

export type ContentToBackgroundMessage = ContentToBackgroundPayload & {
  from: Sender.CAPTURER_SCRIPT;
};

type ContentToBackgroundPayload = SubscribeToData | SaveHtml;

export interface SubscribeToData {
  type: MessageType.SUBSCRIBE_TO_DATA;
}

export interface SaveHtml {
  type: MessageType.SAVE_HTML;
  projectId?: string;
  title: string;
  html: string;
}
